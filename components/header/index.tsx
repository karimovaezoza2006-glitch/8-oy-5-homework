"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";


const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/login" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-zinc-900/40 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] px-8 py-4 shadow-2xl border-t-white/10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:rotate-12 transition-transform duration-500">
            <span className="text-white font-black text-xl italic">A</span>
          </div>
          <span className="text-xl font-black tracking-tighter hidden sm:block">
            AGENCY.
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2 rounded-2xl text-sm font-bold transition-all duration-300 relative group ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-blue-500 rounded-full transition-all duration-300 ${isActive ? "w-4" : "w-0 group-hover:w-2"}`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="mr-2">
          
          </div>
          <Link
            href="/login"
            className="hidden sm:block px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-black rounded-2xl transition-all active:scale-95"
          >
            LOGIN
          </Link>
          <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-black rounded-2xl shadow-lg shadow-blue-600/20 transition-all active:scale-95">
            START
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
