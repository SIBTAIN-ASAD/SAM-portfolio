import { motion } from 'framer-motion';

import { styles } from '../constants/styles';

interface Props {
  Component: React.ElementType;
  idName: string;
  width?: string;
  padding?: string;
}

const SectionWrapper = (
  Component: Props['Component'],
  idName: Props['idName'],
  width?: string,
  padding?: string
) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${padding ? padding : styles.paddingX} relative z-0 mx-auto ${width ? width : 'max-w-7xl'}`}
        id={idName}
      >
        <span className="hash-span">&nbsp;</span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
