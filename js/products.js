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
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80"
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
      "https://images.unsplash.com/photo-1508243771214-6e95d137426b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
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
  },
  {
    id: 10,
    name: "Classic Slim-Fit Denim Jeans",
    category: "celana",
    price: 249000,
    originalPrice: 379000,
    description: "Celana denim kasual dengan potongan slim-fit modern dari bahan denim stretch berkualitas tinggi. Cocok dipasangkan dengan t-shirt atau kemeja kasual.",
    details: [
      "Bahan Denim Stretch tebal & elastis",
      "Potongan Slim Fit trendi",
      "Teknologi wash premium tidak luntur",
      "Kancing & resleting logam antik karat",
      "Saku belakang ganda yang fungsional"
    ],
    colors: [
      { name: "Indigo Blue", hex: "#2E4057" },
      { name: "Light Wash", hex: "#7E97B8" },
      { name: "Black Denim", hex: "#1C1D21" }
    ],
    sizes: ["29", "30", "31", "32", "33", "34"],
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 142,
    stock: 15,
    isNew: false,
    isFeatured: true
  },
  {
    id: 11,
    name: "Premium Linen Drawstring Pants",
    category: "celana",
    price: 199000,
    originalPrice: 289000,
    description: "Celana linen ringan dengan tali serut elastis di pinggang, menawarkan gaya santai bernapas tropis yang trendi dan sangat sejuk dipakai.",
    details: [
      "Bahan 100% Linen premium breathable",
      "Pinggang karet elastis dengan tali serut",
      "Potongan Relaxed Fit yang santai",
      "Saku samping fungsional",
      "Tekstur serat linen alami yang mewah"
    ],
    colors: [
      { name: "Natural Oat", hex: "#D7C49E" },
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Soft Sage", hex: "#8F9779" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.6,
    reviewsCount: 59,
    stock: 8,
    isNew: true,
    isFeatured: false
  },
  {
    id: 12,
    name: "Retro Heritage Leather Boots",
    category: "sepatu",
    price: 459000,
    originalPrice: 649000,
    description: "Sepatu boots kulit bergaya retro-klasik dengan sol karet bermotif gerigi tebal untuk ketahanan ekstra dan cengkeraman maksimal di segala medan.",
    details: [
      "Bahan Kulit Sintetis Premium tebal & antiair",
      "Sol karet lugged tahan gesekan & antiselip",
      "Konstruksi jahitan samping kokoh",
      "Lapisan dalam katun lembut menyerap keringat",
      "Tali katun lilin bulat berkekuatan tinggi"
    ],
    colors: [
      { name: "Chestnut Brown", hex: "#5C4033" },
      { name: "Stealth Black", hex: "#111111" }
    ],
    sizes: ["40", "41", "42", "43", "44"],
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewsCount: 76,
    stock: 6,
    isNew: false,
    isFeatured: true
  },
  {
    id: 13,
    name: "Urban Slip-on Canvas Espadrilles",
    category: "sepatu",
    price: 179000,
    originalPrice: 259000,
    description: "Sepatu slip-on kasual berbahan canvas dengan detail sol rajutan rami klasik untuk gaya kasual musim panas yang trendi dan mudah digunakan.",
    details: [
      "Bahan Upper Canvas rajut bernapas",
      "Detail sol rajutan rami alami (jute wrap)",
      "Insole empuk untuk kenyamanan seharian",
      "Sol bawah karet anti-licin",
      "Praktis tinggal slop tanpa tali"
    ],
    colors: [
      { name: "Ash Grey", hex: "#B2B2B2" },
      { name: "Navy Blue", hex: "#1E2A38" },
      { name: "Creamy Beige", hex: "#F5E6CC" }
    ],
    sizes: ["39", "40", "41", "42", "43"],
    images: [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.7,
    reviewsCount: 112,
    stock: 14,
    isNew: true,
    isFeatured: false
  },
  {
    id: 14,
    name: "Waterproof Roll-top Travel Backpack",
    category: "tas",
    price: 329000,
    originalPrice: 459000,
    description: "Tas ransel multifungsi dengan desain roll-top antiair berkapasitas besar, cocok untuk petualangan akhir pekan maupun commute harian.",
    details: [
      "Bahan Nylon Cordura Waterproof tebal",
      "Desain Roll-top dengan buckle pengaman",
      "Kompartemen laptop 15.6 inci terpisah",
      "Panel punggung ergonomis dengan bantalan mesh",
      "Saku rahasia belakang untuk paspor/HP"
    ],
    colors: [
      { name: "Matte Black", hex: "#1E1E1E" },
      { name: "Steel Grey", hex: "#4E5357" },
      { name: "Olive Drab", hex: "#4B5320" }
    ],
    sizes: ["One Size (30L)"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 65,
    stock: 9,
    isNew: false,
    isFeatured: true
  },
  {
    id: 15,
    name: "Heritage Leather Messenger Bag",
    category: "tas",
    price: 399000,
    originalPrice: 579000,
    description: "Tas kurir berbahan kulit sintetis klasik dengan siluet vintage berkelas. Pilihan terbaik untuk profesional muda dan mahasiswa.",
    details: [
      "Bahan PU Leather kualitas ekspor tahan air",
      "Hardware logam kuningan bergaya antik",
      "Strap bahu dengan bantalan empuk yang nyaman",
      "Kompartemen utama bermagnet & beresleting",
      "Saku depan ganda untuk aksesoris"
    ],
    colors: [
      { name: "Vintage Tan", hex: "#A0522D" },
      { name: "Dark Espresso", hex: "#2B1B17" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.7,
    reviewsCount: 48,
    stock: 5,
    isNew: false,
    isFeatured: false
  },
  {
    id: 16,
    name: "Classic Chronograph Minimalist Watch",
    category: "aksesori",
    price: 299000,
    originalPrice: 429000,
    description: "Jam tangan analog pria dengan desain dial minimalis yang elegan dan strap kulit asli premium. Sempurna untuk menyempurnakan penampilan formal maupun kasual Anda.",
    details: [
      "Strap: Genuine Calfskin Leather",
      "Diameter Dial: 40mm minimalis modern",
      "Ketebalan Dial: 8mm ultra tipis",
      "Mesin: Japanese Quartz Movement",
      "Ketahanan Air: 3 ATM (splash proof)"
    ],
    colors: [
      { name: "Black Leather", hex: "#1C1C1C" },
      { name: "Brown Leather", hex: "#6E473B" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewsCount: 88,
    stock: 7,
    isNew: true,
    isFeatured: true
  },
  {
    id: 17,
    name: "Stainless Steel Premium Cuff Bracelet",
    category: "aksesori",
    price: 89000,
    originalPrice: 129000,
    description: "Gelang cuff minimalis berbahan stainless steel antikarat berkilau satin. Memberikan sentuhan gaya modern bersahaja pada pergelangan tangan Anda.",
    details: [
      "Bahan 316L Stainless Steel (Tahan karat & hitam)",
      "Finishing satin matte/brushed premium",
      "Bisa disesuaikan ukurannya (bendable cuff)",
      "Lebar gelang 6mm yang ramping & berkelas",
      "Hypoallergenic - aman tidak memicu alergi kulit"
    ],
    colors: [
      { name: "Silver Satin", hex: "#E3E4E5" },
      { name: "Gold Satin", hex: "#D4AF37" },
      { name: "Matte Black", hex: "#22252A" }
    ],
    sizes: ["Adjustable"],
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1627124765135-5653d9354ab8?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 120,
    stock: 22,
    isNew: false,
    isFeatured: false
  },
  {
    id: 18,
    name: "Classic Pleated Trouser",
    category: "celana",
    price: 239000,
    originalPrice: 349000,
    description: "Celana panjang formal dengan detail lipit (pleated) klasik di bagian depan. Potongan relaxed tapered yang memberikan kenyamanan ekstra namun tetap terlihat rapi dan elegan.",
    details: [
      "Bahan Semi-Wool Premium",
      "Potongan Relaxed Tapered Fit",
      "Detail Lipit (Pleating) Depan",
      "Kancing & Resleting Berkualitas",
      "Cocok untuk Gaya Formal & Smart-Casual"
    ],
    colors: [
      { name: "Charcoal Grey", hex: "#4E4E4E" },
      { name: "Dark Navy", hex: "#1A2530" },
      { name: "Taupe Beige", hex: "#B3A28F" }
    ],
    sizes: ["30", "32", "34", "36"],
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 42,
    stock: 8,
    isNew: true,
    isFeatured: false
  },
  {
    id: 19,
    name: "Modern Slim-Fit Joggers",
    category: "celana",
    price: 179000,
    originalPrice: 259000,
    description: "Jogger modern berbahan katun stretch lembut dengan pergelangan kaki rib yang elastis. Sempurna untuk tampilan sporty kasual akhir pekan.",
    details: [
      "Bahan Katun Combed Stretch",
      "Pinggang Elastis dengan Tali Serut",
      "Rib Pergelangan Kaki Lembut",
      "Saku Samping Beresleting",
      "Desain Ergonomis & Nyaman"
    ],
    colors: [
      { name: "Heather Grey", hex: "#8E8E93" },
      { name: "Deep Black", hex: "#1C1C1E" }
    ],
    sizes: ["M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1551854838-212c50b4c184?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.7,
    reviewsCount: 61,
    stock: 12,
    isNew: false,
    isFeatured: false
  },
  {
    id: 20,
    name: "Casual Corduroy Pants",
    category: "celana",
    price: 259000,
    originalPrice: 389000,
    description: "Celana panjang corduroy bertekstur garis halus dengan potongan straight-cut klasik. Memberikan nuansa vintage modern yang hangat dan stylish.",
    details: [
      "Bahan Corduroy 14-Wale Berkualitas",
      "Potongan Straight Cut Klasik",
      "Tekstur Garis Halus Mewah",
      "Saku Model Klasik 5-Pocket",
      "Jahitan Ganda Kuat"
    ],
    colors: [
      { name: "Caramel Brown", hex: "#AF6E4D" },
      { name: "Forest Green", hex: "#2E3B30" }
    ],
    sizes: ["28", "30", "32", "34"],
    images: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.6,
    reviewsCount: 33,
    stock: 6,
    isNew: true,
    isFeatured: false
  },
  {
    id: 21,
    name: "Minimalist Leather Trainers",
    category: "sepatu",
    price: 369000,
    originalPrice: 529000,
    description: "Sneakers minimalis berbahan kulit sintetis premium dengan desain bersih tanpa jahitan berlebih. Mudah dipadankan dengan segala busana.",
    details: [
      "Bahan Microfiber PU Leather Premium",
      "Desain Minimalis Sleek",
      "Insole Ortholite Empuk & Adem",
      "Outsole Karet Vulkanisir",
      "Lining Mesh Bernapas"
    ],
    colors: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Midnight Black", hex: "#1A1A1A" }
    ],
    sizes: ["40", "41", "42", "43", "44"],
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99dd8ec7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 77,
    stock: 9,
    isNew: false,
    isFeatured: false
  },
  {
    id: 22,
    name: "Urban Chelsea Boots",
    category: "sepatu",
    price: 429000,
    originalPrice: 599000,
    description: "Sepatu Chelsea boots klasik dari bahan suede sintetis premium dengan panel samping elastis untuk kemudahan pemakaian.",
    details: [
      "Bahan Premium Faux Suede Leather",
      "Panel Samping Elastis Ganda",
      "Pull-tab Belakang Praktis",
      "Outsole Karet Ramping & Awet",
      "Tinggi Heel 2.5 cm Klasik"
    ],
    colors: [
      { name: "Suede Tan", hex: "#C2B280" },
      { name: "Suede Charcoal", hex: "#3A3A3C" }
    ],
    sizes: ["40", "41", "42", "43"],
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f6893b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewsCount: 29,
    stock: 5,
    isNew: true,
    isFeatured: false
  },
  {
    id: 23,
    name: "Casual Comfort Sandals",
    category: "sepatu",
    price: 159000,
    originalPrice: 229000,
    description: "Sandal slide dengan strap ganda gesper yang adjustable. Insole suede ergonomis yang mengikuti bentuk kaki Anda.",
    details: [
      "Strap Kulit Sintetis Tebal",
      "Gesper Logam Dapat Diatur",
      "Insole Cork Ergonomis",
      "Lining Suede Microfiber",
      "Outsole EVA Ringan & Lentur"
    ],
    colors: [
      { name: "Mocca Brown", hex: "#8B7355" },
      { name: "Matte Black", hex: "#1C1C1C" }
    ],
    sizes: ["39", "40", "41", "42", "43"],
    images: [
      "https://images.unsplash.com/photo-1603487212947-7ec32637b4bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.7,
    reviewsCount: 88,
    stock: 15,
    isNew: false,
    isFeatured: false
  },
  {
    id: 24,
    name: "Modern Tote Bag Canvas",
    category: "tas",
    price: 119000,
    originalPrice: 179000,
    description: "Tas jinjing minimalis berbahan kanvas organik tebal dengan kompartemen luas dan saku botol minum di bagian dalam.",
    details: [
      "Bahan Kanvas Katun 14oz Tebal",
      "Handle Kulit Sintetis Kokoh",
      "Resleting Utama YKK",
      "Saku Botol Minum Internal",
      "Kompartemen Laptop Tanpa Busa"
    ],
    colors: [
      { name: "Off-White Cream", hex: "#FDF5E6" },
      { name: "Classic Navy", hex: "#000080" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.6,
    reviewsCount: 52,
    stock: 14,
    isNew: false,
    isFeatured: false
  },
  {
    id: 25,
    name: "Elegant Leather Crossbody Bag",
    category: "tas",
    price: 349000,
    originalPrice: 499000,
    description: "Tas selempang wanita berbahan kulit sintetis premium dengan finishing saffiano mewah dan rantai emas elegan.",
    details: [
      "Bahan Saffiano Faux Leather Premium",
      "Strap Rantai Logam Emas Mewah",
      "Kunci Magnetik Kuat",
      "Saku Zipper Internal",
      "Desain Ramping & Elegan"
    ],
    colors: [
      { name: "Blush Pink", hex: "#FFD1DC" },
      { name: "Noir Black", hex: "#0B0C10" },
      { name: "Emerald Green", hex: "#097969" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 41,
    stock: 6,
    isNew: true,
    isFeatured: false
  },
  {
    id: 26,
    name: "Compact Running Waist Bag",
    category: "tas",
    price: 99000,
    originalPrice: 149000,
    description: "Tas pinggang olahraga ultra-slim dan antiair. Dirancang khusus untuk memuat handphone dan kunci saat aktif bergerak.",
    details: [
      "Bahan Lycra Waterproof Elastis",
      "Lubang Kabel Earphone Silikon",
      "Strap Pinggang Elastis Adjustable",
      "Garis Reflektif untuk Malam Hari",
      "Zipper Kedap Air"
    ],
    colors: [
      { name: "Neon Lime", hex: "#CCFF00" },
      { name: "Stealth Black", hex: "#0A0A0A" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1536303004784-ff58b258ba34?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.5,
    reviewsCount: 95,
    stock: 20,
    isNew: false,
    isFeatured: false
  },
  {
    id: 27,
    name: "Premium Leather Card Holder",
    category: "aksesori",
    price: 69000,
    originalPrice: 99000,
    description: "Dompet kartu ramping berbahan kulit sintetis premium dengan 4 slot kartu dan 1 kompartemen tengah.",
    details: [
      "Bahan PU Leather Tekstur Halus",
      "4 Slot Kartu Cepat Akses",
      "1 Slot Uang Kertas Tengah",
      "Desain Ultra Slim 0.4cm",
      "RFID Blocking Terintegrasi"
    ],
    colors: [
      { name: "Chestnut Tan", hex: "#D2B48C" },
      { name: "Classic Navy", hex: "#1A2530" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 110,
    stock: 18,
    isNew: false,
    isFeatured: false
  },
  {
    id: 28,
    name: "Minimalist Silver Ring Set",
    category: "aksesori",
    price: 79000,
    originalPrice: 119000,
    description: "Set cincin perak minimalis isi 3 dengan ketebalan berbeda. Terbuat dari bahan titanium steel antikarat.",
    details: [
      "Bahan Titanium Steel 316L",
      "Finishing High-Polish Silver",
      "Isi 3 Cincin dalam 1 Paket",
      "Tahan Karat & Tidak Pudar",
      "Desain Unisex Modern"
    ],
    colors: [
      { name: "Sleek Silver", hex: "#C0C0C0" }
    ],
    sizes: ["6", "7", "8", "9"],
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.7,
    reviewsCount: 46,
    stock: 10,
    isNew: true,
    isFeatured: false
  },
  {
    id: 29,
    name: "Wool Winter Beanie Hat",
    category: "aksesori",
    price: 89000,
    originalPrice: 129000,
    description: "Topi kupluk rajut tebal dari bahan serat wol akrilik lembut. Memberikan kehangatan maksimal.",
    details: [
      "Bahan 100% Akrilik Rajut Tebal",
      "Tekstur Ribbed Knit Elastis",
      "Desain Fold-over Cuff Klasik",
      "Sangat Hangat & Nyaman",
      "Cocok untuk Pria & Wanita"
    ],
    colors: [
      { name: "Mustard Gold", hex: "#FFDB58" },
      { name: "Charcoal Grey", hex: "#4A4A4A" },
      { name: "Off-White", hex: "#F5F5F0" }
    ],
    sizes: ["One Size Fit All"],
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 38,
    stock: 15,
    isNew: false,
    isFeatured: false
  },
  {
    id: 30,
    name: "Classic Leather Key Organizer",
    category: "aksesori",
    price: 59000,
    originalPrice: 89000,
    description: "Gantungan kunci kulit minimalis untuk mengorganisir hingga 7 kunci Anda agar tidak berisik dan tergores.",
    details: [
      "Bahan Kulit Sapi Asli",
      "Hardware Stainless Steel",
      "Kapasitas hingga 7 Kunci Standard",
      "Desain Lipat Ramping",
      "Mencegah Kunci Menggores Layar HP"
    ],
    colors: [
      { name: "Tan Brown", hex: "#B8860B" },
      { name: "Classic Black", hex: "#1C1C1C" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1588444650733-d4c383ad566f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 22,
    stock: 25,
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
