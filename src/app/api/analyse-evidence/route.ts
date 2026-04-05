import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

let anthropic: Anthropic | null = null;
function getClient() {
  if (!anthropic) {
    anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY || "" });
  }
  return anthropic;
}

const SYSTEM_PROMPT = `You are an expert UK parking enforcement analyst. You are analysing evidence photos related to a parking fine appeal. The user may upload:

1. ANPR (Automatic Number Plate Recognition) photos showing entry/exit of a car park
2. CCTV stills showing an alleged contravention (bus lane, yellow box, restricted zone)
3. Photos of parking signage at the location
4. Photos of parking meters, payment machines, or pay-and-display tickets
5. Photos of road markings, yellow lines, or parking bays
6. General photos of the parking location

For each image, analyse what you can see and identify any issues that could support an appeal:

FOR ANPR PHOTOS:
- Is the number plate clearly readable? If not, this is grounds for appeal.
- Are the timestamps visible and consistent?
- Does the image quality suggest the ANPR system may have misread the plate?
- Is there anything unusual about the entry/exit images?

FOR CCTV STILLS:
- What does the image show the vehicle doing?
- Are there any signs visible that could be unclear or contradictory?
- Could the vehicle have been doing something permitted (turning, loading, avoiding obstruction)?
- Is the image clear enough to be reliable evidence?

FOR SIGNAGE PHOTOS:
- Is the sign clearly visible and readable?
- Are the terms unambiguous?
- Is the font size adequate (BPA guidelines specify minimum sizes)?
- Are there contradictory signs?
- Is the sign at an appropriate height and location?
- Does it comply with the BPA or IPC Code of Practice?

FOR PAYMENT MACHINE PHOTOS:
- Does the machine appear to be out of order?
- Is there an error message displayed?
- Is the machine clearly accessible?

FOR ROAD MARKINGS:
- Are yellow lines clearly visible and well-maintained?
- Are parking bay markings clear?
- Could the markings be confused or ambiguous?

Return a JSON response with this exact structure:
{
  "evidence_type": "anpr" | "cctv" | "signage" | "machine" | "markings" | "location" | "other",
  "summary": "Brief description of what the image shows",
  "issues_found": [
    {
      "issue": "Description of the potential appeal ground",
      "strength": "strong" | "moderate" | "weak",
      "legal_basis": "Relevant legislation or code of practice reference"
    }
  ],
  "appeal_relevance": "high" | "medium" | "low",
  "recommendation": "How this evidence could be used in an appeal letter"
}

Be honest and conservative. Only flag genuine issues. Do not overstate the strength of weak evidence.`;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get("image") as File | null;
    const fineType = formData.get("fineType") as string | null;

    if (!imageFile) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const base64 = buffer.toString("base64");

    const mimeType = imageFile.type === "image/heic" || imageFile.type === "image/heif"
      ? "image/jpeg"
      : imageFile.type;

    const client = getClient();

    const contextNote = fineType
      ? `\n\nContext: This is evidence for a ${fineType === "private" ? "private parking charge" : "council PCN"} appeal.`
      : "";

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1500,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: { type: "base64", media_type: mimeType as "image/jpeg" | "image/png" | "image/gif" | "image/webp", data: base64 },
            },
            {
              type: "text",
              text: `Please analyse this evidence photo for a parking fine appeal.${contextNote}`,
            },
          ],
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";

    // Parse JSON from response
    let analysis;
    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        analysis = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("No JSON found");
      }
    } catch {
      return NextResponse.json(
        { error: "parse_error", message: "Could not analyse this image. Please try a clearer photo." },
        { status: 422 }
      );
    }

    return NextResponse.json({ data: analysis });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Evidence analysis error:", message);
    return NextResponse.json(
      { error: "analysis_failed", message: "Could not analyse the image. Please try again." },
      { status: 500 }
    );
  }
}
