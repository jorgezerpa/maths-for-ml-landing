'use client'
import React, { useEffect, FC } from 'react';
import { motion, useAnimation, AnimationControls } from 'framer-motion';

interface AnimationConfig {
  duration: number;
  delay: number;
  from: 'top' | 'bottom' | 'left' | 'right';
}

interface FadeInAndTranslateAnimationProps {
  content: React.ReactNode;
  animationConfig?: AnimationConfig;
}

export const FadeInAndTranslateAnimation: FC<FadeInAndTranslateAnimationProps> = ({ content, animationConfig = {
  duration: 0.5,
  delay: 0,
  from: 'top',
} }) => {
  const { duration, delay, from } = animationConfig;

  const direction = {
    top: { y: -50, opacity: 0 },
    bottom: { y: 50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
  }[from];

  const controls: AnimationControls = useAnimation();

  useEffect(() => {
    controls.start({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration, delay },
    });
  }, [controls, duration, delay]);

  return (
    <motion.div
      initial={direction}
      animate={controls}
    >
      {content}
    </motion.div>
  );
};

