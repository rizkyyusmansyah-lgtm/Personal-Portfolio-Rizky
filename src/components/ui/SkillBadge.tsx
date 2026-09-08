import { cn } from '@/lib/utils';
import type { SkillLevel } from '@/types';

interface SkillBadgeProps {
  name: string;
  level?: SkillLevel;
  className?: string;
}

const levelConfig: Record<SkillLevel, { label: string; color: string }> = {
  experienced: { label: 'Experienced', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' },
  familiar: { label: 'Familiar', color: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400' },
  learning: { label: 'Learning', color: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400' },
};

export function SkillBadge({ name, level, className }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        'group relative flex items-center gap-2 rounded-lg border px-3 py-2.5',
        'border-slate-200 bg-white dark:border-slate-700/50 dark:bg-slate-800/50',
        'transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-md',
        'dark:hover:border-primary-600/50 dark:hover:bg-slate-800',
        className
      )}
    >
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
      {level && (
        <span
          className={cn(
            'hidden rounded-full px-2 py-0.5 text-xs font-medium group-hover:inline-block',
            levelConfig[level].color
          )}
        >
          {levelConfig[level].label}
        </span>
      )}
    </div>
  );
}
