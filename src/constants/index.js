import {
  SMP,
  SMK,
  PENS,
  sdn,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  orenda,
  Kalkulator,
  jobit,
  tripguide,
  threejs,
  nextjs,
  Ig,
  next,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "SDN 17 Pekanbaru",
    icon: sdn,
    history: "2011-2017",
  },
  {
    title: "SMPN 34 Pekanbaru",
    icon: SMP,
    history: "2017-2020",
  },
  {
    title: "SMKS PGRI Pekanbaru",
    icon: SMK,
    history: "2020-2023",
  },
  {
    title: "Politeknik Electronika Negeri Surabaya",
    icon: PENS,
    history: "2024-Sekarang",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Fulstack Developer",
    company_name: "Orenda Digital Agency",
    icon: orenda,
    iconBg: "#383E56",
    date: "September 2023 - November 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality web.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participate in testing to minimize the presence of bugs.",
    ],
  },
];

const projects = [
  {
    name: "Kalkulator",
    description:
      "With a simple yet functional design, our web calculator offers a practical solution to your calculation needs. Equipped with an intuitive and responsive interface, you can perform basic to advanced mathematical operations such as trigonometric and logarithmic functions with ease. This calculator is a reliable tool for students, professionals, or anyone who needs accurate calculations.",
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
    image: Kalkulator,
    source_code_link: "https://github.com/",
  },
  {
    name: "Creative Thoughts Agency Web",
    description:
      "Welcome to our modern online store! Enjoy a pleasant shopping experience with an elegant interface, advanced search system and secure checkout process. We offer the latest product collections with fast shipping options and responsive customer service to ensure your satisfaction.",
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
    image: next,
    source_code_link: "https://github.com/",
  },
  {
    name: "Instagram Clone",
    description:
      "Platform media sosial kami menawarkan pengalaman berbagi foto dan video yang seru dan interaktif. Dengan fitur unggah konten yang mudah, sistem pencarian canggih, dan kemampuan untuk berinteraksi dengan komunitas yang dinamis, Anda dapat dengan leluasa mengekspresikan diri dan berbagi momen istimewa Anda.",
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
    image: Ig,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
