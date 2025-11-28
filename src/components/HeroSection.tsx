"use client";

import React, { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const fullHeadline = "Launch Your Web3";

  const [displayedHeadline, setDisplayedHeadline] = useState("");
  const [phase, setPhase] = useState<"typing" | "paused" | "deleting">("typing");

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 1500;

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (phase === "typing") {
      if (displayedHeadline.length < fullHeadline.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedHeadline(
            fullHeadline.substring(0, displayedHeadline.length + 1)
          );
        }, typingSpeed);
      } else {
        timeoutRef.current = setTimeout(() => {
          setPhase("paused");
        }, pauseDuration);
      }
    }

    if (phase === "paused") {
      timeoutRef.current = setTimeout(() => {
        setPhase("deleting");
      }, pauseDuration);
    }

    if (phase === "deleting") {
      if (displayedHeadline.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedHeadline(
            fullHeadline.substring(0, displayedHeadline.length - 1)
          );
        }, deletingSpeed);
      } else {
        timeoutRef.current = setTimeout(() => {
          setPhase("typing");
        }, typingSpeed);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayedHeadline, phase, fullHeadline]);

  return (
    <section className="relative w-full py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1
          className="text-5xl sm:text-7xl lg:text-7xl font-extrabold tracking-tight mb-6 
                     whitespace-nowrap min-h-[1em] relative"
        >
          {displayedHeadline}
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          We build high–performance, white-label Web3 & SaaS platforms for
          startups, founders, and blockchain projects — powered by modern
          technology and enterprise-grade security.
        </p>
      </div>
    </section>
  );
}
