import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FilterButtonsProps {
  categories: readonly string[];
  activeCategory: string;
  onSelect: (category: string) => void;
  className?: string;
}

export function FilterButtons({
  categories,
  activeCategory,
  onSelect,
  className,
}: FilterButtonsProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className={cn('flex flex-wrap gap-2', className)}
    >
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(category)}
            className={cn(
              'relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
              isActive
                ? 'text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
            )}
          >
            {isActive && (
              <motion.span
                layoutId="active-filter"
                className="absolute inset-0 rounded-full bg-primary-500"
                transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
