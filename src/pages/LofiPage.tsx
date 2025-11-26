import { motion } from 'motion/react';
import { ExternalLink, Music, Instagram, Youtube } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import FallingLeaves from '../components/FallingLeaves';
import GlitchText from '../components/GlitchText';

export default function LofiPage() {
  const { t } = useTranslation();
  
  const tracks = [
    { title: 'SAM', url: 'https://soundcloud.com/artfalls/sam' },
  ];

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4">{t('music.lofiTitle')}</h1>
          </GlitchText>
          <p className="text-base sm:text-lg md:text-xl text-[#FFB26B]">
            {t('music.lofiSubtitle')}
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#E86A2A] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Track Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-6xl mx-auto">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-black/90 to-[#5B3A1A]/30 border-2 border-[#E86A2A]/30 rounded-lg p-4 overflow-hidden hover:border-[#E86A2A] transition-colors duration-300"
            >
              {/* Soft glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#FFB26B]/10 to-[#E86A2A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="relative z-10">
                <h3 className="text-xl mb-3 text-[#FFB26B]">{track.title}</h3>
                
                {/* SoundCloud Embed */}
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&color=%23e86a2a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
                  className="rounded"
                />
              </div>

              {/* Subtle pulse effect */}
              <motion.div
                className="absolute inset-0 border-2 border-[#FFB26B] opacity-0 pointer-events-none rounded-lg"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Listen on SoundCloud CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://soundcloud.com/artfalls"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#E86A2A] text-black rounded-lg hover:bg-[#FFB26B] transition-all duration-300 shadow-lg hover:shadow-[#E86A2A]/50 uppercase tracking-wider group"
          >
            {t('music.listenNow')}
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-10">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
            >
              <social.icon
                className="w-8 h-8"
                style={{ color: social.color }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}