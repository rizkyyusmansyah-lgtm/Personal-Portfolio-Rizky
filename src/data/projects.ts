import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'proj-1',
    slug: 'klasifikasi-tanaman-herbal-deep-learning',
    title: 'Klasifikasi Tanaman Herbal Indonesia dengan Deep Learning',
    shortDescription:
      'Skripsi – penggunaan model deep learning (CNN/Transfer Learning) untuk mengklasifikasikan tanaman herbal Indonesia berdasarkan citra daun.',
    category: 'Computer Vision',
    technologies: ['Python', 'PyTorch', 'Deep Learning', 'Computer Vision', 'Transfer Learning', 'Pandas', 'NumPy'],
    image: '',
    githubUrl: '',
    liveUrl: '',
    featured: true,
    role: 'Researcher & Developer',
    overview:
      'Tugas akhir (skripsi) yang bertujuan mengembangkan sistem klasifikasi otomatis tanaman herbal Indonesia menggunakan model deep learning berbasis citra.',
    problem:
      'Identifikasi tanaman herbal secara manual membutuhkan keahlian khusus dan waktu yang lama. Dibutuhkan sistem otomatis yang akurat untuk membantu identifikasi tanaman herbal di Indonesia.',
    objective:
      'Membangun dan mengevaluasi model deep learning yang mampu mengklasifikasikan berbagai jenis tanaman herbal Indonesia dari gambar/citra daun dengan tingkat akurasi tinggi.',
    solution:
      'Mengimplementasikan arsitektur CNN dan Transfer Learning menggunakan PyTorch untuk melatih model pada dataset gambar tanaman herbal Indonesia.',
    features: [
      'Preprocessing dan augmentasi dataset gambar tanaman herbal',
      'Implementasi model CNN dan Transfer Learning (e.g., ResNet, EfficientNet)',
      'Evaluasi performa model dengan berbagai metrik (accuracy, precision, recall, F1)',
      'Visualisasi hasil prediksi dan confusion matrix',
    ],
    results: 'Model berhasil mengklasifikasikan tanaman herbal Indonesia dengan akurasi tinggi menggunakan pendekatan transfer learning.',
    lessonsLearned: 'Memahami pipeline end-to-end computer vision, pentingnya data augmentation, dan bagaimana transfer learning mempercepat konvergensi model.',
    screenshots: [],
  },
  {
    id: 'proj-2',
    slug: 'web-visualisasi-data-statistik-bps',
    title: 'Sistem Visualisasi Data Statistik Berbasis Web (BPS Kota Medan)',
    shortDescription:
      'Web-based dynamic data visualization system developed during internship at BPS Kota Medan to present statistical data interactively.',
    category: 'Web Development',
    technologies: ['JavaScript', 'HTML', 'CSS', 'D3.js', 'Data Visualization', 'Web Development'],
    image: '',
    githubUrl: '',
    liveUrl: '',
    featured: true,
    role: 'Web Developer & Data Analyst Intern',
    overview:
      'Sistem visualisasi data berbasis web yang dibangun selama masa magang di BPS Kota Medan untuk menyajikan data statistik secara interaktif dan mudah diakses publik.',
    problem:
      'Data statistik yang dimiliki BPS Kota Medan perlu disajikan secara lebih interaktif dan mudah dipahami oleh masyarakat umum.',
    objective:
      'Mengembangkan platform web yang memungkinkan penyajian data statistik secara dinamis dan interaktif, mendukung publikasi resmi "Medan dalam Angka 2025".',
    solution:
      'Membangun sistem visualisasi web menggunakan JavaScript dan D3.js, terintegrasi dengan data statistik resmi BPS Kota Medan.',
    features: [
      'Visualisasi data interaktif menggunakan chart dan grafik dinamis',
      'Integrasi dengan data statistik resmi BPS Kota Medan',
      'Desain responsif yang mudah diakses',
      'Mendukung publikasi "Medan dalam Angka 2025"',
    ],
    results: 'Sistem berhasil digunakan untuk menyajikan data statistik Kota Medan secara digital dan interaktif.',
    lessonsLearned: 'Pengalaman kerja nyata di instansi pemerintah, memahami standar dan kebutuhan data statistik resmi, serta kolaborasi tim.',
    screenshots: [],
  },
  {
    id: 'proj-3',
    slug: 'eda-machine-learning-vokasi',
    title: 'Machine Learning Projects – Program Vokasi Data Science Kemenaker',
    shortDescription:
      'Series of data science projects covering EDA, data cleaning, feature engineering, and machine learning model building during the national vocational training program.',
    category: 'Machine Learning',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL', 'Power BI', 'Google Looker Studio', 'DBeaver', 'EDA'],
    image: '',
    githubUrl: '',
    liveUrl: '',
    featured: false,
    role: 'Associate Data Scientist Trainee',
    overview:
      'Serangkaian proyek data science yang dikerjakan selama program Associate Data Scientist Trainee (Vokasi Nasional) Kementerian Ketenagakerjaan RI.',
    problem:
      'Mengaplikasikan ilmu data science pada dataset nyata untuk memecahkan masalah bisnis dan analitik dalam konteks program pelatihan vokasi nasional.',
    objective:
      'Menguasai pipeline data science secara end-to-end: dari data preprocessing, EDA, feature engineering, hingga pembangunan dan evaluasi model machine learning.',
    solution:
      'Mengerjakan berbagai proyek menggunakan Python (pandas, NumPy, scikit-learn), SQL, Power BI, dan Google Looker Studio pada dataset nyata.',
    features: [
      'Data cleaning dan transformasi data pada dataset nyata',
      'Exploratory Data Analysis (EDA) dengan visualisasi komprehensif',
      'Feature engineering untuk meningkatkan performa model',
      'Pembangunan model machine learning (klasifikasi, regresi)',
      'Analisis statistik dan interpretasi hasil',
      'Visualisasi dashboard menggunakan Power BI dan Google Looker Studio',
    ],
    results: 'Berhasil membangun model machine learning yang fungsional dan dashboard visualisasi data yang informatif.',
    lessonsLearned: 'Pengalaman hands-on pada data nyata memperdalam pemahaman tentang tantangan data science di dunia industri.',
    screenshots: [],
  },
  {
    id: 'proj-4',
    slug: 'visualisasi-data-d3js-praktikum',
    title: 'Materi & Demo Visualisasi Data Interaktif dengan D3.js',
    shortDescription:
      'Interactive data visualizations built using D3.js for the Data Visualization practicum at Universitas Syiah Kuala, including scales, axes, data binding, and interactive charts.',
    category: 'Data Analysis',
    technologies: ['D3.js', 'JavaScript', 'HTML', 'CSS', 'Data Visualization'],
    image: '',
    githubUrl: '',
    liveUrl: '',
    featured: false,
    role: 'Laboratory Assistant (Creator of Lab Materials)',
    overview:
      'Materi dan demo visualisasi data interaktif yang dibuat sebagai asisten laboratorium Visualisasi Data di Universitas Syiah Kuala.',
    problem:
      'Mahasiswa S1 Informatika membutuhkan panduan praktis dan contoh nyata untuk memahami D3.js dan teknik visualisasi data interaktif.',
    objective:
      'Membuat materi praktikum dan demo visualisasi data interaktif yang jelas dan mudah dipahami menggunakan D3.js.',
    solution:
      'Mengembangkan serangkaian demo dan panduan menggunakan D3.js yang mencakup scale, axis, data binding, dan berbagai jenis chart interaktif.',
    features: [
      'Demo scale dan axis pada D3.js',
      'Contoh data binding pada berbagai jenis chart (bar, line, scatter)',
      'Visualisasi interaktif dengan event handling',
      'Panduan step-by-step untuk mahasiswa',
    ],
    results: 'Mahasiswa berhasil memahami dan mengimplementasikan visualisasi data interaktif menggunakan D3.js.',
    lessonsLearned: 'Mengajar dan membimbing orang lain memperdalam pemahaman sendiri tentang konsep visualisasi data.',
    screenshots: [],
  },
];

// Helper: get featured projects
export const featuredProjects = projects.filter((p) => p.featured);

// Helper: get projects by category
export const getProjectsByCategory = (category: string) => {
  if (category === 'All') return projects;
  return projects.filter((p) => p.category === category);
};

// Helper: get project by slug
export const getProjectBySlug = (slug: string) => {
  return projects.find((p) => p.slug === slug);
};

// Available filter categories (auto-derived from data)
export const projectCategories = [
  'All',
  ...Array.from(new Set(projects.map((p) => p.category))),
] as const;
