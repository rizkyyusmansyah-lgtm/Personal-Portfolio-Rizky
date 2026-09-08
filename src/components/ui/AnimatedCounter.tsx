import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedCounterProps {
  target: number;
  duration?: number; // ms
  suffix?: string;
  prefix?: string;
  className?: string;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export function AnimatedCounter({
  target,
  duration = 1500,
  suffix = '',
  prefix = '',
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLSpanElement>({ triggerOnce: true });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isIntersecting || hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };

    requestAnimationFrame(tick);
  }, [isIntersecting, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
