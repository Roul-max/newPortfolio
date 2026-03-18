
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const socials = [
  { name: 'GitHub', href: 'https://github.com/Roul-max', icon: 'github' },
  { name: 'LinkedIn', href: 'http://www.linkedin.com/in/roul-max', icon: 'linkedin' },
  { name: 'Instagram', href: 'https://www.instagram.com/luv_roul', icon: 'instagram' },
];

export const skills = [
  {
    category: 'Frontend Development',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend & Database',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Vercel', 'Netlify'],
  },
  {
    category: 'Soft Skills',
    items: ['Fast Learner', 'Problem Solving', 'Teamwork', 'Clear Communication'],
  },
];

export const projects = [
  {
  id: 1,
  title: 'Enterprise Resource Planning System',
  category: 'Full Stack Web Application',
  description: 'A production-grade University ERP system built with a modular full-stack TypeScript architecture. Features secure authentication, role-based access control, student & faculty management',
  tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
  image: 'https://media.istockphoto.com/id/2193427065/photo/enterprise-resource-planning-concept-businessman-using-tablet-and-laptop-for-business.jpg?s=612x612&w=0&k=20&c=_cEv3bTjQJic_cEjAi-2mnlugvaw1qMfIcw4OYbw6hw=', // add your screenshot path
  github: 'https://github.com/Roul-max/ACE-ERP',
  live: 'https://ace-erp.vercel.app/',
  impact: 'RBAC authentication and API design.'
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Web',
    description: 'A modern shopping experience with category filtering, secure checkout, and real-time inventory.',
    tech: ['React', 'Tailwind', 'Razorpay'],
    image: 'https://t3.ftcdn.net/jpg/02/23/29/02/240_F_223290240_v1bFG4UKueXPxO8WXJUeN0QXj0yyiG7T.jpg',
    github: 'https://github.com/Roul-max/Impulse',
    live: 'https://impulseind.vercel.app/',
    impact: 'Razorpay integration.'
  },
  {

    id: 3,
    title: 'Audio To Text Converter',
    category: 'Web',
    description: 'A React app for converting audio to text using OpenAI API.',
    tech: ['Firebase', 'React Native', 'Redux'],
    image: 'https://media.istockphoto.com/id/1179997501/vector/podcast-line-button-white-colored-on-gradient-background-vector-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=M77aCAhAF0K7vJFB056rFWMQMNW-SzfhU-1az6aHABs=',
    github: 'https://github.com/Roul-max/Speech',
    live: 'https://speech-beryl-theta.vercel.app/',
    impact: 'Built a speech-to-text application.'

  },
  {
    id: 4,
    title: 'Employee Management System',
    category: 'Web',
    description: 'A Next.js app for managing employees with CRUD operations.',
    tech: ['Next.js', 'Markdown', 'Tailwind'],
    image: 'https://t4.ftcdn.net/jpg/18/90/30/31/240_F_1890303112_FhCkDcEZYhC7RvBF1sYmvk7xvognaqtq.jpg',
    github: 'https://github.com/Roul-max/vizva',
    live: 'https://vizva-j5cw.vercel.app/login',
    impact: 'Implemented full CRUD functionality.'
  },
  {
    id: 5,
    title: 'Multi Tenant Manager',
    category: 'Web',
    description: 'A multi-tenant dashboard with real-time data visualization and API integration.',
    tech: ['React', 'Chart.js', 'Axios'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D',
    github: 'https://github.com/Roul-max/Multi-Tenant',
    live: 'https://multi-tenant.vercel.app/',
    impact: 'Designed a multi-tenant architecture.'
  },
  {
    id: 6,
    title: 'Password Generator',
    category: 'Web',
    description: 'A secure password generator using React and OpenAI API.',
    tech: ['Python', 'React', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/Roul-max/Password-Generator',
    live: 'https://password-generator-alpha-dun.vercel.app/',
    impact: 'Implemented secure password generation logic.'
  },
];

export const experience = [
  {
    role: 'Full Stack Intern',
    company: 'Croma Campus Pvt. Ltd.',
    period: '05/2025 - 08/2025',
    description: 'Assisted in developing client-side components and fixing critical bugs in the internal dashboard.',
    highlights: ['React hooks implementation', 'API integration', 'Unit testing']
  },
  {
    role: 'Frontend Developer',
    company: 'AICTE',
    period: '03/2025 - 04/2025',
    description: 'Contributed to the development of a responsive and user-friendly website for AICTE',
    highlights: ['UI/UX design', 'Responsive design', 'Open source contributor']
  }
];

export const interests = [
  { name: 'Photography', icon: 'camera' },
  { name: 'Travel', icon: 'globe' },
  { name: 'Open Source', icon: 'code' },
  { name: 'Gaming', icon: 'terminal' },
];
