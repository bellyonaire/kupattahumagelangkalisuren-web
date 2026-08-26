import React, { useState } from 'react';
import { Utensils, Flame, GlassWater, Droplets, Info, ShoppingBag } from 'lucide-react';
import { MENU_ITEMS, MenuItem, RESTAURANT_INFO } from '../data/menuData';
import { APP_IMAGES } from '../assets/images';

export const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'semua' | 'makanan' | 'satuan' | 'minuman'>('semua');

  const formatRupiah = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const makananList = MENU_ITEMS.filter((item) => item.category === 'makanan');
  const satuanList = MENU_ITEMS.filter((item) => item.category === 'satuan');
  const minumanList = MENU_ITEMS.filter((item) => item.category === 'minuman');

  return (
    <section id="daftar-menu" className="py-16 sm:py-20 bg-white/60 relative border-y border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-gray-300" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Informasi Menu & Harga Resmi
            </span>
            <span className="w-8 h-[1px] bg-gray-300" />
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#2d2a26] tracking-tight">
            Pilihan Menu Lezat, Gurih & Terjangkau
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Disajikan hangat dengan bahan segar pilihan setiap hari di Kabupaten Bogor.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-7">
            <button
              onClick={() => setActiveTab('semua')}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[44px] flex items-center justify-center ${
                activeTab === 'semua'
                  ? 'bg-[#2d2a26] text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-[#fff7ed] border border-gray-200'
              }`}
              id="filter-tab-semua"
            >
              Semua Menu ({MENU_ITEMS.length})
            </button>
            <button
              onClick={() => setActiveTab('makanan')}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 min-h-[44px] ${
                activeTab === 'makanan'
                  ? 'bg-[#b91c1c] text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-[#fef2f2] hover:text-[#b91c1c] border border-gray-200'
              }`}
              id="filter-tab-makanan"
            >
              <Utensils className="w-4 h-4" />
              Makanan Utama ({makananList.length})
            </button>
            <button
              onClick={() => setActiveTab('satuan')}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 min-h-[44px] ${
                activeTab === 'satuan'
                  ? 'bg-[#ea580c] text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-[#fff7ed] hover:text-[#ea580c] border border-gray-200'
              }`}
              id="filter-tab-satuan"
            >
              <Flame className="w-4 h-4" />
              Menu Satuan ({satuanList.length})
            </button>
            <button
              onClick={() => setActiveTab('minuman')}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 min-h-[44px] ${
                activeTab === 'minuman'
                  ? 'bg-[#0369a1] text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0369a1] border border-gray-200'
              }`}
              id="filter-tab-minuman"
            >
              <Droplets className="w-4 h-4" />
              Pelepas Dahaga ({minumanList.length})
            </button>
          </div>
        </div>


        {/* 1. Category: MAKANAN (Paket Nasi & Kupat Tahu) */}
        {(activeTab === 'semua' || activeTab === 'makanan') && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
              <div className="w-8 h-8 rounded-full bg-[#fef2f2] text-[#b91c1c] flex items-center justify-center font-bold">
                <Utensils className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#b91c1c] uppercase tracking-wide">
                  Makanan Utama
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Sajian lengkap porsi nikmat siap santap
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {makananList.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-3xl p-5 sm:p-6 border transition-all hover:shadow-sm flex flex-col justify-between relative group ${
                      item.popular ? 'border-[#fed7aa] ring-1 ring-[#fed7aa]/50' : 'border-gray-200'
                    }`}
                  >
                    <div>
                      {/* Item Image if available */}
                      {item.image && (
                        <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[16/10] bg-stone-100 border border-gray-200 shadow-2xs">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                        </div>
                      )}

                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        {item.badge ? (
                          <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#b91c1c] text-white">
                            {item.badge}
                          </span>
                        ) : (
                          <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full uppercase">
                            Makanan
                          </span>
                        )}
                      </div>

                      {/* Item Name & Price */}
                      <div className="flex items-start justify-between gap-3 mt-1">
                        <h4 className="font-heading font-bold text-lg sm:text-xl text-[#2d2a26] leading-snug group-hover:text-[#b91c1c] transition-colors">
                          {item.name}
                        </h4>
                        <span className="font-heading font-black text-xl sm:text-2xl text-[#b91c1c] whitespace-nowrap">
                          {formatRupiah(item.price)}
                        </span>
                      </div>

                      {/* Description */}
                      {item.description && (
                        <p className="text-sm text-gray-600 mt-2.5 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Informational category footer */}
                    <div className="pt-3.5 mt-4 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm text-gray-600">
                      <span className="font-medium text-gray-500">Porsi Pas & Nikmat</span>
                      {item.id === 'kt-biasa' || item.id === 'kt-spesial' ? (
                        <span className="font-bold text-[#b91c1c]">Resep Asli Magelang</span>
                      ) : item.id === 'nasi-telur-krispy' ? (
                        <span className="font-bold text-[#ea580c]">Gurih & Krispy</span>
                      ) : (
                        <span className="font-bold text-[#ea580c]">Lengkap Nasi & Sambal</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}


        {/* 2. Category: MENU SATUAN (Lauk Ala Carte) */}
        {(activeTab === 'semua' || activeTab === 'satuan') && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
              <div className="w-8 h-8 rounded-full bg-[#fff7ed] text-[#ea580c] flex items-center justify-center font-bold">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#ea580c] uppercase tracking-wide">
                  Menu Satuan
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Lauk satuan tanpa nasi, cocok untuk tambahan di rumah
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {satuanList.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-200 transition-all hover:shadow-md flex flex-col justify-between group"
                  >
                    <div>
                      {/* Item Image if available */}
                      {item.image && (
                        <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[16/10] bg-stone-100 border border-gray-200 shadow-2xs">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                        </div>
                      )}

                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wide block mb-1">
                            Lauk Satuan
                          </span>
                          <h4 className="font-heading font-bold text-base sm:text-lg text-[#2d2a26] group-hover:text-[#ea580c] transition-colors">
                            {item.name}
                          </h4>
                        </div>
                        <span className="font-heading font-black text-lg sm:text-xl text-[#ea580c] whitespace-nowrap">
                          {formatRupiah(item.price)}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-3.5 mt-3.5 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm text-gray-600">
                      <span>Porsi Satuan Ala Carte</span>
                      <span className="font-bold text-[#ea580c]">Gurih & Nikmat</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}


        {/* 3. Category: MINUMAN (Pelepas Dahaga / Pereda Pedas) */}
        {(activeTab === 'semua' || activeTab === 'minuman') && (
          <div id="minuman-segar" className="scroll-mt-24">
            
            {/* Drinks Hero Banner with Natural Tones Pelepas Dahaga style */}
            <div className="bg-[#f0f9ff] text-[#0c4a6e] rounded-3xl p-6 sm:p-8 mb-8 border border-[#bae6fd] shadow-xs relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                <div className="md:col-span-8">
                  <h4 className="text-[#0369a1] text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-[#0369a1]" />
                    Pelepas Dahaga
                  </h4>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#0c4a6e] tracking-tight">
                    Minuman Segar & Dingin
                  </h3>
                  <p className="text-[#0c4a6e]/80 text-sm sm:text-base mt-2 leading-relaxed max-w-xl italic">
                    Segar & nikmat meredakan rasa pedas setelah menikmati hidangan kaya rempah dan ulekan cabai.
                  </p>
                </div>

                <div className="md:col-span-4 flex flex-col items-center md:items-end">
                  <div className="relative rounded-2xl overflow-hidden border border-[#bae6fd] shadow-sm w-full max-w-[240px] aspect-[4/3] bg-white">
                    <img
                      src={APP_IMAGES.minumanSegar}
                      alt="Minuman Segar Es Jeruk & Es Teh Manis Lembah Tidar"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  <span className="mt-2 text-xs font-bold text-[#0369a1] bg-[#e0f2fe] px-3 py-1 rounded-full uppercase tracking-wider text-center">
                    ❄️ Segar Meredakan Pedas
                  </span>
                </div>

              </div>
            </div>

            {/* Drink items list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {minumanList.map((item) => {
                const isIced = item.name.toLowerCase().startsWith('es');

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-200 hover:border-[#bae6fd] transition-all hover:shadow-md flex flex-col justify-between group"
                  >
                    <div>
                      {/* Item Image if available */}
                      {item.image && (
                        <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[16/10] bg-sky-50/50 border border-gray-200 shadow-2xs">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                        </div>
                      )}

                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${
                          isIced ? 'bg-[#f0f9ff] text-[#0369a1]' : 'bg-[#fff7ed] text-[#ea580c]'
                        }`}>
                          {isIced ? '❄️ Dingin / Es' : '☕ Hangat'}
                        </span>
                        {item.badge && (
                          <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-emerald-50 text-[#15803d]">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-heading font-bold text-base sm:text-lg text-[#2d2a26] group-hover:text-[#0369a1] transition-colors">
                          {item.name}
                        </h4>
                        <span className="font-heading font-black text-lg sm:text-xl text-[#0369a1] whitespace-nowrap">
                          {formatRupiah(item.price)}
                        </span>
                      </div>

                      {item.description && (
                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-3.5 mt-3.5 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm text-gray-600">
                      <span>Pelepas Dahaga</span>
                      <span className="font-bold text-[#0369a1]">
                        {isIced ? 'Dingin & Segar' : 'Hangat & Nikmat'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* Informational Callout Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#fdfbf7] border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5 text-left w-full sm:w-auto">
            <div className="w-12 h-12 rounded-2xl bg-[#fff7ed] text-[#ea580c] flex items-center justify-center shrink-0 font-bold">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <p className="font-heading font-bold text-base sm:text-lg text-[#2d2a26]">
                Ingin Menikmati Hidangan Kami?
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                Silakan gunakan tombol <strong>Maps</strong>, <strong>GoFood</strong>, <strong>GrabFood</strong>, atau <strong>ShopeeFood</strong> pada bilah floating bawah.
              </p>
            </div>
          </div>
          <div className="text-xs font-bold text-[#b91c1c] bg-[#fef2f2] px-4 py-2 rounded-full border border-[#fecaca]">
            Pemesanan & Rute Terpusat di Floating Bar Bawah ↓
          </div>
        </div>

      </div>
    </section>
  );
};
