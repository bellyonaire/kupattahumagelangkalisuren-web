import React, { useState } from 'react';
import { Flame, MessageSquare, Check, Sparkles, Lightbulb } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const [copiedNote, setCopiedNote] = useState(false);

  const sampleOrderNote = "Kupat Tahu Magelang (Pedas Sedang/Cabai 3), Kerupuk dipisah. Tolong jangan pakai seledri.";

  const handleCopyNote = () => {
    navigator.clipboard.writeText(sampleOrderNote);
    setCopiedNote(true);
    setTimeout(() => setCopiedNote(false), 3000);
  };

  return (
    <section id="pesan-online" className="py-12 sm:py-16 bg-gradient-to-b from-white to-[#fff7ed]/50 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tips & Catatan Pesanan Box */}
        <div className="bg-white rounded-3xl border border-[#fed7aa] p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
            
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fff7ed] text-[#ea580c] border border-[#fed7aa] text-xs font-bold uppercase tracking-wider">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Tips Takaran & Catatan Pesanan</span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#2d2a26] tracking-tight">
                Mau Tingkat Pedas Sesuai Selera?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Saat memesan melalui tombol <strong>GoFood, GrabFood, atau ShopeeFood di bilah floating bawah</strong>, Anda dapat menuliskan jumlah cabai atau permintaan khusus pada kolom catatan agar tim kami mengulek bumbu segar dengan rasa yang pas.
              </p>
            </div>

            {/* Copyable sample note */}
            <div className="bg-[#fdfbf7] p-5 rounded-2xl border border-[#fed7aa] lg:w-96 flex flex-col justify-between gap-3 shadow-2xs">
              <div>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                  Contoh Format Catatan:
                </span>
                <p className="text-xs font-medium text-gray-800 italic mt-1.5 bg-white p-3 rounded-xl border border-gray-200">
                  &ldquo;{sampleOrderNote}&rdquo;
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopyNote}
                className="w-full py-2.5 px-3 rounded-xl bg-[#fff7ed] hover:bg-[#ffedd5] text-[#ea580c] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#fed7aa] active:scale-95"
                id="copy-order-note-btn"
              >
                {copiedNote ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-700 font-bold">Teks Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Salin Contoh Catatan</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
