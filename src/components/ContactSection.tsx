"use client";

import React from "react"; 
import { motion, Variants } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react"; 

// Interface untuk mendefinisikan tipe data objek dalam array contactButtons
interface ContactButton {
    // FIX: Menggunakan React.ReactElement (atau React.JSX.Element) untuk menghindari error "Cannot find namespace 'JSX'."
    icon: React.ReactElement; 
    title: string;
    value?: string;
    link: string;
    bgColor: string;
    hoverShadow: string;
}

// Varian animasi shake/goyangan ringan yang berulang
const shakeVariant: Variants = {
    animate: {
        rotate: [0, 5, -5, 5, -5, 0],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop" as const, 
            ease: "easeInOut",
        },
    },
};

const contactButtons: ContactButton[] = [
    {
        icon: <MessageCircle className="w-10 h-10 text-white" />,
        title: "Telegram",
        value: "@Pixieuse",
        link: "https://t.me/Pixieuse",
        bgColor: "bg-blue-500/30",
        hoverShadow: "hover:shadow-blue-500/40",
    },
    {
        icon: <Phone className="w-10 h-10 text-white" />,
        title: "WhatsApp",
        link: "https://wa.me/6287722428870",
        bgColor: "bg-green-500/30",
        hoverShadow: "hover:shadow-green-500/40",
    },
];

// FIX: Mengubah tipe kembalian ke React.ReactElement
export default function ContactSection(): React.ReactElement {
    return (
        <section
            id="Contact"
            className="relative py-32 px-6 overflow-hidden"
        >
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
                    {contactButtons.map((button: ContactButton, index: number) => (
                        <motion.a
                            key={index}
                            href={button.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            // Efek hover:scale-[1.02] Tailwind digantikan dengan whileHover Framer Motion untuk mencegah konflik.
                            whileHover={{ scale: 1.02 }} 
                            className={`flex flex-col items-center justify-center p-8 rounded-3xl cursor-pointer transition transform 
                                         border border-white/10 shadow-xl ${button.bgColor} ${button.hoverShadow} text-white`}
                        >
                            {/* IKON DENGAN EFEK SHAKE BERULANG */}
                            <motion.div
                                variants={shakeVariant}
                                animate="animate"
                                className="mb-4"
                            >
                                {button.icon}
                            </motion.div>
                            
                            <h3 className="text-xl font-bold mb-1">{button.title}</h3>
                            
                            {/* Tampilkan value jika ada (Untuk Telegram), atau teks default jika disembunyikan (Untuk WhatsApp) */}
                            <p className="text-gray-200 text-sm opacity-70">
                                {button.value ? button.value : "Click to Chat"}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}