import { SectionHeading } from '@/components/ui/SectionHeading';
import { CertificationCard } from '@/components/ui/CertificationCard';
import { certifications } from '@/data/certifications';

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="bg-slate-50/50 py-20 dark:bg-navy-800/30 md:py-28"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & Licenses"
          subtitle="Professional certifications and courses I've completed."
          centered
        />

        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.id} certification={cert} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-700">
            <p className="text-slate-400 dark:text-slate-500">Certifications will be added soon.</p>
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-600">
              ✏️ Edit <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">src/data/certifications.ts</code> to add your certifications.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
