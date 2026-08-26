import React from 'react';
import { MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { GoFoodIcon, GrabFoodIcon, ShopeeFoodIcon, DELIVERY_LINKS } from './BrandIcons';

export const FloatingFooter: React.FC = () => {
  return (
    <aside 
      aria-label="Aksi Cepat Pesan Online & Rute Google Maps" 
      className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-3 bg-white/95 backdrop-blur-md border-t border-gray-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-all"
      id="floating-footer-action-bar"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2 sm:gap-4 px-2 sm:px-4">
        
        {/* Left title info (visible on tablet/desktop, compact on small mobile) */}
        <div className="hidden md:flex flex-col text-left leading-tight shrink-0">
          <span className="text-xs font-black text-[#b91c1c] uppercase tracking-wider">Pesan Sekarang</span>
          <span className="text-[11px] text-gray-500 font-medium">Buka {RESTAURANT_INFO.operatingHours}</span>
        </div>

        {/* 4 Action Buttons Grid */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5 w-full md:w-auto md:flex md:items-center">
          {/* 1. Google Maps */}
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-4 rounded-xl sm:rounded-full bg-[#fff7ed] hover:bg-[#ffedd5] border border-[#fed7aa] text-[#ea580c] font-bold text-xs shadow-2xs transition-all active:scale-95 cursor-pointer min-h-[44px] sm:min-h-[42px]"
            id="float-footer-maps-btn"
            title="Buka Lokasi di Google Maps"
          >
            <MapPin className="w-4 h-4 text-[#b91c1c] shrink-0" />
            <span className="truncate text-[10px] sm:text-xs">Maps</span>
          </a>

          {/* 2. GoFood */}
          <a
            href="https://gofood.link/a/ScMqHom"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-4 rounded-xl sm:rounded-full bg-[#EE2737] hover:bg-[#d61e2d] text-white font-bold text-xs shadow-2xs transition-all active:scale-95 cursor-pointer min-h-[44px] sm:min-h-[42px]"
            id="float-footer-gofood-btn"
            title="Pesan di GoFood (https://gofood.link/a/ScMqHom)"
          >
            <GoFoodIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />
            <span className="truncate text-[10px] sm:text-xs">GoFood</span>
          </a>

          {/* 3. GrabFood */}
          <a
            href={DELIVERY_LINKS.grabfood}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-4 rounded-xl sm:rounded-full bg-[#00B14F] hover:bg-[#009643] text-white font-bold text-xs shadow-2xs transition-all active:scale-95 cursor-pointer min-h-[44px] sm:min-h-[42px]"
            id="float-footer-grabfood-btn"
            title="Pesan di GrabFood"
          >
            <GrabFoodIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />
            <span className="truncate text-[10px] sm:text-xs">GrabFood</span>
          </a>

          {/* 4. ShopeeFood */}
          <a
            href={DELIVERY_LINKS.shopeefood}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-4 rounded-xl sm:rounded-full bg-[#EE4D2D] hover:bg-[#d73a1a] text-white font-bold text-xs shadow-2xs transition-all active:scale-95 cursor-pointer min-h-[44px] sm:min-h-[42px]"
            id="float-footer-shopeefood-btn"
            title="Pesan di ShopeeFood"
          >
            <ShopeeFoodIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />
            <span className="truncate text-[10px] sm:text-xs">ShopeeFood</span>
          </a>
        </div>

      </div>
    </aside>
  );
};
