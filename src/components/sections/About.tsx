import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import { LanyardCard } from '../ui/LanyardCard';
import { useLanguage } from '@/context/LanguageContext';

export const About = () => {
  const { t, language } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Lanyard Card Column */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative">
            {/* Decorative glow blobs */}
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-red-600/8 rounded-full blur-3xl pointer-events-none" />
            <LanyardCard
              photoSrc="/image.png"
              name="Rizky Yusmansyah"
            />
          </motion.div>

          {/* Text Column */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase mb-3">{t.about.tag}</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              {t.about.title} <span className="text-gradient">{t.about.titleHighlight}</span>
            </h3>
            
            <div className="text-muted-foreground space-y-4 mb-8 text-lg">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">{t.about.edu}</h4>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{t.about.eduDesc}</p>
                </div>
              </div>
              
              <div className="glass-card p-4 rounded-xl flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">{t.about.loc}</h4>
                  <p className="text-sm text-muted-foreground">{t.about.locDesc}</p>
                </div>
              </div>
              
              <div className="glass-card p-4 rounded-xl flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">{t.about.focus}</h4>
                  <p className="text-sm text-muted-foreground">{t.about.focusDesc}</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">{language === 'id' ? 'Status' : 'Status'}</h4>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{language === 'id' ? 'Fresh Graduate\nTersedia untuk Bekerja' : 'Fresh Graduate\nAvailable for work'}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
