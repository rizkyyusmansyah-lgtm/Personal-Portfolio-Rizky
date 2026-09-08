import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { isPlaceholder } from '@/lib/utils';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const categoryColorMap: Record<string, string> = {
  'Web Development': 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
  'Data Analysis': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400',
  'Machine Learning': 'bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400',
  'Computer Vision': 'bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400',
  'Data Mining': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400',
  'Mobile': 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400',
  'Other': 'bg-slate-100 text-slate-700 dark:bg-slate-500/10 dark:text-slate-400',
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const hasImage = project.image && !isPlaceholder(project.image);
  const hasGithub = project.githubUrl && !isPlaceholder(project.githubUrl);
  const hasDemo = project.liveUrl && !isPlaceholder(project.liveUrl);
  const categoryColor = categoryColorMap[project.category] || categoryColorMap['Other'];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl',
        'border border-slate-200 bg-white dark:border-slate-700/50 dark:bg-slate-800/30',
        'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50',
        'dark:hover:shadow-black/30'
      )}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
        {hasImage ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-2 h-12 w-12 rounded-lg bg-slate-300/50 dark:bg-slate-600/50" />
              <p className="text-xs text-slate-400">No preview available</p>
            </div>
          </div>
        )}
        {/* Category Badge */}
        <span
          className={cn(
            'absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-medium',
            categoryColor
          )}
        >
          {project.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-100 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-badge">+{project.technologies.length - 4}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 border-t border-slate-100 pt-4 dark:border-slate-700/50">
          {hasGithub && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-700 dark:hover:text-slate-100"
            >
              <Github size={16} />
            </a>
          )}
          {hasDemo && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-700 dark:hover:text-slate-100"
            >
              <ExternalLink size={16} />
            </a>
          )}
          <Link
            to={`/projects/${project.slug}`}
            className="ml-auto flex items-center gap-1.5 text-sm font-medium text-primary-500 transition-all hover:gap-2.5 dark:text-primary-400"
          >
            View Details
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
