import { motion } from 'framer-motion';

import { styles } from '../../constants/styles';
import { ComputersCanvas } from '../canvas';
import { config } from '../../constants/config';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className={`mx-auto h-screen w-full`}>
      <div
        className={`absolute mt-20 inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className={`w-2 h-36 ${styles.gradient} bg-gradient-to-l to-transparent`} />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} pt-4 text-white`}>
            Hi, I'm <span className="text-[#acb8f7]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            <Typewriter
              words={['Senior Software Engineer','Full Stack Engineer']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
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
