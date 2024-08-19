import React, { useEffect, useRef, useState } from 'react';
import { styles } from '../../constants/styles';
import { testimonials } from '../../constants';
import { Header } from '../atoms/Header';
import { TTestimonial } from '../../types';
import { config } from '../../constants/config';
import { SectionWrapper } from '../../hoc';
import { cn } from '../../utils/motion';

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <div className="w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-slate-700 bg-black px-8 py-6">
      <p className="text-[24px] font-black text-white">"</p>

      <div className="mt-1">
        <p className="text-[14px] tracking-wider text-white overflow-auto h-28">{testimonial}</p>

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
            className="h-12 w-12 rounded-full border border-gray-300 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      if (isHovering) {
        container.style.animationPlayState = 'paused';
      } else {
        container.style.animationPlayState = 'running';
      }
    }
  }, [isHovering]);

  return (
    <div className="relative bg-black-100 w-full overflow-hidden rounded-[20px]">
      <div className="absolute top-0 left-0 w-1/5 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-1/5 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      <div className={`${styles.paddingX} py-2 lg:ml-52 md:ml-32 sm:ml-10 ml-10`}>
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div className="relative border-t-4 w-full border-gray-700">
        <div
          ref={containerRef}
          className={cn(
            'flex gap-7 py-4 w-max overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
            'animate-scroll'
          )}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, 'feedback', 'w-auto', styles.paddingY);
