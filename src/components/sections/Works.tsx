import React from 'react';
import { motion } from 'framer-motion';
import { github } from '../../assets';
import { Header } from '../atoms/Header';
import { SectionWrapper } from '../../hoc';
import { config } from '../../constants/config';
import { projects } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { useMediaQuery } from 'react-responsive';

const ProjectCard: React.FC<{
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  current: string;
  githubLink?: string;
}> = ({ index, name, description, tags, current, githubLink }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const CardContent = (
    <div className="relative w-full sm:w-[360px] rounded-lg shadow-lg border border-[#33488d] overflow-hidden bg-[#070b18]">
      <div className="relative h-[250px] w-full rounded-lg bg-tertiary">
        <img
          src={current}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 filter brightness-75"
        />
        <div className="absolute p-2 inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
          <div className="text-center p-2 h-full border rounded-md text-white">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-white"
            >
              <img src={github} className="h-10 w-10 my-6 hover:scale-110" alt="" />
            </a>

            <p className="mb-4 text-sm text-left">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map(tag => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 flex flex-wrap gap-2">
        <p className="text-lg text-[#535C91] font-bold">{name}</p>
      </div>
    </div>
  );

  return !isMobile ? (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.1, 0.5)}
      className="relative"
    >
      {CardContent}
    </motion.div>
  ) : (
    CardContent
  );
};

const Works = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <>
      <Header useMotion={!isMobile} {...config.sections.works} />

      <div className="flex w-full">
        <p className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]">
          {config.sections.works.content}
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            current={project.image}
            key={`project-${index}`}
            index={index}
            githubLink={project.sourceCodeLink}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'work');
