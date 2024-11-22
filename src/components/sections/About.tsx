import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { services } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/curriculumVtae/config';
import { Header } from '../atoms/Header';

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
  description: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon, description }) => (
  <Tilt tiltMaxAngleX={0} tiltMaxAngleY={0} glareColor="#000000">
    <div className="w-full min-w-[280px]">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="shadow-card w-full rounded-[20px] p-[1px] border border-[#131b37] relative"
      >
        <div className="bg-transparent flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5 relative overflow-hidden">
          <img src={icon} alt="web-development" className="h-16 w-16 object-contain" />

          <h3 className="text-center text-[20px] font-bold text-[#c1caf5]">{title}</h3>

          <div className="description-overlay text-left">{description}</div>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="text-secondary mt-2 max-w-2xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-6 justify-center md:justify-between">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
