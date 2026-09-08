import { motion } from 'framer-motion';
import { ArrowDown, Download, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { scrollToSection, isPlaceholder } from '@/lib/utils';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function HeroSection() {
  const hasResume = profile.resumeUrl && !isPlaceholder(profile.resumeUrl);
  const hasPhoto = profile.profilePhoto && !isPlaceholder(profile.profilePhoto);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="section-container relative z-10 w-full py-24 md:py-32">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <motion.p
              variants={itemVariants}
              className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-primary-400"
            >
              <span className="h-px w-6 bg-primary-500 dark:bg-primary-400" aria-hidden="true" />
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl"
            >
              {profile.name === '[FULL_NAME]' ? (
                <span className="gradient-text">[FULL_NAME]</span>
              ) : (
                <>
                  {profile.name.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="gradient-text">
                    {profile.name.split(' ').slice(-1)}
                  </span>
                </>
              )}
            </motion.h1>

            {/* Professional Title — animated typewriter */}
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-base font-medium text-slate-500 dark:text-slate-400 sm:text-lg">
                I'm a{' '}
                <TypewriterText
                  texts={
                    profile.title === '[PROFESSIONAL_TITLE]'
                      ? ['Developer', 'Designer', 'Problem Solver']
                      : profile.title.split('•').map((t) => t.trim())
                  }
                  className="font-semibold text-primary-500 dark:text-primary-400"
                  speed={65}
                  pause={2200}
                />
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="mb-4 text-xl font-medium leading-snug text-slate-700 dark:text-slate-300 sm:text-2xl"
            >
              {profile.tagline}
            </motion.p>

            {/* Short Introduction */}
            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-400"
            >
              {profile.shortIntroduction}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="mb-8 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('projects')}
                rightIcon={<ArrowDown size={16} />}
              >
                View My Work
              </Button>
              {hasResume ? (
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" leftIcon={<Download size={16} />}>
                    Download Resume
                  </Button>
                </a>
              ) : (
                <Button variant="outline" size="lg" leftIcon={<Download size={16} />} disabled>
                  Resume Coming Soon
                </Button>
              )}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <SocialLinks
                github={profile.github}
                linkedin={profile.linkedin}
                email={profile.email}
              />
            </motion.div>
          </motion.div>

          {/* Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Profile Photo or Placeholder */}
              <div
                className={cn(
                  'relative h-72 w-72 overflow-hidden rounded-2xl sm:h-80 sm:w-80',
                  'border-2 border-primary-200/50 dark:border-primary-500/20',
                  'shadow-2xl shadow-primary-500/10'
                )}
              >
                {hasPhoto ? (
                  <img
                    src={profile.profilePhoto}
                    alt={`Portrait of ${profile.name}`}
                    className="h-full w-full object-cover"
                    fetchPriority="high"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 text-4xl font-bold text-primary-500 dark:bg-primary-500/20 dark:text-primary-400">
                        {profile.name === '[FULL_NAME]' ? '?' : profile.name.charAt(0)}
                      </div>
                      <p className="text-xs text-slate-400">Add profile photo</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating decoration cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 bottom-8 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-slate-800"
                aria-hidden="true"
              >
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">📍 {profile.location === '[LOCATION]' ? 'Your Location' : profile.location}</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-8 top-8 rounded-xl border border-primary-100 bg-primary-50 px-4 py-3 shadow-lg dark:border-primary-500/20 dark:bg-primary-500/10"
                aria-hidden="true"
              >
                <p className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                  ✨ Open to Opportunities
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-slate-400 transition-colors hover:text-primary-500 dark:hover:text-primary-400"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
