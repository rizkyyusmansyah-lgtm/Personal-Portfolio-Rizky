import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { experiences } from '@/data/experience';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const TimelineCurve = ({ isEven }: { isEven: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none">
      {/* Desktop SVG */}
      <svg 
        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-48 h-[100%] z-0" 
        preserveAspectRatio="none" 
        viewBox="0 0 100 100"
      >
        <motion.path 
          d={isEven 
            ? "M 50 0 C 50 30, 10 35, 10 50 C 10 65, 50 70, 50 100" // Curves left
            : "M 50 0 C 50 30, 90 35, 90 50 C 90 65, 50 70, 50 100"} // Curves right
          vectorEffect="non-scaling-stroke"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          strokeDasharray="6 8"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: scrollYProgress }}
        />
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Mobile SVG */}
      <svg 
        className="md:hidden absolute left-0 -translate-x-1/2 top-0 w-16 h-[100%] pointer-events-none z-0" 
        preserveAspectRatio="none" 
        viewBox="0 0 100 100"
      >
        <motion.path 
          d="M 50 0 C 50 30, 90 35, 90 50 C 90 65, 50 70, 50 100" 
          vectorEffect="non-scaling-stroke"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          strokeDasharray="4 6"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </div>
  );
};

export const ExperienceSection = () => {
  const { t } = useLanguage();
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background/50">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase mb-3">{t.experience.tag}</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            {t.experience.title}
          </h3>
        </div>

        <div className="relative">
          <div className="space-y-24 md:space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const numberStr = (index + 1).toString().padStart(2, '0');
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* The squiggly SVG line for this specific row */}
                  <TimelineCurve isEven={isEven} />

                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                    className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-background border-[5px] border-primary -translate-x-1/2 shadow-[0_0_20px_rgba(34,211,238,0.8)] z-10" 
                  />

                  {/* Content Card (Half Width) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pl-20 lg:pl-24' : 'md:pr-20 lg:pr-24'}`}>
                    <motion.div 
                      whileHover={{ 
                        y: -8, 
                        scale: 1.02,
                        boxShadow: "0 20px 40px -10px rgba(34,211,238,0.15)"
                      }}
                      className="glass-card p-6 md:p-8 bg-card transition-all duration-300 group border border-border hover:border-primary/50 relative overflow-hidden"
                      style={{
                        borderRadius: "2rem 0.5rem 2rem 0.5rem"
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="relative z-10">
                        <div className="flex flex-col gap-2 mb-5">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-tl-lg rounded-br-lg w-fit border border-primary/20">
                            {exp.type}
                          </span>
                          <h4 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                            {exp.title}
                          </h4>
                        </div>
                        
                        <div className="flex flex-col flex-wrap gap-y-2 gap-x-4 text-sm text-muted-foreground mb-5">
                          <div className="flex items-center gap-1.5">
                            <Building2 className="w-4 h-4 text-primary/70" />
                            <span className="font-medium text-foreground/80">{exp.company}</span>
                          </div>
                          {/* We remove Date from card since it will be displayed on the opposite side on desktop */}
                          <div className="flex items-center gap-1.5 md:hidden">
                            <Calendar className="w-4 h-4 text-primary/70" />
                            <span>{exp.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-primary/70" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Opposite Side: Date, Number & Quote (Desktop only) */}
                  <div className={`hidden md:flex w-1/2 flex-col justify-center ${isEven ? 'pr-20 lg:pr-24 items-end text-right' : 'pl-20 lg:pl-24 items-start text-left'}`}>
                    <h4 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                      {exp.date}
                    </h4>
                    <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase opacity-80">
                      NO. {numberStr}
                    </p>
                    
                    {exp.quote && (
                      <div className="mt-6 relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full opacity-50" />
                        <p className="font-serif italic text-muted-foreground text-lg leading-relaxed pl-4">
                          "{exp.quote}"
                        </p>
                      </div>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
