import { motion } from 'framer-motion';

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
        className={`${padding ? padding : `p-8 md:p-20`} relative z-0 mx-auto`}
        id={idName}
      >
        <span className="hash-span">&nbsp;</span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
