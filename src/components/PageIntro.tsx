import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface PageIntroProps {
  onComplete?: () => void;
}

export const PageIntro: React.FC<PageIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Elegant quick reveal with no artificial delay
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 900);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="page-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07080c] pointer-events-none select-none"
        >
          {/* Subtle Ambient Crimson Glow */}
          <div className="absolute w-[360px] h-[360px] rounded-full bg-red-600/15 blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            {/* Monogram Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-b from-[#181a24] to-[#0c0e14] border border-white/20 flex items-center justify-center shadow-2xl shadow-red-950/60 mb-5 relative"
            >
              <div className="absolute inset-0 rounded-2xl border border-red-500/30" />
              <span className="font-display font-black text-2xl tracking-tighter text-white">
                H<span className="text-[#e50914]">V</span>
              </span>
            </motion.div>

            {/* Typography Entrance */}
            <motion.div
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <h1 className="font-display font-black text-2xl sm:text-3xl tracking-widest text-white uppercase">
                HITESH VAIRALE
              </h1>
              <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 uppercase mt-1">
                COMPUTER SCIENCE &amp; SYSTEMS
              </span>
            </motion.div>

            {/* Thin Animated Crimson Progress Line */}
            <div className="w-36 h-[2px] bg-white/[0.08] rounded-full overflow-hidden mt-6">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-[#e50914] shadow-[0_0_12px_rgba(229,9,20,0.8)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
