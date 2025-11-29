"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg">
      <nav className="relative mx-auto max-w-7xl px-6 py-4 flex items-center text-white">

        <Link
          href="/"
          className="text-purple-400 hover:text-purple-300 transition font-semibold text-lg flex items-center gap-2"
          aria-label="PixieCode Home"
        >
          <Image 
            src="/pixielogo1.png" 
            alt="PixieCode Logo" 
            width={32}
            height={32}
            className="rounded-full"
          />
          PixieCode
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a href="#" className="hover:text-purple-300 transition">Home</a>
          <a href="#about" className="hover:text-purple-300 transition">About</a>
          <a href="#whitelabel" className="hover:text-purple-300 transition">White-Label</a>
          <a href="#contact" className="hover:text-purple-300 transition">Contact</a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpenMobile(!openMobile)}
          className="md:hidden text-white ml-auto focus:outline-none"
        >
          {openMobile ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </nav>

      {/* MOBILE MENU */}
      {openMobile && (
        <div className="md:hidden backdrop-blur-xl py-6">
          <div className="flex flex-col gap-5 items-center text-white">
            <a href="#home" onClick={() => setOpenMobile(false)} className="hover:text-purple-300 transition">Home</a>
            <a href="#about" onClick={() => setOpenMobile(false)} className="hover:text-purple-300 transition">About</a>
            <a href="#whitelabel" onClick={() => setOpenMobile(false)} className="hover:text-purple-300 transition">White-Label</a>
            <a href="#contact" onClick={() => setOpenMobile(false)} className="hover:text-purple-300 transition">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
