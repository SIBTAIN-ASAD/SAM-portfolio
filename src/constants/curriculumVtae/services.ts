import type { TService } from '../../types';

import { sa, devops, ai, web } from '../../assets';

const services: TService[] = [
  {
    title: 'Full Stack Engineer',
    icon: web,
    description:
      'Expert in developing both client and server-side applications using modern technologies. Proficient in React, Django, and RESTful APIs.',
  },
  {
    title: 'Solution Architect',
    icon: sa,
    description:
      'Swift problem solver with a keen eye for detail. Experienced in designing scalable and maintainable software solutions.',
  },
  {
    title: 'DevOps Engineer',
    icon: devops,
    description:
      'Skilled in deploying and maintaining cloud infrastructure using AWS, Azure, and Google Cloud Platform. Proficient in CI/CD pipelines.',
  },
  {
    title: 'AI Enthusiast',
    icon: ai,
    description:
      'Passionate about artificial intelligence and machine learning. Experienced in reinforcement learning and AI model deployment.',
  },
];

export { services };
