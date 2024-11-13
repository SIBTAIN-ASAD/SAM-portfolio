import type { TProject } from '../../types';

import {
  healthcare,
  quora,
  splitwise,
  hams,
  nexus,
  burger,
  pythonMS,
  figmaland,
  tradingtracker,
} from '../../assets';

const projects: TProject[] = [
  {
    name: 'Quora Clone',
    description:
      'A platform allowing users to ask questions, answer, and interact with a community, mimicking the core functionalities of Quora.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'django',
        color: 'green-text-gradient',
      },
      {
        name: 'RESTful APIs',
        color: 'pink-text-gradient',
      },
    ],
    image: quora,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/quora/',
  },
  {
    name: 'Splitwise',
    description:
      'A collaborative expense management application enabling users to split bills and track expenses among a group.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
    ],
    image: splitwise,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/splitwise/tree/feature/Dashboard/',
  },
  {
    name: 'Invesment Tracker',
    description:
      'InvestmentTracker is a web application designed to help users manage and track their investments in stocks, ETFs, and cryptocurrencies.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'PSQL',
        color: 'blue-text-gradient',
      },
      {
        name: 'DRF',
        color: 'green-text-gradient',
      },
    ],
    image: tradingtracker,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/Trading-Tracker',
  },
  {
    name: 'HAMS',
    description:
      'A hospital appointment management system designed to streamline the appointment booking process and enhance patient experience.',
    tags: [
      {
        name: 'php',
        color: 'blue-text-gradient',
      },
    ],
    image: hams,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/HAMS',
  },
  {
    name: 'NexusIn',
    description:
      'A social networking website developed using the MERN stack, featuring components such as Feed, Chat, Friends, Jobs, and Admin Site.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
    ],
    image: nexus,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/',
  },
  {
    name: 'Healthcare Project',
    description:
      'A comprehensive healthcare management system designed to optimize patient data management and enhance operational efficiency.',
    tags: [
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'mui',
        color: 'green-text-gradient',
      },
      {
        name: 'ms-dynamics',
        color: 'pink-text-gradient',
      },
    ],
    image: healthcare,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/',
  },
  {
    name: 'React Burger App',
    description:
      'A web application allowing users to build and order custom burgers, showcasing the use of React, Redux, and Firebase.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'firebase',
        color: 'pink-text-gradient',
      },
    ],
    image: burger,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/react-burger',
  },
  {
    name: 'Figma Land Website',
    description:
      'A responsive website designed using Figma, showcasing the use of modern design principles and best practices.',
    tags: [
      {
        name: 'bootstrap',
        color: 'blue-text-gradient',
      },
    ],
    image: figmaland,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/FigmaLand-ui-assignment',
  },
  {
    name: 'Flight Management System',
    description:
      'A console application showcasing the use of OOP concepts and file handling for managing library records and operations.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
    ],
    image: pythonMS,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/Flight-MS-Python',
  },
];

export { projects };