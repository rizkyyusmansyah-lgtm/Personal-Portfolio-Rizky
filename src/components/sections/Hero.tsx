import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AnimatedRobot } from '@/components/ui/AnimatedRobot';

// ── Animation Variants ──────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

// ── Squiggle Underline SVG ───────────────────────────────────────
const SquiggleUnderline = () => (
  <svg
    viewBox="0 0 220 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full mt-1 overflow-visible"
    aria-hidden="true"
  >
    <motion.path
      d="M2 8 C28 2, 48 14, 72 8 S116 2, 140 8 S184 14, 218 8"
      stroke="url(#squiggleGrad)"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
    />
    <defs>
      <linearGradient id="squiggleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#dc2626" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
  </svg>
);

// ── Blob / Orbit Right Column ────────────────────────────────────
const ProfileVisual = () => (
  <div className="relative flex items-center justify-center w-full h-full min-h-[480px] lg:min-h-[640px]">
    {/* Subtle dot-grid in top right */}
    <div
      className="absolute -top-8 -right-8 w-40 h-40 opacity-20 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }}
      aria-hidden="true"
    />

    {/* Large background blob */}
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{ y: [0, -26, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 580 580" className="w-[460px] h-[460px] lg:w-[580px] lg:h-[580px]">
        <defs>
          <radialGradient id="blobGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#0f172a" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#020617" stopOpacity="1" />
          </radialGradient>
          <filter id="blobGlow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {/* Glow ring */}
        <ellipse cx="290" cy="290" rx="250" ry="260" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.15" />
        {/* Main blob */}
        <path
          d="M290,70 C375,65 470,130 495,215 C520,300 485,420 400,468 C315,516 185,510 125,435 C65,360 75,225 135,155 C195,85 205,75 290,70 Z"
          fill="url(#blobGrad)"
          filter="url(#blobGlow)"
        />
        {/* Inner accent glow */}
        <path
          d="M290,95 C365,91 450,150 471,228 C492,306 460,412 385,455 C310,498 188,492 132,424 C76,356 88,235 142,170 C196,105 215,99 290,95 Z"
          fill="none"
          stroke="#a855f7"
          strokeWidth="1"
          opacity="0.25"
        />
      </svg>
    </motion.div>

    {/* Orbit ring */}
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 580 580" className="w-[460px] h-[460px] lg:w-[580px] lg:h-[580px]">
        <ellipse
          cx="290" cy="290" rx="238" ry="252"
          fill="none"
          stroke="url(#orbitGrad)"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          opacity="0.5"
        />
        {/* Orbit dots */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 290 + 238 * Math.cos(rad);
          const cy = 290 + 252 * Math.sin(rad);
          return (
            <circle key={i} cx={cx} cy={cy} r="6" fill={i % 2 === 0 ? '#22d3ee' : '#a855f7'} opacity="0.9" />
          );
        })}
        <defs>
          <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>

    {/* Profile picture */}
    <motion.div
      className="relative z-10"
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div
        className="relative overflow-hidden border-[3px] border-white/20 shadow-2xl shadow-red-600/10"
        style={{
          borderRadius: '60% 40% 55% 45% / 45% 55% 45% 55%',
          width: '300px',
          height: '340px',
        }}
      >
        <img
          src="/IMG_0005-merah.jpg"
          alt="Rizky Yusmansyah"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Subtle inner glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-600/8 to-transparent" />
      </div>
    </motion.div>

    {/* Sparkle icons */}
    {[
      { top: '8%', right: '12%', delay: 0 },
      { top: '70%', right: '5%', delay: 0.6 },
      { top: '20%', left: '5%', delay: 1.2 },
    ].map((pos, i) => (
      <motion.div
        key={i}
        className="absolute text-red-400 pointer-events-none"
        style={pos}
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: pos.delay }}
        aria-hidden="true"
      >
        <Sparkles className="w-4 h-4 lg:w-5 lg:h-5" />
      </motion.div>
    ))}

    {/* Pulsing orbit dots (separate, stationary glow) */}
    {[
      { top: '5%', left: '50%', color: '#dc2626', delay: 0 },
      { top: '50%', right: '2%', color: '#dc2626', delay: 0.8 },
      { bottom: '8%', left: '45%', color: '#dc2626', delay: 1.6 },
    ].map((dot, i) => (
      <motion.span
        key={i}
        className="absolute w-2 h-2 rounded-full pointer-events-none"
        style={{ backgroundColor: dot.color, ...dot }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: dot.delay }}
        aria-hidden="true"
      />
    ))}
  </div>
);

// ── Hero Section ─────────────────────────────────────────────────
export const Hero = () => {
  const { t, language } = useLanguage();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent"
    >
      {/* Background dot-grid top-left */}
      <div
        className="absolute top-0 left-0 w-72 h-72 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/4 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/3 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Animated Robot Background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/4 opacity-10 lg:opacity-20 pointer-events-none z-0 scale-[1.5] lg:scale-[2]">
        <AnimatedRobot />
      </div>

      <div className="container mx-auto px-6 lg:px-16 max-w-7xl w-full py-24 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            className="flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Active role badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-mono tracking-widest text-foreground/80 uppercase backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Open to opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="mb-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground leading-[1.1] tracking-tight">
                {t.hero.greeting}
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6 w-full max-w-sm lg:max-w-md">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Rizky Yusmansyah
              </h1>
              {/* Squiggle underline beneath the name */}
              <SquiggleUnderline />
            </motion.div>

            {/* Role title */}
            <motion.p
              variants={itemVariants}
              className="text-base lg:text-lg font-mono text-primary tracking-wide mb-5 uppercase"
            >
              AI &amp; Machine Learning Enthusiast
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-10 max-w-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,211,238,0.3)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="px-7 py-3 bg-foreground text-background font-bold rounded-full text-sm tracking-wide relative overflow-hidden group"
              >
                <span className="relative z-10 group-hover:text-foreground transition-colors duration-300">
                  {language === 'id' ? 'Hubungi Saya' : 'Contact Me'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168,85,247,0.2)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="px-7 py-3 bg-transparent border border-foreground/20 text-foreground font-semibold rounded-full text-sm tracking-wide backdrop-blur-sm hover:border-foreground/40 hover:bg-foreground/5 transition-colors duration-300"
              >
                {language === 'id' ? 'Lihat Proyek' : 'View Projects'}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <ProfileVisual />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll to explore ── */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        aria-label="Scroll to explore"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-mono">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
};
