import type {
  Achievement,
  Certification,
  Education,
  Experience,
  NavigationItem,
  PersonalInfo,
  Project,
  Skill,
} from './types';

export const personalInfo: PersonalInfo = {
  name: 'Lưu Khoa Học',
  title: 'Frontend Developer',
  bio: 'A proactive Frontend Developer with 1.5 years of experience, passionate about building the entire development lifecycle from code to deployment. Expert in crafting scalable UIs with Next.js, TypeScript, and TailwindCSS. Possesses a strong command of modern testing (Vitest) and data-fetching patterns (TanStack Query). Eager to bridge the gap between frontend and operations, with foundational knowledge of containerization using Docker to improve development workflows and consistency.',
  avatar:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format&q=80',
  resume: '/resume.pdf',
  contact: {
    email: 'luukhoahoc.work@gmail.com',
    phone: '+84778 978 382',
    location: 'Cần Giuộc, Việt Nam',
    linkedin: 'https://linkedin.com/in/luukhoahoc',
    github: 'https://github.com/LuuKhoaHoc',
    twitter: 'https://twitter.com/luukhoahoc',
    website: 'https://luukhoahoc.me',
  },
};

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  // Frontend Development
  { name: 'JavaScript (ES6+)', level: 92, category: 'frontend', icon: '🟨' },
  { name: 'TypeScript', level: 85, category: 'frontend', icon: '📘' },
  { name: 'React', level: 90, category: 'frontend', icon: '⚛️' },
  { name: 'Next.js', level: 88, category: 'frontend', icon: '🔺' },
  { name: 'HTML5', level: 95, category: 'frontend', icon: '🟧' },
  { name: 'CSS3', level: 90, category: 'frontend', icon: '🎨' },

  // Styling & Frameworks
  { name: 'TailwindCSS', level: 90, category: 'frontend', icon: '💨' },
  { name: 'CSS-in-JS', level: 80, category: 'frontend', icon: '💅' },
  { name: 'SASS/SCSS', level: 85, category: 'frontend', icon: '🎀' },
  { name: 'Framer Motion', level: 75, category: 'frontend', icon: '🎬' },

  // State Management & Data Fetching
  { name: 'TanStack Query', level: 85, category: 'frontend', icon: '🔄' },
  { name: 'Zustand', level: 80, category: 'frontend', icon: '🐻' },
  { name: 'Redux Toolkit', level: 75, category: 'frontend', icon: '🔧' },
  { name: 'React Context', level: 88, category: 'frontend', icon: '🔗' },

  // APIs & Backend Integration
  { name: 'RESTful APIs', level: 88, category: 'backend', icon: '🔗' },
  { name: 'GraphQL', level: 70, category: 'backend', icon: '📊' },

  // Testing
  { name: 'Vitest', level: 75, category: 'other', icon: '🧪' },
  { name: 'React Testing Library', level: 70, category: 'other', icon: '🔍' },

  // DevOps & Tools
  { name: 'Docker', level: 70, category: 'devops', icon: '🐳' },
  { name: 'Git', level: 90, category: 'devops', icon: '📝' },
  { name: 'GitHub', level: 88, category: 'devops', icon: '🐙' },
  { name: 'Bitbucket', level: 75, category: 'devops', icon: '📦' },

  // CI/CD & Package Managers
  { name: 'GitHub Actions', level: 65, category: 'devops', icon: '⚙️' },
  { name: 'NPM', level: 90, category: 'devops', icon: '📦' },
  { name: 'Yarn', level: 85, category: 'devops', icon: '🧶' },
  { name: 'PNPM', level: 80, category: 'devops', icon: '⚡' },
  { name: 'BUN', level: 75, category: 'devops', icon: '🥖' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Podbrick (E-commerce)',
    description:
      'Led the development of a comprehensive e-commerce platform enabling users to customize characters and visualize products in real-time. Built with Next.js, TypeScript, and modern state management patterns.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format&q=80',
    technologies: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'TanStack Query',
      'Zustand',
    ],
    liveUrl: 'https://podbrick.com',
    githubUrl: 'https://github.com/LuuKhoaHoc/podbrick',
    featured: true,
  },
  {
    id: '2',
    title: 'Vinachain & Aiminor (DeFi/DEX)',
    description:
      'Developed and maintained responsive, high-performance user interfaces for diverse DeFi platforms, including Decentralized Exchanges (DEX), Centralized Exchanges (CEX), and E-commerce sites.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&auto=format&q=80',
    technologies: ['React', 'Next.js', 'TypeScript', 'Web3', 'Blockchain APIs'],
    liveUrl: 'https://vinachain.io',
    githubUrl: 'https://github.com/LuuKhoaHoc/vinachain',
    featured: true,
  },
  {
    id: '3',
    title: 'Weex & AEX24 (Fintech/CEX)',
    description:
      'Built and delivered complex admin dashboards for content and user management across multiple projects, ensuring efficient internal operations for fintech and cryptocurrency exchange platforms.',
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&auto=format&q=80',
    technologies: ['React', 'TypeScript', 'Admin Dashboards', 'REST APIs'],
    liveUrl: 'https://weex.com',
    githubUrl: 'https://github.com/LuuKhoaHoc/weex-admin',
    featured: true,
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description:
      'Modern, responsive portfolio website showcasing projects and skills. Built with Next.js 15, TypeScript, and advanced animations using Framer Motion.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format&q=80',
    technologies: ['Next.js 15', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    liveUrl: 'https://luukhoahoc.me',
    githubUrl: 'https://github.com/LuuKhoaHoc/luukhoahoc.github.io',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'GREENSOFTWARE ASIA',
    position: 'Frontend Developer',
    duration: 'May 2024 - Sep 2025',
    location: 'Ho Chi Minh City, Vietnam',
    description: [
      'Led the development of a comprehensive e-commerce platform for the Podbrick e-commerce platform, enabling users to customize characters and visualize products in real-time',
      'Developed and maintained responsive, high-performance user interfaces for diverse platforms, including Decentralized Exchanges (DEX), Centralized Exchanges (CEX), and E-commerce sites',
      'Built and delivered complex admin dashboards for content and user management across multiple projects, ensuring efficient internal operations',
      'Researched and configured Shopify & Printify API permissions, enabling the backend team to successfully integrate with third-party on-demand service',
      'Mentored and guided 5 junior developers, providing code reviews, technical support, and onboarding to help accelerate their integration into projects and ensure code quality',
      'Established and configured the staging environment for the Podbrick project, streamlining the testing and pre-production validation process',
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'TanStack Query',
      'Vitest',
      'Docker',
    ],
    logo: '/images/companies/greensoftware.jpg',
  },
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Information Technology',
    school: 'FPT University',
    duration: '2021 - 2025',
    location: 'Ho Chi Minh City, Vietnam',
    gpa: '3.5/4.0',
    description:
      'Focused on software engineering, web development, and modern programming practices with hands-on projects.',
    relevantCourses: [
      'Web Development',
      'Database Design',
      'Software Engineering',
      'Computer Networks',
      'Data Structures & Algorithms',
      'Mobile App Development',
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'E-commerce Platform Development',
    description:
      'Successfully led the development of Podbrick e-commerce platform with real-time product customization and visualization features',
    date: '2024',
    type: 'award',
    issuer: 'GREENSOFTWARE ASIA',
  },
  {
    id: '2',
    title: 'DeFi/Fintech Expertise',
    description:
      'Gained extensive experience in developing user interfaces for decentralized finance and cryptocurrency exchange platforms',
    date: '2024-2025',
    type: 'other',
    issuer: 'GREENSOFTWARE ASIA',
  },
  {
    id: '3',
    title: 'Team Leadership & Mentoring',
    description:
      'Successfully mentored and guided 5 junior developers, improving team productivity and code quality standards',
    date: '2024-2025',
    type: 'other',
    issuer: 'GREENSOFTWARE ASIA',
  },
  {
    id: '4',
    title: 'DevOps & Infrastructure Setup',
    description:
      'Established and configured staging environments and CI/CD processes, improving development workflow efficiency',
    date: '2024',
    type: 'other',
    issuer: 'GREENSOFTWARE ASIA',
  },
];

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: '2023',
    status: 'Valid',
    description:
      'Comprehensive course covering React fundamentals, hooks, context, and modern patterns',
    skills: ['React', 'JavaScript', 'Hooks', 'Context API', 'Redux'],
  },
  {
    id: '2',
    name: 'Modern JavaScript ES6+',
    issuer: 'Udemy',
    date: '2023',
    status: 'Valid',
    description:
      'Advanced JavaScript concepts including async/await, destructuring, modules, and ES2023 features',
    skills: ['JavaScript', 'ES6+', 'Async/Await', 'Modules', 'DOM'],
  },
  {
    id: '3',
    name: 'Tailwind CSS Mastery',
    issuer: 'YouTube/Documentation',
    date: '2023',
    status: 'Valid',
    description:
      'Self-taught expertise in utility-first CSS framework for rapid UI development',
    skills: ['Tailwind CSS', 'Responsive Design', 'CSS Grid', 'Flexbox'],
  },
  {
    id: '4',
    name: 'Next.js Complete Developer Guide',
    issuer: 'Udemy',
    date: '2024',
    status: 'Valid',
    description:
      'Full-stack React framework with SSR, SSG, API routes, and deployment strategies',
    skills: ['Next.js', 'React', 'SSR', 'SSG', 'API Routes', 'Vercel'],
  },
  {
    id: '5',
    name: 'Git & GitHub Workflow',
    issuer: 'Self-Learning',
    date: '2022',
    status: 'Valid',
    description:
      'Version control best practices, branching strategies, and collaborative development workflows',
    skills: ['Git', 'GitHub', 'Version Control', 'Collaboration', 'CI/CD'],
  },
];
