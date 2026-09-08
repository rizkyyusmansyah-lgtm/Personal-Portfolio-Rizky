import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;

      // Find the last section that the scroll has passed
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}

export function useScrolled(threshold = 20) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
