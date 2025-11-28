"use client";

import Image from "next/image";

const techs = [
    { name: "Next.js", src: "/nextjs.png" },
    { name: "React", src: "/react.png" },
    { name: "Node.js", "src": "/nodejs.png" },
    { name: "WalletConnect", src: "/walletconnect.png" },
    { name: "Coinbase", src: "/coinbase.png" },
    { name: "Solidity", src: "/solidity.png" },
    { name: "MetaMask", src: "/metamask.png" },
    { name: "Tailwind CSS", src: "/tailwind.png" },
];

export default function Tech() {
    return (
        <section
            id="tech"
            className="py-0 bg-dark-dynamic bg-400 animate-bg-pan text-white" 
        >
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="text-center pt-10 pb-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">
                        Powered by Modern & Secure Tech Stack
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto"></p>
                </div>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden">
                    
                    {/* Menggunakan width: max-content agar lebar menyesuaikan konten yang diduplikasi */}
                    <div className="flex gap-20 whitespace-nowrap animate-marquee-right w-max">
                        
                        {/* Set 1: Elemen Asli */}
                        {techs.map((tech, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center text-center px-8"
                            >
                                <Image
                                    src={tech.src}
                                    alt={tech.name}
                                    width={48}
                                    height={48}
                                    // Menambah flex-shrink-0 agar item tidak menyusut saat di marquee
                                    className="mb-2 object-contain flex-shrink-0" 
                                />
                                <p className="font-semibold text-sm text-white">{tech.name}</p>
                            </div>
                        ))}
                        
                        {/* Set 2: Duplicate untuk loop seamless */}
                        {techs.map((tech, i) => (
                            <div
                                key={i + techs.length}
                                className="flex flex-col items-center justify-center text-center px-8"
                            >
                                <Image
                                    src={tech.src}
                                    alt={tech.name}
                                    width={48}
                                    height={48}
                                    className="mb-2 object-contain flex-shrink-0" 
                                />
                                <p className="font-semibold text-sm text-white">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}