import type { Achievement } from '@/types';

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Lulus Cumlaude – S1 Informatika',
    organization: 'Universitas Syiah Kuala (USK)',
    date: '2026',
    description:
      'Menyelesaikan studi S1 Informatika di Universitas Syiah Kuala dengan predikat Cumlaude dan IPK 3.67/4.00.',
    type: 'academic',
    rank: 'Cumlaude (IPK 3.67/4.00)',
  },
  {
    id: 'ach-2',
    title: 'Peserta Program Vokasi Nasional – Associate Data Scientist Trainee',
    organization: 'Kementerian Ketenagakerjaan RI',
    date: 'Ags 2026',
    description:
      'Terpilih sebagai peserta program pelatihan intensif Associate Data Scientist Trainee dalam Program Vokasi Nasional yang diselenggarakan oleh Kementerian Ketenagakerjaan Republik Indonesia.',
    type: 'scholarship',
  },
  {
    id: 'ach-3',
    title: 'Penanggung Jawab Acara Maulid Nabi Muhammad SAW Tingkat Jurusan',
    organization: 'Himpunan Mahasiswa Informatika (HMIF) USK',
    date: '2023',
    description:
      'Bertanggung jawab sebagai PJ atas koordinasi teknis, rundown, dan pelaksanaan Acara Maulid Nabi Muhammad SAW tingkat jurusan Informatika USK.',
    type: 'organization',
  },
  {
    id: 'ach-4',
    title: 'Penanggung Jawab Acara Buka Bersama Jurusan Informatika',
    organization: 'Himpunan Mahasiswa Informatika (HMIF) USK',
    date: '2023',
    description:
      'Bertanggung jawab mengelola persiapan konsumsi, koordinasi peserta, dan kelancaran kegiatan Buka Bersama Jurusan Informatika USK.',
    type: 'organization',
  },
  {
    id: 'ach-5',
    title: 'Asisten Laboratorium – Praktikum Visualisasi Data',
    organization: 'Universitas Syiah Kuala',
    date: 'Jan 2025',
    description:
      'Dipercaya sebagai asisten laboratorium untuk mata kuliah Praktikum Visualisasi Data, membimbing mahasiswa S1 Informatika dalam memahami dan mengimplementasikan D3.js.',
    type: 'academic',
  },
  {
    id: 'ach-6',
    title: 'Asisten Laboratorium – Praktikum Komputasi Numerik',
    organization: 'Universitas Syiah Kuala',
    date: 'Ags 2024',
    description:
      'Dipercaya sebagai asisten laboratorium untuk mata kuliah Praktikum Komputasi Numerik, mendukung mahasiswa dalam implementasi metode numerik dan pemecahan masalah pemrograman.',
    type: 'academic',
  },
  {
    id: 'ach-7',
    title: 'Kontribusi pada Publikasi "Medan dalam Angka 2025"',
    organization: 'Badan Pusat Statistik (BPS) Kota Medan',
    date: 'Sep 2025',
    description:
      'Berkontribusi dalam penyusunan dan pengembangan publikasi resmi "Medan dalam Angka 2025", termasuk pengolahan data, visualisasi, dan dokumentasi statistik.',
    type: 'other',
  },
];
