import React, { useState, useEffect } from 'react';
import { Flame, Menu as MenuIcon, X, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu Andalan', id: 'hero-highlight' },
    { label: 'Daftar Menu', id: 'daftar-menu' },
    { label: 'Minuman Segar', id: 'minuman-segar' },
    { label: 'Info Dine-in', id: 'info-dine-in' },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 py-3' 
          : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('hero-highlight')} 
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#b91c1c] flex items-center justify-center text-white shadow-sm group-hover:bg-[#991b1b] transition-all">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-lg sm:text-xl text-[#b91c1c] tracking-tight leading-none">
                  Kupat Tahu Magelang <span className="text-[#ea580c]">Lembah Tidar</span>
                </span>
              </div>
              <p className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase mt-0.5">
                Kab. Bogor • Cita Rasa Asli Magelang
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#2d2a26] hover:text-[#b91c1c] hover:bg-[#fff7ed] transition-all cursor-pointer"
                id={`nav-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Header Status */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right leading-tight pr-2">
              <span className="text-[10px] font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1 justify-end">
                <Clock className="w-3 h-3 text-[#ea580c]" />
                Jam Buka
              </span>
              <span className="text-[11px] text-gray-500 font-medium">{RESTAURANT_INFO.operatingHours}</span>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-[#2d2a26] hover:bg-stone-100 focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Buka Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-gray-200 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between px-4 py-2.5 mb-2 bg-[#fdfbf7] border border-gray-200 rounded-xl text-xs sm:text-sm">
              <span className="font-semibold text-gray-700 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#ea580c]" />
                {RESTAURANT_INFO.operatingHours}
              </span>
              <span className="text-xs text-gray-500 font-medium">Buka Setiap Hari</span>
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-[#2d2a26] hover:bg-[#fff7ed] hover:text-[#b91c1c] transition-colors flex items-center justify-between min-h-[44px]"
                id={`mobile-nav-${link.id}`}
              >
                <span>{link.label}</span>
                <span className="text-gray-400 text-sm">→</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};


