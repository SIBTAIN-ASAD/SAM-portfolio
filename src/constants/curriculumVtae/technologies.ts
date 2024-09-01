import type { TTechnology } from '../../types';

import {
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  docker,
  threejs,
  django,
} from '../../assets';

const technologies: TTechnology[] = [
  {
    name: 'JavaScript',
    icon: javascript,
    description: 'JavaScript',
  },
  {
    name: 'TypeScript',
    icon: typescript,
    description: 'TypeScript',
  },
  {
    name: 'React JS',
    icon: reactjs,
    description: 'React JS',
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
    description: 'Redux Toolkit',
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
    description: 'Tailwind CSS',
  },
  {
    name: 'Django',
    icon: django,
    description: 'Django',
  },
  {
    name: 'MongoDB',
    icon: mongodb,
    description: 'MongoDB',
  },
  {
    name: 'Three JS',
    icon: threejs,
    description: 'Three JS',
  },
  {
    name: 'Git',
    icon: git,
    description: 'Git',
  },
  {
    name: 'Docker',
    icon: docker,
    description: 'Docker',
  },
];

export { technologies };
