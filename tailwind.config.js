/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // --- DEFINISI ANIMATION ---
      animation: {
        // Animasi yang sudah ada
        "gradient-move": "gradientMove 45s ease infinite",
        // Animasi MARQUEE yang baru ditambahkan
        'marquee-right': 'marquee-right 25s linear infinite', // Durasi 25s, loop tak terbatas
      },
      // --- DEFINISI KEYFRAMES ---
      keyframes: {
        // Keyframe yang sudah ada
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        // Keyframe MARQUEE yang baru ditambahkan
        'marquee-right': {
          // Menggerakkan konten dari kanan ke kiri sebesar 50% (untuk looping mulus setelah duplikasi)
          '0%': { transform: 'translateX(-50%)' }, 
          // Kembali ke posisi awal (0%)
          '100%': { transform: 'translateX(0%)' },   
        },
      },
      // --- DEFINISI BACKGROUND ---
      backgroundImage: {
        "dark-dynamic":
          "radial-gradient(circle at top right, #6b00ff, transparent 70%), " +
          "radial-gradient(circle at bottom left, #ff6a00, transparent 70%), " +
          "#000000",
      },
      backgroundSize: {
        "400": "400% 400%",
      },
    },
  },
  plugins: [],
};