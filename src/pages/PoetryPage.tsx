import { motion } from 'motion/react';
import FallingLeaves from '../components/FallingLeaves';
import GlitchText from '../components/GlitchText';
import { useTranslation } from 'react-i18next';

export default function PoetryPage() {
  const { t } = useTranslation();
  const poems = [
    {
      title: 'UNKNOWN',
      verses: [
        [
          'Left you for a better life',
          'Tell me that it\'s better right',
          'Maybe on a starry night',
          'You\'ll think of me and maybe cry',
        ],
        [
          'In quiet hums like lullabies',
          'I\'ll always be here by your side',
          'The ghost that rides on silent nights',
        ],
        [
          'Always on my mind',
          'The version of you that kept me grounded',
          'The past creeps up from time to time',
          'By our fears we are surrounded',
        ],
        [
          'This harbinger still bears a home',
          'In dreams you visit me, I feel your soul',
          'And though your gone, still can\'t let go',
          'Whatever makes me feel less unknown',
        ],
        [
          'If you were mine, I\'d let it show',
          'Some things die and some things grow',
          'It is what it is, the stars still glow',
          'Whatever makes me feel less unknown',
        ],
        [
          'They often find me humorous',
          'But I can\'t stand my views on us',
          'Her iris dances, luminous',
          'While my eyes fade from what truth was',
        ],
        [
          'Your name still lingers in my mind',
          'A future I had left behind',
          'I loved you more than life itself',
          'Now I can\'t stand to live with myself',
        ],
      ],
    },
    {
      title: 'EVIDENTLY',
      verses: [
        [
          'Watching you closely',
          'As the world\'s spinning slowly',
          'Is this what it feels like to be known',
          'Take it back I don\'t wanna know',
        ],
        [
          'Left home when I was younger',
          'Enough heartache for my mother',
          'Took your name out my phone',
          'Dust settling on her bones',
        ],
        [
          'Intoxicated',
          'Can\'t really think straight',
        ],
        [
          'Stop asking questions',
          'I\'d hate to split ways',
        ],
        [
          'It\'s frustrating',
          'Being this way',
        ],
        [
          'Hating myself',
          'For past mistakes',
        ],
        [
          'Insufferable',
          'Trying to tolerate',
        ],
        [
          'A lot went wrong',
          'I can\'t begin to tell you',
          'Where do we belong?',
          'Somewhere angels can\'t get to',
        ],
        [
          'Running from my mind',
          'The hunt will always get you',
          'I don\'t understand',
          'What kind of person I am',
        ],
        [
          'It\'s no use apologising',
          'Smoke until my lungs',
        ],
        [
          'Get comfortable with dying',
          'It\'s hard being a human',
        ],
        [
          'But it\'s harder realising',
          'There\'s nothing virtuous about barely surviving',
        ],
      ],
    },
    {
      title: 'SIGHT',
      verses: [
        [
          'I\'m tired of waiting for the start of,',
          'Yet another endless conversation',
        ],
        [
          'If you don\'t want me anymore, keep your words',
          'I don\'t need persuasions',
        ],
        [
          'Rather be alone than live for your validation',
          'Rather be alone than only needed on occasion',
        ],
        [
          'I kept the lights on, waited for a sign',
          'Luminescence talks louder than your voice and mine',
        ],
        [
          'I barely remember who you used to be',
          'The silence is a stranger but she\'s familiar to me',
        ],
        [
          'Mirrors image turns away',
          'Tomorrow may be brighter than yesterday',
        ],
        [
          'When it\'s our time to go away',
          'No don\'t you be afraid',
        ],
      ],
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
            <h1 className="text-6xl mb-4">POETRY</h1>
          </GlitchText>
          <p className="text-xl text-[#FFB26B]">
            Words born from glitched memories and silent nights.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#E86A2A] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Poems */}
        <div className="max-w-4xl mx-auto space-y-16">
          {poems.map((poem, poemIndex) => (
            <motion.div
              key={poemIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: poemIndex * 0.2 }}
              className="relative bg-gradient-to-br from-black/80 to-[#5B3A1A]/20 border-2 border-[#E86A2A]/30 rounded-lg p-8 md:p-12 overflow-hidden hover:border-[#E86A2A] transition-colors duration-500"
            >
              {/* Background glow effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E86A2A]/10 blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FFB26B]/10 blur-3xl animate-pulse" />

              {/* Glitch border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-cyan-500 opacity-0 pointer-events-none"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatDelay: 8 + poemIndex * 2,
                }}
              />

              {/* Title */}
              <div className="relative z-10 mb-8">
                <GlitchText intensity="medium">
                  <h2 className="text-4xl text-[#E86A2A] mb-2">{poem.title}</h2>
                </GlitchText>
                <div className="w-24 h-0.5 bg-gradient-to-r from-[#E86A2A] to-transparent" />
              </div>

              {/* Verses */}
              <div className="relative z-10 space-y-6">
                {poem.verses.map((verse, verseIndex) => (
                  <motion.div
                    key={verseIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: verseIndex * 0.1 }}
                    className="space-y-2"
                  >
                    {verse.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className="text-[#FFB26B] text-lg leading-relaxed tracking-wide italic"
                      >
                        {line}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute bottom-4 right-4 text-[#E86A2A]/20 text-6xl"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                "
              </motion.div>

              {/* Horizontal scan line */}
              <motion.div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
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
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <p className="text-[#FFB26B]/60 italic text-lg">
            "{t('poetry.quote')}"
          </p>
        </motion.div>
      </div>
    </div>
  );
}