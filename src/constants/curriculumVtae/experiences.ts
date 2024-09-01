import type { TExperience } from '../../types';

import { devsinc, Fiverr, upwork, i2c } from '../../assets';

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
    date: 'Mar 2021 - Present',
    points: [
      'Specialized in React.js, Django, AWS, and Firebase, delivering custom web solutions to clients globally.',
      'Developed and maintained various web applications tailored to client needs, focusing on performance and scalability.',
      'Managed projects from inception to deployment, ensuring high-quality results and client satisfaction.',
    ],
    description: 'Freelance Web Developer',
  },
  {
    title: 'Full Stack Engineer',
    companyName: 'upwork',
    icon: upwork,
    iconBg: '#E6DEDD',
    date: 'Jun 2023 - Present',
    points: [
      'Collaborated with cross-functional teams to develop and maintain web applications using React.js and Django.',
      'Implemented RESTful APIs and integrated third-party services to enhance application functionality.',
      'Utilized Git for version control and Docker for containerization, ensuring seamless deployment and scalability.',
    ],
    description: 'Full Stack Engineer',
  },
  {
    title: 'Product Operations and DevOps',
    companyName: 'i2c',
    icon: i2c,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Feb 2023',
    points: [
      'Supported product operations and DevOps functions, contributing to the optimization and management of technical operations.',
      'Assisted in the deployment and monitoring of applications, ensuring system reliability and performance.',
      'Collaborated with engineering teams to streamline workflows and enhance operational efficiency.',
    ],
    description: 'Product Operations and DevOps',
  },
];

export { experiences };
