import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const portfolioData = {
  hero: {
    name: "Rohit Kumar",
    title: "Web Developer",
    tagline: "Building scalable SaaS applications and digital experiences with modern web technologies.",
    avatar: "https://picsum.photos/seed/alexdev/400/400",
    metrics: [
      { label: "Years experience", value: "5+" },
      { label: "Products shipped", value: "20+" },
      { label: "Client satisfaction", value: "98%" },
    ],
  },
  about: {
    bio: "I'm a passionate software engineer with over 5 years of experience building high-performance web applications. I specialize in the React ecosystem, Node.js, and cloud infrastructure. When I'm not coding, I'm exploring new technologies, contributing to open source, or writing technical articles.",
  },
  skills: [
    {
      category: "Frontend Development",
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend & Database",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      category: "Tools & Workflow",
      items: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Vercel", "Netlify"],
    },
    {
      category: "Soft Skills",
      items: ["Fast Learner", "Problem Solving", "Teamwork", "Clear Communication"],
    },
  ],
  experience: [
    {
      id: 1,
      role: "Full Stack Intern",
      company: "Croma Campus Pvt. Ltd.",
      duration: "05/2025 - 08/2025",
      description:
        "Assisted in developing client-side components and fixing critical bugs in the internal dashboard.",
      highlights: ["React hooks implementation", "API integration", "Unit testing"],
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "AICTE",
      duration: "03/2025 - 04/2025",
      description: "Contributed to the development of a responsive and user-friendly website for AICTE",
      highlights: ["UI/UX design", "Responsive design", "Open source contributor"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Enterprise Resource Planning System",
      description:
        "A production-grade University ERP system built with a modular full-stack TypeScript architecture. Features secure authentication, role-based access control, student & faculty management",
      image:
        "https://media.istockphoto.com/id/2193427065/photo/enterprise-resource-planning-concept-businessman-using-tablet-and-laptop-for-business.jpg?s=612x612&w=0&k=20&c=_cEv3bTjQJic_cEjAi-2mnlugvaw1qMfIcw4OYbw6hw=",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      liveUrl: "https://ace-erp.vercel.app/",
      githubUrl: "https://github.com/Roul-max/ACE-ERP",
      impact: "RBAC authentication and API design.",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A modern shopping experience with category filtering, secure checkout, and real-time inventory.",
      image: "https://t3.ftcdn.net/jpg/02/23/29/02/240_F_223290240_v1bFG4UKueXPxO8WXJUeN0QXj0yyiG7T.jpg",
      tags: ["React", "Tailwind", "Razorpay"],
      liveUrl: "https://impulseind.vercel.app/",
      githubUrl: "https://github.com/Roul-max/Impulse",
      impact: "Razorpay integration.",
    },
    {
      id: 3,
      title: "Audio To Text Converter",
      description: "A React app for converting audio to text using OpenAI API.",
      image:
        "https://media.istockphoto.com/id/1179997501/vector/podcast-line-button-white-colored-on-gradient-background-vector-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=M77aCAhAF0K7vJFB056rFWMQMNW-SzfhU-1az6aHABs=",
      tags: ["Firebase", "React Native", "Redux"],
      liveUrl: "https://speech-beryl-theta.vercel.app/",
      githubUrl: "https://github.com/Roul-max/Speech",
      impact: "Built a speech-to-text application.",
    },
    {
      id: 4,
      title: "Employee Management System",
      description: "A Next.js app for managing employees with CRUD operations.",
      image: "https://t4.ftcdn.net/jpg/18/90/30/31/240_F_1890303112_FhCkDcEZYhC7RvBF1sYmvk7xvognaqtq.jpg",
      tags: ["Next.js", "Markdown", "Tailwind"],
      liveUrl: "https://vizva-j5cw.vercel.app/login",
      githubUrl: "https://github.com/Roul-max/vizva",
      impact: "Implemented full CRUD functionality.",
    },
    {
      id: 5,
      title: "Multi Tenant Manager",
      description: "A multi-tenant dashboard with real-time data visualization and API integration.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
      tags: ["React", "Chart.js", "Axios"],
      liveUrl: "https://multi-tenant.vercel.app/",
      githubUrl: "https://github.com/Roul-max/Multi-Tenant",
      impact: "Designed a multi-tenant architecture.",
    },
    {
      id: 6,
      title: "Password Generator",
      description: "A secure password generator using React and OpenAI API.",
      image:
        "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Python", "React", "OpenAI"],
      liveUrl: "https://password-generator-alpha-dun.vercel.app/",
      githubUrl: "https://github.com/Roul-max/Password-Generator",
      impact: "Implemented secure password generation logic.",
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "CTO at TechCorp",
      content: "Alex is an exceptional engineer. Their ability to translate complex requirements into elegant, scalable solutions is truly impressive.",
      avatar: "https://picsum.photos/seed/sarah/150/150",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder at StartupX",
      content: "Working with Alex was a game-changer for our product. They brought a level of technical excellence and product intuition that elevated our entire platform.",
      avatar: "https://picsum.photos/seed/michael/150/150",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Product Manager",
      content: "Not only is Alex a brilliant coder, but they are also a fantastic communicator. They consistently delivered high-quality work on time.",
      avatar: "https://picsum.photos/seed/elena/150/150",
    },
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/Roul-max", icon: Github },
    { name: "LinkedIn", url: "http://www.linkedin.com/in/roul-max", icon: Linkedin },
    { name: "Instagram", url: "https://www.instagram.com/luv_roul", icon: Instagram },
    { name: "Email", url: "mailto:rohitkumarrrx@gmail.com", icon: Mail },
  ],
  interests: [
    { name: "Photography", icon: "camera" },
    { name: "Travel", icon: "globe" },
    { name: "Open Source", icon: "code" },
    { name: "Gaming", icon: "terminal" },
  ],
};
