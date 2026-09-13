export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  type: string;
  description: string;
  quote?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Associate Data Scientist Trainee (Vokasi Nasional)',
    company: 'Kementerian Ketenagakerjaan RI',
    location: 'Banda Aceh',
    date: 'Jul 2026 – Saat ini',
    type: 'Magang',
    description: 'Pelatihan vokasi nasional meliputi data preprocessing, EDA, dasar machine learning, dan project hands-on dengan dataset nyata.',
    quote: 'Fondasi data science terapan untuk kebutuhan industri.',
  },
  {
    id: 2,
    title: 'Web Developer & Data Analyst Intern',
    company: 'Badan Pusat Statistik',
    location: 'Medan',
    date: 'Agu – Sep 2025',
    type: 'Magang',
    description: 'Membangun sistem visualisasi data web interaktif dan berkontribusi pada publikasi "Medan Municipality in Figures 2025".',
    quote: 'Mengubah data mentah menjadi wawasan visual.',
  },
  {
    id: 3,
    title: 'Laboratory Assistant — Data Visualization Practicum',
    company: 'Universitas Syiah Kuala',
    location: 'Banda Aceh',
    date: 'Jan – Jun 2025',
    type: 'Asisten Lab',
    description: 'Membimbing praktikum visualisasi data menggunakan D3.js bagi mahasiswa informatika.',
    quote: 'Berbagi ilmu memperkuat pemahaman sendiri.',
  },
  {
    id: 4,
    title: 'Laboratory Assistant — Computational Numerical Practicum',
    company: 'Universitas Syiah Kuala',
    location: 'Banda Aceh',
    date: 'Agu – Des 2024',
    type: 'Asisten Lab',
    description: 'Membimbing praktikum metode numerik termasuk root finding, interpolasi, dan integrasi numerik.',
    quote: 'Pemecahan masalah melalui logika komputasi.',
  },
  {
    id: 5,
    title: 'Member, Religious Affairs Department',
    company: 'Himpunan Mahasiswa Informatika USK',
    location: 'Banda Aceh',
    date: 'Jun 2023 – Agu 2024',
    type: 'Organisasi',
    description: 'Aktif sebagai pengurus himpunan dalam merencanakan dan menjalankan program keagamaan.',
    quote: 'Kepemimpinan dan pengabdian masyarakat.',
  }
];
