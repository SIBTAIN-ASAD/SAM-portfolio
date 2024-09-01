import { motion } from 'framer-motion';
import { styles } from '../../constants/styles';
import { config } from '../../constants/curriculumVtae/config';
import { Typewriter } from 'react-simple-typewriter';
import Avatar from './Avatar';

const Hero = () => {
  return (
    <section className="h-screen w-full absolute z-10">
      <div className={`absolute inset-0 mx-auto p-8 justify-evenly flex flex-row items-center`}>
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

      <div className="absolute bottom-20 flex w-full items-center justify-center">
        <a href="#about">
          <div className="opacity-50">
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-secondary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
