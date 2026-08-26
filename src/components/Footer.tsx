import React from 'react';
import { MapPin, Clock, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-white text-[#2d2a26] pt-14 pb-12 border-t border-gray-200 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-gray-200">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#b91c1c] flex items-center justify-center text-white shadow-xs">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-black text-lg text-[#2d2a26] tracking-tight">
                  Kupat Tahu Magelang
                </h3>
                <p className="text-xs text-[#ea580c] font-bold tracking-wider uppercase">
                  Lembah Tidar • Kab. Bogor
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-md">
              Menyajikan keaslian resep tradisional Kupat Tahu khas Magelang dengan ketupat daun janur alami, potongan bakwan renyah, tahu hangat, taburan seledri & bawang goreng, serta kuah coklat pekat rempah aromatik di Kalisuren, Tajurhalang, Kabupaten Bogor.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 font-medium">
                100% Halal
              </span>
              <span className="px-3 py-1 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] text-[#15803d] font-medium">
                Ketupat Daun Janur Alami
              </span>
              <span className="px-3 py-1 rounded-full bg-[#fff7ed] border border-[#fed7aa] text-[#ea580c] font-medium">
                Kalisuren • Tajurhalang
              </span>
            </div>
          </div>

          {/* Col 2: Jam Operasional & Lokasi (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#b91c1c] flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#b91c1c]" />
              <span>Alamat & Jam Operasional</span>
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-gray-700">
              <div className="bg-[#fdfbf7] p-4 rounded-2xl border border-gray-200 space-y-1.5">
                <p className="font-bold text-[#2d2a26] text-sm">Jalan Raya Kalisuren, Kab. Bogor</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Tepat di depan Perumahan Griya Rika Utama 5, Kalisuren, Kec. Tajurhalang, Kab. Bogor, Jawa Barat 16320.
                </p>
                <p className="text-[11px] text-gray-500">
                  📍 Area terdekat: Kalisuren, Tajurhalang, Parung, Kemang, Sasak Panjang, Citayam.
                </p>
              </div>

              <div className="flex items-start gap-2.5 px-1">
                <Clock className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#2d2a26]">{RESTAURANT_INFO.operatingHours}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {RESTAURANT_INFO.openDays}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Navigasi & Info Pemesanan (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#ea580c]">
              Menu & Navigasi
            </h4>

            <ul className="space-y-2 text-xs font-semibold text-gray-600">
              <li>
                <button
                  type="button"
                  onClick={() => onScrollToSection('hero-highlight')}
                  className="hover:text-[#b91c1c] transition-colors cursor-pointer text-left"
                >
                  • Menu Andalan Utama
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollToSection('daftar-menu')}
                  className="hover:text-[#b91c1c] transition-colors cursor-pointer text-left"
                >
                  • Daftar Makanan & Harga
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollToSection('minuman-segar')}
                  className="hover:text-[#b91c1c] transition-colors cursor-pointer text-left"
                >
                  • Minuman Segar & Dingin
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollToSection('info-dine-in')}
                  className="hover:text-[#b91c1c] transition-colors cursor-pointer text-left"
                >
                  • Info Meja Makan di Tempat
                </button>
              </li>
            </ul>

            <div className="p-3 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl text-[11px] text-[#166534] font-medium leading-snug">
              Untuk memesan via GoFood, GrabFood, ShopeeFood & rute Google Maps, silakan klik tombol pada <strong>floating bar di bawah layar</strong>.
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Notes */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {currentYear} <strong>Kupat Tahu Magelang Lembah Tidar</strong>. Semua Hak Cipta Dilindungi.
          </p>
          <p className="flex items-center gap-1.5 text-gray-500">
            <span>Kabupaten Bogor, Jawa Barat</span>
            <span>•</span>
            <span>Cita Rasa Khas Magelang</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

