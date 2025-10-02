export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  logo?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'database' | 'other';
  icon?: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  duration: string;
  location: string;
  gpa?: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'award' | 'certification' | 'publication' | 'other';
  issuer?: string;
  url?: string;
}

export interface Contact {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  website?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  resume?: string;
  contact: Contact;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  duration: string;
  location: string;
  gpa?: string;
  description?: string;
  relevantCourses?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  status?: string;
  description?: string;
  skills?: string[];
}
