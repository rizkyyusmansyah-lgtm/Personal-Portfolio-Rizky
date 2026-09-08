import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ExperienceCard } from '@/components/ui/ExperienceCard';
import { experiences } from '@/data/experience';

// Dot accent colours matching card palette
const dotPalette = [
  { dot: 'bg-blue-400',   ring: 'border-blue-400/40',   shadow: 'shadow-blue-400/70'   },
  { dot: 'bg-violet-400', ring: 'border-violet-400/40', shadow: 'shadow-violet-400/70' },
  { dot: 'bg-cyan-400',   ring: 'border-cyan-400/40',   shadow: 'shadow-cyan-400/70'   },
  { dot: 'bg-indigo-400', ring: 'border-indigo-400/40', shadow: 'shadow-indigo-400/70' },
];

function TimelineDot({ index }: { index: number }) {
  const p = dotPalette[index % dotPalette.length];
  return (
    <div className="relative flex items-center justify-center w-8 h-8">
      {/* Outer pulsing ring — shows on parent group hover */}
      <div
        className={cn(
          'absolute h-8 w-8 rounded-full border-2 opacity-0 scale-75',
          'transition-all duration-500 group-hover:opacity-100 group-hover:scale-100',
          p.ring,
        )}
      />
      {/* Mid ring */}
      <div
        className={cn(
          'absolute h-5 w-5 rounded-full border opacity-20 transition-all duration-300 group-hover:opacity-50',
          p.ring,
        )}
      />
      {/* Core dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.09, type: 'spring', stiffness: 280, damping: 18 }}
        className={cn(
          'relative z-10 h-3.5 w-3.5 rounded-full shadow-lg',
          p.dot,
          p.shadow,
        )}
      >
        {/* Shine */}
        <div className="absolute inset-[3px] rounded-full bg-white/40" />
      </motion.div>
    </div>
  );
}

export function ExperienceSection() {
  if (experiences.length === 0) {
    return (
      <section id="experience" aria-labelledby="experience-heading" className="py-20 md:py-28">
        <div className="section-container">
          <SectionHeading
            eyebrow="Work Experience"
            title="Where I've Worked"
            subtitle="My professional journey and the impact I've made along the way."
          />
          <div className="rounded-xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-700">
            <p className="text-slate-400 dark:text-slate-500">Work experience will be added soon.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Work Experience"
          title="Where I've Worked"
          subtitle="My professional journey and the impact I've made along the way."
        />

        {/* ════════════════════════════════════════════
            DESKTOP: Alternating left–right timeline
            MOBILE:  Single-column list with left line
            ════════════════════════════════════════════ */}

        {/* ── MOBILE layout (< md) ──────────────────── */}
        <div className="mt-10 flex flex-col gap-6 md:hidden">
          {/* Left edge line */}
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/80 via-violet-400/50 to-transparent" />
            <div className="flex flex-col gap-8">
              {experiences.map((exp, index) => {
                const p = dotPalette[index % dotPalette.length];
                return (
                  <div key={exp.id} className="group relative">
                    {/* Mobile dot */}
                    <div className={cn('absolute -left-[1.4rem] top-7 h-3 w-3 rounded-full shadow-md', p.dot, p.shadow)} />
                    <ExperienceCard experience={exp} index={index} side="right" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── DESKTOP layout (≥ md) ─────────────────── */}
        <div className="relative mt-12 hidden md:block">

          {/* Central vertical line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] overflow-hidden rounded-full"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full origin-top bg-gradient-to-b from-blue-400 via-violet-400/70 via-cyan-400/50 to-slate-600/10"
            />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className="group relative grid grid-cols-[1fr_auto_1fr] items-center gap-0"
                >
                  {/* ── Left column ── */}
                  <div className={cn('flex justify-end pr-10', !isLeft && 'items-center')}>
                    {isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: -48 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.55, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="w-full max-w-[480px]"
                      >
                        <ExperienceCard experience={exp} index={index} side="left" />
                      </motion.div>
                    ) : (
                      /* Date label on the empty side */
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.06 + 0.2 }}
                        className="text-right"
                      >
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400/50 dark:text-slate-600">
                          {exp.startDate}
                        </p>
                        <p className="text-xs text-slate-300/40 dark:text-slate-700">
                          {exp.endDate !== exp.startDate ? `— ${exp.endDate}` : ''}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* ── Center dot ── */}
                  <div className="relative z-10 flex shrink-0 items-center justify-center">
                    <TimelineDot index={index} />
                  </div>

                  {/* ── Right column ── */}
                  <div className={cn('flex justify-start pl-10', isLeft && 'items-center')}>
                    {!isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: 48 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.55, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="w-full max-w-[480px]"
                      >
                        <ExperienceCard experience={exp} index={index} side="right" />
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.06 + 0.2 }}
                      >
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400/50 dark:text-slate-600">
                          {exp.startDate}
                        </p>
                        <p className="text-xs text-slate-300/40 dark:text-slate-700">
                          {exp.endDate !== exp.startDate ? `— ${exp.endDate}` : ''}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom line cap */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="h-2.5 w-2.5 rounded-full bg-slate-300/40 ring-1 ring-slate-400/20 dark:bg-slate-700/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
