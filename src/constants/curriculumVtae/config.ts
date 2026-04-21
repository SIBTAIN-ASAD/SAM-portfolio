type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      from_name: {
        span: string;
        placeholder: string;
      };
      from_email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
  resume: string;
};

export const config: TConfig = {
  html: {
    title: 'SAM',
    fullName: 'Muhammad Sibtain Asad',
    email: 'sibtainasad50@gmail.com',
  },
  hero: {
    name: 'Sibtain Asad Malik',
    p: [
      'Senior Software Engineer — scalable backends, full-stack web, and data-driven platforms.',
    ],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      from_name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      from_email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `Senior Software Engineer with 5+ years shipping backends and full-stack products in Python, Django, FastAPI, and React. I build APIs, Celery/Redis pipelines, and scraping at scale for global teams. Stack: React, MUI, REST, microservices, Postgres/Mongo, AWS, Docker, and CI/CD.`,
    },
    experience: {
      p: 'Accomplishments to Date',
      h2: 'Professional Experience.',
    },
    feedbacks: {
      p: 'Feedback from Others',
      h2: 'Testimonials.',
    },
    works: {
      p: 'Professional Background',
      h2: 'Projects.',
      content: `30+ production apps for international clients legal data & scraping, healthcare, AI workflows, and full-stack SaaS on Django, FastAPI, and React.`,
    },
  },
  resume: 'https://drive.google.com/file/d/19ET6ZNAgsMCUmu6dDFI-rsfMmTN5RJ8p/view?usp=sharing',
};
