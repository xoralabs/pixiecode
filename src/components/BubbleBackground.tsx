"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Bubble {
  width: number;
  height: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
}

export default function BubbleBackground() {
  const [bubbles] = useState<Bubble[]>(() =>
    Array.from({ length: 12 }).map(() => ({
      width: 80 + Math.random() * 120,
      height: 80 + Math.random() * 120,
      top: Math.random() * 80,
      left: Math.random() * 80,
      duration: 6 + Math.random() * 5,
      delay: Math.random() * 2,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.1, 0.25, 0.15],
            y: [-20, -80, -20],
            scale: [0.8, 1.1, 0.9],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute rounded-full bg-purple-500/20 blur-2xl"
          style={{
            width: `${b.width}px`,
            height: `${b.height}px`,
            top: `${b.top}%`,
            left: `${b.left}%`,
          }}
        />
      ))}
    </div>
  );
}
