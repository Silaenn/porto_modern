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
  videoKalkulator,
  shop,
  videoCourse,
  Course,
  videoShop,
  JejakPancasila,
  VidJejakPancasila,
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
    history: "2024-Now",
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
      "With a simple yet functional design, our web calculator offers a practical solution to your calculation needs. Equipped with an intuitive and responsive interface, you can perform basic to advanced mathematical operations such as trigonometric and logarithmic functions with ease.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Kalkulator,
    video: videoKalkulator,
    source_code_link: "https://github.com/Silaenn/calculator",
  },
  {
    name: "Course Web",
    description:
      "Improve your skills with thousands of quality courses from experts on our online learning platform. Enjoy complete materials, learning videos, assignments and certificates at affordable prices. You can also interact with instructors and other students through the discussion forums provided.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: Course,
    video: videoShop,
    source_code_link: "https://github.com/Silaenn/React-website-course",
  },
  {
    name: "E-Commerce",
    description:
      "This project is an e-commerce platform designed to provide a modern, fast, and responsive online shopping experience. The website allows users to browse various products, add items to cart, make payment transactions and provides a seamless and intuitive shopping experience",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwand",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    video: videoCourse,
    source_code_link: "https://github.com/Silaenn/e-commerce",
  },
  {
    name: "Jejak Pancasila",
    description:
      "Jejak Pancasila is a 2D scrolling pixel art game inspired by classic games like Life is a Game, where you embark on a journey through three significant stages of life: elementary school (SD), high school (SMA), and adulthood as a working professional",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Pixel studio",
        color: "green-text-gradient",
      },
    ],
    image: JejakPancasila,
    video: VidJejakPancasila,
    source_code_link: "https://github.com/Silaenn/EdukatifDev",
  },
];

const handleClick = (e) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href").slice(1);
  const aboutSection = document.getElementById(targetId);
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
};

export { services, technologies, experiences, projects, handleClick };
