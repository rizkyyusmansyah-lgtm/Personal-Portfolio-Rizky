import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { isPlaceholder } from '@/lib/utils';
import { profile } from '@/data/profile';

export function ResumeSection() {
  const hasResume = profile.resumeUrl && !isPlaceholder(profile.resumeUrl);

  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="py-20 md:py-28"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 p-10 text-center md:p-16"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 grid-bg opacity-10" aria-hidden="true" />

          {/* Icon */}
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white"
            aria-hidden="true"
          >
            <FileText size={28} />
          </div>

          <h2
            id="resume-heading"
            className="mb-4 text-2xl font-bold text-white sm:text-3xl"
          >
            Interested in Working Together?
          </h2>

          <p className="mx-auto mb-8 max-w-lg text-base text-primary-100">
            Download my resume to get a complete overview of my education, skills, experience, and projects.
          </p>

          {hasResume ? (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume (opens PDF in new tab)"
            >
              <Button
                variant="secondary"
                size="lg"
                leftIcon={<Download size={18} />}
                className="bg-white text-primary-600 hover:bg-primary-50"
              >
                Download Resume
              </Button>
            </a>
          ) : (
            <div>
              <Button
                variant="secondary"
                size="lg"
                leftIcon={<Download size={18} />}
                className="bg-white/20 text-white hover:bg-white/30"
                disabled
              >
                Resume Not Yet Available
              </Button>
              <p className="mt-3 text-xs text-primary-200">
                ✏️ Add your resume URL to{' '}
                <code className="rounded bg-white/10 px-1">src/data/profile.ts</code>
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
