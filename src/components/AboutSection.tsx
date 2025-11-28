"use client";

import { motion, Variants, Transition, AnimatePresence } from "framer-motion";
import { useState } from "react";
import BubbleBackground from "@/components/BubbleBackground"; // Assuming this path is correct
import { Code, Rocket, Shield, Globe, X } from "lucide-react";

// --- Configuration Data ---
const features = [
    {
        icon: <Code className="w-6 h-6 text-purple-400" />,
        title: "Modern Web3 Stack",
        desc: "Built with Next.js 14+, TypeScript, TailwindCSS, Wagmi, RainbowKit, and ShadCN for clean, scalable and secure architecture.",
    },
    {
        icon: <Rocket className="w-6 h-6 text-pink-400" />,
        title: "Fast Deployment",
        desc: "White-label solutions ready to launch: Token Sale, Staking, NFT Minting, Dashboard, and Admin Panel with full source code.",
    },
    {
        icon: <Shield className="w-6 h-6 text-indigo-400" />,
        title: "Secure & Auditable",
        desc: "Built with best practices, smart-contract ready, easy to audit, and optimized for performance & reliability.",
    },
    {
        icon: <Globe className="w-6 h-6 text-blue-400" />,
        title: "Global Ready",
        desc: "Designed for international clients & compliant for EU standards, multilingual-ready, with scalable infrastructure.",
    },
];

const stats = [
    { value: "50+", label: "Modules Ready" },
    { value: "100%", label: "White-Label" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Custom Solution" },
    { value: "🌎", label: "Worldwide Focus" },
];

const demoOptions = [
    { label: "Landing Page V2", url: "https://demo-v2.kholiqdev.com/", desc: "Modern, performant marketing site." },
    { label: "Staking DApp", url: "https://demo-staking.kholiqdev.com/", desc: "Complete DeFi Staking platform." },
    { label: "NFT Minting Site", url: "https://demo-nft.kholiqdev.com/", desc: "ERC721/1155 ready minting dapp." },
    { label: "Admin Panel/CRM", url: "https://demo-admin.kholiqdev.com/", desc: "Backend dashboard for data management." },
];

// --- Framer Motion Variants ---
const loopingVariant: Variants = {
    animate: {
        y: [0, -5, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "loop" as const,
            ease: "easeInOut",
        } as Transition,
    },
};

const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: -50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
    exit: { opacity: 0, scale: 0.5, y: -50, transition: { duration: 0.3 } },
};

// --- Live Demo Modal Component ---
interface DemoModalProps {
    onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ onClose }) => {
    // Backdrop Overlay & Wrapper
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // Close modal when clicking outside (backdrop)
        >
            {/* Modal Content */}
            <motion.div
                className="bg-gray-900 border border-purple-500/30 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl shadow-purple-900/50"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition"
                    aria-label="Close Modal"
                >
                    <X className="w-6 h-6" />
                </button>

                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                    🚀 Select Live Demo
                </h3>
                <p className="text-gray-300 mb-6">
                    Explore our white-label solutions ready for launch. Click to see the live demo!
                </p>

                <div className="space-y-4">
                    {demoOptions.map((demo, index) => (
                        <motion.a
                            key={index}
                            href={demo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col p-4 bg-white/5 border border-white/10 rounded-xl hover:border-pink-500/50 transition-all cursor-pointer group"
                        >
                            <span className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">
                                {demo.label}
                            </span>
                            <span className="text-sm text-gray-400 mt-1">
                                {demo.desc}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};
// --- End Live Demo Modal Component ---

// ------------------------------------
// --- Main Component: AboutSection ---
// ------------------------------------
export default function AboutSection() {
    // State to control pop-up visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Functions to open and close the modal
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section
            id="ABOUT"
            className="relative w-full py-28 text-white flex justify-center items-center"
        >
            <BubbleBackground />

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >                   
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
                >
                    PixieCode is a creative Web3 & SaaS development studio focused on
                    building high-performance digital products. We specialize in
                    white-label systems for startups, founders, and blockchain projects
                    that want to launch faster with premium design, strong branding, and
                    scalable technology.
                </motion.p>

                {/* Feature cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-left hover:border-purple-500/40 transition"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                {item.icon}
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.2 + index * 0.1,
                                duration: 0.5,
                            }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/10 border border-white/10"
                        >
                            {/* Looping animation on H4 */}
                            <motion.h4
                                variants={loopingVariant}
                                animate="animate"
                                transition={{
                                    delay: 0.5 + index * 0.15
                                }}
                                className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                            >
                                {stat.value}
                            </motion.h4>
                            <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16"
                >
                    {/* Activate modal on button click */}
                    <button
                        onClick={openModal}
                        className="group px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all shadow-lg shadow-purple-700/40"
                    >
                        <span className="text-white font-semibold tracking-wide">
                            Click for Demo
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* Render Modal with AnimatePresence */}
            <AnimatePresence>
                {isModalOpen && <DemoModal onClose={closeModal} />}
            </AnimatePresence>
        </section>
    );
}