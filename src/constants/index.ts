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
  healthcare,
  threejs,
  quora,
  splitwise,
  hams,
  nexus,
  burger,
  pythonMS,
  figmaland,
  tradingtracker,
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
      'I highly recommend this exceptional service provider! Their professionalism and kindness were evident throughout the entire process. Not only did they complete the service well before the deadline, but their consistent and prompt communication made the experience seamless. If you are looking for reliability, efficiency, and a positive attitude, this is the person.',
    name: 'Adi Nahmani',
    designation: 'Client',
    company: 'Israel',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    testimonial:
      'He was very understanding of my time constraint. Very quick to get back to me. I appreciate his attention to detail, especially in such a short time. I would recommend this man time and time again if possible.',
    name: 'Jaymi Anderson',
    designation: 'Client',
    company: 'United States',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    testimonial:
      'It was an absolute pleasure working with Sibtain! He was very proactive in communication and was able to solve my needs in a very prompt manner. Will definitely work with him in the future and recommend him to anyone requiring assistance with a project.',
    name: 'Hasheem Johnson',
    designation: 'Client',
    company: 'United States',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    testimonial:
      'I wanted to express my appreciation for your exceptional work as a programmer. Your coding skills and attention to detail have significantly contributed to the success of our projects. Keep up the excellent work!',
    name: 'Mortuus Schmidt',
    designation: 'Client',
    company: 'Germany',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    testimonial:
      'Had a very lengthy project that helped complete in a very short time period! 10/10 would recommend.',
    name: 'Haris Tiwana',
    designation: 'Client',
    company: 'Pakistan',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      'Very good seller. Always communicates and does the job on time. I would recommend buying services from this seller if you have coding work like a project and so on. I am very satisfied.',
    name: 'Rida San',
    designation: 'Client',
    company: 'Malaysia',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    testimonial:
      'One of the best guys on Fiverr. I had very particular requirements for my project, and he was able to help no matter what. His skills are very good, and the final project looked great. He delivered the project much quicker than the deadline set and responded within an hour of all my messages. Any feedback or revisions I had, he was always quick to fix them. Overall, 10/10 would definitely book from him again.',
    name: 'Harry Stewart',
    designation: 'Client',
    company: 'United Kingdom',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    testimonial:
      "Very friendly and respectful guy, works quickly and efficiently. For my first Fiverr order, I'm very satisfied! I was in a hurry with my task, so he helped me out and did the task within two or fewer hours. Thanks for the work, Sibtain, you are the best, mate!",
    name: 'Karl Rahn',
    designation: 'Client',
    company: 'Estonia',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    testimonial:
      "I was on an extremely tight deadline and had no idea what to do, but the seller was amazingly helpful. I will use him again, and I definitely recommend you do too, because he made it perfect on the first try. I can't thank him enough.",
    name: 'Zachary Power',
    designation: 'Client',
    company: 'United States',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    testimonial:
      'Everything is done in the best and most professional manner. Received everything before the deadline. I really recommend this specialist!',
    name: 'Oleksandr Shosta',
    designation: 'Client',
    company: 'United Kingdom',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
];


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
        name: 'PostgreSQL',
        color: 'blue-text-gradient',
      },
      {
        name: 'Django REST',
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

export { services, technologies, experiences, testimonials, projects };
