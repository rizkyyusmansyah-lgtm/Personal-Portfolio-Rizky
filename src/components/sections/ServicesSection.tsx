import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { profile } from '@/data/profile';
import { isPlaceholder } from '@/lib/utils';

export function ServicesSection() {
  const validServices = profile.services.filter(
    (s) => !isPlaceholder(s.description)
  );

  if (validServices.length === 0 && profile.services.length === 0) return null;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-slate-50/50 py-20 dark:bg-navy-800/30 md:py-28"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="What I Do"
          title="Services & Capabilities"
          subtitle="Areas where I can add value and contribute meaningfully."
          centered
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profile.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
