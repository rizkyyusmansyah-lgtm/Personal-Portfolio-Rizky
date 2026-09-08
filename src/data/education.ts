import type { Education } from '@/types';

export const educations: Education[] = [
  {
    id: 'edu-1',
    university: 'Universitas Syiah Kuala (USK)',
    faculty: 'FMIPA (Fakultas Matematika dan Ilmu Pengetahuan Alam)',
    major: 'Informatika',
    degree: 'Sarjana Informatika (S1)',
    startYear: '2022',
    endYear: '2026',
    gpa: '3.67',
    maxGpa: '4.00',
    activities: [
      'Asisten Laboratorium Praktikum Visualisasi Data (Jan 2025 – Jun 2025)',
      'Asisten Laboratorium Praktikum Komputasi Numerik (Ags 2024 – Des 2024)',
      'Anggota Divisi Keagamaan HMIF USK (2023 – 2024)',
    ],
    relevantCourses: [
      'Data Mining',
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Information Retrieval',
      'Visualisasi Data',
      'Komputasi Numerik',
      'Basis Data',
    ],
    universityUrl: 'https://www.usk.ac.id',
  },
];
