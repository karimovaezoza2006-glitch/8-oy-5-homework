"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-zinc-950 pt-24 pb-12 px-6 overflow-hidden border-t border-zinc-900 mt-auto">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm italic">A</span>
              </div>
              <span className="text-xl font-black tracking-tighter">
                AGENCY.
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Biz kelajak texnologiyalarini bugun yaratamiz. Sifat va dizayn
              bizning ustuvorligimizdir.
            </p>
            <div className="flex items-center gap-4">
              {["𝕏", "IG", "LI", "FB"].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-bold hover:bg-blue-600 hover:border-blue-500 transition-all duration-300"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">
              Platforma
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-zinc-500 hover:text-blue-400 text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-zinc-500 hover:text-blue-400 text-sm transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-500 hover:text-blue-400 text-sm transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-500 hover:text-blue-400 text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">
              Yordam
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-blue-400 text-sm transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-blue-400 text-sm transition-colors"
                >
                  Hujjatlar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-blue-400 text-sm transition-colors"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">
              Yangiliklar
            </h4>
            <p className="text-zinc-500 text-sm mb-6">
              Eng so'nggi yangiliklardan xabardor bo'ling.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Emailingiz"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 text-white rounded-xl text-xs font-black hover:bg-blue-500 transition-all">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs font-medium">
            &copy; 2024 Agency Creative. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors"
            >
              Maxfiylik
            </a>
            <a
              href="#"
              className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors"
            >
              Shartlar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
