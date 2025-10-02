# 🚀 Modern Portfolio Website

A comprehensive, responsive portfolio website built with cutting-edge technologies to showcase
professional experience, skills, and projects.

![Portfolio Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Portfolio+Preview)

## ✨ Features

### 🎨 Design & UI

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern Glassmorphism UI** - Beautiful frosted glass effects and gradients
- **Smooth Animations** - Framer Motion powered interactions and page transitions
- **Dark/Light Mode** - Automatic theme switching with system preference detection
- **Interactive Components** - Hover effects, micro-interactions, and smooth scrolling

### 🛠 Technical Stack

- **Next.js 15** - Latest React framework with App Router and Turbopack
- **TypeScript** - Full type safety with strict mode enabled
- **Tailwind CSS v4** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Production-ready motion library for React
- **Bun** - Fast JavaScript runtime and package manager

### 📱 Sections

- **Hero Section** - Eye-catching introduction with animated elements
- **About Section** - Professional background and personal introduction
- **Skills Section** - Technical expertise with proficiency levels
- **Experience Section** - Professional timeline with achievements
- **Education Section** - Academic background and certifications
- **Projects Section** - Featured work with live demos and source code
- **Testimonials Section** - Feedback from colleagues and supervisors
- **Contact Section** - Multiple ways to get in touch

### ⚡ Performance

- **Static Site Generation** - Pre-rendered pages for optimal performance
- **Image Optimization** - Next.js automatic image optimization
- **Bundle Analysis** - Optimized bundle size with tree shaking
- **Lighthouse Optimized** - High scores for performance, accessibility, and SEO

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun 1.0+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/LuuKhoaHoc/luukhoahoc.github.io.git

# Navigate to project directory
cd luukhoahoc.github.io

# Install dependencies with Bun (recommended)
bun install

# Or with npm
npm install
```

### Development

```bash
# Start development server
bun dev

# Or with npm
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

```bash
# Build for production
bun run build

# Start production server locally
bun start

# Deploy to GitHub Pages
bun run deploy

# Or manually export static files
bun run export
```

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── components/         # React components
│   │   │   ├── layout/         # Header, Footer, Navigation
│   │   │   ├── sections/       # Page sections (Hero, About, etc.)
│   │   │   └── ui/             # Reusable UI components
│   │   ├── globals.css         # Global styles and Tailwind imports
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Main page
│   ├── lib/                    # Utilities and data
│   │   ├── data.ts            # Portfolio content and configuration
│   │   ├── types.ts           # TypeScript type definitions
│   │   └── utils.ts           # Helper functions
│   └── public/                 # Static assets
├── .github/workflows/          # GitHub Actions for auto-deployment
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🎯 Customization Guide

### 1. Personal Information

Edit `src/lib/data.ts` to update your personal information:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your Bio',
  avatar: '/images/your-avatar.jpg',
  contact: {
    email: 'your.email@example.com',
    phone: '+1234567890',
    location: 'Your Location',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
    website: 'https://yourwebsite.com',
  },
};
```

### 2. Skills & Technologies

Update your technical skills in `src/lib/data.ts`:

```typescript
export const skills: Skill[] = [
  {
    name: 'React',
    level: 95,
    category: 'frontend',
    icon: '⚛️',
  },
  // Add more skills...
];
```

### 3. Projects Portfolio

Add your projects to showcase:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Project description...',
    image: '/images/projects/project1.jpg',
    technologies: ['React', 'Next.js', 'TypeScript'],
    liveUrl: 'https://project-demo.com',
    githubUrl: 'https://github.com/username/project',
    featured: true,
  },
  // Add more projects...
];
```

### 4. Work Experience

Document your professional experience:

```typescript
export const experiences: Experience[] = [
  {
    id: '1',
    position: 'Senior Frontend Developer',
    company: 'Company Name',
    duration: '2023 - Present',
    location: 'City, Country',
    description: ['Achievement 1', 'Achievement 2', 'Achievement 3'],
    technologies: ['React', 'TypeScript', 'Node.js'],
  },
];
```

### 5. Styling & Theming

Customize colors and styling in `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
    },
  },
};
```

## 🚀 Deployment Options

### GitHub Pages (Recommended)

Automatic deployment is configured via GitHub Actions:

1. Push code to `main` branch
2. GitHub Actions automatically builds and deploys
3. Site available at `https://yourusername.github.io`

### Manual Deployment

```bash
# Build and export static files
bun run build && bun run export

# Deploy the `out/` folder to your hosting provider
```

### Other Platforms

- **Vercel**: Connect GitHub repo for automatic deployment
- **Netlify**: Drag & drop the `out/` folder or connect GitHub
- **Firebase Hosting**: Use Firebase CLI to deploy

## 🔧 Configuration

### Environment Variables

Create `.env.local` for any environment-specific variables:

```env
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service
```

### SEO Configuration

Update metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your professional portfolio description',
  keywords: ['developer', 'portfolio', 'react', 'next.js'],
};
```

## 📈 Performance Optimizations

- **Static Site Generation**: Pages pre-rendered at build time
- **Image Optimization**: Automatic WebP conversion and responsive sizing
- **Code Splitting**: Automatic bundle splitting by Next.js
- **Tree Shaking**: Unused code eliminated from production bundle
- **Gzip Compression**: Smaller file sizes for faster loading

## 🛠 Development Tools

### Code Quality

- **ESLint**: Code linting with React and TypeScript rules
- **Prettier**: Automatic code formatting
- **TypeScript**: Static type checking
- **Husky**: Git hooks for pre-commit checks

### Useful Commands

```bash
# Lint code
bun run lint

# Format code
bun run format

# Type checking
bun run type-check

# Bundle analysis
bun run analyze
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you found this portfolio template helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting issues
- 💡 Suggesting improvements
- 🔗 Sharing with others

## 📞 Contact

- **Email**: luukhoahoc.work@gmail.com
- **LinkedIn**: [linkedin.com/in/luukhoahoc](https://linkedin.com/in/luukhoahoc)
- **GitHub**: [github.com/LuuKhoaHoc](https://github.com/LuuKhoaHoc)
- **Website**: [luukhoahoc.me](https://luukhoahoc.me)

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/LuuKhoaHoc">Luu Khoa Hoc</a></p>
  <p>© 2025 All rights reserved</p>
</div>
