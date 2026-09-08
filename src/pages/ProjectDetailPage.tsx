import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  User,
  Tag,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { getProjectBySlug } from '@/data/projects';
import { isPlaceholder } from '@/lib/utils';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
            <AlertCircle className="h-8 w-8 text-slate-400" />
          </div>
          <h1 className="mb-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
            Project Not Found
          </h1>
          <p className="mb-6 text-slate-600 dark:text-slate-400">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/">
            <Button variant="primary" leftIcon={<ArrowLeft size={16} />}>
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  const hasGithub = project.githubUrl && !isPlaceholder(project.githubUrl);
  const hasDemo = project.liveUrl && !isPlaceholder(project.liveUrl);

  return (
    <main className="min-h-screen py-28">
      <div className="section-container max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-100"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <header className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="badge">{project.category}</span>
              {project.featured && (
                <span className="rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-medium text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400">
                  ⭐ Featured
                </span>
              )}
            </div>

            <h1 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl">
              {project.title}
            </h1>

            <p className="mb-6 text-lg text-slate-600 dark:text-slate-400">
              {project.shortDescription}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400">
              {project.role && !isPlaceholder(project.role) && (
                <div className="flex items-center gap-2">
                  <User size={15} />
                  <span>
                    <strong className="text-slate-700 dark:text-slate-300">Role:</strong>{' '}
                    {project.role}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Tag size={15} />
                <span>
                  <strong className="text-slate-700 dark:text-slate-300">Category:</strong>{' '}
                  {project.category}
                </span>
              </div>
            </div>
          </header>

          {/* Project Image */}
          {project.image && !isPlaceholder(project.image) && (
            <div className="mb-10 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700/50">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full object-cover"
              />
            </div>
          )}

          {/* Action Buttons */}
          <div className="mb-10 flex flex-wrap gap-4">
            {hasGithub && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" leftIcon={<Github size={16} />}>
                  View Source Code
                </Button>
              </a>
            )}
            {hasDemo && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" leftIcon={<ExternalLink size={16} />}>
                  View Live Demo
                </Button>
              </a>
            )}
            {!hasGithub && !hasDemo && (
              <p className="text-sm italic text-slate-400">
                Live demo and source code are currently unavailable.
              </p>
            )}
          </div>

          {/* Technologies */}
          {project.technologies.length > 0 && (
            <div className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          <hr className="my-10 border-slate-200 dark:border-slate-700/50" />

          {/* Content Sections */}
          <div className="space-y-10">
            {project.overview && !isPlaceholder(project.overview) && (
              <div>
                <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">Overview</h2>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">{project.overview}</p>
              </div>
            )}

            {project.problem && !isPlaceholder(project.problem) && (
              <div>
                <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">The Problem</h2>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">{project.problem}</p>
              </div>
            )}

            {project.objective && !isPlaceholder(project.objective) && (
              <div>
                <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">Objective</h2>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">{project.objective}</p>
              </div>
            )}

            {project.solution && !isPlaceholder(project.solution) && (
              <div>
                <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">Solution</h2>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">{project.solution}</p>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">Challenges</h2>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.results && !isPlaceholder(project.results) && (
              <div className="rounded-xl border border-primary-200 bg-primary-50 p-6 dark:border-primary-500/20 dark:bg-primary-500/5">
                <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">Results</h2>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">{project.results}</p>
              </div>
            )}

            {project.lessonsLearned && !isPlaceholder(project.lessonsLearned) && (
              <div>
                <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">Lessons Learned</h2>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">{project.lessonsLearned}</p>
              </div>
            )}

            {/* Additional Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">Screenshots</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.screenshots.map((shot, i) => (
                    <div key={i} className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700/50">
                      <img
                        src={shot}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Navigation */}
          <div className="mt-16 flex items-center justify-between border-t border-slate-200 pt-8 dark:border-slate-700/50">
            <Link to="/#projects">
              <Button variant="ghost" leftIcon={<ArrowLeft size={16} />}>
                All Projects
              </Button>
            </Link>
            <div className="flex gap-3">
              {hasGithub && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" leftIcon={<Github size={14} />}>
                    GitHub
                  </Button>
                </a>
              )}
              {hasDemo && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="sm" leftIcon={<ExternalLink size={14} />}>
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
