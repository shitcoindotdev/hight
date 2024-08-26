const navLinks = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

function Navbar({ className }: { className: string }) {
  return <nav className={className}></nav>;
}

export default Navbar;
