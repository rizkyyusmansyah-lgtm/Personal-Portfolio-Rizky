import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  speed?: number;       // ms per character
  pause?: number;       // ms to pause between texts
}

export function TypewriterText({
  texts,
  className = '',
  speed = 60,
  pause = 2000,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];

    if (!isDeleting && charIndex < current.length) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === current.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, speed / 2);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
    }
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return (
    <span className={className}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="ml-0.5 inline-block h-[1em] w-0.5 rounded-full bg-primary-500 align-middle"
        aria-hidden="true"
      />
    </span>
  );
}
