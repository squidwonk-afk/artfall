import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FallingLeaves from '../components/FallingLeaves';
import GlitchText from '../components/GlitchText';
import artfallImage from '../assets/83144e22ce975f95baa731b0c677d7b17047b0af.png';

export default function HomePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20">
      <FallingLeaves count={20} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Forest */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${artfallImage})`,
              filter: 'brightness(0.4) blur(8px)',
              transform: 'scale(1.1)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/50 via-transparent to-[#0C0C0C]" />
        </div>

        {/* Main Content */}
        <div className="relative z-20 text-center px-6">
          {/* Character Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            className="mb-8 relative"
          >
            <div className="relative inline-block">
              <img
                src={artfallImage}
                alt="ARTFALL Character"
                className="w-80 h-80 object-cover rounded-lg shadow-2xl"
              />
              
              {/* Horizontal Glitch Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E86A2A]/30 to-transparent"
                animate={{
                  x: [-100, 500],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'linear',
                }}
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlitchText intensity="high">
              <h1 className="text-8xl mb-4 anime-title">
                ARTFALL
              </h1>
            </GlitchText>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl text-[#FFB26B] mb-8 tracking-widest"
          >
            Hyperpop • Glitchpop • Alternative
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            onClick={() => navigate('/lore')}
            className="glow-button px-12 py-4 bg-[#E86A2A] text-white uppercase tracking-wider hover:bg-[#FFB26B] transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Enter The Realm</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-magenta-500 to-purple-500 opacity-0 group-hover:opacity-30"
              animate={{
                x: [-100, 100],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </motion.button>
        </div>
      </section>

      {/* Minigame Preview Card */}
      <section className="container mx-auto px-6 py-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-black/60 backdrop-blur-sm border-2 border-[#E86A2A] rounded-lg p-8 relative overflow-hidden"
        >
          {/* Glitch border effect */}
          <div className="absolute inset-0 border-2 border-cyan-500 opacity-0 animate-glitch-border" />
          
          <h2 className="text-4xl mb-4 text-center">
            <GlitchText intensity="medium">FALLEN FACES</GlitchText>
          </h2>
          
          <p className="text-[#FFB26B] text-center mb-6">
            Control a chibi ARTFALL to catch golden leaves and avoid glitch shards.
            <br />
            How high can you score in 30 seconds?
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => navigate('/minigame')}
              className="glow-button px-8 py-3 bg-[#E86A2A] text-white uppercase tracking-wider hover:bg-[#FFB26B] transition-all duration-300"
            >
              Play Fullscreen
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
