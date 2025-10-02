# 🌟 Lưu Khoa Học - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.
Featuring smooth animations, dark mode support, and optimized performance.

## ✨ Features

- **🚀 Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **🎨 Responsive Design**: Mobile-first approach with beautiful UI
- **🌙 Dark Mode**: Automatic theme switching support
- **⚡ Performance Optimized**: Static export, image optimization, code splitting
- **🎯 SEO Friendly**: Meta tags, OpenGraph, and structured data
- **📱 Mobile Optimized**: Touch-friendly navigation and interactions
- **🌐 Accessible**: WCAG 2.1 compliant with screen reader support
- **🔄 Smooth Animations**: Framer Motion powered transitions

## 🛠️ Tech Stack

### Core

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### UI Components

- **MVP Blocks** - Pre-built UI component library
- **Lucide React** - Modern icon library
- **Class Variance Authority** - Styling utilities

### Development Tools

- **Bun** - Fast package manager and runtime
- **ESLint** - Code linting

## 🚀 Quick Start

### Prerequisites

- **Bun** (recommended) or **Node.js** 18+

### Installation

```bash
# Clone the repository
git clone https://github.com/LuuKhoaHoc/luukhoahoc.github.io.git
cd luukhoahoc.github.io

# Install dependencies
bun install

# Start development server
bun dev

# Open http://localhost:3000
```

### Available Scripts

```bash
# Development
bun dev              # Start dev server with Turbopack
bun lint             # Run ESLint
bun type-check       # TypeScript type checking

# Production
bun build            # Build for production
bun export           # Export static files
bun start            # Start production server
```

## 📂 Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── layout/          # Layout components (Header, Footer)
│   │   │   ├── sections/        # Page sections (Hero, About, etc.)
│   │   │   └── ui/             # Reusable UI components
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   └── lib/
│       ├── data.ts             # Portfolio data and content
│       ├── types.ts            # TypeScript type definitions
│       └── utils.ts            # Utility functions
├── public/
│   └── images/                 # Static images and assets
└── .github/workflows/          # GitHub Actions deployment
```

## 🎨 Customization

### Personal Information

Edit `src/lib/data.ts` to customize your portfolio content:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio...',
  avatar: 'your-avatar-url',
  contact: {
    email: 'your@email.com',
    // ... other contact info
  },
};
```

### Projects, Skills, Experience

Update the respective arrays in `src/lib/data.ts`:

- `projects` - Your project portfolio
- `skills` - Technical skills with levels
- `experiences` - Work experience
- `education` - Educational background

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages** in repository settings
2. **Set source** to "GitHub Actions"
3. **Push to main branch** - automatic deployment via GitHub Actions

The site will be available at `https://yourusername.github.io`

### Manual Build & Deploy

```bash
# Build and export static files
bun build

# The 'out' directory contains static files
# Deploy to any static hosting service
```

## 🔧 Configuration

Key settings in `next.config.ts` for GitHub Pages:

```typescript
const nextConfig = {
  output: 'export',              // Static export
  images: { unoptimized: true }, // For static hosting
  trailingSlash: true,           # GitHub Pages compatibility
}
```

## 📱 Sections Included

- **🏠 Hero Section**: Eye-catching introduction with CTA
- **👨‍💻 About Section**: Personal information and highlights
- **🛠️ Skills Section**: Technical skills with interactive progress bars
- **💼 Projects Section**: Portfolio showcase with live demos
- **📧 Contact Section**: Contact form and social links
- **📱 Responsive Design**: Mobile-first approach

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **MVP Blocks** - Beautiful UI components
- **Tailwind CSS** - Excellent utility-first CSS
- **Framer Motion** - Smooth animations
- **Unsplash** - High-quality placeholder images

## 📞 Contact

**Lưu Khoa Học**

- 🌐 Website: [luukhoahoc.me](https://luukhoahoc.me)
- 📧 Email: luukhoahoc@gmail.com
- 💼 LinkedIn: [linkedin.com/in/luukhoahoc](https://linkedin.com/in/luukhoahoc)
- 🐙 GitHub: [github.com/LuuKhoaHoc](https://github.com/LuuKhoaHoc)

---

⭐ **Star this repo** if you found it helpful!

## 🎯 Portfolio Ideas & Inspiration

Based on current trends and best practices, here are some ideas to enhance your portfolio:

### 🚀 Advanced Features

- **Blog Section**: Share technical articles and insights
- **Interactive Resume**: Dynamic, printable resume page
- **Theme Switcher**: Multiple color schemes beyond dark/light
- **Language Toggle**: Multi-language support (EN/VI)
- **Loading Animations**: Skeleton loaders and page transitions
- **3D Elements**: Three.js integration for interactive graphics

### 📊 Analytics & Performance

- **Google Analytics**: Track visitor behavior
- **Performance Monitoring**: Core Web Vitals tracking
- **Contact Form Backend**: Netlify Forms or EmailJS integration
- **Newsletter Signup**: Mailchimp integration
- **Search Functionality**: Algolia or local search

### 🎨 Design Enhancements

- **Micro-animations**: Hover effects and scroll triggers
- **Parallax Scrolling**: Depth and immersion
- **Custom Illustrations**: Personal branding elements
- **Video Backgrounds**: Subtle motion graphics
- **Interactive Timeline**: Career journey visualization

### 📱 Technical Improvements

- **PWA Features**: Offline support and app-like experience
- **Advanced SEO**: JSON-LD structured data
- **Image Gallery**: Lightbox and zoom functionality
- **Code Syntax Highlighting**: For technical blog posts
- **API Integration**: GitHub stats, WakaTime coding stats

### 🎯 Content Ideas

- **Case Studies**: Detailed project breakdowns
- **Testimonials**: Client and colleague recommendations
- **Certifications**: Interactive credential display
- **Speaking Engagements**: Conference talks and workshops
- **Open Source**: GitHub contribution showcase

This portfolio serves as a solid foundation that you can expand and customize based on your specific
needs and career goals!
