import { motion } from 'framer-motion';
import { MapPin, Mail, Download } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { isPlaceholder } from '@/lib/utils';
import { profile } from '@/data/profile';

export function AboutSection() {
  const hasPhoto = profile.profilePhoto && !isPlaceholder(profile.profilePhoto);
  const hasResume = profile.resumeUrl && !isPlaceholder(profile.resumeUrl);

  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
          subtitle="A brief look at my background, interests, and professional direction."
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Photo / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="relative"
            >
              {/* Main image container */}
              <div className="relative h-80 w-72 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 shadow-xl">
                {hasPhoto ? (
                  <img
                    src={profile.profilePhoto}
                    alt={`Portrait of ${profile.name}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-primary-100 text-5xl font-bold text-primary-500 dark:bg-primary-500/20 dark:text-primary-400">
                        {profile.name === '[FULL_NAME]' ? '?' : profile.name.charAt(0)}
                      </div>
                      <p className="text-xs text-slate-400">Profile photo</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Decorative offset border */}
              <div
                className="absolute -bottom-3 -right-3 h-80 w-72 rounded-2xl border-2 border-primary-500/20 dark:border-primary-500/30"
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* About Text */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 whitespace-pre-line">
                {profile.about}
              </p>
            </div>

            {/* Info Grid */}
            <div className="flex flex-col gap-3">
              {!isPlaceholder(profile.location) && (
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <MapPin size={16} className="shrink-0 text-primary-500" aria-hidden="true" />
                  <span>{profile.location}</span>
                </div>
              )}
              {!isPlaceholder(profile.email) && (
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <Mail size={16} className="shrink-0 text-primary-500" aria-hidden="true" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:text-primary-500 hover:underline dark:hover:text-primary-400"
                  >
                    {profile.email}
                  </a>
                </div>
              )}
            </div>

            {/* Stats */}
            {profile.stats.some((s) => !isPlaceholder(s.value)) && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {profile.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center dark:border-slate-700/50 dark:bg-slate-800/30"
                  >
                    <p className="text-2xl font-bold text-primary-500 dark:text-primary-400">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Resume Download */}
            {hasResume && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start"
              >
                <Button variant="outline" size="md" leftIcon={<Download size={16} />}>
                  Download Resume
                </Button>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
