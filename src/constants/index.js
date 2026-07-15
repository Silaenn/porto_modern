import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  nextjs,
  docker,
  figma,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Springfield High School",
    icon: "https://img.icons8.com/fluency/96/000000/school.png",
    history: "2016-2020",
  },
  {
    title: "Metro State University",
    icon: "https://img.icons8.com/fluency/96/000000/graduation-cap.png",
    history: "2020-2024",
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "Next JS", icon: nextjs },
  { name: "Docker", icon: docker },
  { name: "Figma", icon: figma },
  { name: "git", icon: git },
];

const experiences = [
  {
    title: "Junior Developer",
    company_name: "NovaTech Solutions",
    icon: "https://img.icons8.com/fluency/96/000000/idea.png",
    iconBg: "#383E56",
    date: "Jan 2022 - Jun 2023",
    points: [
      "Developed and maintained web applications using React.js and Node.js.",
      "Collaborated with cross-functional teams to deliver high-quality features.",
      "Implemented responsive designs and ensured cross-browser compatibility.",
      "Participated in code reviews and testing to maintain code quality.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "PixelCraft Studio",
    icon: "https://img.icons8.com/fluency/96/000000/code.png",
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Present",
    points: [
      "Built scalable APIs and microservices using Node.js and Express.",
      "Led frontend development with React, TypeScript, and Tailwind CSS.",
      "Managed databases and optimized queries for performance.",
      "Mentored junior developers and established coding standards.",
    ],
  },
];

const projects = [
  {
    name: "ShopWave",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment integration, and a responsive shopping experience across all devices.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/600x400/16213e/00D4FF?text=ShopWave",
    source_code_link: "https://github.com",
  },
  {
    name: "TaskFlow",
    description:
      "A project management application featuring real-time collaboration, Kanban boards, task tracking, and team analytics dashboard.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/600x400/16213e/FF6B9D?text=TaskFlow",
    source_code_link: "https://github.com",
  },
  {
    name: "PixelForge",
    description:
      "An online image editor with layers, filters, drawing tools, and export capabilities built using the Canvas API and WebAssembly.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
    ],
    image: "https://placehold.co/600x400/16213e/FFD700?text=PixelForge",
    source_code_link: "https://github.com",
  },
  {
    name: "ChatSync",
    description:
      "A real-time messaging application with group chats, file sharing, message encryption, and cross-platform support using WebSockets.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/600x400/16213e/00D4FF?text=ChatSync",
    source_code_link: "https://github.com",
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
