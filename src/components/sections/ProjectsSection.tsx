import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeaturedProject } from '@/components/ui/FeaturedProject';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { FilterButtons } from '@/components/ui/FilterButtons';
import { projects, featuredProjects, getProjectsByCategory, projectCategories } from '@/data/projects';

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const nonFeaturedProjects = getProjectsByCategory(activeCategory).filter((p) => !p.featured || activeCategory !== 'All');
  const displayedProjects = activeCategory === 'All'
    ? projects.filter((p) => !p.featured)
    : nonFeaturedProjects;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-slate-50/50 py-20 dark:bg-navy-800/30 md:py-28"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="My Projects"
          title="What I've Built"
          subtitle="A selection of projects I've worked on — from web apps to data and ML pipelines."
        />

        {projects.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 p-16 text-center dark:border-slate-700">
            <p className="text-slate-400 dark:text-slate-500">Projects will be added soon.</p>
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-600">
              ✏️ Edit <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">src/data/projects.ts</code> to add your projects.
            </p>
          </div>
        ) : (
          <>
            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
              <div className="mb-16 flex flex-col gap-20">
                <h3 className="sr-only">Featured Projects</h3>
                {featuredProjects.map((project, index) => (
                  <FeaturedProject key={project.id} project={project} index={index} />
                ))}
              </div>
            )}

            {/* Divider */}
            {featuredProjects.length > 0 && projects.length > featuredProjects.length && (
              <div className="mb-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Other Projects</p>
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
              </div>
            )}

            {/* Filter */}
            {projectCategories.length > 1 && (
              <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <FilterButtons
                  categories={projectCategories}
                  activeCategory={activeCategory}
                  onSelect={setActiveCategory}
                />
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {displayedProjects.length} project{displayedProjects.length !== 1 ? 's' : ''}
                </p>
              </div>
            )}

            {/* Project Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {displayedProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* View All CTA */}
            {projects.length > 6 && (
              <div className="mt-12 text-center">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 font-medium text-primary-500 hover:gap-3 transition-all dark:text-primary-400"
                >
                  View all projects
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
