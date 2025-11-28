"use client";

import React, { useState, useEffect, useCallback, useLayoutEffect } from "react"; 
import { 
    ShieldCheck, Rocket, Paintbrush, Lock, Repeat, Layers3,
    Boxes, DollarSign, LineChart, Wallet, LayoutGrid, Cog
} from "lucide-react";

// Gabungan semua fitur dan layanan untuk grid yang komprehensif
const allItems = [
    // ... items ...
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


export default function WhiteLabelParallax() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMounted, setIsMounted] = useState(false);

    // MENGGUNAKAN useLayoutEffect untuk mengatur status mounted
    useLayoutEffect(() => {
        // [PERBAIKAN] Menambahkan kembali directive ESLint untuk mengabaikan peringatan set-state-in-effect
        // karena ini adalah pola yang valid untuk mengatasi hydration di sisi klien.
        // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/set-state-in-effect
        setIsMounted(true);
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        // Normalisasi posisi mouse dari -0.5 hingga 0.5
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        setMousePos({ x, y });
    }, []);

    useEffect(() => {
        if (isMounted) {
            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [handleMouseMove, isMounted]);

    // Fungsi untuk menghitung style Parallax (Translasi berdasarkan Mouse)
    const styleLayer = (xMul: number, yMul: number, size: number) => {
        let translateX = 0;
        let translateY = 0;

        if (isMounted) {
            // Perhitungan pergerakan Parallax (semakin besar xMul/yMul, semakin jauh bergerak)
            translateX = mousePos.x * xMul * 100;
            translateY = mousePos.y * yMul * 100;
        }

        return {
            width: `${size}px`,
            height: `${size}px`,
            // Tambahkan perpindahan Parallax pada nilai transform
            transform: `translate(${translateX}px, ${translateY}px)`,
        } as React.CSSProperties;
    };

    return (
        <section className="relative w-full py-24 text-white overflow-hidden">
            
            {/* Parallax layers Container */}
            <div className="absolute inset-0 pointer-events-none">
                
                {/* Layer 1 (Besar, bergerak perlahan) - Kiri Atas */}
                <div 
                    className="absolute rounded-full bg-purple-800 opacity-40 will-change-transform blur-3xl"
                    style={{ 
                        ...styleLayer(0.2, 0.1, 250), // xMul=0.2, yMul=0.1
                        top: '15%', 
                        left: '10%',
                        transform: `translate(-50%, -50%) ${styleLayer(0.2, 0.1, 250).transform}`
                    }} 
                />
                
                {/* Layer 2 - Kanan Atas */}
                <div 
                    className="absolute rounded-full bg-orange-600 opacity-30 will-change-transform blur-3xl"
                    style={{ 
                        ...styleLayer(-0.1, 0.2, 180), // xMul=-0.1, yMul=0.2
                        top: '20%', 
                        right: '15%', 
                        left: 'auto',
                        transform: `translate(50%, -50%) ${styleLayer(-0.1, 0.2, 180).transform}`
                    }} 
                />
                
                {/* Layer 3 - Kiri Bawah */}
                <div 
                    className="absolute rounded-full bg-purple-600 opacity-20 will-change-transform blur-3xl"
                    style={{ 
                        ...styleLayer(0.3, -0.15, 120), // xMul=0.3, yMul=-0.15
                        bottom: '10%', 
                        left: '30%', 
                        top: 'auto',
                        transform: `translate(-50%, 50%) ${styleLayer(0.3, -0.15, 120).transform}`
                    }} 
                />
                
                {/* Layer 4 - Kanan Bawah */}
                <div 
                    className="absolute rounded-full bg-orange-400 opacity-20 will-change-transform blur-3xl"
                    style={{ 
                        ...styleLayer(-0.25, -0.35, 100), // xMul=-0.25, yMul=-0.35
                        bottom: '25%', 
                        right: '10%', 
                        left: 'auto',
                        top: 'auto',
                        transform: `translate(50%, 50%) ${styleLayer(-0.25, -0.35, 100).transform}`
                    }} 
                />

            </div> {/* Penutup absolute inset-0 */}


            <div className="relative max-w-7xl mx-auto px-6 z-10">
                
                {/* HEADLINE SECTION (MENGGANTIKAN LEFT COLUMN) */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                        Launch Your Web3 Platform <span className="text-purple-500">In Days.</span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-4">
                        Stop wasting months developing the base layer. Get the complete, secure, and fully-customizable White Label solution deployed under your brand today.
                    </p>
                </div>


                {/* FULL FEATURE & SERVICES GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {allItems.map((item, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md
                            hover:scale-[1.02] hover:border-purple-500/40 transition-all duration-300 cursor-pointer"
                        >
                            <item.icon className="w-9 h-9 text-purple-500 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}