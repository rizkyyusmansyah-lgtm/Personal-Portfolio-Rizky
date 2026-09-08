import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 md:mb-16', centered && 'text-center', className)}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-primary-400"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            'mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg',
            centered && 'mx-auto'
          )}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ originX: centered ? 0.5 : 0 }}
        className={cn(
          'mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-400',
          centered && 'mx-auto'
        )}
      />
    </div>
  );
}
