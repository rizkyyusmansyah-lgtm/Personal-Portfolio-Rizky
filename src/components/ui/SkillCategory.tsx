import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { SkillBadge } from './SkillBadge';
import type { SkillCategoryData } from '@/types';

interface SkillCategoryProps {
  category: SkillCategoryData;
  index: number;
}

export function SkillCategory({ category, index }: SkillCategoryProps) {
  // Dynamically get icon from lucide-react
  const IconComponent = (Icons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[
    category.icon
  ] || Icons.Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700/50 dark:bg-slate-800/30"
    >
      {/* Category Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-500 dark:bg-primary-500/10 dark:text-primary-400">
          <IconComponent size={20} />
        </div>
        <h3 className="font-semibold text-slate-900 dark:text-slate-100">{category.title}</h3>
      </div>

      {/* Skills Grid */}
      {category.skills.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      ) : (
        <p className="text-sm italic text-slate-400 dark:text-slate-500">
          Skills will be added soon
        </p>
      )}
    </motion.div>
  );
}
