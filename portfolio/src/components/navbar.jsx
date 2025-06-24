'use client';

import { FaLinkedinIn, FaBehance, FaTwitter } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full bg-nav-background py-5 flex justify-between items-center max-w-5xl mx-auto rounded-b-xl">
      <nav className=" text-text w-full px-25 flex justify-between items-center max-w-5xl">
        <ul className="flex space-x-10 text-sm capitalize tracking-wide">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`transition-colors duration-200 cursor-pointer hover:text-active ${pathname === item.path ? 'text-[#62BA1B]' : ''
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex space-x-6 text-sm">
          <Link
            href="https://www.linkedin.com"
            className="hover:text-active transition hover:scale-110 transform duration-200"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://www.behance.net"
            className="hover:text-active transition hover:scale-110 transform duration-200"
          >
            <FaBehance />
          </Link>
          <Link
            href="https://twitter.com"
            className="hover:text-active transition hover:scale-110 transform duration-200"
          >
            <FaTwitter />
          </Link>
        </div>
      </nav>
    </header>
  );
}
