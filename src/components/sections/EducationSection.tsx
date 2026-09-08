import { SectionHeading } from '@/components/ui/SectionHeading';
import { EducationCard } from '@/components/ui/EducationCard';
import { educations } from '@/data/education';

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-heading" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          subtitle="My formal education and academic achievements."
        />

        {educations.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {educations.map((edu, index) => (
              <EducationCard key={edu.id} education={edu} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-700">
            <p className="text-slate-400 dark:text-slate-500">Education details will be added soon.</p>
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-600">
              ✏️ Edit <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">src/data/education.ts</code> to add your education.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
