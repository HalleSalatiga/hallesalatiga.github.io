// Centralized product data for Halle Salatiga
// Employs premium Unsplash imagery and realistic Indonesian fashion boutique pricing and details.

const PRODUCTS = [
  {
    id: 1,
    name: "Classic Stretch Chino Pants",
    category: "celana",
    price: 189000,
    originalPrice: 279000,
    description: "Celana chino premium dengan bahan katun twill stretch yang sangat nyaman untuk aktivitas sehari-hari maupun acara semi-formal. Potongan slim-fit yang memberikan siluet modern tanpa membatasi pergerakan Anda.",
    details: [
      "Bahan Premium Cotton Twill Stretch (melar)",
      "Potongan Slim Fit yang presisi",
      "Resleting YKK berkualitas tinggi",
      "Saku samping yang dalam & saku belakang model paspol",
      "Jahitan rapi standar clothing export"
    ],
    colors: [
      { name: "Khaki", hex: "#C3B091" },
      { name: "Black", hex: "#1C1C1C" },
      { name: "Navy Blue", hex: "#232B38" },
      { name: "Olive", hex: "#4E5340" }
    ],
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 128,
    stock: 12,
    isNew: false,
    isFeatured: true
  },
  {
    id: 2,
    name: "Urban Cargo Trousers",
    category: "celana",
    price: 219000,
    originalPrice: 329000,
    description: "Celana cargo bersiluet loose-tapered untuk tampilan streetwear yang utilitarian dan trendi. Dilengkapi dengan multi-pocket fungsional yang siap mendukung gaya aktif perkotaan.",
    details: [
      "Bahan Katun Ripstop tebal & anti-sobek",
      "Potongan Loose Tapered Fit yang nyaman",
      "6 saku taktis multifungsi",
      "Tali serut pergelangan kaki yang dapat disesuaikan",
      "Warna tahan lama tidak luntur saat dicuci"
    ],
    colors: [
      { name: "Olive Green", hex: "#3B4232" },
      { name: "Charcoal Black", hex: "#2D2D2D" },
      { name: "Desert Sand", hex: "#D2B48C" }
    ],
    sizes: ["28", "30", "32", "34"],
    images: [
      "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.7,
    reviewsCount: 84,
    stock: 5,
    isNew: true,
    isFeatured: true
  },
  {
    id: 3,
    name: "Minimalist Knit Sneakers",
    category: "sepatu",
    price: 349000,
    originalPrice: 499000,
    description: "Sneakers kasual berbobot ultra-ringan dengan konstruksi engineered knit upper yang elastis dan bersirkulasi udara tinggi. Outsole phylon yang empuk membuat langkah Anda terasa melayang sepanjang hari.",
    details: [
      "Upper: Breathable Fly-Knit fabric",
      "Insole: Memory foam ekstra lembut",
      "Outsole: Phylon-Rubber antiselip",
      "Konstruksi slip-on dengan tali elastis",
      "Bobot super ringan hanya 240g"
    ],
    colors: [
      { name: "Triple Black", hex: "#181818" },
      { name: "All White", hex: "#F5F5F5" },
      { name: "Heather Grey", hex: "#9E9E9E" }
    ],
    sizes: ["39", "40", "41", "42", "43", "44"],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewsCount: 205,
    stock: 8,
    isNew: false,
    isFeatured: true
  },
  {
    id: 4,
    name: "Classic Suede Loafers",
    category: "sepatu",
    price: 389000,
    originalPrice: 549000,
    description: "Loafers berbahan kulit suede asli berkualitas premium dengan jahitan tangan di bagian depan. Sempurna dipadukan dengan celana chino atau celana ankle-length untuk gaya smart-casual yang berkelas.",
    details: [
      "Bahan Kulit Suede sapi asli (Genuine Suede Leather)",
      "Bagian dalam dilapisi breathable microfiber",
      "Outsole karet fleksibel tahan lama",
      "Detail jahitan tangan (Hand-stitched moc toe)",
      "Slip-on praktis dan nyaman"
    ],
    colors: [
      { name: "Coffee Brown", hex: "#4A3B32" },
      { name: "Tan Gold", hex: "#B8860B" },
      { name: "Navy Suede", hex: "#1A2536" }
    ],
    sizes: ["40", "41", "42", "43"],
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 62,
    stock: 3,
    isNew: true,
    isFeatured: false
  },
  {
    id: 5,
    name: "Canvas Utility Sling Bag",
    category: "tas",
    price: 149000,
    originalPrice: 229000,
    description: "Tas selempang berukuran compact berbahan canvas tebal berkualitas tinggi. Dilengkapi dengan kompartemen taktis untuk mengamankan barang-barang penting Anda seperti handphone, dompet, kunci, dan tablet kecil.",
    details: [
      "Bahan Canvas Polyester 600D water-repellent",
      "Kompartemen utama dengan sekat busa",
      "Saku depan beresleting untuk akses cepat",
      "Strap webbing tebal yang nyaman & bisa diatur",
      "Buckle pengunci premium metal-alloy"
    ],
    colors: [
      { name: "Tactical Black", hex: "#222222" },
      { name: "Army Green", hex: "#3A4533" },
      { name: "Navy", hex: "#1D2B44" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.6,
    reviewsCount: 143,
    stock: 15,
    isNew: false,
    isFeatured: false
  },
  {
    id: 6,
    name: "Minimalist Daily Backpack",
    category: "tas",
    price: 279000,
    originalPrice: 399000,
    description: "Tas ransel minimalis dengan siluet bersih dan modern yang didesain khusus untuk menampung laptop hingga ukuran 15 inci serta perlengkapan kerja atau kuliah Anda secara terorganisir.",
    details: [
      "Bahan Polyester Cordura antiair (Splash-Proof)",
      "Slot laptop khusus berbusa tebal (maksimal 15.6\")",
      "Panel punggung bersirkulasi udara (Mesh padded)",
      "Organizer saku dalam untuk pulpen & gadget",
      "Saku samping elastis untuk botol minum"
    ],
    colors: [
      { name: "Minimal Grey", hex: "#696969" },
      { name: "Obsidian Black", hex: "#1A1A1A" },
      { name: "Forest Green", hex: "#2C3E2B" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 92,
    stock: 7,
    isNew: true,
    isFeatured: true
  },
  {
    id: 7,
    name: "Vintage Leather Bifold Wallet",
    category: "aksesori",
    price: 125000,
    originalPrice: 199000,
    description: "Dompet lipat dua klasik yang dibuat dari kulit sapi asli bertipe crazy horse. Tekstur kulit yang berkarakter unik ini akan menghasilkan efek patina alami seiring waktu pemakaian.",
    details: [
      "100% Kulit Sapi Asli (Crazy Horse Leather)",
      "2 Kompartemen utama uang kertas",
      "6 Slot kartu internal + 2 slot rahasia",
      "Desain tipis (Slim profile bifold)",
      "Dilengkapi perlindungan RFID blocking"
    ],
    colors: [
      { name: "Vintage Brown", hex: "#7E5C46" },
      { name: "Dark Chocolate", hex: "#3B2F2F" },
      { name: "Classic Black", hex: "#1C1C1C" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1627124765135-5653d9354ab8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588444650733-d4c383ad566f?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewsCount: 178,
    stock: 9,
    isNew: false,
    isFeatured: true
  },
  {
    id: 8,
    name: "Handcrafted Leather Belt",
    category: "aksesori",
    price: 99000,
    originalPrice: 149000,
    description: "Ikat pinggang kulit sapi lapis satu yang kokoh dengan kepala gesper zinc-alloy bergaya kasual-vintage. Sangat cocok dipasangkan dengan celana jeans atau celana chino kesayangan Anda.",
    details: [
      "Bahan Kulit Sapi Asli satu lapis (Full Grain Leather)",
      "Ketebalan kulit 3.5mm - sangat awet tidak pecah",
      "Gesper Metal Zinc-Alloy antik karat",
      "Lebar tali sabuk 3.8 cm",
      "Panjang tali 115 - 125 cm (bisa dilubangi/dipotong mudah)"
    ],
    colors: [
      { name: "Dark Tan", hex: "#8B5A2B" },
      { name: "Matte Black", hex: "#202020" }
    ],
    sizes: ["Standard"],
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb8ecf734?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1619550993077-ca399e525164?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.7,
    reviewsCount: 55,
    stock: 14,
    isNew: false,
    isFeatured: false
  },
  {
    id: 9,
    name: "Classic Acetate Sunglasses",
    category: "aksesori",
    price: 119000,
    originalPrice: 189000,
    description: "Kacamata hitam dengan bingkai acetate retro premium yang kokoh dan lensa polarized. Melindungi mata Anda dari sinar ultraviolet dengan gaya klasik yang tak lekang oleh waktu.",
    details: [
      "Bingkai Acetate berkualitas tinggi yang ringan",
      "Lensa Polarized asli dengan UV400 Protection",
      "Engsel besi kokoh & fleksibel",
      "Termasuk kotak kacamata premium & lap pembersih microfiber",
      "Desain unisex cocok untuk pria maupun wanita"
    ],
    colors: [
      { name: "Glossy Black", hex: "#151515" },
      { name: "Tortoise Shell", hex: "#553B28" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 96,
    stock: 4,
    isNew: true,
    isFeatured: false
  }
];

// Helper functions for data access
window.PRODUCTS = PRODUCTS;
window.getProductById = function(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
};
window.getProductsByCategory = function(category) {
  if (!category || category === "all") return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
};
window.searchProducts = function(query) {
  if (!query) return PRODUCTS;
  const q = query.toLowerCase().trim();
  return PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.category.toLowerCase().includes(q) || 
    p.description.toLowerCase().includes(q)
  );
};
window.formatCurrency = function(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount);
};
