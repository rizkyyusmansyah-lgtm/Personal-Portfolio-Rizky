import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={() => scrollToSection('home')}
          aria-label="Scroll back to top"
          className="fixed bottom-8 right-8 z-50 flex h-11 w-11 items-center justify-center rounded-xl
                     bg-primary-500 text-white shadow-lg shadow-primary-500/30
                     transition-all duration-200 hover:bg-primary-600 hover:shadow-primary-500/50 hover:-translate-y-0.5
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
