import Link from 'next/link';

type links = {
  url: string;
  text: string;
};

function NavLinks({ links, className }: { links: links[]; className: string }) {
  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {links.map((link, index) => (
        <li className="m-0 p-0" key={'nav' + index}>
          <Link href={link.url}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
