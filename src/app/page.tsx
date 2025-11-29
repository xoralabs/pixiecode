// app/page.tsx
import React from "react";

import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/Tech";
import WhiteLabel from "@/components/WhiteLabel";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden">
      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="techstack">
        <TechStack />
      </div>

      <div id="whitelabel">
        <WhiteLabel />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
