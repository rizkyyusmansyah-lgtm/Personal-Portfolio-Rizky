import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { TechStack } from '@/components/sections/TechStack';
import { ExperienceSection } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// --- Custom Cursor Component ---
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[99] hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 0.5,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
      />
    </>
  );
};

// --- Page Transition Wrapper ---
const PageSection = ({ children, className = '', id = '' }: { children: React.ReactNode, className?: string, id?: string }) => {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.15, 0.4]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ParticlesProvider init={async (engine) => await loadSlim(engine)}>
      <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary overflow-hidden">
        
        {/* Parallax Background Image */}
        <motion.div 
          className="fixed inset-0 z-[-1] pointer-events-none bg-cover bg-center bg-no-repeat dark:mix-blend-lighten mix-blend-multiply"
          style={{ 
            backgroundImage: 'url(/bg-pattern.jpg)',
            y: yBg,
            opacity: opacityBg,
          }}
        />

        <CustomCursor />
        <Navbar />
        
        <AnimatePresence>
          <main id="main-content" className="relative z-10 flex flex-col gap-12 md:gap-24 pb-24">
            <Hero />
            
            {/* Added decorative section dividers and page transition wrappers */}
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent my-4" />
            </div>
            
            <PageSection id="about-section">
              <About />
            </PageSection>
            
            <PageSection id="tech-section">
              <TechStack />
            </PageSection>
            
            <PageSection id="experience-section">
              <ExperienceSection />
            </PageSection>
            
            <PageSection id="projects-section">
              <Projects />
            </PageSection>
            
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent my-4" />
            </div>

            <PageSection id="contact-section">
              <Contact />
            </PageSection>
          </main>
        </AnimatePresence>

        <Footer />
      </div>
    </ParticlesProvider>
  );
}

export default App;
