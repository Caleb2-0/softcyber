"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Logo from '../../public/softcyberlogo.svg'
const page = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Solutions", path: "/solutions" },
    { name: "Our team", path: "/team" },
  ];

  const linkClass = (path, string) =>
    `flex items-center pb-1 transition
     ${
       pathname === path
         ? "border-b-2 border-blue-500"
         : "border-b-2 border-transparent hover:border-gray-500"
     }`;

  return (
    <nav className="z-50 mt-5 rounded-lg w-full ring-1 ring-black/5 dark:bg-gray-800 dark:text-white text-gray-500 bg-white/30 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-14 flex">
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="text-xl font-bold flex items-center justify-center gap-2"><span><Image src={Logo} alt="softcyber logo" className="w-10"/></span>
          <p className="hidden md:flex font-bold text-sky-600 dark:text-sky-100">Softcyber</p>
        </Link>

        <ul className="hidden md:flex space-x-8 items-center justify-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path} className={linkClass(item.path)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href='./contact' className="hidden md:flex hover:bg-[#2f7f6d] hover:text-amber-50 active:bg-amber-50 px-5 py-2 rounded-full">Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white/30 text-black dark:text-gray-200 dark:bg-gray-800 rounded-b-full backdrop-blur-2xl px-6 py-4 space-y-4 flex flex-col justify-start">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={linkClass(item.path)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li><Link href='./contact'>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default page;
