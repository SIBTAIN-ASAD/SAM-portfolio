import { motion } from 'framer-motion';
import { styles } from '../../constants/styles';
import { config } from '../../constants/curriculumVtae/config';
import { Typewriter } from 'react-simple-typewriter';
import Avatar from './Avatar';

interface HeroProps {
  isBackgroundReady?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isBackgroundReady = true }) => {
  return (
    <section className="h-screen w-full absolute z-10">
      {/* Loading overlay to prevent flicker */}
      {!isBackgroundReady && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="absolute inset-0 bg-primary z-20"
        />
      )}
      
      <div className={`absolute inset-0 mx-auto p-8 justify-evenly flex flex-row items-center`}>
        <div className="relative p-3 pb-5 pl-1">
          {/* Curtain Animation */}
          <motion.div
            initial={{ width: '100%', left: '0%' }}
            animate={{ width: '0%', left: '100%' }}
            transition={{ duration: 1, ease: 'easeInOut', delay: isBackgroundReady ? 0 : 0.5 }}
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
              delay: isBackgroundReady ? 0 : 0.5,
            }}
            className="absolute bottom-0 left-0 h-1 border-b-2 border-gray-700"
            style={{ borderBottom: '8px solid #acb8f7', borderRadius: '20%' }}
          />

          {/* Text Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              ease: 'easeInOut', 
              delay: isBackgroundReady ? 1 : 1.5 
            }}
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
        <Avatar isBackgroundReady={isBackgroundReady} />
      </div>

      {/* Social Media Links - Subtle & Non-Intrusive */}
      <div className="absolute bottom-8 right-8 flex gap-4">
        <motion.a
          href={config.contact.contactInfo.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0.3 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="text-gray-500 hover:text-[#acb8f7] transition-colors"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M20.5 2h-17C2.1 2 1 3.1 1 4.5v15C1 20.9 2.1 22 3.5 22h17c1.4 0 2.5-1.1 2.5-2.5v-15C23 3.1 21.9 2 20.5 2zM8 19H5v-9h3v9zm-1.5-10.26c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM19 19h-3v-4.5c0-1.104-.446-1.793-1.307-1.793-.715 0-1.138.477-1.325 1.038-.068.166-.086.397-.086.627V19h-3v-9h3v1.217c.385-.594.987-1.439 2.395-1.439 1.75 0 3.065 1.142 3.065 3.597V19z" />
          </svg>
        </motion.a>

        <motion.a
          href={config.contact.contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0.3 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="text-gray-500 hover:text-[#acb8f7] transition-colors"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </motion.a>

        <motion.a
          href={config.contact.contactInfo.twitter}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0.3 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="text-gray-500 hover:text-[#acb8f7] transition-colors"
          aria-label="Twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M23.953 4.57a10 10 0 002.856-3.915 10 10 0 01-2.887.775 4.998 4.998 0 002.192-2.761c-.951.564-2.005.974-3.127 1.195a4.996 4.996 0 00-8.506 4.547A14.148 14.148 0 011.392 3.751a4.998 4.998 0 001.546 6.671 4.992 4.992 0 01-2.265-.567v.063a4.996 4.996 0 003.995 4.895 5 5 0 01-2.258.085 4.997 4.997 0 004.674 3.472A10.009 10.009 0 010 19.542a14.124 14.124 0 007.666 2.247c9.173 0 14.172-7.591 14.172-14.168 0-.216-.005-.432-.015-.648A10.012 10.012 0 0023.953 4.57z" />
          </svg>
        </motion.a>

        <motion.a
          href={`mailto:${config.contact.contactInfo.email}`}
          initial={{ opacity: 0.3 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="text-gray-500 hover:text-[#acb8f7] transition-colors"
          aria-label="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </motion.a>
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
                delay: isBackgroundReady ? 0 : 0.5,
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
