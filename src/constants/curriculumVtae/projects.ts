import type { TProject } from '../../types';

import {
  healthcare,
  quora,
  subcold,
  splitwise,
  hams,
  nexus,
  burger,
  pythonMS,
  figmaland,
  tradingtracker,
  buybox,
  forethought,
  kubernetes,
  navforwardProject,
} from '../../assets';

const projects: TProject[] = [
  {
    name: 'Legal Data Intelligence Platform (NavForward)',
    description:
      'Jun 2025 – Present. Scalable web scraping with Django, Selenium, and Celery; distributed pipelines with Redis; REST APIs for job data and workflows; retry pipelines, duplicate detection, Docker, AWS.',
    tags: [
      { name: 'django', color: 'green-text-gradient' },
      { name: 'DRF', color: 'green-text-gradient' },
      { name: 'celery', color: 'pink-text-gradient' },
      { name: 'redis', color: 'pink-text-gradient' },
      { name: 'selenium', color: 'blue-text-gradient' },
      { name: 'mysql', color: 'blue-text-gradient' },
      { name: 'docker', color: 'blue-text-gradient' },
      { name: 'aws', color: 'pink-text-gradient' },
    ],
    image: navforwardProject,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/',
  },
  {
    name: 'AI-Powered Workflow Optimization',
    description:
      'Sep 2024 – Mar 2025. Scalable workflow automation with FastAPI, MongoDB, and React; ML-driven decision pipelines; production APIs for high-volume internal tools and customer support automation.',
    tags: [
      { name: 'typescript', color: 'blue-text-gradient' },
      { name: 'mui', color: 'green-text-gradient' },
      { name: 'fastapi', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'pink-text-gradient' },
    ],
    image: forethought,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/',
  },
  {
    name: 'BuyBox',
    description:
      'Dec 2024 – Jul 2025. Property rental and buy/sell platform using Django templates; browse properties, filter by location and price, manage listings. Django, AWS, Postgres.',
    tags: [
      { name: 'django', color: 'green-text-gradient' },
      { name: 'postgres', color: 'pink-text-gradient' },
      { name: 'aws', color: 'pink-text-gradient' },
    ],
    image: buybox,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/offmarket_buybox',
  },
  {
    name: 'Subcold Return Project',
    description:
      'Oct 2024 – Jan 2025. Linnworks CRM integration with Django backend; React dashboard for data sync; secure APIs for external enterprise systems.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'django', color: 'green-text-gradient' },
      { name: 'crm', color: 'pink-text-gradient' },
    ],
    image: subcold,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/subcon-return-project',
  },
  {
    name: 'Investment Tracker',
    description:
      'Mar 2022 – May 2022. Web app to manage and track investments in stocks, ETFs, and cryptocurrencies. React and Django.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'django', color: 'green-text-gradient' },
    ],
    image: tradingtracker,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/Trading-Tracker',
  },
  {
    name: 'Quora Clone',
    description:
      'A platform allowing users to ask questions, answer, and interact with a community, mimicking the core functionalities of Quora.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'django', color: 'green-text-gradient' },
      { name: 'RESTful APIs', color: 'pink-text-gradient' },
    ],
    image: quora,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/quora/',
  },
  {
    name: 'Splitwise',
    description:
      'A collaborative expense management application enabling users to split bills and track expenses among a group.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'firebase', color: 'green-text-gradient' },
    ],
    image: splitwise,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/splitwise/tree/feature/Dashboard/',
  },
  {
    name: 'kubernetes',
    description: 'A Django app for demonstrating a Shop setup using Kubernetes and Docker Compose.',
    tags: [
      { name: 'python', color: 'blue-text-gradient' },
      { name: 'kubernetes', color: 'blue-text-gradient' },
      { name: 'docker', color: 'blue-text-gradient' },
    ],
    image: kubernetes,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/kubernetes',
  },
  {
    name: 'HAMS',
    description:
      'A hospital appointment management system designed to streamline the appointment booking process and enhance patient experience.',
    tags: [{ name: 'php', color: 'blue-text-gradient' }],
    image: hams,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/HAMS',
  },
  {
    name: 'Healthcare Referral System',
    description:
      'Mar 2024 – Oct 2024. Lead front-end with React and TypeScript; Adobe authentication and Microsoft Dynamics; patient referral workflows; enterprise healthcare platform for internal teams.',
    tags: [
      { name: 'typescript', color: 'blue-text-gradient' },
      { name: 'mui', color: 'green-text-gradient' },
      { name: 'ms-dynamics', color: 'pink-text-gradient' },
    ],
    image: healthcare,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/',
  },
  {
    name: 'NexusIn',
    description:
      'A social networking website developed using the MERN stack, featuring components such as Feed, Chat, Friends, Jobs, and Admin Site.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'nodejs', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'pink-text-gradient' },
    ],
    image: nexus,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/',
  },
  {
    name: 'React Burger App',
    description:
      'A web application allowing users to build and order custom burgers, showcasing the use of React, Redux, and Firebase.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'redux', color: 'green-text-gradient' },
      { name: 'firebase', color: 'pink-text-gradient' },
    ],
    image: burger,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/react-burger',
  },
  {
    name: 'Figma Land Website',
    description:
      'A responsive website designed using Figma, showcasing the use of modern design principles and best practices.',
    tags: [{ name: 'bootstrap', color: 'blue-text-gradient' }],
    image: figmaland,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/FigmaLand-ui-assignment',
  },
  {
    name: 'Flight Management System',
    description:
      'A console application showcasing the use of OOP concepts and file handling for managing library records and operations.',
    tags: [{ name: 'python', color: 'blue-text-gradient' }],
    image: pythonMS,
    sourceCodeLink: 'https://github.com/SIBTAIN-ASAD/Flight-MS-Python',
  },
];

export { projects };
