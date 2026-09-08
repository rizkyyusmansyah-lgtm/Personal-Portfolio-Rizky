import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Kementerian Ketenagakerjaan RI',
    position: 'Associate Data Scientist Trainee',
    employmentType: 'Internship',
    startDate: 'Ags 2026',
    endDate: 'Present',
    location: 'Banda Aceh, Indonesia',
    locationType: 'On-site',
    description:
      'Participating in the intensive national vocational training program (Program Vokasi Nasional) for Data Science, covering end-to-end data workflows from preprocessing to machine learning model deployment.',
    responsibilities: [
      'Mengikuti pelatihan intensif data science mencakup data preprocessing, exploratory data analysis (EDA), dan fundamental machine learning.',
      'Mengerjakan proyek dataset nyata: data cleaning, transformasi data, dan feature engineering.',
      'Membangun model machine learning dan menerapkan analisis statistik untuk pemecahan masalah berbasis data.',
      'Mengolah dan menyajikan data menggunakan Python (pandas, NumPy, scikit-learn), SQL, Microsoft Excel, Microsoft Power BI, Google Looker Studio, dan DBeaver.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL', 'Power BI', 'Google Looker Studio', 'DBeaver', 'Microsoft Excel'],
  },
  {
    id: 'exp-2',
    company: 'Badan Pusat Statistik (BPS) Kota Medan',
    position: 'Web Developer & Data Analyst Intern',
    employmentType: 'Internship',
    startDate: 'Ags 2025',
    endDate: 'Sep 2025',
    location: 'Medan, Indonesia',
    locationType: 'On-site',
    description:
      'Internship at BPS Kota Medan, developing dynamic web-based data visualization systems and contributing to official statistical publications.',
    responsibilities: [
      'Mengembangkan sistem visualisasi data berbasis web yang dinamis untuk menyajikan data statistik secara interaktif dan mudah diakses.',
      'Berkontribusi dalam pengolahan, validasi, dan penyiapan data untuk mendukung publikasi dan penyajian informasi statistik.',
      'Berkontribusi dalam penyusunan dan pengembangan publikasi "Medan dalam Angka 2025", termasuk pengolahan data dan dokumentasi.',
      'Berkolaborasi dengan staf dan anggota tim untuk memastikan akurasi, konsistensi, dan kegunaan data serta hasil visualisasi.',
      'Menerapkan keterampilan pengembangan web dan analisis data untuk mendukung penyajian digital informasi statistik resmi.',
    ],
    technologies: ['Web Development', 'Data Analysis', 'Data Visualization', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'exp-3',
    company: 'Universitas Syiah Kuala',
    position: 'Asisten Laboratorium – Praktikum Visualisasi Data',
    employmentType: 'Part-time',
    startDate: 'Jan 2025',
    endDate: 'Jun 2025',
    location: 'Banda Aceh, Indonesia',
    locationType: 'On-site',
    description:
      'Laboratory assistant for the Data Visualization practicum course for undergraduate Informatics students.',
    responsibilities: [
      'Membantu pelaksanaan sesi praktikum Visualisasi Data untuk mahasiswa S1 Informatika.',
      'Membimbing mahasiswa memahami konsep dan teknik visualisasi data menggunakan D3.js dan alat visualisasi lainnya.',
      'Membimbing mahasiswa membuat visualisasi interaktif menggunakan scale, axis, data binding, dan teknik visualisasi lainnya.',
      'Memberikan dukungan dan umpan balik atas tugas praktikum dan laporan untuk meningkatkan pemahaman mahasiswa.',
      'Berkolaborasi dengan dosen dan sesama asisten laboratorium untuk menyelenggarakan sesi praktikum yang terorganisir dan menarik.',
    ],
    technologies: ['D3.js', 'JavaScript', 'Data Visualization', 'HTML', 'CSS'],
  },
  {
    id: 'exp-4',
    company: 'Universitas Syiah Kuala',
    position: 'Asisten Laboratorium – Praktikum Komputasi Numerik',
    employmentType: 'Part-time',
    startDate: 'Ags 2024',
    endDate: 'Des 2024',
    location: 'Banda Aceh, Indonesia',
    locationType: 'On-site',
    description:
      'Laboratory assistant for the Numerical Computing practicum course, helping students implement numerical methods in programming.',
    responsibilities: [
      'Mendukung mahasiswa dalam menerapkan konsep komputasi numerik pada permasalahan pemrograman praktikum.',
      'Membantu mahasiswa mengimplementasikan metode numerik, termasuk pencarian akar, interpolasi, integrasi numerik, dan penyelesaian persamaan.',
      'Membantu mahasiswa mengidentifikasi dan menyelesaikan kesalahan pemrograman yang ditemui selama sesi praktikum.',
      'Memeriksa tugas praktikum dan memberikan umpan balik konstruktif atas solusi dan laporan mahasiswa.',
      'Bekerja sama erat dengan dosen dan sesama asisten laboratorium dalam mempersiapkan dan melaksanakan sesi praktikum serta evaluasi.',
    ],
    technologies: ['Python', 'Numerical Methods', 'Mathematics'],
  },
];
