import { motion } from 'framer-motion';
import { styles } from '../../constants/styles';
import { fadeIn } from '../../utils/motion';
import { testimonials } from '../../constants';
import { Header } from '../atoms/Header';
import { TTestimonial } from '../../types';
import { config } from '../../constants/config';
import { SectionWrapper } from '../../hoc';

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-black-200 w-full rounded-3xl p-10"
  >
    <p className="text-[48px] font-black text-white">"</p>

    <div className="mt-1">
      <p className="text-[18px] tracking-wider text-white">{testimonial}</p>

      <div className="mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-[16px] font-medium text-white">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="text-secondary mt-1 text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="relative bg-black-100 w-full overflow-hidden rounded-[20px]">
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      <div className={`${styles.paddingX} py-2  ml-40`}>
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div className="relative border-t-4 w-full border-gray-700">
        <div className="absolute top-0 left-0 w-full  h-full pointer-events-none"></div>
        <motion.div
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          className="flex gap-7"
        >
          {(testimonials).map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, 'feedback', 'w-auto', styles.paddingY);
