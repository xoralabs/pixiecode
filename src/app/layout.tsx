import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Pixicode — Web3 Developer",
  description: "ICO Web, Token Sale, Staking, Smart Contract Developer",
  // --- Penambahan Favicon di metadata ---
  icons: {
    icon: "/pixielogo.ico", // Asumsikan file berada di direktori public/
  },
  // -------------------------------------
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark-dynamic bg-400 animate-gradient-move min-h-screen text-white">
        <Navbar />
        <main className="pt-32"> {/* spacing agar tidak tertutup navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}