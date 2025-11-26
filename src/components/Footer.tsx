import { Instagram, Music, Youtube } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
  const socials = [
    { icon: FaTiktok, url: 'https://www.tiktok.com/@artfall.eth', label: 'TikTok' },
    { icon: Music, url: 'https://soundcloud.com/artfalls', label: 'SoundCloud' },
    { icon: Instagram, url: 'https://www.instagram.com/artfall.sol/', label: 'Instagram' },
    { icon: Youtube, url: 'https://www.youtube.com/@ARTFALLING', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-black/90 border-t border-[#E86A2A]/20 py-12 mt-20">
      {/* Falling leaves background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="falling-leaves-bg"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h3 className="glitch-text mb-6">
            WORLD OF ARTFALL
          </h3>
          
          <div className="flex justify-center gap-8 mb-6">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-white hover:text-[#E86A2A] transition-colors duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
          
          <p className="text-[#FFB26B]/60 text-sm">
            © 2025 ARTFALL • ADOMORRA 
          </p>
        </div>
      </div>
    </footer>
  );
}
