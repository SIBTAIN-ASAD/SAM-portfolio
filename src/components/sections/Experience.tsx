import React, { useEffect, useRef, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { Header } from '../atoms/Header';
import { TExperience } from '../../types';
import { config } from '../../constants/curriculumVtae/config';

const ExperienceCard: React.FC<TExperience> = experience => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#070F2B',
        color: '#c1caf5',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #c1caf5' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="h-full w-full">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-full w-full object-cover rounded-full"
          />
        </div>
      }
    >
      <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.companyName}
      </p>
      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const timelineRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!timelineRef.current) return;
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
  }, []);

  return (
    <div className="">
      <Header useMotion={true} {...config.sections.experience} />

      <div
        ref={timelineRef}
        className={`mt-20 flex flex-col ${isInView ? 'animate-timeline' : ''}`}
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'work');
