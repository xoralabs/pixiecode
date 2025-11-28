// app/page.tsx
import React from "react";

import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/Tech";
import WhiteLabel from "@/components/WhiteLabel";

import AboutSection from "@/components/AboutSection";

import ContactSection from "@/components/ContactSection";

export default function Home() {
  // Variabel ini tidak diperlukan lagi karena HeroSection tidak lagi menggunakannya.
  // const primaryCtaLink = "/dashboard/register";
  // const secondaryCtaLink = "/videos/demo-web3";

  return (
    <main className="min-h-screen text-white overflow-x-hidden">

      {/* ======================= */}
      {/* HERO SECTION */}
      {/* ======================= */}
      <HeroSection
        // Menghapus props yang tidak lagi didukung oleh HeroSection
        // primaryCtaLink={primaryCtaLink}
        // secondaryCtaLink={secondaryCtaLink}
      />

      {/* ======================= */}
      {/* ABOUT SECTION */}
      {/* ======================= */}
      <AboutSection />

      {/* ======================= */}
      {/* TECH STACK SECTION */}
      {/* ======================= */}
      <TechStack />

      {/* ======================= */}
      {/* WHITE LABEL SECTION */}
      {/* ======================= */}
      <WhiteLabel />

      {/* ======================= */}
      {/* FAQ SECTION (Kosong) */}
      {/* ======================= */}
      

      {/* ======================= */}
      {/* CONTACT SECTION */}
      {/* ======================= */}
      <ContactSection />

      {/* Footer Dihapus Sesuai Permintaan */}
      {/* <footer className="py-10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} KholiqDev. All rights reserved.
      </footer>
      */}

    </main>
  );
}