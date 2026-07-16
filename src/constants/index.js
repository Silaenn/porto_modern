const services = [
  {
    title: "Springfield High School",
    icon: "school",
    history: "2016-2020",
    description:
      "Graduated with honors, specializing in computer science and mathematics. Founded the school's first coding club and participated in regional programming competitions.",
    achievements: [
      "Valedictorian - Top 1% of graduating class",
      "First place - State Programming Olympiad 2019",
      "Built a school-wide library management system as final project",
    ],
  },
  {
    title: "Metro State University",
    icon: "graduation",
    history: "2020-2024",
    description:
      "Bachelor of Science in Computer Science with a focus on software engineering and web technologies. Active member of the university's tech community and hackathon circuit.",
    achievements: [
      "Dean's List - All semesters (GPA 3.85)",
      "Winner - University Hackathon 2022 & 2023",
      "Published research paper on web performance optimization",
      "Teaching assistant for Data Structures & Algorithms course",
    ],
  },
  {
    title: "Online Mastery - Full Stack Bootcamp",
    icon: "code",
    history: "2021",
    description:
      "Intensive 6-month full-stack web development bootcamp covering modern JavaScript, React, Node.js, databases, and deployment. Built 12+ projects throughout the curriculum.",
    achievements: [
      "Completed 500+ hours of hands-on coding challenges",
      "Top performer among 200+ cohort participants",
      "Capstone project selected as exemplar for future cohorts",
    ],
  },
  {
    title: "AWS Cloud Practitioner Certification",
    icon: "cloud",
    history: "2023",
    description:
      "Earned AWS Cloud Practitioner certification demonstrating foundational knowledge of cloud computing, AWS core services, security, architecture best practices, and pricing models.",
    achievements: [
      "Scored 900+ out of 1000 on the certification exam",
      "Built a serverless web application using AWS Lambda and API Gateway",
      "Designed a cost-effective cloud architecture for a mock e-commerce platform",
    ],
  },
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
      "Reduced page load time by 40% through code splitting and lazy loading.",
      "Wrote comprehensive unit and integration tests achieving 90% coverage.",
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
      "Architected a real-time notification system handling 10K+ events per minute.",
      "Integrated CI/CD pipelines reducing deployment time from hours to minutes.",
      "Designed a migration strategy that moved 50K+ users to a new platform with zero downtime.",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "Various Projects",
    icon: "https://img.icons8.com/fluency/96/000000/source-code.png",
    iconBg: "#1a1a2e",
    date: "2021 - Present",
    points: [
      "Contributed to 5+ open-source libraries including a popular React component library.",
      "Authored documentation and migration guides adopted by thousands of developers.",
      "Maintained a personal open-source project with 500+ GitHub stars.",
      "Reviewed 100+ pull requests and mentored first-time contributors.",
      "Spoke at two open-source conferences about community-driven development.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Self-Employed",
    icon: "https://img.icons8.com/fluency/96/000000/laptop.png",
    iconBg: "#E6DEDD",
    date: "2020 - 2022",
    points: [
      "Delivered 10+ client projects ranging from e-commerce sites to custom dashboards.",
      "Built a real-time analytics dashboard for a local startup using React and WebSockets.",
      "Designed and developed a complete brand identity system for a creative agency.",
      "Managed client relationships, project timelines, and budget negotiations independently.",
      "Achieved a 100% client satisfaction rate with repeat engagement from 6 clients.",
    ],
  },
  {
    title: "IT Support Intern",
    company_name: "TechCare Solutions",
    icon: "https://img.icons8.com/fluency/96/000000/support.png",
    iconBg: "#383E56",
    date: "Jun 2020 - Dec 2020",
    points: [
      "Provided technical support for 200+ end users across the organization.",
      "Automated routine system maintenance tasks using Python scripts.",
      "Assisted in migrating on-premise infrastructure to cloud-based solutions.",
      "Created internal documentation and training materials for common IT procedures.",
      "Developed a ticketing system dashboard that improved response times by 25%.",
    ],
  },
  {
    title: "Web Development Teaching Assistant",
    company_name: "Metro State University",
    icon: "https://img.icons8.com/fluency/96/000000/teacher.png",
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "Assisted 60+ students in web development courses covering HTML, CSS, JavaScript, and React.",
      "Conducted weekly lab sessions and one-on-one mentoring for struggling students.",
      "Developed curriculum materials and coding exercises used by 300+ students per semester.",
      "Graded assignments and provided constructive feedback to help students improve.",
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

export { services, experiences, projects };
