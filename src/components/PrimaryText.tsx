function PrimaryText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`text-[28px] ${className}`}>{children}</p>;
}

export default PrimaryText;
