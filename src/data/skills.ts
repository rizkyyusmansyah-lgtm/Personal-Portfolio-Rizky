import type { SkillCategoryData } from '@/types';

export const skillCategories: SkillCategoryData[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 'experienced' },
      { name: 'SQL', level: 'experienced' },
      { name: 'JavaScript', level: 'familiar' },
    ],
  },
  {
    id: 'data-ai',
    title: 'Data & AI / Machine Learning',
    icon: 'Brain',
    skills: [
      { name: 'Machine Learning', level: 'experienced' },
      { name: 'Deep Learning', level: 'experienced' },
      { name: 'Data Analysis', level: 'experienced' },
      { name: 'Data Science', level: 'experienced' },
      { name: 'Computer Vision', level: 'familiar' },
      { name: 'Data Mining', level: 'familiar' },
      { name: 'Statistical Data Analysis', level: 'experienced' },
      { name: 'Data Visualization', level: 'experienced' },
      { name: 'Data Wrangling & Cleaning', level: 'experienced' },
      { name: 'Regresi Data Panel', level: 'familiar' },
      { name: 'Scikit-learn', level: 'experienced' },
      { name: 'PyTorch', level: 'familiar' },
      { name: 'Pandas', level: 'experienced' },
      { name: 'NumPy', level: 'experienced' },
    ],
  },
  {
    id: 'frontend',
    title: 'Web Development',
    icon: 'Layout',
    skills: [
      { name: 'Next.js', level: 'familiar' },
      { name: 'Web Development', level: 'familiar' },
      { name: 'D3.js', level: 'familiar' },
      { name: 'HTML/CSS', level: 'familiar' },
      { name: 'Streamlit', level: 'experienced' },
    ],
  },
  {
    id: 'database',
    title: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: 'experienced' },
      { name: 'MongoDB', level: 'familiar' },
      { name: 'DBeaver', level: 'familiar' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 'experienced' },
      { name: 'Power BI', level: 'experienced' },
      { name: 'Google Looker Studio', level: 'experienced' },
      { name: 'Jupyter Notebook', level: 'experienced' },
      { name: 'Microsoft Excel', level: 'experienced' },
      { name: 'Web Scraping', level: 'familiar' },
      { name: 'Virtual Environment (venv)', level: 'experienced' },
      { name: 'System Documentation', level: 'familiar' },
    ],
  },
];
