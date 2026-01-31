import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GameProvider } from "../components/GameContext";
import Footer from "./Footer"; 
import Header from "./Header";
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Falta Envido",
  description: "Anotador de Truco",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`
        ${geistSans.variable} ${geistMono.variable} antialiased
        bg-[#3a2416] text-[#f5e6d3]
        h-[100dvh] w-screen       
        overflow-hidden          
        flex flex-col            
      `}>
        <GameProvider>
          <div className="flex-none z-50">
            <Header />
          </div>

          <main className="flex-1 relative w-full overflow-hidden flex flex-col min-h-0">
            {children}
          </main>

          <div className="flex-none z-50">
            <Footer />
          </div>
        </GameProvider>
      </body>
    </html>
  );
}