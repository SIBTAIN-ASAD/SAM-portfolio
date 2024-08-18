import { motion } from 'framer-motion';
import { styles } from '../../constants/styles';
import { config } from '../../constants/config';
import { Typewriter } from 'react-simple-typewriter';
import Avatar from './Avatar';

const Hero = () => {
  return (
    <section className="h-screen w-full absolute z-10">
      <div
        className={`absolute mt-40 inset-0 top-[120px] mx-auto max-w-7xl  flex flex-row items-start gap-5`}
      >
        <div className="relative p-3 pb-5 pl-1">
          {/* Curtain Animation */}
          <motion.div
            initial={{ width: '100%', left: '0%' }}
            animate={{ width: '0%', left: '100%' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[#acb8f7] opacity-25"
            style={{ zIndex: 10 }}
          />

          {/* Bottom Border */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '50%' }}
            transition={{
              duration: 0.75,
              ease: 'easeInOut',
            }}
            className="absolute bottom-0 left-0 h-1 border-b-2 border-gray-700"
            style={{ borderBottom: '8px solid #acb8f7', borderRadius: '20%' }}
          />

          {/* Text Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
            className="relative"
          >
            <h1 className={`${styles.heroHeadText} pt-4 text-white`}>
              Hi, I'm <span className="text-[#acb8f7]">{config.hero.name}</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              <Typewriter
                words={['Senior Software Engineer', 'Full Stack Developer', 'AI Enthusiast']}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </motion.div>
        </div>
      <Avatar />
      </div>

      {/* <ComputersCanvas /> */}

      <div className="bottom-10 absolute flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2 opacity-50">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
