interface CardProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
  className?: string;
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  header,
  padding = "md",
  hover = false,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-xl border border-gray-100 bg-white ${
        hover ? "transition-shadow hover:shadow-sm" : ""
      } ${className}`}
    >
      {header && (
        <div className="border-b border-gray-100 px-6 py-4">{header}</div>
      )}
      <div className={paddingStyles[padding]}>{children}</div>
    </div>
  );
}
