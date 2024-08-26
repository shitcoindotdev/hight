function Button({
  children,
  className,
  href,
  style,
}: {
  children?: React.ReactNode
  className?: string
  href?: string
  style?: object
}) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={`${className} cursor-pointer`}
      style={style}
    >
      {children}
    </a>
  )
}

export default Button
