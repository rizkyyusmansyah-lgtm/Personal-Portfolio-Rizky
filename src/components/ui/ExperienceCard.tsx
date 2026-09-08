import { MapPin, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { isPlaceholder } from '@/lib/utils';
import type { Experience } from '@/types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  side: 'left' | 'right';
}

const employmentTypeConfig: Record<string, { label: string; className: string }> = {
  'Full-time':  { label: 'Full-time',  className: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
  'Part-time':  { label: 'Part-time',  className: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  'Contract':   { label: 'Contract',   className: 'bg-orange-500/15 text-orange-400 border-orange-500/30' },
  'Freelance':  { label: 'Freelance',  className: 'bg-purple-500/15 text-purple-400 border-purple-500/30' },
  'Internship': { label: 'Magang',     className: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' },
  'Volunteer':  { label: 'Volunteer',  className: 'bg-rose-500/15 text-rose-400 border-rose-500/30' },
};

// Per-card accent colour cycling through blue → violet → cyan → indigo
const accentPalette = [
  {
    dot:       'bg-blue-400 shadow-blue-400/60',
    ring:      'border-blue-400/40',
    bar:       'from-blue-400 via-blue-500 to-cyan-400',
    blob:      'from-blue-500/20 via-cyan-400/10 to-transparent',
    bullet:    'bg-blue-400',
    techHover: 'hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-400',
  },
  {
    dot:       'bg-violet-400 shadow-violet-400/60',
    ring:      'border-violet-400/40',
    bar:       'from-violet-400 via-violet-500 to-purple-400',
    blob:      'from-violet-500/20 via-purple-400/10 to-transparent',
    bullet:    'bg-violet-400',
    techHover: 'hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-400',
  },
  {
    dot:       'bg-cyan-400 shadow-cyan-400/60',
    ring:      'border-cyan-400/40',
    bar:       'from-cyan-400 via-cyan-500 to-teal-400',
    blob:      'from-cyan-500/20 via-teal-400/10 to-transparent',
    bullet:    'bg-cyan-400',
    techHover: 'hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-400',
  },
  {
    dot:       'bg-indigo-400 shadow-indigo-400/60',
    ring:      'border-indigo-400/40',
    bar:       'from-indigo-400 via-indigo-500 to-blue-400',
    blob:      'from-indigo-500/20 via-blue-400/10 to-transparent',
    bullet:    'bg-indigo-400',
    techHover: 'hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-400',
  },
];

export function ExperienceCard({ experience, index, side }: ExperienceCardProps) {
  const hasCompanyUrl = experience.companyUrl && !isPlaceholder(experience.companyUrl);
  const typeConfig = employmentTypeConfig[experience.employmentType] || employmentTypeConfig['Full-time'];
  const accent = accentPalette[index % accentPalette.length];
  const isLeft = side === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-sm
                 shadow-md shadow-slate-200/40
                 dark:border-slate-700/50 dark:bg-slate-900/70 dark:shadow-black/30
                 transition-all duration-400 ease-out
                 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-300/40
                 dark:hover:shadow-black/50 dark:hover:border-slate-600/60
                 cursor-default"
    >
      {/* ── Animated gradient top border ── */}
      <div
        className={cn(
          'absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100',
          accent.bar,
        )}
      />

      {/* ── Decorative blob in corner (mirrors screenshot) ── */}
      <div
        className={cn(
          'pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gradient-to-br opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70',
          accent.blob,
        )}
      />

      {/* ── Bottom glow on hover ── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative p-6 sm:p-7">
        {/* Row 1: year + badge */}
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-lg border border-slate-200/70 bg-slate-100/80 px-2.5 py-1 dark:border-slate-700/60 dark:bg-slate-800/60">
            <Calendar size={11} className="text-slate-400" />
            <span className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
              {experience.startDate} — {experience.endDate}
            </span>
          </div>

          <span
            className={cn(
              'rounded-lg border px-2.5 py-1 text-xs font-bold uppercase tracking-wide',
              typeConfig.className,
            )}
          >
            {typeConfig.label}
          </span>
        </div>

        {/* Row 2: Position title */}
        <h3 className="mb-1 text-xl font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-slate-800 dark:text-slate-100 dark:group-hover:text-white">
          {experience.position}
        </h3>

        {/* Row 3: Company + location */}
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
          {hasCompanyUrl ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-semibold text-blue-500 hover:underline dark:text-blue-400"
            >
              <Building2 size={13} />
              {experience.company}
              <ExternalLink size={11} className="opacity-60" />
            </a>
          ) : (
            <span className="flex items-center gap-1 text-sm font-semibold text-blue-500 dark:text-blue-400">
              <Building2 size={13} />
              {experience.company}
            </span>
          )}

          <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
            <MapPin size={11} />
            {experience.location}
            {experience.locationType && ` · ${experience.locationType}`}
          </span>
        </div>

        {/* Separator */}
        <div className="mb-4 h-px bg-gradient-to-r from-slate-200 via-slate-100 to-transparent dark:from-slate-700/60 dark:via-slate-800/30" />

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {experience.description}
        </p>

        {/* Responsibilities */}
        {experience.responsibilities.length > 0 && (
          <ul className="mb-5 space-y-2">
            {experience.responsibilities.slice(0, 4).map((resp, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                <span className={cn('mt-2 h-1.5 w-1.5 shrink-0 rounded-full', accent.bullet)} />
                {resp}
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack */}
        {experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className={cn(
                  'rounded-md border border-slate-200/80 bg-slate-100/80 px-2.5 py-0.5 text-xs font-medium',
                  'text-slate-500 transition-all duration-150',
                  'dark:border-slate-700/60 dark:bg-slate-800/60 dark:text-slate-400',
                  accent.techHover,
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
