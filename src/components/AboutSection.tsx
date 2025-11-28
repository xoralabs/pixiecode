"use client";

import { motion, Variants, Transition, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Code, Rocket, Shield, Globe, X } from "lucide-react";

// --- Configuration Data (tetap sama) ---
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

// --- Framer Motion Variants (tetap sama) ---
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

// --- Live Demo Modal Component (tetap sama) ---
interface DemoModalProps {
    onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ onClose }) => {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            {/* Modal Content: border dan shadow dihapus */}
            <motion.div
                className="bg-gray-900 rounded-3xl p-8 max-w-lg w-full relative" 
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button (tetap sama) */}
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
                            // Menghapus border, hover border, dan menambahkan hover bg
                            className="flex flex-col p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer group" 
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Array untuk memberikan nilai X yang berbeda (simulasi random)
    const featureX = [10, -10, 15, -15]; 
    const statsX = [5, -5, 8, -8, 5];

    return (
        <section
            id="ABOUT"
            className="relative w-full py-28 text-white flex justify-center items-center"
        >
            {/* BubbleBackground komponen telah dihapus di sini */}

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                {/* Title (tetap sama) */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                    About PixieCode
                </motion.h2>

                {/* Feature cards: Menambahkan initial X untuk efek random */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            // Disesuaikan: Menambahkan x berdasarkan featureX[index]
                            initial={{ opacity: 0, y: 30, x: featureX[index] }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }} // Mengurangi delay untuk feeling yang lebih cepat
                            // Kelas bg-white/5 dan backdrop-blur-md dipertahankan
                            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-left hover:bg-white/10 transition" 
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

                {/* Stats section: Menambahkan initial X untuk efek random */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            // Disesuaikan: Menambahkan x berdasarkan statsX[index]
                            initial={{ opacity: 0, y: 30, x: statsX[index] }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{
                                delay: 0.1 + index * 0.1, // Mengurangi delay
                                duration: 0.5,
                            }}
                            // Kelas background tetap sama
                            className="p-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/10"
                        >
                            {/* Looping animation on H4 (tetap sama) */}
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

                {/* CTA (tetap sama) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16"
                >
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

            {/* Render Modal with AnimatePresence (tetap sama) */}
            <AnimatePresence>
                {isModalOpen && <DemoModal onClose={closeModal} />}
            </AnimatePresence>
        </section>
    );
}