import { motion } from 'motion/react';
import { Play, ExternalLink } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { Music, Instagram, Youtube } from 'lucide-react';
import FallingLeaves from '../components/FallingLeaves';
import GlitchText from '../components/GlitchText';

export default function MusicPage() {
  const tracks = [
    { title: 'AFFINITY', url: 'https://soundcloud.com/artfalls/affinity', color: '#E86A2A' },
    { title: 'GRATITUDE', url: 'https://soundcloud.com/artfalls/gratitude', color: '#FFB26B' },
    { title: 'SERENDIPITY', url: 'https://soundcloud.com/artfalls/serendipity', color: '#E86A2A' },
    { title: 'MARTY MCFLY', url: 'https://soundcloud.com/artfalls/marty-mcfly', color: '#FFB26B' },
    { title: 'MACHIAVELLI', url: 'https://soundcloud.com/artfalls/machiavelli', color: '#E86A2A' },
    { title: 'CRASH SALE', url: 'https://soundcloud.com/artfalls/crash-sale', color: '#FFB26B' },
    { title: 'LAST LOVE', url: 'https://soundcloud.com/artfalls/lastlove', color: '#E86A2A' },
    { title: 'SPHERITE', url: 'https://soundcloud.com/artfalls/spherite', color: '#FFB26B' },
    { title: 'ANXIETY', url: 'https://soundcloud.com/artfalls/anxiety', color: '#E86A2A' },
    { title: 'GHOST', url: 'https://soundcloud.com/artfalls/ghost', color: '#FFB26B' },
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
      <FallingLeaves count={12} />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <GlitchText intensity="high">
            <h1 className="text-6xl mb-4">MUSIC</h1>
          </GlitchText>
          <p className="text-xl text-[#FFB26B]">
            Hyperpop distortion fused with melancholy autumn aesthetics.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#E86A2A] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Track Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-black/90 to-[#5B3A1A]/30 border-2 border-[#E86A2A]/30 rounded-lg p-4 overflow-hidden hover:border-[#E86A2A] transition-colors duration-300"
            >
              {/* Neon glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#E86A2A]/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="relative z-10">
                <h3 className="text-xl mb-3 text-[#E86A2A]">{track.title}</h3>
                
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

              {/* Glitch effect on border */}
              <motion.div
                className="absolute inset-0 border-2 border-cyan-500 opacity-0 pointer-events-none"
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl text-center mb-8">
            <GlitchText intensity="medium">Listen Now</GlitchText>
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