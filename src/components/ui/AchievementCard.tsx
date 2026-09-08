import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { isPlaceholder } from '@/lib/utils';
import type { Achievement, AchievementType } from '@/types';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const typeConfig: Record<AchievementType, { icon: string; color: string; bg: string }> = {
  competition: { icon: 'Trophy', color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-50 dark:bg-yellow-500/10' },
  award: { icon: 'Award', color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-500/10' },
  academic: { icon: 'GraduationCap', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-500/10' },
  scholarship: { icon: 'Star', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-500/10' },
  organization: { icon: 'Users', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
  other: { icon: 'Medal', color: 'text-slate-600 dark:text-slate-400', bg: 'bg-slate-50 dark:bg-slate-800/50' },
};

export function AchievementCard({ achievement, index }: AchievementCardProps) {
  const config = typeConfig[achievement.type];
  const IconComponent = (Icons as any)[config.icon] || Icons.Award;
  const hasLink = achievement.link && !isPlaceholder(achievement.link);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700/50 dark:bg-slate-800/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/30"
    >
      {/* Icon */}
      <div className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-xl', config.bg, config.color)}>
        <IconComponent size={20} />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm leading-snug">
            {achievement.title}
          </h3>
          {achievement.rank && (
            <span className="shrink-0 rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-bold text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400">
              {achievement.rank}
            </span>
          )}
        </div>
        <p className="mb-1 text-sm font-medium text-primary-500 dark:text-primary-400">
          {achievement.organization}
        </p>
        <p className="mb-2 text-xs text-slate-500 dark:text-slate-400">{achievement.date}</p>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {achievement.description}
        </p>
        {hasLink && (
          <a
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs text-primary-500 hover:underline dark:text-primary-400"
          >
            <ExternalLink size={11} />
            View details
          </a>
        )}
      </div>
    </motion.article>
  );
}
