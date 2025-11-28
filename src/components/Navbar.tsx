"use client";

import Link from "next/link";
import { useState } from "react";
// Import Image dari Next.js untuk optimasi gambar
import Image from "next/image"; 

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg">
      <nav className="relative mx-auto max-w-7xl px-6 py-4 flex items-center text-white">

        {}
        <Link
          href="/"
          className="text-purple-400 hover:text-purple-300 transition font-semibold text-lg flex items-center gap-2"
          // Menambahkan teks PixieCode sebagai fallback atau label
          aria-label="PixieCode Home"
        >
          {/* Menggunakan Image component dari Next.js */}
          <Image 
            src="/pixielogo1.png" 
            alt="PixieCode Logo" 
            width={32} // Sesuaikan lebar yang diinginkan
            height={32} // Sesuaikan tinggi yang diinginkan
            className="rounded-full" // Contoh styling
          />
          PixieCode
        </Link>

        {/* Desktop Menu - CENTER (Sekarang mencakup semua link Mobile) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a href="#home" className="hover:text-purple-300 transition">Home</a>
          <a href="#ABOUT" className="hover:text-purple-300 transition">About</a> {/* Dipertahankan sebagai ABOUT */}         
          <a href="#whitelabel" className="hover:text-purple-300 transition">White-Label</a>
          <a href="#contact" className="hover:text-purple-300 transition">Contact</a>
        </div>

        {/* Mobile Button - Right */}
        <button
          onClick={() => setOpenMobile(!openMobile)}
          className="md:hidden text-white focus:outline-none ml-auto"
          aria-label={openMobile ? "Close menu" : "Open menu"}
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

      {/* Mobile Menu (Tetap sama, semua link sudah lengkap) */}
      {openMobile && (
        <div className="md:hidden  backdrop-blur-xl py-6">
          <div className="flex flex-col gap-5 items-center text-white">
            <a href="Home" onClick={() => setOpenMobile(false)} className="hover:text-purple-300 transition">Home</a>
            <a href="About" onClick={() => setOpenMobile(false)} className="hover:text-purple-300 transition">About</a>
            <a href="WhiteLabel" onClick={() => setOpenMobile(false)} className="hover:text-purple-300 transition">White-Label</a>
            <a href="Contact" onClick={() => setOpenMobile(false)} className="hover:text-purple-300 transition">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}