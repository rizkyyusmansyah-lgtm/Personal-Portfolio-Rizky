import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillCategory } from '@/components/ui/SkillCategory';
import { skillCategories } from '@/data/skills';

export function SkillsSection() {
  const nonEmptyCategories = skillCategories.filter((cat) => cat.skills.length > 0);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-slate-50/50 py-20 dark:bg-navy-800/30 md:py-28"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="Technical Skills"
          title="What I Work With"
          subtitle="Technologies and tools I use to build projects and solve problems."
          centered
        />

        {nonEmptyCategories.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nonEmptyCategories.map((category, index) => (
              <SkillCategory key={category.id} category={category} index={index} />
            ))}
          </div>
        ) : (
          // Empty state — skills not filled yet
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <SkillCategory key={category.id} category={category} index={index} />
            ))}
          </div>
        )}

        {/* Skill level legend */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {[
            { level: 'Experienced', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' },
            { level: 'Familiar', color: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400' },
            { level: 'Learning', color: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400' },
          ].map(({ level, color }) => (
            <span key={level} className={`rounded-full px-3 py-1 text-xs font-medium ${color}`}>
              {level}
            </span>
          ))}
          <p className="text-xs text-slate-400 dark:text-slate-500 self-center">
            — Hover a skill to see level
          </p>
        </div>
      </div>
    </section>
  );
}
