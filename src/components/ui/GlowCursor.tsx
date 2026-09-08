import { useEffect, useRef } from 'react';

/**
 * Subtle mouse-follow glow effect — desktop only.
 * Renders a soft radial gradient that follows the cursor.
 */
export function GlowCursor() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const move = (e: MouseEvent) => {
      const el = glowRef.current;
      if (!el) return;
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300 dark:opacity-100"
      style={{
        background:
          'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
        willChange: 'left, top',
      }}
    />
  );
}
