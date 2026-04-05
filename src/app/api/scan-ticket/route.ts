import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are analysing a photo of a UK parking fine (PCN or parking charge notice). Extract the following information:

1. fine_type: "council" or "private" (Council PCNs have council logos and reference "Penalty Charge Notice". Private charges say "Parking Charge Notice" and come from companies like ParkingEye, UKPC, etc.)
2. issuer_name: The council name or parking company name
3. reference_number: The PCN or charge reference number
4. date_of_contravention: The date of the alleged parking event (format: YYYY-MM-DD)
5. fine_amount: The full fine amount in pounds (number only)
6. discounted_amount: The discounted amount if paid within 14 days (number only)
7. vehicle_registration: The vehicle registration number
8. contravention_description: What the driver is alleged to have done
9. location: Where the alleged contravention occurred

For each field, also provide a confidence level: "high", "medium", or "low".

Return ONLY valid JSON in this exact format:
{
  "fine_type": { "value": "council" or "private", "confidence": "high/medium/low" },
  "issuer_name": { "value": "...", "confidence": "..." },
  "reference_number": { "value": "...", "confidence": "..." },
  "date_of_contravention": { "value": "YYYY-MM-DD", "confidence": "..." },
  "fine_amount": { "value": 100, "confidence": "..." },
  "discounted_amount": { "value": 50, "confidence": "..." },
  "vehicle_registration": { "value": "...", "confidence": "..." },
  "contravention_description": { "value": "...", "confidence": "..." },
  "location": { "value": "...", "confidence": "..." }
}

If you cannot read a field, set value to null and confidence to "low".`;

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
];

interface FieldResult {
  value: string | number | null;
  confidence: "high" | "medium" | "low";
}

interface ScanResult {
  fine_type: FieldResult;
  issuer_name: FieldResult;
  reference_number: FieldResult;
  date_of_contravention: FieldResult;
  fine_amount: FieldResult;
  discounted_amount: FieldResult;
  vehicle_registration: FieldResult;
  contravention_description: FieldResult;
  location: FieldResult;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("image") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No image file provided" },
        { status: 400 }
      );
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          error: "Invalid file type. Please upload a JPG, PNG, WebP, or HEIC image.",
        },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 10MB." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");

    // Map HEIC/HEIF to jpeg for the API (Anthropic accepts jpeg, png, gif, webp)
    let mediaType = file.type as "image/jpeg" | "image/png" | "image/gif" | "image/webp";
    if (file.type === "image/heic" || file.type === "image/heif") {
      mediaType = "image/jpeg";
    }

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: mediaType,
                data: base64,
              },
            },
            {
              type: "text",
              text: "Please extract all the details from this parking fine.",
            },
          ],
        },
      ],
    });

    const textContent = response.content.find((block) => block.type === "text");
    if (!textContent || textContent.type !== "text") {
      return NextResponse.json(
        { error: "Failed to analyse the image. Please try again." },
        { status: 500 }
      );
    }

    // Extract JSON from the response (handle potential markdown code blocks)
    let jsonText = textContent.text.trim();
    const jsonMatch = jsonText.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonText = jsonMatch[1].trim();
    }

    let result: ScanResult;
    try {
      result = JSON.parse(jsonText);
    } catch {
      // Check if the AI indicated this is not a parking ticket
      const lowerText = textContent.text.toLowerCase();
      if (
        lowerText.includes("not a parking") ||
        lowerText.includes("doesn't appear") ||
        lowerText.includes("does not appear") ||
        lowerText.includes("cannot identify")
      ) {
        return NextResponse.json(
          {
            error: "not_a_ticket",
            message:
              "This does not appear to be a parking ticket. Please upload a photo of your PCN or parking charge notice.",
          },
          { status: 422 }
        );
      }

      return NextResponse.json(
        {
          error: "parse_error",
          message:
            "We could not extract all details automatically. You can enter them manually.",
        },
        { status: 422 }
      );
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Scan ticket error:", error);

    if (error instanceof Error && error.message.includes("Could not process image")) {
      return NextResponse.json(
        {
          error: "blurry_image",
          message:
            "We could not read your ticket clearly. Try taking another photo with better lighting.",
        },
        { status: 422 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
