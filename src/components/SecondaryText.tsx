function SecondaryText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`text-[18px] ${className}`}>{children}</p>;
}

export default SecondaryText;
