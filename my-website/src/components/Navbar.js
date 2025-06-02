// src/components/Navbar.js
"use client";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <div className="topnav" id="myTopnav">
      <Link href="/" className={currentPath === '/' ? 'active' : ''}>
        Home
      </Link>
      <Link href="/aboutme" className={currentPath === '/aboutme' ? 'active' : ''}>
        <Image
          aria-hidden
          src="/images/about_icon.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        About Me
      </Link>
      <Link href="/projects" className={currentPath.startsWith('/projects') ? 'active' : ''}>
        <Image
          aria-hidden
          src="/images/project_icon.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        My Projects
      </Link>
      <Link href="/contact" className={currentPath === '/contact' ? 'active' : ''}>
        <Image
          aria-hidden
          src="/images/contact_icon.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Contact Me
      </Link>
    </div>
  );
};

export default Navbar;