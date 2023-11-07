import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  // mongodb,
  git,
  figma,
  docker,
  arsaga,
  mizutama,
  yokogawa,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Web Developer',
    icon: mobile,
  },
  {
    title: 'UI UX Designer',
    icon: backend,
  },
  {
    title: 'Digital Marketer',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'MongoDB',
  //   icon: mongodb,
  // },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Web Developer and Digital Marketer',
    company_name: 'Mizutama Tea Farm',
    icon: mizutama,
    iconBg: '#E6DEDD',
    date: 'Mar 2020 - May 2021',
    points: [
      'Optimized 5+ websites for maximum speed and scalability.',
      'Maintained and redesigned 10+ web pages, graphics, and online marketing materials under direction of UX manager and development team.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Produces and assisted in the deployment of 5 online marketing initiatives, including banner advertisements.',
    ],
  },
  {
    title: 'Web Developer and Digital Marketer',
    company_name: 'Yokogawa',
    icon: yokogawa,
    iconBg: '#383E56',
    date: 'Oct 2021 - Mar 2022',
    points: [
      'Rewrote HTML to meet industry and company standards for SEO and Accessibility improving CTR from 0.7% to 2.2%',
      'Utilized HTML, CSS and JavaScript to create responsive landing pages for both company and client.',
      'Assisted the development team in developing CMS sites with testing, deployment and updates.',
      'Introduced task management software to promote highly efficient asynchronous and synchronous work, increasing efficiency by 11%.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Arsaga Partners',
    icon: arsaga,
    iconBg: '#E6DEDD',
    date: 'Apr 2022 - October 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Built kimono operating web app to allow users to rent/purchase items, make contracts, and keep track of previous contracts, using Vue.js, TypeScript, Express.js.',
      'Led 8 developers in developing internal design systems implementing the React.js library and storybook while working with designers.',
      'Tested, fixed 200+ bags, and shipped 10s of 1000s of lines of code to development teams.',
      'Worked in an agile environment with weekly stand-ups, kept track of user stories/bugs in Github projects, and conducted 2 hours of sprint planning and sprint retrospectives per week.',
      "Pair programmed with 3 engineers, and reviewed team's code to provide additional perspective and catch previously missed errors.",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, testimonials, projects }
