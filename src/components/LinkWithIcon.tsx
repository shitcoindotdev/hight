import Image from 'next/image'
import Link from 'next/link'

type LinkWithIconProps = {
  icon: string
  href: string
  className?: string
  style?: object
}

function LinkWithIcon({ icon, href, className, style }: LinkWithIconProps) {
  return (
    <Link
      className={className}
      style={style}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={icon} width={200} height={200} alt="socialLink" />
    </Link>
  )
}

export default LinkWithIcon
