import { motion } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import GlitchText from '../components/GlitchText';
import { useTranslation } from 'react-i18next';

interface FallingItem {
  id: number;
  x: number;
  y: number;
  type: 'leaf' | 'glitch';
  speed: number;
}

export default function MinigamePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [gameState, setGameState] = useState<'start' | 'playing' | 'ended'>('start');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [playerX, setPlayerX] = useState(50);
  const [fallingItems, setFallingItems] = useState<FallingItem[]>([]);
  const [itemIdCounter, setItemIdCounter] = useState(0);
  const [scorePopups, setScorePopups] = useState<Array<{ id: number; x: number; y: number; value: string }>>([]);

  // Player movement
  const movePlayer = useCallback((direction: 'left' | 'right') => {
    setPlayerX((prev) => {
      if (direction === 'left') return Math.max(10, prev - 5);
      return Math.min(90, prev + 5);
    });
  }, []);

  // Keyboard controls
  useEffect(() => {
    if (gameState !== 'playing') return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        movePlayer('left');
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        movePlayer('right');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState, movePlayer]);

  // Game timer
  useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setGameState('ended');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState]);

  // Spawn falling items
  useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(() => {
      const newItem: FallingItem = {
        id: itemIdCounter,
        x: Math.random() * 80 + 10,
        y: 0,
        type: Math.random() > 0.4 ? 'leaf' : 'glitch',
        speed: 2 + Math.random() * 2,
      };
      setFallingItems((prev) => [...prev, newItem]);
      setItemIdCounter((prev) => prev + 1);
    }, 800);

    return () => clearInterval(interval);
  }, [gameState, itemIdCounter]);

  // Update falling items
  useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(() => {
      setFallingItems((prev) => {
        const updated = prev.map((item) => ({
          ...item,
          y: item.y + item.speed,
        }));

        // Check collisions with player
        updated.forEach((item) => {
          if (item.y > 75 && item.y < 85 && Math.abs(item.x - playerX) < 10) {
            if (item.type === 'leaf') {
              setScore((s) => s + 1);
              // Add score popup
              setScorePopups((popups) => [
                ...popups,
                { id: Date.now(), x: playerX, y: 80, value: '+1' },
              ]);
            } else {
              setScore((s) => Math.max(0, s - 2));
              // Add negative popup
              setScorePopups((popups) => [
                ...popups,
                { id: Date.now(), x: playerX, y: 80, value: '-2' },
              ]);
            }
            item.y = 200; // Remove from screen
          }
        });

        // Remove items that went off screen
        return updated.filter((item) => item.y < 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [gameState, playerX]);

  // Clean up score popups
  useEffect(() => {
    const interval = setInterval(() => {
      setScorePopups((popups) => popups.filter((popup) => Date.now() - popup.id < 1000));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setTimer(30);
    setPlayerX(50);
    setFallingItems([]);
    setItemIdCounter(0);
    setScorePopups([]);
  };

  const resetGame = () => {
    setGameState('start');
    setScore(0);
    setTimer(30);
    setPlayerX(50);
    setFallingItems([]);
    setItemIdCounter(0);
    setScorePopups([]);
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-[#0C0C0C] to-[#5B3A1A]/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#FFB26B] hover:text-[#E86A2A] transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <GlitchText intensity="high">
            <h1 className="text-4xl">FALLEN FACES</h1>
          </GlitchText>

          <div className="w-32" />
        </div>

        {/* Game Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-b from-[#E86A2A]/20 to-[#0C0C0C] border-4 border-[#E86A2A] rounded-lg overflow-hidden aspect-[4/3]">
            {/* Start Screen */}
            {gameState === 'start' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-20"
              >
                <GlitchText intensity="high">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">{t('minigame.startTitle')}</h2>
                </GlitchText>
                
                <div className="text-center mb-8 space-y-2 text-[#FFB26B] px-4">
                  <p className="text-base sm:text-lg md:text-xl">{t('minigame.startInstructions1')}</p>
                  <p className="text-sm sm:text-base">{t('minigame.startInstructions2')}</p>
                  <p className="text-sm sm:text-base md:hidden">{t('minigame.startInstructions3')}</p>
                  <p className="text-[#FFB26B] text-sm sm:text-base">{t('minigame.startInstructions4')}</p>
                  <p className="text-[#5B3A1A] text-sm sm:text-base">{t('minigame.startInstructions5')}</p>
                  <p className="text-sm sm:text-base">{t('minigame.startInstructions6')}</p>
                </div>

                <button
                  onClick={startGame}
                  className="glow-button px-8 sm:px-12 py-3 sm:py-4 bg-[#E86A2A] text-white uppercase tracking-wider hover:bg-[#FFB26B] transition-all duration-300 text-base sm:text-lg md:text-xl"
                >
                  {t('minigame.startButton')}
                </button>
              </motion.div>
            )}

            {/* End Screen */}
            {gameState === 'ended' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm z-20"
              >
                <GlitchText intensity="high">
                  <h2 className="text-5xl mb-4">GAME OVER</h2>
                </GlitchText>
                
                <p className="text-3xl text-[#FFB26B] mb-8">
                  Your Score: <span className="text-[#E86A2A]">{score}</span>
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={resetGame}
                    className="glow-button px-8 py-3 bg-[#E86A2A] text-white uppercase tracking-wider hover:bg-[#FFB26B] transition-all duration-300"
                  >
                    Restart
                  </button>
                  <button
                    onClick={() => navigate('/')}
                    className="px-8 py-3 bg-black border-2 border-[#E86A2A] text-white uppercase tracking-wider hover:bg-[#E86A2A] transition-all duration-300"
                  >
                    Exit
                  </button>
                </div>
              </motion.div>
            )}

            {/* Game Area */}
            {gameState === 'playing' && (
              <>
                {/* HUD */}
                <div className="absolute top-4 left-4 right-4 flex justify-between z-10">
                  <div className="bg-black/80 backdrop-blur-sm px-6 py-3 rounded border border-[#E86A2A]">
                    <p className="text-[#FFB26B]">Score: <span className="text-[#E86A2A]">{score}</span></p>
                  </div>
                  <div className="bg-black/80 backdrop-blur-sm px-6 py-3 rounded border border-[#E86A2A]">
                    <p className="text-[#FFB26B]">Time: <span className="text-[#E86A2A]">{timer}s</span></p>
                  </div>
                </div>

                {/* Falling Items */}
                {fallingItems.map((item) => (
                  <motion.div
                    key={item.id}
                    className="absolute"
                    style={{
                      left: `${item.x}%`,
                      top: `${item.y}%`,
                    }}
                    animate={{
                      rotate: item.type === 'leaf' ? [0, 360] : [0, 180, 360],
                    }}
                    transition={{
                      rotate: {
                        duration: item.type === 'leaf' ? 3 : 2,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                    }}
                  >
                    {item.type === 'leaf' ? (
                      // Autumn Leaf
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <defs>
                          <filter id={`glow-${item.id}`} x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        {/* Maple leaf shape */}
                        <path
                          d="M20 5 L22 12 L28 10 L24 16 L30 18 L24 22 L28 28 L22 24 L20 32 L18 24 L12 28 L16 22 L10 18 L16 16 L12 10 L18 12 Z"
                          fill="#E86A2A"
                          filter={`url(#glow-${item.id})`}
                        />
                        <path
                          d="M20 5 L22 12 L28 10 L24 16 L30 18 L24 22"
                          fill="#FFB26B"
                          opacity="0.8"
                        />
                        {/* Leaf vein */}
                        <line x1="20" y1="5" x2="20" y2="32" stroke="#5B3A1A" strokeWidth="1" />
                      </svg>
                    ) : (
                      // Branch
                      <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <defs>
                          <filter id={`shadow-${item.id}`}>
                            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.5"/>
                          </filter>
                        </defs>
                        {/* Main branch */}
                        <rect 
                          x="5" 
                          y="23" 
                          width="40" 
                          height="4" 
                          fill="#5B3A1A"
                          filter={`url(#shadow-${item.id})`}
                        />
                        <rect 
                          x="5" 
                          y="24" 
                          width="40" 
                          height="2" 
                          fill="#3d2812"
                        />
                        {/* Small twigs */}
                        <rect 
                          x="15" 
                          y="18" 
                          width="2" 
                          height="7" 
                          fill="#5B3A1A"
                          transform="rotate(-30 16 22)"
                        />
                        <rect 
                          x="30" 
                          y="25" 
                          width="2" 
                          height="7" 
                          fill="#5B3A1A"
                          transform="rotate(30 31 29)"
                        />
                        {/* Bark texture */}
                        <line x1="10" y1="23" x2="10" y2="27" stroke="#3d2812" strokeWidth="0.5" />
                        <line x1="20" y1="23" x2="20" y2="27" stroke="#3d2812" strokeWidth="0.5" />
                        <line x1="30" y1="23" x2="30" y2="27" stroke="#3d2812" strokeWidth="0.5" />
                        <line x1="40" y1="23" x2="40" y2="27" stroke="#3d2812" strokeWidth="0.5" />
                      </svg>
                    )}
                  </motion.div>
                ))}

                {/* Score Popups */}
                {scorePopups.map((popup) => (
                  <motion.div
                    key={popup.id}
                    className={`absolute text-2xl ${popup.value.startsWith('+') ? 'text-[#FFB26B]' : 'text-red-500'}`}
                    style={{
                      left: `${popup.x}%`,
                      top: `${popup.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ opacity: 1, y: 0, scale: 1 }}
                    animate={{ opacity: 0, y: -30, scale: 1.5 }}
                    transition={{ duration: 1 }}
                  >
                    {popup.value}
                  </motion.div>
                ))}

                {/* Player */}
                <motion.div
                  className="absolute bottom-[10%]"
                  animate={{
                    left: `${playerX}%`,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  style={{
                    transform: 'translateX(-50%)',
                  }}
                >
                  {/* Chibi ARTFALL character */}
                  <div className="relative">
                    {/* Character body */}
                    <div className="w-16 h-24 relative">
                      {/* Head */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-16 bg-gradient-to-b from-[#5B3A1A] to-[#3d2812] rounded-t-full border-2 border-[#E86A2A]/30">
                        {/* Face scratch/glitch */}
                        <div className="absolute inset-x-2 top-3 bottom-4 flex items-center justify-center">
                          <div className="w-full h-full relative">
                            {/* Scratched face */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#E86A2A] via-[#FFB26B] to-[#E86A2A]" 
                                 style={{
                                   clipPath: 'polygon(10% 20%, 90% 20%, 85% 50%, 90% 80%, 10% 80%, 15% 50%)',
                                 }} 
                            />
                            {/* Glitch lines */}
                            <div className="absolute inset-0">
                              <div className="absolute top-1/4 left-0 right-0 h-px bg-black/50" />
                              <div className="absolute top-1/2 left-0 right-0 h-px bg-black/50" />
                              <div className="absolute top-3/4 left-0 right-0 h-px bg-black/50" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Body/Torso */}
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-12 h-10 bg-gradient-to-b from-black to-[#0C0C0C] rounded-b-lg border-2 border-[#E86A2A]/30">
                        {/* Orange accent line */}
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#E86A2A]/50 rounded" />
                      </div>

                      {/* Arms reaching up to catch leaves */}
                      <motion.div
                        className="absolute top-10 -left-3 w-3 h-10 bg-gradient-to-b from-[#5B3A1A] to-[#3d2812] rounded-full origin-top"
                        animate={{
                          rotate: [-10, 10, -10],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      <motion.div
                        className="absolute top-10 -right-3 w-3 h-10 bg-gradient-to-b from-[#5B3A1A] to-[#3d2812] rounded-full origin-top"
                        animate={{
                          rotate: [10, -10, 10],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      
                      {/* Glow effect when catching */}
                      <motion.div
                        className="absolute -inset-2 bg-[#FFB26B]/30 rounded-full blur-xl"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Controls hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded text-[#FFB26B] text-sm">
                  Use ← → or A/D to move
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}