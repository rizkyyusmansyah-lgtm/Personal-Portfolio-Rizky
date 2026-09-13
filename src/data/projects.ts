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
    title: "BACE-1 Inhibitor Classification",
    category: "AI & Deep Learning",
    year: "2024",
    description: "Graph Neural Network untuk klasifikasi senyawa inhibitor BACE-1 dalam penemuan obat alzheimer.",
    longDescription: "Project QSAR dan kemoinformatika menggunakan Graph Neural Network (GIN/GINE) untuk mengklasifikasi senyawa inhibitor BACE-1. Memanfaatkan representasi graph molekul untuk menangkap informasi struktural senyawa kimia dalam konteks penemuan obat alzheimer.",
    tags: ["Graph Neural Network", "GINE", "PyTorch", "Cheminformatics"],
    image: "/VIS-Data.png",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Sales Analytics Dashboard",
    category: "Data Science",
    year: "2024",
    description: "Dashboard interaktif di Looker Studio dengan empat lapisan analitik dan backend Supabase.",
    longDescription: "Dashboard analitik penjualan di Looker Studio yang mencakup empat lapisan analitik: descriptive, diagnostic, predictive, dan prescriptive. Backend menggunakan Supabase/PostgreSQL untuk penyimpanan dan query data real-time.",
    tags: ["Looker Studio", "Supabase", "PostgreSQL", "Data Analytics"],
    image: "/VIS-Data.png",
    link: "https://lookerstudio.google.com",
  },
  {
    id: 4,
    title: "Land Surface Temperature Analysis",
    category: "Geospatial",
    year: "2023",
    description: "Analisis pengaruh gas rumah kaca terhadap suhu permukaan lahan di Aceh via Google Earth Engine.",
    longDescription: "Analisis komprehensif pengaruh gas rumah kaca terhadap suhu permukaan lahan di Provinsi Aceh menggunakan penginderaan jauh. Memproses citra satelit MODIS dan Sentinel-5P melalui Google Earth Engine untuk menghasilkan peta spasial distribusi suhu.",
    tags: ["Google Earth Engine", "MODIS", "Sentinel-5P", "Geospatial"],
    image: "/Klasifikasi-tanaman-herbal.png",
    github: "https://github.com",
  },
  {
    id: 5,
    title: "House Price Prediction",
    category: "Data Science",
    year: "2023",
    description: "Notebook end-to-end prediksi harga rumah pada Seattle Housing dataset dengan 4.6k baris data.",
    longDescription: "Pipeline machine learning end-to-end untuk prediksi harga rumah menggunakan Seattle Housing dataset. Membandingkan pendekatan manual vs AI-assisted, mulai dari data cleaning, EDA mendalam, feature engineering, hingga model selection dan hyperparameter tuning.",
    tags: ["Machine Learning", "Pandas", "Scikit-Learn", "EDA"],
    image: "/VIS-Data.png",
    github: "https://github.com",
  },
];
