import { motion } from 'framer-motion';
import { avatar } from '../../assets';

const Avatar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
      className="relative"
    >
      <div className="relative bottom-0 hidden md:block right-10">
        <img
          src={avatar}
          alt="Avatar"
          className="rounded-full border-4 border-slate-800 w-96 h-96"
        />
      </div>
    </motion.div>
  );
};

export default Avatar;
