import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

function MarqueeRow({ items, direction = 'left', speed = 30, className }: MarqueeProps) {
  const doubled = [...items, ...items]; // duplicate for seamless loop

  return (
    <div className={cn('flex overflow-hidden', className)}>
      <motion.div
        className="flex shrink-0 gap-6 pr-6"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{
          ease: 'linear',
          duration: speed,
          repeat: Infinity,
        }}
        style={{ willChange: 'transform' }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm dark:border-slate-700/50 dark:bg-slate-800/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden="true" />
            <span className="whitespace-nowrap text-sm font-medium text-slate-700 dark:text-slate-300">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

interface TechMarqueeSectionProps {
  row1?: string[];
  row2?: string[];
}

const defaultRow1 = [
  'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js',
  'TensorFlow', 'Pandas', 'Git', 'Docker', 'PostgreSQL',
];
const defaultRow2 = [
  'Scikit-learn', 'HTML/CSS', 'Tailwind CSS', 'MySQL', 'NumPy',
  'Linux', 'REST API', 'Figma', 'VS Code', 'GitHub',
];

export function TechMarqueeSection({ row1 = defaultRow1, row2 = defaultRow2 }: TechMarqueeSectionProps) {
  return (
    <section aria-label="Technology stack" className="overflow-hidden py-12 border-y border-slate-200/50 dark:border-slate-800/50 bg-slate-50/30 dark:bg-navy-800/20">
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Technologies I Work With
        </p>
      </div>
      {/* Fade masks on edges */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent dark:from-navy-900/80" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent dark:from-navy-900/80" aria-hidden="true" />
        <div className="flex flex-col gap-4">
          <MarqueeRow items={row1} direction="left" speed={35} />
          <MarqueeRow items={row2} direction="right" speed={28} />
        </div>
      </div>
    </section>
  );
}
