import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = (Icons as any)[service.icon] || Icons.Code2;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700/50 dark:bg-slate-800/30 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl dark:hover:border-primary-600/50"
    >
      {/* Icon */}
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500 dark:bg-primary-500/10 dark:text-primary-400 transition-all duration-300 group-hover:bg-primary-500 group-hover:text-white">
        <IconComponent size={22} />
      </div>

      {/* Title */}
      <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-100">{service.title}</h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {service.description}
      </p>
    </motion.article>
  );
}
