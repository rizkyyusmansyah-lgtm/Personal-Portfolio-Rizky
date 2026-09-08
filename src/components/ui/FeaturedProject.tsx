import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { isPlaceholder } from '@/lib/utils';
import type { Project } from '@/types';

interface FeaturedProjectProps {
  project: Project;
  index: number;
}

export function FeaturedProject({ project, index }: FeaturedProjectProps) {
  const isEven = index % 2 === 0;
  const hasImage = project.image && !isPlaceholder(project.image);
  const hasGithub = project.githubUrl && !isPlaceholder(project.githubUrl);
  const hasDemo = project.liveUrl && !isPlaceholder(project.liveUrl);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={cn(
        'grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center',
        !isEven && 'md:[&>*:first-child]:order-2'
      )}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl">
        <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
          {hasImage ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-sm text-slate-400">Project preview not available</p>
            </div>
          )}
        </div>
        {/* Decorative border */}
        <div
          className={cn(
            'absolute -inset-px rounded-xl border-2 border-primary-500/20',
            'pointer-events-none'
          )}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="badge">Featured Project</span>
          <span className="text-sm text-slate-500 dark:text-slate-400">{project.category}</span>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{project.title}</h3>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700/50 dark:bg-slate-800/50">
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.shortDescription}
          </p>
        </div>

        {/* Role */}
        {project.role && !isPlaceholder(project.role) && (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            <span className="font-medium text-slate-700 dark:text-slate-300">Role:</span>{' '}
            {project.role}
          </p>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {hasGithub && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              <Github size={16} />
              Source Code
            </a>
          )}
          {hasDemo && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
              className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          <Link
            to={`/projects/${project.slug}`}
            className="ml-auto flex items-center gap-1.5 font-medium text-primary-500 transition-all hover:gap-2.5 dark:text-primary-400"
          >
            View Full Case Study
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
