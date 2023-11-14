import {
  frontend,
  web,
  uiux,
  marketing,
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
  chatGPT,
  confidential,
  disney,
  eyeroom,
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
    icon: frontend,
  },
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'UI UX Designer',
    icon: uiux,
  },
  {
    title: 'Digital Marketer',
    icon: marketing,
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
      "I had the privilege of having Ai as a web developer on our team, and I couldn't have asked for a more dedicated and talented professional. Ai consistently delivered high-quality work, demonstrating an exceptional grasp of web technologies and a keen eye for design. Her ability to collaborate, problem-solve, and meet project deadlines was truly impressive. Ai played an integral role in elevating our web development projects, and I wholeheartedly recommend her as a top-notch web developer.",
    name: 'Dai U',
    designation: 'CEO',
    company: 'Mizutama Tea Farm',
    image:
      'https://d3titqsz73pmgt.cloudfront.net/w=552,f=jpg,ir=auto/prod.owl.private/store/2fb597015c16ad9bf3fa2352f7145fca.jpg',
  },
  {
    testimonial:
      'Given the opportunity I would be thrilled to work alongside AI again in the future. She was very supportive and thoughtful when I joined the company, and continued to be a joy to work with. ',
    name: 'Ashby M',
    designation: 'Junior Developer',
    company: 'Arsaga Partners',
    image: '',
  },
  {
    testimonial: 'Ai was amazing',
    name: 'Brian E',
    designation: 'UI/UX Designer',
    company: 'Arsaga Partners',
    image: '',
  },
]

const projects = [
  {
    name: 'chatGPT Prompt Park',
    description:
      'Built customized chat GPT prompt service which recommends optimized prompts based on the provided personal information, and can be shared with other users and saved. It has monitoring function which allows users to analyze their prompts. Contributed to the process of building development environment such as adding linter, code formatter, and git hooks as this was a new project.',
    tags: [
      {
        name: 'Next.js',
        color: 'white-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Chakra Ui',
        color: 'green-text-gradient',
      },
    ],
    image: chatGPT,
    source_code_link: '',
    website_link: 'https://promptpark.jp/',
  },
  {
    name: 'CONFIDENTIAL',
    description:
      'Web-based platform that allows users to rent/purchase, make contracts, and manage kimono rentals, providing a convenient and efficient time, place, price for the occasion.',
    tags: [
      {
        name: 'Vue.js',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Express.js',
        color: 'white-text-gradient',
      },
    ],
    image: confidential,
    source_code_link: '',
    website_link: '',
  },
  {
    name: 'Disney+ Clone',
    description:
      'Replicated platform that allows users to login, and see the description of the movies.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Redux',
        color: 'violet-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'orange-text-gradient',
      },
    ],
    image: disney,
    source_code_link: 'https://github.com/aiueda27/disney-clone',
    website_link: '',
  },
  {
    name: 'Eyeroom Mira',
    description:
      'Responsive cosmetic industry platform which dedicated to sowcasing the artistry and elegance of beauty services. In urgent need of the platform, this was designed and released within 4 days by solo. Work In Progress',
    tags: [
      {
        name: 'WordPress',
        color: 'blue-text-gradient',
      },
      {
        name: 'Sass',
        color: 'pink-text-gradient',
      },
      {
        name: 'Figma',
        color: 'violet-text-gradient',
      },
    ],
    image: eyeroom,
    source_code_link: 'https://github.com/aiueda27/eyeroom-mira',
    website_link: 'https://eyeroom-mira.com/',
  },
]

export { services, technologies, experiences, testimonials, projects }
