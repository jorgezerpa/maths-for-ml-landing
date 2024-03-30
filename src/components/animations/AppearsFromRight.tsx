import React, { CSSProperties, ReactElement } from 'react';
import { motion } from 'framer-motion';

interface TypingTextProps {
  Text: string;
  textStyles?: CSSProperties;
  textClassName?: string;
  tagType?: keyof JSX.IntrinsicElements;
  animationConfig?: {
    duration?: number;
    delay?: number;
  };
}

export const TypingTextAnimation: React.FC<TypingTextProps> = ({ Text, textStyles={}, textClassName="", tagType: Tag = 'div', animationConfig }) => {
  const { duration = 2, delay = 0.5 } = animationConfig || {};

  const textParts = Text.split('');
  const totalTime = duration * textParts.length;

  return (
    <Tag style={textStyles} className={textClassName}>
      <motion.span
        style={{ display: 'inline-block' }}
        key="wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {textParts.map((char, index) => (
          <motion.span
            key={index}
            style={{ display: 'inline-block' }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * duration / textParts.length + delay, duration: duration / textParts.length }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

