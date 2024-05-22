'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface AnimateProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  initial?: Object;
  animate?: Object;
}

export default function Animate({
  children,
  duration = 1,
  delay = 0,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
}: AnimateProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
