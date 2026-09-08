import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Theme } from '@/types';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  className?: string;
}

export function ThemeToggle({ theme, onToggle, className }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative flex h-9 w-9 items-center justify-center rounded-lg',
        'text-slate-500 transition-all duration-200',
        'hover:bg-slate-100 hover:text-slate-900',
        'dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="absolute"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
