import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  sa,
  devops,
  ai,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  devsinc,
  Fiverr,
  i2c,
  carrent,
  threejs,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'feedback',
    title: 'Testimonials',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

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

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
    description: 'HTML 5',
  },
  {
    name: 'CSS 3',
    icon: css,
    description: 'CSS 3',
  },
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
    name: 'Node JS',
    icon: nodejs,
    description: 'Node JS',
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
    name: 'Figma',
    icon: figma,
    description: 'Figma',
  },
  {
    name: 'Docker',
    icon: docker,
    description: 'Docker',
  },
];

const experiences: TExperience[] = [
  {
    title: 'Full Stack Engineer',
    companyName: 'Devsinc',
    icon: devsinc,
    iconBg: '#E6DEDD',
    date: 'Feb 2023 - Present',
    points: [
      'Led full-stack development projects within the healthcare domain, incorporating a referral system and integrating Adobe APIs.',
      'Utilized Agile methodologies and managed projects through Jira, ensuring timely and efficient delivery.',
      'Focused on front-end development using Material-UI, TypeScript, and React.',
      'Conducted proof of concepts (POCs) and collaborated with cross-functional teams to deliver high-quality solutions.',
    ],
    description: 'Full Stack Engineer',
  },
  {
    title: 'Freelance Web Developer',
    companyName: 'Fiverr',
    icon: Fiverr,
    iconBg: '#383E56',
    date: 'Mar 2022 - May 2024',
    points: [
      'Specialized in React.js, Django, AWS, and Firebase, delivering custom web solutions to clients globally.',
      'Developed and maintained various web applications tailored to client needs, focusing on performance and scalability.',
      'Managed projects from inception to deployment, ensuring high-quality results and client satisfaction.',
    ],
    description: 'Freelance Web Developer',
  },
  {
    title: 'Product Operations and DevOps',
    companyName: 'i2c',
    icon: i2c,
    iconBg: '#E6DEDD',
    date: 'Jun 2022 - Aug 2022',
    points: [
      'Supported product operations and DevOps functions, contributing to the optimization and management of technical operations.',
      'Assisted in the deployment and monitoring of applications, ensuring system reliability and performance.',
      'Collaborated with engineering teams to streamline workflows and enhance operational efficiency.',
    ],
    description: 'Product Operations and DevOps',
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Sibtain proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sibtain does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Sibtain optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    testimonial:
      'Sibtain is a true professional. They delivered our project on time and within budget.',
    name: 'John Doe',
    designation: 'CEO',
    company: 'XYZ Corp',
    image: 'https://randomuser.me/api/portraits',
  },
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Sibtain proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser',
  }
];

const projects: TProject[] = [
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
    image: carrent, // Add appropriate image for this project
    sourceCodeLink: 'https://github.com/', // Add actual source code link if available
  },
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
    ],
    image: carrent, // Add appropriate image for this project
    sourceCodeLink: 'https://github.com/', // Add actual source code link if available
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
    image: carrent, // Add appropriate image for this project
    sourceCodeLink: 'https://github.com/', // Add actual source code link if available
  },
  {
    name: 'FCIT Help Desk',
    description:
      'A guidance application for FCIT students designed to provide information and support for academic and administrative queries.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'django',
        color: 'green-text-gradient',
      },
    ],
    image: carrent, // Add appropriate image for this project
    sourceCodeLink: 'https://github.com/', // Add actual source code link if available
  },
  {
    name: 'NexusIn',
    description:
      'A social networking website developed using the MERN stack, featuring components such as Feed, Chat, Friends, Jobs, and Admin Site.',
    tags: [
      {
        name: 'mern',
        color: 'blue-text-gradient',
      },
    ],
    image: carrent, // Add appropriate image for this project
    sourceCodeLink: 'https://github.com/', // Add actual source code link if available
  },
  {
    name: 'Library MS',
    description:
      'A console application showcasing the use of OOP concepts and file handling for managing library records and operations.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
    ],
    image: carrent, // Add appropriate image for this project
    sourceCodeLink: 'https://github.com/', // Add actual source code link if available
  },
];


export { services, technologies, experiences, testimonials, projects };
