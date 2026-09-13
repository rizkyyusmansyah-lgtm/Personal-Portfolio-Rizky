export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Klasifikasi Tanaman Herbal Indonesia",
    category: "AI & Deep Learning",
    year: "2024",
    description: "Klasifikasi 116 spesies tanaman herbal khas Indonesia menggunakan CNN berbasis PyTorch.",
    longDescription: "Model deep learning untuk klasifikasi tanaman herbal khas Indonesia. Menggunakan arsitektur CNN dengan framework PyTorch dan dideploy menggunakan Streamlit. Dataset mencakup 116 tanaman dengan nama Latin, Indonesia, dan Aceh. Akurasi model mencapai 94.2% pada test set.",
    tags: ["PyTorch", "CNN", "Deep Learning", "Streamlit", "Python"],
    image: "/Klasifikasi-tanaman-herbal.png",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Sales Analytics Dashboard",
    category: "Data Science",
    year: "2024",
    description: "Dashboard interaktif di Looker Studio dengan empat lapisan analitik dan backend Supabase.",
    longDescription: "Dashboard analitik penjualan di Looker Studio yang mencakup empat lapisan analitik: descriptive, diagnostic, predictive, dan prescriptive. Backend menggunakan Supabase/PostgreSQL untuk penyimpanan dan query data real-time.",
    tags: ["Looker Studio", "Supabase", "PostgreSQL", "Data Analytics"],
    image: "/PENJULAAN.png",
    link: "https://lookerstudio.google.com",
  },
  {
    id: 3,
    title: "Sistem Visualisasi Data Dinamis BPS Kota Medan",
    category: "Software Development",
    year: "2024",
    description: "Layanan digital terpadu dan sistem visualisasi data dinamis untuk BPS Kota Medan.",
    longDescription: "Sistem informasi berbasis web untuk Badan Pusat Statistik (BPS) Kota Medan yang menyajikan visualisasi data secara dinamis dan interaktif. Memudahkan masyarakat dan stakeholder dalam mengakses data statistik terkini.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Data Visualization"],
    image: "/VIS-Data.png",
    github: "https://github.com",
  },
];
