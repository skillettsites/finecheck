"use client";

export default function TemplateRenderer({ text }: { text: string }) {
  const parts = text.split(/(\[[A-Z][^\[\]]*\])/g);

  return (
    <pre className="p-5 text-sm leading-relaxed text-gray-800 whitespace-pre-wrap font-sans overflow-x-auto">
      {parts.map((part, i) => {
        if (/^\[[A-Z][^\[\]]*\]$/.test(part)) {
          return (
            <span
              key={i}
              className="bg-amber-100 text-amber-800 px-1 rounded font-semibold"
            >
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </pre>
  );
}
