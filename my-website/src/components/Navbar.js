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
          src="https://nextjs.org/icons/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        About Me
      </Link>
      <Link href="/projects" className={currentPath === '/projects' ? 'active' : ''}>
        <Image
          aria-hidden
          src="https://nextjs.org/icons/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        My Projects
      </Link>
      <Link href="/contact" className={currentPath === '/contact' ? 'active' : ''}>
        <Image
          aria-hidden
          src="https://nextjs.org/icons/globe.svg"
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