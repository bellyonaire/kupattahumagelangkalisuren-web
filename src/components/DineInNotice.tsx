import React from 'react';
import { Store, Users, ShoppingBag, Truck, Info, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface DineInNoticeProps {
  onScrollToMenu: () => void;
}

export const DineInNotice: React.FC<DineInNoticeProps> = ({ onScrollToMenu }) => {
  return (
    <section id="info-dine-in" className="py-12 sm:py-14 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#2d2a26] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-sm border border-gray-800 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Text & Notice Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#fed7aa] border border-white/10 text-xs font-bold uppercase tracking-wider">
                <Store className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Informasi Area Makan di Tempat</span>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                Area Dine-In Terbatas & Intim, <br className="hidden sm:inline" />
                Fokus Utama Kami Adalah <span className="text-[#ea580c]">Pesan-Antar (Delivery)</span>
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Kami sangat senang melayani Anda! Perlu kami sampaikan dengan ramah bahwa tempat dine-in kami bernuansa sangat intim dan terbatas,{' '}
                <span className="text-white font-bold underline decoration-[#ea580c] underline-offset-4">
                  hanya tersedia 2 meja (maksimal 4 orang per meja)
                </span>. Sangat pas untuk makan cepat atau dibungkus bawa pulang (take-away).
              </p>

              {/* Highlights cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#ea580c]/20 text-[#ea580c] flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-white">Makan Cepat & Take-Away</h4>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                      Cocok untuk mampir santap praktis atau pesan dibungkus bawa pulang.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#b91c1c]/20 text-[#f87171] flex items-center justify-center shrink-0 mt-0.5">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-white">Pesan Mudah dari Rumah</h4>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                      Gunakan tombol GoFood, GrabFood, atau ShopeeFood di bilah bawah layar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action card */}
            <div className="lg:col-span-4 bg-white/5 rounded-3xl p-6 sm:p-7 border border-white/10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#ea580c] flex items-center justify-center text-white mx-auto shadow-xs">
                <Truck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg sm:text-xl text-white">
                  Ingin Santap Lebih Nyaman?
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 mt-1.5 leading-relaxed">
                  Pesan langsung ke rumah atau cek rute lokasi menggunakan tombol pada <strong>bilah floating bawah</strong>.
                </p>
              </div>

              <button
                type="button"
                onClick={onScrollToMenu}
                className="w-full py-3.5 px-5 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm uppercase tracking-wider shadow-xs transition-all cursor-pointer active:scale-95 min-h-[48px] flex items-center justify-center"
                id="btn-scroll-to-menu-from-dinein"
              >
                Cek Pilihan Menu ↑
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
