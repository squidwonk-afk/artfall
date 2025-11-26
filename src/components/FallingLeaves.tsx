import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Leaf {
  id: number;
  x: number;
  delay: number;
  duration: number;
  rotation: number;
  scale: number;
}

export default function FallingLeaves({ count = 15 }: { count?: number }) {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const newLeaves = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 0.5,
    }));
    setLeaves(newLeaves);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute -top-10"
          style={{
            left: `${leaf.x}%`,
          }}
          initial={{ y: -50, opacity: 0, rotate: leaf.rotation }}
          animate={{
            y: window.innerHeight + 50,
            opacity: [0, 1, 1, 0],
            rotate: leaf.rotation + 360,
            x: [0, 30, -30, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            width={20 * leaf.scale}
            height={20 * leaf.scale}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2C10 2 6 6 6 10C6 12 7 14 10 14C13 14 14 12 14 10C14 6 10 2 10 2Z"
              fill="#E86A2A"
              opacity="0.8"
            />
            <path
              d="M10 2C10 2 14 6 14 10C14 12 13 14 10 14"
              fill="#FFB26B"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
