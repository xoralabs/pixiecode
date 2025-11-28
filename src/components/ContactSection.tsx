"use client";

import { motion, Variants } from "framer-motion";
// Hanya mengimpor ikon yang benar-benar digunakan: Phone dan MessageCircle
import { Phone, MessageCircle } from "lucide-react"; 

// Varian animasi shake/goyangan ringan yang berulang
const shakeVariant: Variants = {
  animate: {
    // Rotasi ringan bolak-balik (shake/waggle effect)
    rotate: [0, 5, -5, 5, -5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop" as const, 
      ease: "easeInOut",
    },
  },
};

const contactButtons = [
  {
    icon: <MessageCircle className="w-10 h-10 text-white" />, // Ikon Telegram/Pesan
    title: "Telegram",
    value: "@Pixieuse",
    link: "https://t.me/Pixieuse",
    bgColor: "bg-blue-500/30", // Warna biru untuk Telegram
    hoverShadow: "hover:shadow-blue-500/40",
  },
  {
    icon: <Phone className="w-10 h-10 text-white" />, // Ikon WhatsApp/Telepon
    title: "WhatsApp",
    value: "+62 812-3456-7890",
    link: "https://wa.me/6281234567890",
    bgColor: "bg-green-500/30", // Warna hijau untuk WhatsApp
    hoverShadow: "hover:shadow-green-500/40",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Floating Bubbles Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-40 h-40 bg-purple-600/20 blur-3xl rounded-full top-10 left-10 animate-pulse" />
        <div className="absolute w-52 h-52 bg-purple-500/10 blur-3xl rounded-full bottom-20 right-20 animate-bounce" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-purple-300 mb-6"
        >
          Contact Me Directly
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-300 max-w-lg mx-auto mb-12"
        >
          Have a project in mind? Click the platform below to chat immediately!
        </motion.p>

        {/* Contact Buttons (Telegram & WhatsApp) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-10">
          {contactButtons.map((button, index) => (
            <motion.a
              key={index}
              href={button.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className={`flex flex-col items-center justify-center p-8 rounded-3xl cursor-pointer transition transform hover:scale-[1.02] 
                          border border-white/10 shadow-xl ${button.bgColor} ${button.hoverShadow} text-white`}
            >
              {/* IKON DENGAN EFEK SHAKE */}
              <motion.div
                variants={shakeVariant}
                animate="animate"
                className="mb-4"
              >
                {button.icon}
              </motion.div>
              {/* END IKON */}
              
              <h3 className="text-xl font-bold mb-1">{button.title}</h3>
              <p className="text-gray-200 text-sm opacity-70">{button.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}