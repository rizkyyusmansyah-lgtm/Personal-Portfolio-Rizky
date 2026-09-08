import type { Profile } from '@/types';

export const profile: Profile = {
  name: 'Rizky Yusmansyah',
  title: 'Data Scientist & Data Analyst',
  tagline: 'Turning Raw Data into Meaningful Insights',
  shortIntroduction:
    'Fresh graduate in Informatics with hands-on experience in Data Science, Data Analysis, and Machine Learning. Passionate about building end-to-end data workflows and creating impactful visualizations.',
  about:
    'Lulusan S1 Informatika Universitas Syiah Kuala dengan pengalaman di bidang Data Science, Data Analysis, dan Machine Learning melalui pengalaman magang di instansi pemerintah dan program pelatihan vokasi nasional. Terampil menangani alur kerja data secara menyeluruh, mulai dari pembersihan dan transformasi data, exploratory data analysis (EDA), hingga pemodelan machine learning dan visualisasi hasil menggunakan Python, SQL, dan Power BI. Berkomitmen mengembangkan karier di bidang Data Science dan Data Analytics, serta terbuka terhadap berbagai peluang karier yang relevan.',
  location: 'Aceh, Indonesia',
  email: 'rizkyyusmansyah@gmail.com',
  phone: '0812-1134-9840',
  github: 'https://github.com/rizky-yusmansyah',
  linkedin: 'https://linkedin.com/in/rizky-yusmansyah',
  portfolioUrl: '',
  resumeUrl: '/cv_raza_fixed.pdf',
  profilePhoto: '',

  // ── Statistics (shown in About section) ──
  stats: [
    { label: 'Projects', value: '10+' },
    { label: 'Certifications', value: '5+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Years Learning', value: '4+' },
  ],

  // ── Services (What I Do section) ──
  services: [
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      description:
        'End-to-end data workflows including data cleaning, transformation, exploratory data analysis (EDA), and statistical analysis to extract actionable insights.',
      icon: 'BarChart2',
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      description:
        'Building and evaluating machine learning models using Python (scikit-learn, PyTorch) for classification, regression, and predictive analytics tasks.',
      icon: 'Brain',
    },
    {
      id: 'data-viz',
      title: 'Data Visualization',
      description:
        'Creating interactive and compelling dashboards and reports using Power BI, Google Looker Studio, D3.js, and Streamlit to communicate data-driven stories.',
      icon: 'LineChart',
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      description:
        'Developing dynamic web-based data visualization systems and full-stack applications using Next.js, JavaScript, and modern web technologies.',
      icon: 'Globe',
    },
  ],
};

export const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Achievements', href: '#achievements', id: 'achievements' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];
