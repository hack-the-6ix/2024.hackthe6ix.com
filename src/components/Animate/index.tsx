'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface AnimateProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  initial?: Object;
  animate?: Object;
  repeat?: number;
  repeatType?: 'loop' | 'mirror' | 'reverse';
  repeatDelay?: number;
}

export default function Animate({
  children,
  duration = 1,
  delay = 0,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  repeat = 0,
  repeatType = 'loop',
  repeatDelay = 0,
}: AnimateProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration,
          delay,
          repeat,
          repeatType,
          repeatDelay,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
