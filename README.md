# Personal Portfolio Website

A modern, professional personal portfolio website built with **React + Vite + TypeScript + Tailwind CSS**.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.x | UI Framework |
| Vite | 5.x | Build tool & dev server |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Utility-first styling |
| React Router v6 | 6.x | Client-side routing |
| Framer Motion | 11.x | Animations |
| Lucide React | latest | Icons |
| clsx + tailwind-merge | latest | Class utilities |

## Getting Started

### Prerequisites

- **Node.js** v18+ (https://nodejs.org)
- **npm** v9+ (comes with Node.js)

### Installation

```bash
# Clone or download the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the site.

### Build for Production

```bash
npm run build
npm run preview   # Preview the built site
```

## ✏️ Filling In Your Data

All personal data is stored in `src/data/`. Replace all `[PLACEHOLDER]` values with your real data.

### 1. Profile & General Info

**File:** [`src/data/profile.ts`](src/data/profile.ts)

```ts
export const profile = {
  name: 'Your Full Name',
  title: 'Software Developer • Data Analyst',
  tagline: 'Your memorable tagline',
  about: 'Your about description...',
  location: 'City, Country',
  email: 'you@email.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  resumeUrl: '/resume.pdf',       // Put your resume PDF in /public/
  profilePhoto: '/profile.jpg',   // Put your photo in /public/
  ...
};
```

### 2. Skills

**File:** [`src/data/skills.ts`](src/data/skills.ts)

```ts
skills: [
  { name: 'Python', level: 'experienced' },
  { name: 'React', level: 'familiar' },
]
```

Levels: `experienced` | `familiar` | `learning`

### 3. Work Experience

**File:** [`src/data/experience.ts`](src/data/experience.ts)

### 4. Education

**File:** [`src/data/education.ts`](src/data/education.ts)

### 5. Projects

**File:** [`src/data/projects.ts`](src/data/projects.ts)

Set `featured: true` for your best 1–2 projects (they'll appear larger).

### 6. Certifications

**File:** [`src/data/certifications.ts`](src/data/certifications.ts)

### 7. Achievements

**File:** [`src/data/achievements.ts`](src/data/achievements.ts)

## 📁 Project Structure

```
src/
├── assets/
├── components/
│   ├── layout/         # Navbar, Footer
│   ├── sections/       # All page sections
│   └── ui/             # Reusable components
├── data/               # ✏️ YOUR DATA GOES HERE
├── hooks/              # Custom React hooks
├── lib/                # Utilities
├── pages/              # Page components
├── styles/             # Global CSS
├── types/              # TypeScript types
├── App.tsx
└── main.tsx
```

## 🎨 Customizing the Design

- **Colors:** Edit `tailwind.config.js` → `theme.extend.colors`
- **Dark mode:** Toggle via the moon/sun button. Preference saved in localStorage.
- **Fonts:** Edit `index.html` Google Fonts link + `tailwind.config.js`

## 📬 Contact Form Integration

The contact form currently simulates submission. To make it functional, edit `src/components/ui/ContactForm.tsx` and replace the placeholder with:

**Formspree** (easiest):
```ts
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: { 'Content-Type': 'application/json' }
});
```

**EmailJS**:
```ts
await emailjs.send(serviceId, templateId, formData, publicKey);
```

## 🚀 Deployment

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the /dist folder to netlify.com
```

### GitHub Pages
```bash
# Set base in vite.config.ts:
# base: '/your-repo-name/'
npm run build
# Push /dist to gh-pages branch
```

## License

MIT — Feel free to use and customize for your own portfolio.
