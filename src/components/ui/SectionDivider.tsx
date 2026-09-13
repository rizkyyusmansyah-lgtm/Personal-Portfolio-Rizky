import { motion } from 'framer-motion';

export const SectionDivider = () => {
  return (
    <div className="w-full py-16 flex justify-center items-center overflow-hidden">
      <motion.div 
        className="flex items-center w-full max-w-5xl px-6 opacity-80"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Line */}
        <motion.div 
          className="h-[2px] bg-gradient-to-r from-transparent via-red-500/30 to-red-600 flex-grow"
          style={{ originX: 1 }}
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 1, ease: "easeInOut" } }
          }}
        />
        
        {/* Center glowing element */}
        <motion.div 
          className="relative mx-6 flex items-center justify-center"
          variants={{
            hidden: { scale: 0, rotate: -90, opacity: 0 },
            visible: { scale: 1, rotate: 0, opacity: 1, transition: { duration: 0.8, delay: 0.6, type: "spring", bounce: 0.5 } }
          }}
        >
          {/* Inner core */}
          <div className="w-3 h-3 bg-red-500 rounded-sm rotate-45 shadow-[0_0_15px_rgba(239,68,68,0.9)]" />
          
          {/* Pulsing ring */}
          <motion.div 
            className="absolute w-8 h-8 border border-red-500/50 rounded-sm rotate-45"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Spinning outer ring */}
          <motion.div 
            className="absolute w-12 h-12 border border-purple-500/30 border-t-purple-500 rounded-full"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Right Line */}
        <motion.div 
          className="h-[2px] bg-gradient-to-l from-transparent via-purple-500/30 to-purple-600 flex-grow"
          style={{ originX: 0 }}
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 1, ease: "easeInOut" } }
          }}
        />
      </motion.div>
    </div>
  );
};
