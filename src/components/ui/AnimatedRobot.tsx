import { motion } from 'framer-motion';

export const AnimatedRobot = () => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
      
      {/* Outer Holographic Rings */}
      <motion.div
        animate={{ rotateX: 60, rotateY: 20, rotateZ: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute w-[80%] h-[80%] rounded-full border-[1.5px] border-red-500/20 border-t-red-500/80 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
        style={{ transformStyle: 'preserve-3d' }}
      />
      <motion.div
        animate={{ rotateX: 70, rotateY: -30, rotateZ: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute w-[95%] h-[95%] rounded-full border border-purple-500/20 border-b-purple-500/80 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
        style={{ transformStyle: 'preserve-3d' }}
      />

      {/* Inner Rotating Data Nodes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full"
      >
        {[...Array(3)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 120}deg) translateY(-140px)`
            }}
          />
        ))}
      </motion.div>

      {/* Cybernetic Robot Face / AI Core */}
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-48 h-56 flex flex-col items-center justify-center"
      >
        {/* Robot Head Shape */}
        <svg 
          viewBox="0 0 200 240" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(239,68,68,0.2)]"
        >
          {/* Main Head Structure */}
          <path 
            d="M50 20 L150 20 L180 60 L180 180 L130 220 L70 220 L20 180 L20 60 Z" 
            fill="url(#headGradient)" 
            stroke="url(#strokeGradient)" 
            strokeWidth="2" 
          />
          
          {/* Facial Screen Area */}
          <path 
            d="M35 70 L165 70 L165 140 L35 140 Z" 
            fill="#050505" 
            stroke="#ef4444" 
            strokeWidth="1.5"
            strokeOpacity="0.5" 
          />

          {/* Cheek details */}
          <path d="M20 150 L50 150" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" />
          <path d="M180 150 L150 150" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" />

          {/* Chin details */}
          <path d="M80 190 L120 190 M90 205 L110 205" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />

          <defs>
            <linearGradient id="headGradient" x1="0" y1="0" x2="200" y2="240" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1a1a1a" stopOpacity="0.9" />
              <stop offset="1" stopColor="#050505" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="strokeGradient" x1="0" y1="0" x2="200" y2="240" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ef4444" stopOpacity="0.8" />
              <stop offset="1" stopColor="#a855f7" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Animated Robot Eyes (Inside Screen) */}
        <div className="absolute top-[85px] w-full flex justify-center gap-10">
          {/* Left Eye */}
          <motion.div
            className="w-8 h-4 rounded-full bg-red-500 shadow-[0_0_12px_#ef4444]"
            animate={{ scaleY: [1, 0.1, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.03, 0.06], repeatDelay: 2 }}
          />
          {/* Right Eye */}
          <motion.div
            className="w-8 h-4 rounded-full bg-red-500 shadow-[0_0_12px_#ef4444]"
            animate={{ scaleY: [1, 0.1, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.03, 0.06], repeatDelay: 2 }}
          />
        </div>

        {/* Animated Voice/Data Wave (Mouth) */}
        <div className="absolute top-[125px] w-full flex justify-center items-center gap-1">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 bg-red-500 rounded-full shadow-[0_0_5px_#ef4444]"
              animate={{ height: [4, 15, 4] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

    </div>
  );
};
