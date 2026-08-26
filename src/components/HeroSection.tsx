import React from 'react';
import { ArrowRight, ShieldCheck, MapPin, UtensilsCrossed, Info, Flame, ChevronDown } from 'lucide-react';
import { APP_IMAGES } from '../assets/images';
import { RESTAURANT_INFO } from '../data/menuData';

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {

  return (
    <section id="hero-highlight" className="pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden relative">
      {/* Subtle natural background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef2f2] border border-[#fecaca] text-[#b91c1c] text-xs font-bold shadow-2xs mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#b91c1c]" />
            <span>Jl. Raya Kalisuren (Depan Griya Rika Utama 5), Tajurhalang, Kab. Bogor</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#2d2a26] tracking-tight leading-[1.15] mb-4">
            Kupat Tahu Magelang <br className="hidden sm:inline" />
            <span className="text-[#b91c1c]">
              Lembah Tidar di Kalisuren Kab. Bogor
            </span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-5">
            Menyajikan cita rasa otentik Kupat Tahu asli Magelang di Jalan Raya Kalisuren, Tajurhalang, Kab. Bogor. Dibuat dari ketupat asli daun janur kelapa alami, tahu goreng hangat, potongan bakwan krispy, dan siraman kuah coklat pekat rempah gurih khas Magelang.
          </p>

          {/* Informational banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] text-[#166534] text-xs font-medium max-w-xl text-left sm:text-center">
            <Info className="w-4 h-4 text-[#15803d] shrink-0" />
            <span>Website informasi resmi menu & warung. Untuk pesanan online (GoFood, GrabFood, ShopeeFood) & navigasi Google Maps, gunakan tombol pada bilah bawah (floating bar).</span>
          </div>

          {/* Quick value props pill row */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 text-xs font-semibold text-[#2d2a26]">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#15803d]" />
              <span>100% Halal & Bumbu Segar Setiap Hari</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-2xs">
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#ea580c]" />
              <span>Ketupat Daun Janur Alami (Tanpa Plastik)</span>
            </div>
          </div>
        </div>

        {/* Primary & Secondary Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* 1. Primary Highlight Card: Kupat Tahu Magelang Biasa (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#b91c1c]" />

            {/* Top Badge & Price */}
            <div className="flex items-center justify-between gap-3 mb-5 pl-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b91c1c] text-white font-bold text-[11px] uppercase tracking-wider">
                <Flame className="w-3 h-3" />
                Menu Andalan
              </span>
              <div className="text-right">
                <span className="text-[11px] text-gray-500 font-medium block uppercase tracking-wider">Harga Menu</span>
                <span className="font-heading font-black text-2xl sm:text-3xl text-[#b91c1c]">
                  Rp13.000
                </span>
              </div>
            </div>

            {/* Food Image Banner - Clean & Unobstructed */}
            <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[4/3] sm:aspect-[16/10] bg-stone-100 border border-gray-200 shadow-2xs">
              <img
                src={APP_IMAGES.kupatTahu}
                alt="Kupat Tahu Magelang Biasa Lembah Tidar Kab. Bogor"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>

            {/* Content & Details Placed Cleanly Underneath the Image */}
            <div className="space-y-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="bg-[#b91c1c] text-white text-xs font-bold px-2.5 py-0.5 rounded-full uppercase">
                    Racikan Asli Magelang
                  </span>
                  <span className="bg-emerald-50 text-[#15803d] border border-emerald-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Taburan Seledri & Bawang Goreng
                  </span>
                </div>
                <h2 className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-[#2d2a26]">
                  Kupat Tahu Magelang Biasa
                </h2>
              </div>

              <div className="bg-[#fff7ed] border border-[#fed7aa] p-4 rounded-2xl">
                <p className="text-[#2d2a26] text-sm leading-relaxed font-medium">
                  &ldquo;Kuah coklat pekat khas Magelang bercita rasa manis, gurih, dan segar dari rebusan rempah aromatik. Disajikan dengan ketupat, tahu goreng hangat, potongan bakwan renyah, sayuran segar, serta taburan daun seledri dan bawang goreng melimpah.&rdquo;
                </p>
              </div>

              {/* Composition detail chips */}
              <div className="flex flex-wrap gap-1.5 text-xs font-semibold text-gray-700">
                <span className="px-2.5 py-1 rounded-full bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0]">
                  🍃 Ketupat Daun Janur Alami (Tanpa Plastik)
                </span>
                <span className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200">
                  🥣 Tahu Goreng Hangat
                </span>
                <span className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200">
                  🥬 Kol & Tauge Segar Renyah
                </span>
                <span className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200">
                  ✨ Potongan Bakwan & Kerupuk Gurih
                </span>
                <span className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200">
                  🌿 Daun Seledri & Bawang Goreng
                </span>
              </div>

              {/* Navigation Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => onScrollToSection('daftar-menu')}
                  className="py-3 px-4 rounded-2xl bg-[#b91c1c] hover:bg-[#991b1b] text-white font-bold text-sm shadow-xs transition-all active:scale-95 min-h-[46px] flex items-center justify-center gap-2 cursor-pointer"
                  id="hero-btn-see-menu"
                >
                  <span>Lihat Semua Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onScrollToSection('info-dine-in')}
                  className="py-3 px-4 rounded-2xl bg-[#fff7ed] hover:bg-[#ffedd5] border border-[#fed7aa] text-[#ea580c] font-bold text-sm transition-all active:scale-95 min-h-[46px] flex items-center justify-center gap-2 cursor-pointer"
                  id="hero-btn-see-dine-in"
                >
                  <span>Info Santap di Tempat</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 text-center font-medium pt-1">
                *Tersedia juga pilihan <strong>Kupat Tahu Magelang Spesial (Rp18.000)</strong> dengan tambahan telur & tahu ekstra.
              </p>
            </div>
          </div>


          {/* 2. Secondary Highlight Card: Nasi + Telur Dadar Krispy (5 cols on lg) */}
          <div className="lg:col-span-5 bg-[#fff7ed] rounded-3xl p-6 sm:p-7 border border-[#fed7aa] shadow-sm flex flex-col justify-between relative group">
            <div>
              {/* Top Badge & Price */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ea580c] text-white font-bold text-xs uppercase tracking-wider shadow-2xs">
                  Paling Hemat
                </span>
                <div className="text-right">
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold block">Hanya</span>
                  <span className="font-heading font-black text-2xl sm:text-3xl text-[#ea580c]">
                    Rp10.000
                  </span>
                </div>
              </div>

              {/* Food Image - Clean & Unobstructed */}
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3] bg-white border border-[#fed7aa] shadow-2xs">
                <img
                  src={APP_IMAGES.telurKrispy}
                  alt="Nasi Telur Dadar Krispy Lembah Tidar Kab. Bogor"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* Title & Details Placed Cleanly Underneath the Image */}
              <div className="space-y-3">
                <div>
                  <span className="inline-block text-xs font-bold text-[#ea580c] bg-orange-100/80 border border-orange-200 px-2.5 py-0.5 rounded-full uppercase mb-1">
                    Renyah • Bersarang • Gurih
                  </span>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-[#2d2a26]">
                    Nasi + Telur Dadar Krispy
                  </h3>
                </div>

                <div className="bg-white/90 border border-[#fed7aa] p-3.5 rounded-2xl">
                  <p className="text-[#2d2a26] text-sm leading-relaxed font-medium">
                    Hanya <span className="font-bold text-[#ea580c]">Rp10.000</span>. Menu renyah favorit warga sekitar yang mendampingi kelezatan menu utama!
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-semibold text-[#2d2a26]">
                  <div className="bg-white p-2.5 rounded-xl border border-[#fed7aa] flex items-center gap-2">
                    <span>🍳</span>
                    <span>Telur Krispy Bersarang</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#fed7aa] flex items-center gap-2">
                    <span>🍚</span>
                    <span>Nasi Putih Hangat</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#fed7aa] flex items-center gap-2">
                    <span>🌶️</span>
                    <span>Sambal Ulek Pedas</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#fed7aa] flex items-center gap-2">
                    <span>🥒</span>
                    <span>Irisan Timun Segar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions for Telur Krispy */}
            <div className="pt-5 mt-4 border-t border-[#fed7aa]/60 space-y-2">
              <button
                type="button"
                onClick={() => onScrollToSection('daftar-menu')}
                className="w-full py-3 px-4 rounded-2xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95 min-h-[44px] flex items-center justify-center gap-2 cursor-pointer"
                id="hero-telur-btn"
              >
                <span>Lihat Daftar Menu Lengkap</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-gray-500 text-center font-medium">
                Pesan antar & petunjuk rute tersedia pada bilah floating bawah.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

