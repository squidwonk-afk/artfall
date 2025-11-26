import { motion } from 'motion/react';
import { ExternalLink, Music, Instagram, Youtube } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import FallingLeaves from '../components/FallingLeaves';
import GlitchText from '../components/GlitchText';

export default function GlitchpopPage() {
  const { t } = useTranslation();
  
  const socials = [
    { 
      icon: FaTiktok, 
      url: 'https://www.tiktok.com/@artfall.eth', 
      label: 'TikTok',
      username: '@artfall.eth',
      color: '#00f2ea'
    },
    { 
      icon: Music, 
      url: 'https://soundcloud.com/artfalls', 
      label: 'SoundCloud',
      username: '@artfalls',
      color: '#ff8800'
    },
    { 
      icon: Instagram, 
      url: 'https://www.instagram.com/artfall.sol/', 
      label: 'Instagram',
      username: '@artfall.sol',
      color: '#E86A2A'
    },
    { 
      icon: Youtube, 
      url: 'https://www.youtube.com/@ARTFALLING', 
      label: 'YouTube',
      username: '@ARTFALLING',
      color: '#ff0000'
    },
  ];
  
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4">{t('music.glitchpopTitle')}</h1>
          </GlitchText>
          <p className="text-base sm:text-lg md:text-xl text-[#FFB26B]">
            {t('music.glitchpopSubtitle')}
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#E86A2A] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Album: Derealization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="group relative bg-gradient-to-br from-black/90 to-[#5B3A1A]/30 border-4 border-[#E86A2A]/50 rounded-lg p-6 md:p-8 overflow-hidden hover:border-[#E86A2A] transition-colors duration-300">
            {/* Background glow effects */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#E86A2A]/20 blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/10 blur-3xl animate-pulse" />
            
            {/* Neon glow on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#E86A2A]/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            <div className="relative z-10">
              {/* Album Title */}
              <div className="text-center mb-6">
                <GlitchText intensity="medium">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl mb-2 text-[#E86A2A]">DEREALIZATION</h2>
                </GlitchText>
                <p className="text-base sm:text-lg text-[#FFB26B]/80 uppercase tracking-widest">Album</p>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E86A2A] to-transparent mx-auto mt-4" />
              </div>
              
              {/* SoundCloud Playlist Embed */}
              <div className="rounded-lg overflow-hidden border-2 border-[#E86A2A]/30">
                <iframe
                  width="100%"
                  height="450"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/artfalls/sets/derealization&color=%23e86a2a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                  className="w-full"
                />
              </div>
            </div>

            {/* Glitch effect on border */}
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

            {/* Decorative scan line */}
            <motion.div
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent pointer-events-none"
              animate={{
                top: ['0%', '100%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 6,
                ease: 'linear',
              }}
            />
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl text-center mb-8">
            <GlitchText intensity="medium">{t('music.listenNow')}</GlitchText>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 bg-black/60 border-2 border-[#E86A2A]/30 rounded-lg p-6 hover:border-[#E86A2A] transition-all duration-300 group"
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center border-2 group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      borderColor: social.color,
                      backgroundColor: `${social.color}20`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: social.color }} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl mb-1">{social.label}</h3>
                    <p className="text-[#FFB26B]/60 text-sm">{social.username}</p>
                  </div>
                  
                  <ExternalLink className="w-5 h-5 text-[#E86A2A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
