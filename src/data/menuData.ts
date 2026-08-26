import { APP_IMAGES } from '../assets/images';

export interface MenuItem {
  id: string;
  name: string;
  category: 'makanan' | 'satuan' | 'minuman';
  price: number;
  description?: string;
  badge?: string;
  spicyLevel?: boolean;
  popular?: boolean;
  image?: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  location: string;
  city: string;
  addressDetails: string;
  googleMapsUrl: string;
  operatingHours: string;
  openDays: string;
  phoneWhatsapp: string;
  dineInInfo: {
    tablesCount: number;
    capacityPerTable: number;
    message: string;
  };
  deliveryPlatforms: {
    name: string;
    label: string;
    color: string;
    hoverColor: string;
    bgBadge: string;
    url: string;
    icon: string;
  }[];
}

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "Kupat Tahu Magelang Lembah Tidar",
  tagline: "Cita Rasa Otentik Manis, Gurih, Asam & Pedas Menggugah Selera",
  location: "Kalisuren, Tajurhalang, Kabupaten Bogor",
  city: "Kabupaten Bogor",
  addressDetails: "Jalan Raya Kalisuren (Tepat di Depan Perumahan Griya Rika Utama 5), Kalisuren, Kec. Tajurhalang, Kab. Bogor, Jawa Barat 16320",
  googleMapsUrl: "https://maps.google.com/?q=Kupat+Tahu+Magelang+Lembah+Tidar+Jalan+Raya+Kalisuren+Tajurhalang+Kabupaten+Bogor",
  operatingHours: "09.00 - 18.00 WIB",
  openDays: "Buka Setiap Hari (Senin - Minggu)",
  phoneWhatsapp: "6281234567890", // Standard dynamic whatsapp format
  dineInInfo: {
    tablesCount: 2,
    capacityPerTable: 4,
    message: "Area dine-in kami sangat intim dan terbatas (hanya tersedia 2 meja, maks. 4 orang per meja). Berlokasi di Jalan Raya Kalisuren (depan Perum Griya Rika Utama 5), sangat cocok untuk santap cepat atau take-away. Untuk santap santai di rumah, tersedia pengantaran via GoFood, GrabFood, dan ShopeeFood ke seluruh area Kalisuren, Tajurhalang, Parung, Kemang, dan sekitarnya."
  },
  deliveryPlatforms: [
    {
      name: "GoFood",
      label: "Pesan via GoFood",
      color: "bg-[#EE2737]",
      hoverColor: "hover:bg-[#d61e2d]",
      bgBadge: "bg-red-100 text-red-700",
      url: "https://gofood.link/a/ScMqHom",
      icon: "gofood"
    },
    {
      name: "GrabFood",
      label: "Pesan via GrabFood",
      color: "bg-[#00B14F]",
      hoverColor: "hover:bg-[#009b45]",
      bgBadge: "bg-emerald-100 text-emerald-700",
      url: "https://r.grab.com/g/6-20260825_114339_a4291ddf4bdb4dcba8681ec5ac8d0a9c_MEXMPS-6-C76CJCKBAPWGPA",
      icon: "grabfood"
    },
    {
      name: "ShopeeFood",
      label: "Pesan via ShopeeFood",
      color: "bg-[#EE4D2D]",
      hoverColor: "hover:bg-[#d43d1f]",
      bgBadge: "bg-orange-100 text-orange-700",
      url: "https://spf.shopee.co.id/2VnVvlTf0y",
      icon: "shopeefood"
    }
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  // 1. Makanan
  {
    id: "kt-biasa",
    name: "Kupat Tahu Magelang Biasa",
    category: "makanan",
    price: 13000,
    description: "Menggunakan ketupat asli daun janur kelapa (lebih sehat & tanpa plastik), tahu goreng hangat, potongan bakwan krispy, kol, tauge, kerupuk, taburan seledri, bawang goreng, serta kuah coklat pekat rempah khas Magelang.",
    badge: "Menu Andalan #1",
    popular: true,
    spicyLevel: true,
    image: APP_IMAGES.kupatTahu
  },
  {
    id: "kt-spesial",
    name: "Kupat Tahu Magelang Spesial",
    category: "makanan",
    price: 18000,
    description: "Kupat Tahu Magelang Biasa (ketupat janur asli alami, tahu goreng, potongan bakwan renyah, sayuran segar, seledri & kuah rempah pekat) ditambah topping telur dadar keemasan yang gurih mantap.",
    badge: "Favorit Spesial (+ Telur Dadar)",
    popular: true,
    spicyLevel: true,
    image: APP_IMAGES.kupatTahuSpesial
  },
  {
    id: "nasi-telur-krispy",
    name: "Nasi + Telur Dadar Krispy",
    category: "makanan",
    price: 10000,
    description: "Menu paling terjangkau yang renyah dan menggoda selera warga sekitar! Telur dadar bertekstur krispy gurih, disajikan dengan nasi hangat, lalapan timun segar & sambal pedas nampol.",
    badge: "Paling Terjangkau (Rp10rb)",
    popular: true,
    spicyLevel: true,
    image: APP_IMAGES.telurKrispy
  },
  {
    id: "nasi-ayam-penyet-ijo",
    name: "Nasi + Ayam Penyet Cabe Ijo",
    category: "makanan",
    price: 23000,
    description: "Ayam goreng bumbu ungkep empuk yang dipenyet dengan sambal cabe ijo segar yang wangi, pedas gurih, disajikan lengkap dengan nasi hangat.",
    spicyLevel: true,
    image: APP_IMAGES.ayamPenyetIjo
  },
  {
    id: "nasi-ayam-bakar",
    name: "Nasi + Ayam Bakar",
    category: "makanan",
    price: 25000,
    description: "Ayam bakar kecap rempah khas dengan bumbu meresap hingga ke tulang, disajikan dengan nasi hangat, lalapan, dan sambal terasi nikmat.",
    spicyLevel: true,
    image: APP_IMAGES.ayamBakar
  },
  {
    id: "nasi-nila-goreng",
    name: "Nasi + Ikan Nila Goreng",
    category: "makanan",
    price: 25000,
    description: "Ikan nila segar goreng garing di luar dan lembut di dalam, disajikan lengkap dengan nasi putih hangat, sambal ulek & lalap.",
    spicyLevel: true,
    image: APP_IMAGES.nilaGoreng
  },
  {
    id: "nasi-nila-bakar",
    name: "Nasi + Ikan Nila Bakar",
    category: "makanan",
    price: 27000,
    description: "Ikan nila bakar bumbu manis gurih dengan aroma panggangan khas, disajikan dengan nasi putih pulen, sambal istimewa & lalapan segar.",
    spicyLevel: true,
    image: APP_IMAGES.nilaBakar
  },

  // 2. Menu Satuan (Lauk / Ala Carte)
  {
    id: "satuan-ayam-penyet-ijo",
    name: "Ayam Penyet Cabe Ijo",
    category: "satuan",
    price: 18000,
    description: "Potongan ayam goreng renyah dipadukan sambal cabe ijo melimpah (tanpa nasi).",
    image: APP_IMAGES.satuanAyamPenyetIjo
  },
  {
    id: "satuan-ayam-bakar",
    name: "Ayam Bakar",
    category: "satuan",
    price: 20000,
    description: "Ayam bakar bumbu kecap manis rempah spesial (tanpa nasi).",
    image: APP_IMAGES.satuanAyamBakar
  },
  {
    id: "satuan-nila-goreng",
    name: "Ikan Nila Goreng",
    category: "satuan",
    price: 20000,
    description: "Ikan nila goreng bumbu kuning garing gurih (tanpa nasi).",
    image: APP_IMAGES.satuanNilaGoreng
  },
  {
    id: "satuan-nila-bakar",
    name: "Ikan Nila Bakar",
    category: "satuan",
    price: 22000,
    description: "Ikan nila bakar bumbu rempah bakar legit (tanpa nasi).",
    image: APP_IMAGES.satuanNilaBakar
  },
  {
    id: "satuan-nasi-putih",
    name: "Nasi Putih",
    category: "satuan",
    price: 5000,
    description: "Satu porsi nasi putih pulen hangat dengan taburan bawang goreng.",
    image: APP_IMAGES.satuanNasiPutih
  },
  {
    id: "satuan-telur-krispy",
    name: "Telur Dadar Krispy",
    category: "satuan",
    price: 7000,
    description: "Telur dadar goreng krispy bersarang renyah gurih (ala carte).",
    image: APP_IMAGES.satuanTelurKrispy
  },

  // 3. Minuman (Pereda Pedas & Menyegarkan)
  {
    id: "minum-es-teh-manis",
    name: "Es Teh Manis",
    category: "minuman",
    price: 5000,
    description: "Teh melati wangi dingin dengan es batu segar, pereda pedas paling favorit dan melegakan tenggorokan.",
    badge: "Favorit Segar",
    popular: true,
    image: APP_IMAGES.minumEsTehManis
  },
  {
    id: "minum-es-teh-tawar",
    name: "Es Teh Tawar",
    category: "minuman",
    price: 2000,
    description: "Teh tawar dingin segar tanpa gula, melepaskan dahaga seketika.",
    image: APP_IMAGES.minumEsTehTawar
  },
  {
    id: "minum-es-jeruk",
    name: "Es Jeruk",
    category: "minuman",
    price: 6000,
    description: "Perasan jeruk asli segar dengan bulir manis-asam alami disajikan dingin dengan es batu kristal melimpah.",
    badge: "Paling Segar",
    popular: true,
    image: APP_IMAGES.minumEsJeruk
  },
  {
    id: "minum-teh-manis-hangat",
    name: "Teh Manis Hangat",
    category: "minuman",
    price: 3000,
    description: "Seduhan teh hangat aromatik manis pas untuk menemani santap santai.",
    image: APP_IMAGES.minumTehHangat
  },
  {
    id: "minum-jeruk-hangat",
    name: "Jeruk Peras Hangat",
    category: "minuman",
    price: 5000,
    description: "Jeruk peras murni hangat kaya vitamin C, menenangkan dan melegakan tenggorokan.",
    image: APP_IMAGES.minumJerukHangat
  }
];
