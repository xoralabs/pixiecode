"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50  backdrop-blur-lg">
      <nav className="relative mx-auto max-w-7xl px-6 py-4 flex items-center text-white">

        {/* Logo - Left */}
        <Link
          href="/"
          className="text-purple-400 hover:text-purple-300 transition font-semibold text-lg"
        >
          KholiqDev
        </Link>

        {/* Desktop Menu - CENTER */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a href="#home" className="hover:text-purple-300 transition">Home</a>
          <a href="#ABOUT" className="hover:text-purple-300 transition">About</a>
          <a href="#whitelabel" className="hover:text-purple-300 transition">White-Label</a>    
          <a href="#contact" className="hover:text-purple-300 transition">Contact</a>
        </div>

        {/* Mobile Button - Right */}
        <button
          onClick={() => setOpenMobile(!openMobile)}
          className="md:hidden text-white focus:outline-none ml-auto"
        >
          {openMobile ? (
            // Close Icon
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </nav>

      {/* Mobile Menu */}
      {openMobile && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl py-6">
          <div className="flex flex-col gap-5 items-center text-white">
            <a href="#home" className="hover:text-purple-300 transition">Home</a>
            <a href="#services" className="hover:text-purple-300 transition">Services</a>
            <a href="#whitelabel" className="hover:text-purple-300 transition">White-Label</a>
            <a href="#demo" className="hover:text-purple-300 transition">Demo</a>
            <a href="#tech" className="hover:text-purple-300 transition">Tech</a>
            <a href="#faq" className="hover:text-purple-300 transition">FAQ</a>
            <a href="#contact" className="hover:text-purple-300 transition">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
