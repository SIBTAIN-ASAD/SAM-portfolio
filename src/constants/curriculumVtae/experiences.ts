import type { TExperience } from '../../types';

import { devsinc, Fiverr, upwork, i2c, navforward, turing } from '../../assets';

const experiences: TExperience[] = [
  {
    title: 'Senior Software Engineer',
    companyName: 'NavForward',
    icon: navforward,
    iconBg: '#1a1a2e',
    date: 'Jun 2025 – Present | US Remote (California, USA)',
    points: [
      'Designed backend architecture using Django, Django REST Framework, and REST APIs for production services used by US product teams.',
      'Developed scalable microservices supporting enterprise clients; led architecture decisions for new backend services and service boundaries.',
      'Built large-scale web scraping pipelines with Selenium and Celery, plus Redis-backed distributed task processing for parallel data workloads.',
      'Shipped reliable scrapers with retry pipelines, duplicate detection, and Docker-based environments; deployed on AWS alongside MySQL-backed APIs.',
      'Collaborated closely with US product and engineering to deliver production systems on schedule and align technical direction with business goals.',
    ],
    description: 'Senior Software Engineer - NavForward (US Remote)',
  },
  {
    title: 'Software Engineer',
    companyName: 'Turing',
    icon: turing,
    iconBg: '#383E56',
    date: 'Jun 2025 – Dec 2025 | Remote',
    points: [
      'Worked as an LLM trainer for AI agents, shaping model behavior and task completion quality across agent-style workflows.',
      'Built evaluation pipelines for LLM-based agent completion tasks, including dataset design, scoring, and iteration with stakeholders.',
      'Contributed to prompt engineering and refinement workflows to improve model outputs on real agent completion benchmarks.',
    ],
    description: 'Software Engineer - Turing (Remote)',
  },
  {
    title: 'Software Engineer',
    companyName: 'Devsinc',
    icon: devsinc,
    iconBg: '#E6DEDD',
    date: 'Nov 2023 – Oct 2025 | Lahore, Pakistan',
    points: [
      'Built full-stack enterprise platforms using React, Django, and FastAPI for healthcare and AI workflow products.',
      'Developed scalable REST APIs consumed by internal tools, integrations, and high-traffic frontends.',
      'Led front-end architecture using TypeScript and Material UI: component systems, state patterns, and accessible enterprise UI.',
      'Delivered features end-to-end in Agile teams with Jira, code review, and regular production releases.',
      'Partnered with cross-functional teams on Adobe authentication, Microsoft Dynamics, and referral workflows for healthcare clients.',
    ],
    description: 'Software Engineer - Devsinc',
  },
  {
    title: 'Associate Software Engineer',
    companyName: 'i2c',
    icon: i2c,
    iconBg: '#E6DEDD',
    date: 'Sep 2023 – Nov 2023 | Lahore, Pakistan',
    points: [
      'Supported product operations and DevOps pipelines: deployments, releases, and operational runbooks.',
      'Maintained infrastructure monitoring, alerting, and deployment workflows to reduce downtime and speed up incident response.',
      'Worked closely with engineering teams to troubleshoot and resolve production issues across services and environments.',
      'Helped streamline handoffs between ops and development so recurring issues were fixed at the root.',
    ],
    description: 'Associate Software Engineer - i2c',
  },
  {
    title: 'Freelance Full Stack Engineer',
    companyName: 'Fiverr',
    icon: Fiverr,
    iconBg: '#383E56',
    date: 'Mar 2021 – Present | Global clients',
    points: [
      'Delivered many client projects on Fiverr: React and Django builds, AWS deployments, Firebase backends, and custom integrations including GraphQL and FastAPI where it improved UX.',
      'Owned projects end to end-scoping, implementation, deployment-and kept delivery fast without sacrificing quality.',
      'Earned strong repeat business and reviews through proactive communication and reliable turnaround.',
    ],
    description: 'Freelance Full Stack Engineer - Fiverr',
  },
  {
    title: 'Freelance Full Stack Engineer',
    companyName: 'Upwork',
    icon: upwork,
    iconBg: '#E6DEDD',
    date: 'Jun 2023 – Present | Global clients',
    points: [
      'Built and maintained web applications with React and Django for Upwork clients across REST APIs and third-party integrations.',
      'Used Git, Docker, and solid release practices so handoffs and long-term maintenance stayed straightforward.',
      'Collaborated with client teams on larger engagements: APIs, dashboards, and production-minded architecture.',
    ],
    description: 'Freelance Full Stack Engineer - Upwork',
  },
];

export { experiences };
