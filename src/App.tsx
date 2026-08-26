import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { DineInNotice } from './components/DineInNotice';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingFooter } from './components/FloatingFooter';

export default function App() {
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] text-[#2d2a26] pb-20 sm:pb-24">
      {/* Fixed Navigation */}
      <Navbar onScrollToSection={handleScrollToSection} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Menu Andalan: Kupat Tahu Magelang & Nasi Telur Krispy) */}
        <HeroSection onScrollToSection={handleScrollToSection} />

        {/* 2. Bagian Menu Lengkap (Makanan, Menu Satuan, Minuman Segar) */}
        <MenuSection />

        {/* 3. Informasi Area Dine-in Intim (2 Meja) */}
        <DineInNotice
          onScrollToMenu={() => handleScrollToSection('daftar-menu')}
        />

        {/* 4. Layanan Pesan Antar Online (GoFood, GrabFood, ShopeeFood) */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* Persistent Floating Footer Bar (Maps, GoFood, GrabFood, ShopeeFood) */}
      <FloatingFooter />
    </div>
  );
}

