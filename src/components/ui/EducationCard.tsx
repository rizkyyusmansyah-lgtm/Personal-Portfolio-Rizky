import { GraduationCap, ExternalLink, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { isPlaceholder } from '@/lib/utils';
import type { Education } from '@/types';

interface EducationCardProps {
  education: Education;
  index: number;
}

export function EducationCard({ education, index }: EducationCardProps) {
  const hasUrl = education.universityUrl && !isPlaceholder(education.universityUrl);
  const showGpa = education.gpa && !isPlaceholder(education.gpa);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700/50 dark:bg-slate-800/30"
    >
      {/* Header */}
      <div className="mb-4 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500 dark:bg-primary-500/10 dark:text-primary-400">
          <GraduationCap size={22} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">{education.degree}</h3>
          <p className="text-sm font-medium text-primary-500 dark:text-primary-400">
            {education.major}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            {hasUrl ? (
              <a
                href={education.universityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary-500 hover:underline"
              >
                {education.university}
                <ExternalLink size={11} />
              </a>
            ) : (
              <span>{education.university}</span>
            )}
            <span>·</span>
            <span>{education.faculty}</span>
          </div>
        </div>
      </div>

      {/* Period & GPA */}
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
          {education.startYear} – {education.endYear}
        </div>
        {showGpa && (
          <div className="flex items-center gap-1.5 text-sm">
            <span className="font-medium text-slate-700 dark:text-slate-300">GPA:</span>
            <span className="font-semibold text-primary-500 dark:text-primary-400">
              {education.gpa}
              {education.maxGpa && ` / ${education.maxGpa}`}
            </span>
          </div>
        )}
      </div>

      {/* Activities */}
      {education.activities && education.activities.length > 0 && (
        <div className="mb-3">
          <p className="mb-1.5 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Activities
          </p>
          <ul className="space-y-1">
            {education.activities.map((activity, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500/60" />
                {activity}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Relevant Courses */}
      {education.relevantCourses && education.relevantCourses.length > 0 && (
        <div>
          <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <BookOpen size={12} />
            Relevant Courses
          </p>
          <div className="flex flex-wrap gap-1.5">
            {education.relevantCourses.map((course) => (
              <span key={course} className="tech-badge text-xs">
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.article>
  );
}
