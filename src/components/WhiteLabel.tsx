"use client";

import React from "react"; 
import { motion, useAnimation, Variants } from "framer-motion";
import { 
    ShieldCheck, Rocket, Paintbrush, Lock, Repeat, Layers3,
    Boxes, DollarSign, LineChart, Wallet, LayoutGrid, Cog
} from "lucide-react";

// Gabungan semua fitur dan layanan untuk grid yang komprehensif (12 items)
const allItems = [
    { icon: Rocket, title: "Launch Faster", desc: "Skip months of development with our ready-to-deploy system." },
    { icon: Lock, title: "Secure & Private", desc: "You own 100% source code. No backdoor. No access from us." },
    { icon: Repeat, title: "Scalable System", desc: "Built to scale for thousands of users & transactions." },
    { icon: Boxes, title: "Full White-Label Platform", desc: "A complete ready-to-brand system: dashboard, wallet connect, staking, ICO, analytics." },
    { icon: DollarSign, title: "Token Sale Website (ICO / Presale)", desc: "Multi-chain token sale UI with vesting, progress bar, and claim portal." },
    { icon: LineChart, title: "Staking & Farming Dashboard", desc: "Next.js + Wagmi + Recharts dashboard for staking, APY, rewards & metrics." },
    { icon: Paintbrush, title: "Full Rebranding", desc: "Change logo, colors, name, token & UI to match your brand." },
    { icon: Layers3, title: "Modular System", desc: "Choose only what you need: Staking, ICO, NFT, Dashboard, etc." },
    { icon: ShieldCheck, title: "EU-Ready Standard", desc: "Built with GDPR, performance & security standards in mind." },
    { icon: Wallet, title: "Wallet Integration", desc: "Professional wallet connection setup: MetaMask, Coinbase, WalletConnect, etc." },
    { icon: LayoutGrid, title: "NFT Minting Website", desc: "White-label minting UI with wallet connect and real-time mint analytics." },
    { icon: Cog, title: "Custom Contract Integration", desc: "Connect any smart contract to frontend using Wagmi / viem." },
];

// Varian animasi shake/goyangan ringan yang berulang
const shakeVariant: Variants = {
    shake: {
        x: [0, 1.5, -1.5, 1.5, -1.5, 0],
        rotate: [0, 0.5, -0.5, 0.5, -0.5, 0],
        transition: {
            x: { duration: 0.2, repeat: Infinity, repeatDelay: 0.1 },
            rotate: { duration: 0.2, repeat: Infinity, repeatDelay: 0.1 },
        },
    },
    rest: {
        x: 0,
        rotate: 0,
        transition: { duration: 0.3 },
    },
};

// Komponen terpisah untuk setiap item fitur agar mudah mengelola animasi
interface FeatureItemProps {
    icon: React.ElementType;
    title: string;
    desc: string;
    delay: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, title, desc, delay }) => {
    const controls = useAnimation();

    const startShake = () => {
        controls.start("shake", { duration: 0 }); 
    };

    const stopShake = () => {
        controls.stop(); 
        controls.start("rest");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: delay }}
            
            // Animasi Hover
            onHoverStart={startShake}
            onHoverEnd={stopShake}
            animate={controls}
            variants={shakeVariant}
            
            // Menggunakan whileHover Framer Motion untuk scale
            whileHover={{ scale: 1.02 }}
            
            className="p-6 rounded-2xl border border-transparent 
            bg-white/5 backdrop-blur-sm
            hover:border-purple-500/50 hover:bg-white/10
            transition-all duration-300 cursor-pointer" 
        >
            <Icon className="w-9 h-9 text-purple-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{desc}</p>
        </motion.div>
    );
};

export default function WhiteLabelParallax() {
    return (
        <section id="WhiteLabel" className="relative w-full py-24 text-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6 z-10">
                
                {/* HEADLINE SECTION */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                        Launch Your Web3 Platform <span className="text-purple-500">In Days.</span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-4">
                        Stop wasting months developing the base layer. Get the complete, secure, and fully-customizable **White Label** solution deployed under your brand today.
                    </p>
                </div>


                {/* FULL FEATURE & SERVICES GRID - Mengubah menjadi 4 Kolom dan 8 Item */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* HANYA RENDER 8 ITEM PERTAMA */}
                    {allItems.slice(0, 8).map((item, i) => (
                        <FeatureItem
                            key={i}
                            icon={item.icon}
                            title={item.title}
                            desc={item.desc}
                            delay={i * 0.1} // Delay untuk staggered initial appearance
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}