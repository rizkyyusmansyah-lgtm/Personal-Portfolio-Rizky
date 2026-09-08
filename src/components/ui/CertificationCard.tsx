import { Award, ExternalLink, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { isPlaceholder } from '@/lib/utils';
import type { Certification } from '@/types';

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

export function CertificationCard({ certification, index }: CertificationCardProps) {
  const hasUrl = certification.credentialUrl && !isPlaceholder(certification.credentialUrl);
  const hasImage = certification.image && !isPlaceholder(certification.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700/50 dark:bg-slate-800/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-black/30"
    >
      {/* Certificate Image Preview */}
      {hasImage && (
        <div className="h-36 overflow-hidden bg-slate-50 dark:bg-slate-800">
          <img
            src={certification.image}
            alt={`${certification.name} certificate`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        {/* Icon (when no image) */}
        {!hasImage && (
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-500 dark:bg-primary-500/10 dark:text-primary-400">
            <Award size={20} />
          </div>
        )}

        {/* Certificate Name */}
        <h3 className="mb-1 font-semibold text-slate-900 dark:text-slate-100 text-sm leading-snug">
          {certification.name}
        </h3>

        {/* Issuer */}
        <p className="mb-3 text-sm font-medium text-primary-500 dark:text-primary-400">
          {certification.issuer}
        </p>

        {/* Date & ID */}
        <div className="mb-4 space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Calendar size={11} />
            Issued {certification.issueDate}
            {certification.expiryDate && ` · Expires ${certification.expiryDate}`}
          </div>
          {certification.credentialId && !isPlaceholder(certification.credentialId) && (
            <p className="text-xs text-slate-400 dark:text-slate-500">
              ID: {certification.credentialId}
            </p>
          )}
        </div>

        {/* View Certificate Button */}
        {hasUrl ? (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${certification.name} certificate`}
            className="mt-auto flex items-center justify-center gap-2 rounded-lg border border-primary-200 px-4 py-2 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50 dark:border-primary-500/30 dark:text-primary-400 dark:hover:bg-primary-500/10"
          >
            <ExternalLink size={14} />
            View Certificate
          </a>
        ) : (
          <div className="mt-auto flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-400 dark:border-slate-700 dark:text-slate-500">
            Certificate URL not available
          </div>
        )}
      </div>
    </motion.article>
  );
}
