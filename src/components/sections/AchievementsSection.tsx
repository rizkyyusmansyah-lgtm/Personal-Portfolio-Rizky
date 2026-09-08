import { SectionHeading } from '@/components/ui/SectionHeading';
import { AchievementCard } from '@/components/ui/AchievementCard';
import { CertificationsSection } from './CertificationsSection';
import { achievements } from '@/data/achievements';

export function AchievementsSection() {
  return (
    <>
      {/* Certifications subsection */}
      <CertificationsSection />

      {/* Achievements */}
      <section id="achievements" aria-labelledby="achievements-heading" className="py-20 md:py-28">
        <div className="section-container">
          <SectionHeading
            eyebrow="Achievements"
            title="Recognition & Milestones"
            subtitle="Awards, competitions, and noteworthy accomplishments throughout my journey."
          />

          {achievements.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {achievements.map((achievement, index) => (
                <AchievementCard key={achievement.id} achievement={achievement} index={index} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-700">
              <p className="text-slate-400 dark:text-slate-500">Achievements will be added soon.</p>
              <p className="mt-1 text-xs text-slate-400 dark:text-slate-600">
                ✏️ Edit{' '}
                <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
                  src/data/achievements.ts
                </code>{' '}
                to add your achievements.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
