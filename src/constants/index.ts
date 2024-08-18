import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  meta,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Engineer",
    icon: web,
    description: "Expert in developing both client and server-side applications using modern technologies. Proficient in React, Django, and RESTful APIs.",
  },
  {
    title: "Solution Architect",
    icon: sa,
    description: "Swift problem solver with a keen eye for detail. Experienced in designing scalable and maintainable software solutions.",
  },
  {
    title: "DevOps Engineer",
    icon: devops,
    description: "Skilled in deploying and maintaining cloud infrastructure using AWS, Azure, and Google Cloud Platform. Proficient in CI/CD pipelines.",
  },
  {
    title: "AI Enthusiast",
    icon: ai,
    description: "Passionate about artificial intelligence and machine learning. Experienced in reinforcement learning and AI model deployment.",
  },
];


const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
    description: "HTML 5",
  },
  {
    name: "CSS 3",
    icon: css,
    description: "CSS 3",
  },
  {
    name: "JavaScript",
    icon: javascript,
    description: "JavaScript",
  },
  {
    name: "TypeScript",
    icon: typescript,
    description: "TypeScript",
  },
  {
    name: "React JS",
    icon: reactjs,
    description: "React JS",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    description: "Redux Toolkit",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    description: "Tailwind CSS",
  },
  {
    name: "Node JS",
    icon: nodejs,
    description: "Node JS",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    description: "MongoDB",
  },
  {
    name: "Three JS",
    icon: threejs,
    description: "Three JS",
  },
  {
    name: "Git",
    icon: git,
    description: "Git",
  },
  {
    name: "Figma",
    icon: figma,
    description: "Figma",
  },
  {
    name: "Docker",
    icon: docker,
    description: "Docker",
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Engineer",
    companyName: "Devsinc",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Led full-stack development projects within the healthcare domain, incorporating a referral system and integrating Adobe APIs.",
      "Utilized Agile methodologies and managed projects through Jira, ensuring timely and efficient delivery.",
      "Focused on front-end development using Material-UI, TypeScript, and React.",
      "Conducted proof of concepts (POCs) and collaborated with cross-functional teams to deliver high-quality solutions.",
    ],
    description: "Full Stack Engineer",
  },
  {
    title: "Freelance Web Developer",
    companyName: "Fiverr",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Mar 2022 - May 2024",
    points: [
      "Specialized in React.js, Django, AWS, and Firebase, delivering custom web solutions to clients globally.",
      "Developed and maintained various web applications tailored to client needs, focusing on performance and scalability.",
      "Managed projects from inception to deployment, ensuring high-quality results and client satisfaction.",
    ],
    description: "Freelance Web Developer",
  },
  {
    title: "Product Operations and DevOps",
    companyName: "i2c",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Aug 2023",
    points: [
      "Supported product operations and DevOps functions, contributing to the optimization and management of technical operations.",
      "Assisted in the deployment and monitoring of applications, ensuring system reliability and performance.",
      "Collaborated with engineering teams to streamline workflows and enhance operational efficiency.",
    ],
    description: "Product Operations and DevOps",
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sibtain proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sibtain does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sibtain optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
