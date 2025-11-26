import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import FallingLeaves from '../components/FallingLeaves';
import GlitchText from '../components/GlitchText';

export default function GalleryPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen pt-32 pb-20">
      <FallingLeaves count={10} />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <GlitchText intensity="high">
            <h1 className="text-6xl mb-4">{t('visuals.title')}</h1>
          </GlitchText>
          <p className="text-xl text-[#FFB26B]">
            {t('visuals.subtitle')}
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#E86A2A] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* YouTube Video Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-black/90 to-[#5B3A1A]/30 border-4 border-[#E86A2A]/50 rounded-lg p-4 overflow-hidden">
            {/* Glitch border effect */}
            <motion.div
              className="absolute inset-0 border-4 border-cyan-500 opacity-0 pointer-events-none"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 5,
              }}
            />

            <div className="relative z-10">
              <h2 className="text-3xl text-center mb-6">
                <GlitchText intensity="medium">{t('visuals.videoTitle')}</GlitchText>
              </h2>

              {/* YouTube Embed */}
              <div className="relative aspect-video w-full rounded-lg overflow-hidden border-2 border-[#E86A2A]/30">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3BWoNWxatTg"
                  title="MACHIAVELLI - ARTFALL"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>

              <p className="text-center text-[#FFB26B]/80 mt-6">
                {t('visuals.videoDesc')}
              </p>
            </div>

            {/* Neon glow effect */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#E86A2A]/20 blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/10 blur-3xl animate-pulse" />
          </div>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <p className="text-lg text-[#FFB26B]/80 leading-relaxed">
            {t('visuals.infoText')}
            <br />
            {t('visuals.infoText2')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
