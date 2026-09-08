// ─── Profile ──────────────────────────────────────────────
export interface Profile {
  name: string;
  title: string;
  tagline: string;
  shortIntroduction: string;
  about: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  portfolioUrl: string;
  resumeUrl?: string;
  profilePhoto?: string;
  stats: ProfileStat[];
  services: Service[];
}

export interface ProfileStat {
  label: string;
  value: string;
}

// ─── Social Links ─────────────────────────────────────────
export interface SocialLink {
  label: string;
  url: string;
  icon: string; // lucide icon name
}

// ─── Skills ───────────────────────────────────────────────
export type SkillLevel = 'experienced' | 'familiar' | 'learning';

export interface Skill {
  name: string;
  level?: SkillLevel;
  icon?: string;
}

export interface SkillCategoryData {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

// ─── Experience ───────────────────────────────────────────
export type EmploymentType =
  | 'Full-time'
  | 'Part-time'
  | 'Contract'
  | 'Freelance'
  | 'Internship'
  | 'Volunteer';

export interface Experience {
  id: string;
  company: string;
  position: string;
  employmentType: EmploymentType;
  startDate: string;
  endDate: string | 'Present';
  location: string;
  locationType?: 'Remote' | 'On-site' | 'Hybrid';
  description: string;
  responsibilities: string[];
  technologies: string[];
  companyUrl?: string;
}

// ─── Education ────────────────────────────────────────────
export interface Education {
  id: string;
  university: string;
  faculty: string;
  major: string;
  degree: string;
  startYear: string;
  endYear: string | 'Present';
  gpa?: string;
  maxGpa?: string;
  activities?: string[];
  relevantCourses?: string[];
  universityUrl?: string;
}

// ─── Projects ─────────────────────────────────────────────
export type ProjectCategory =
  | 'All'
  | 'Web Development'
  | 'Data Analysis'
  | 'Machine Learning'
  | 'Computer Vision'
  | 'Data Mining'
  | 'Mobile'
  | 'Other';

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: Exclude<ProjectCategory, 'All'>;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  role?: string;
  // Detail page fields
  overview?: string;
  problem?: string;
  objective?: string;
  solution?: string;
  features?: string[];
  challenges?: string[];
  results?: string;
  lessonsLearned?: string;
  screenshots?: string[];
}

// ─── Certifications ───────────────────────────────────────
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
}

// ─── Achievements ─────────────────────────────────────────
export type AchievementType = 'competition' | 'award' | 'academic' | 'scholarship' | 'organization' | 'other';

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: AchievementType;
  rank?: string;
  link?: string;
}

// ─── Services ─────────────────────────────────────────────
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// ─── Contact Form ─────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// ─── Navigation ───────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  id: string;
}

// ─── Theme ────────────────────────────────────────────────
export type Theme = 'light' | 'dark';
