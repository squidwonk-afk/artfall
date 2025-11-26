import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import FallingLeaves from '../components/FallingLeaves';
import GlitchText from '../components/GlitchText';
import artfallImage from 'src/assets/83144e22ce975f95baa731b0c677d7b17047b0af.png';

export default function LorePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 pb-20">
      <FallingLeaves count={15} />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <GlitchText intensity="high">
            <h1 className="text-6xl mb-4">{t('lore.title')}</h1>
          </GlitchText>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#E86A2A] to-transparent mx-auto" />
        </motion.div>

        {/* Side-scrolling panels */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg border-2 border-[#E86A2A]/50">
              <img
                src={artfallImage}
                alt="ARTFALL"
                className="w-full h-auto"
              />
              
              {/* Glitch overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-transparent to-magenta-500/20"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            </div>
          </motion.div>

          {/* Text Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="text-lg text-[#FFB26B] leading-relaxed"
            >
              {t('lore.text1')}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-[#FFB26B] leading-relaxed"
            >
              {t('lore.text2')}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#FFB26B] leading-relaxed"
            >
              {t('lore.text3')}
            </motion.p>

            <div className="h-4" />
            
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-[#FFB26B] leading-relaxed"
            >
              {t('lore.text4')}
            </motion.p>

            <div className="h-4" />
            
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-[#FFB26B] leading-relaxed"
            >
              {t('lore.text5')}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-lg text-[#FFB26B] leading-relaxed"
            >
              {t('lore.text6')}
            </motion.p>

            <div className="h-4" />
            
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-lg text-[#FFB26B] leading-relaxed"
            >
              {t('lore.text7')}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-lg text-[#FFB26B] leading-relaxed"
            >
              {t('lore.text8')}
            </motion.p>
          </motion.div>
        </div>

        {/* Additional Panels */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: t('lore.panel1Title'),
              text: t('lore.panel1Text'),
            },
            {
              title: t('lore.panel2Title'),
              text: t('lore.panel2Text'),
            },
            {
              title: t('lore.panel3Title'),
              text: t('lore.panel3Text'),
            },
          ].map((panel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-black/80 to-[#5B3A1A]/20 border border-[#E86A2A]/30 rounded-lg p-6 relative overflow-hidden hover:border-[#E86A2A] transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#E86A2A]/10 blur-3xl" />
              
              <h3 className="text-xl mb-3 text-[#E86A2A]">{panel.title}</h3>
              <p className="text-[#FFB26B]/80">{panel.text}</p>
              
              {/* Decorative glitch line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-magenta-500 to-transparent"
                animate={{
                  opacity: [0, 1, 0],
                  scaleX: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
