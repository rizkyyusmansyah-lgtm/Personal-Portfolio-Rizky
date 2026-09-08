import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-slate-50 dark:bg-navy-900 transition-colors duration-500" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20 dark:opacity-[0.03]" />
      
      {/* Animated Floating Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -left-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-primary-400/20 blur-[100px] dark:bg-primary-500/10"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-[10%] top-[20%] h-[40vw] w-[40vw] rounded-full bg-blue-400/20 blur-[100px] dark:bg-blue-500/10"
      />
      
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-[20%] left-[20%] h-[60vw] w-[60vw] rounded-full bg-indigo-400/10 blur-[120px] dark:bg-indigo-500/5"
      />
    </div>
  );
}
