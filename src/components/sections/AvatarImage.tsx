import { motion } from 'framer-motion';
import { sibtainAsad } from '../../assets';

interface AvatarProps {
  isBackgroundReady?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ isBackgroundReady = true }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: isBackgroundReady ? 0.9 : 1.4 }}
        className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(172,184,247,0.18) 0%, rgba(172,184,247,0.06) 60%, transparent 80%)',
        }}
      />

      {/* Spinning dashed border ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full"
        style={{
          border: '1.5px dashed rgba(172,184,247,0.3)',
        }}
      />

      {/* Static solid ring */}
      <div
        className="absolute w-[272px] h-[272px] md:w-[352px] md:h-[352px] rounded-full"
        style={{
          border: '2px solid rgba(172,184,247,0.2)',
        }}
      />

      {/* Image container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: isBackgroundReady ? 1 : 1.5, ease: 'easeOut' }}
        className="relative w-[250px] h-[250px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden"
        style={{
          boxShadow: '0 0 40px rgba(172,184,247,0.2), 0 0 80px rgba(172,184,247,0.08)',
          border: '2px solid rgba(172,184,247,0.35)',
        }}
      >
        <img
          src={sibtainAsad}
          alt="Profile"
          className="w-full h-full object-cover object-center"
          style={{
            filter:
              'brightness(0.88) contrast(1.25) saturate(0.75) hue-rotate(190deg) sepia(0.12)',
          }}
        />
        {/* Overlay tint to blend with dark theme */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'linear-gradient(135deg, rgba(172,184,247,0.08) 0%, rgba(10,15,40,0.25) 100%)',
            mixBlendMode: 'overlay',
          }}
        />
      </motion.div>

      {/* Corner accent dots */}
      {[
        { top: '10%', right: '8%', delay: 1.6 },
        { bottom: '15%', left: '6%', delay: 1.8 },
        { top: '40%', left: '2%', delay: 2.0 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{
            duration: 2,
            delay: isBackgroundReady ? pos.delay : pos.delay + 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#acb8f7]"
          style={{ ...pos, opacity: 0.7 }}
        />
      ))}
    </div>
  );
};

export default Avatar;
