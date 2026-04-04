interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeStyles = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-screen-2xl",
};

export default function Container({
  children,
  className = "",
  size = "lg",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto ${sizeStyles[size]} px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
