import { motion } from 'motion/react';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export default function GlitchText({ children, className = '', intensity = 'medium' }: GlitchTextProps) {
  const glitchClass = intensity === 'high' ? 'glitch-text' : intensity === 'low' ? 'glitch-text-subtle' : 'glitch-text-medium';
  
  return (
    <motion.div
      className={`${glitchClass} ${className}`}
      animate={{
        textShadow: [
          '0 0 0px rgba(232, 106, 42, 0)',
          '2px 2px 4px rgba(232, 106, 42, 0.8), -2px -2px 4px rgba(0, 255, 255, 0.8)',
          '0 0 0px rgba(232, 106, 42, 0)',
        ],
      }}
      transition={{
        duration: 0.3,
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      {children}
    </motion.div>
  );
}
