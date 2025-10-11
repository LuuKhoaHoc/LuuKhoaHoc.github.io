import { HomeIcon, NotebookIcon } from "lucide-react";

import { Icons } from "@/components/Icons";

export const DATA = {
  name: "Luu Khoa Hoc",
  initials: "LKH",
  url: "https://luukhoahoc.me",
  location: "Can Giuoc, Viet Nam",
  locationLink:
    "https://www.google.com/maps/place/Cần+Giuộc,+Long+An,+Việt+Nam/",
  description:
    "Front-end developer building scalable, testable web experiences with Next.js and TypeScript.",
  summary:
    "A proactive Frontend Developer with 1.5 years of experience, passionate about delivering the entire development lifecycle from code to deployment. I craft scalable UIs with Next.js, TypeScript, and TailwindCSS while applying modern testing practices such as Vitest and React Testing Library. I enjoy bridging the gap between frontend and operations by leveraging Docker, GitHub Actions, and containerization fundamentals to keep workflows resilient and consistent.",
  avatarUrl: "/me.png",
  avatarLightUrl: "/me-light.png",
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "React",
    "Next.js",
    "TailwindCSS",
    "Framer Motion",
    "Sass/SCSS",
    "TanStack Query",
    "Zustand",
    "Redux Toolkit",
    "RESTful APIs",
    "@web3-react",
    "Wagmi",
    "GraphQL",
    "Vitest",
    "React Testing Library",
    "Docker",
    "Git",
    "GitHub Actions",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "luukhoahoc.work@gmail.com",
    tel: "+84 778 978 382",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/LuuKhoaHoc",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/luukhoahoc",
        icon: Icons.linkedin,
        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://x.com/luukhoahoc",
      //   icon: Icons.x,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:luukhoahoc.work@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "GreenSoftware Asia",
      href: "https://greensoftware.asia",
      // badges: ["Frontend", "E-commerce", "Fintech"],
      location: "Ho Chi Minh City, Viet Nam",
      title: "Front-end Developer",
      logoUrl: "/greensoftware-asia.svg",
      start: "May 2024",
      end: "Sep 2025",
      description:
        "Developed and maintained responsive, high-performance interfaces for decentralized (DEX) and centralized (CEX) exchanges as well as e-commerce products. Led Podbrick's customizable product builder with real-time visualizations and improved customer engagement. Configured Shopify and Printify integrations and managed staging environments to streamline testing and pre-production releases. Mentored five junior developers through code reviews, onboarding, and CI/CD guidance to elevate overall code quality.",
    },
  ],
  education: [
    {
      school: "VTC Academy",
      href: "https://vtc.edu.vn",
      degree: "Full-stack Web Development",
      logoUrl: "/vtc-academy.png",
      start: "Sep 2021",
      end: "May 2024",
    },
  ],
  projects: [
    {
      title: "Podbrick E-commerce Builder",
      href: "https://podbrick.com",
      dates: "2025",
      active: true,
      description:
        "Led the front-end architecture and UI for a customizable merch builder, allowing users to design Lego characters for printing on favorite products like t-shirts, with live product previews and streamlined order flows for Podbrick partners.",
      technologies: [
        "Alibaba Cloud",
        "Framer Motion",
        "Next.js",
        "Printify",
        "React",
        "Redux / Redux Toolkit",
        "REST APIs",
        "Shadcn UI",
        "Shopify",
        "TailwindCSS",
        "TypeScript",
      ],
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          type: "Website",
          href: "https://podbrick.com",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Vinachain Swap",
      href: "https://swap.vinachain.io",
      dates: "2024 - 2025",
      active: true,
      description:
        "Developed a platform enabling users to purchase packages for daily interest payments, paid in USDT and received in VPC or USDV based on customer preferences, enhancing user engagement and financial flexibility.",
      technologies: [
        "Alibaba Cloud",
        "Framer Motion",
        "Next.js",
        "React",
        "Redux / Redux Toolkit",
        "REST APIs",
        "Shadcn UI",
        "TailwindCSS",
        "TypeScript",
        "Wagmi",
      ],
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          type: "Website",
          href: "https://swap.vinachain.io",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Weex & AEX24 Operations Portal",
      href: "https://weex.info",
      dates: "2024 - 2025",
      active: true,
      description:
        "Developed a centralized exchange (CEX) platform where users log in and link wallets to trade VPC and USDV tokens, featuring full professional CEX capabilities including order management, real-time trading, and secure transactions.",
      technologies: [
        "@web3-react",
        "Alibaba Cloud",
        "Next.js",
        "React",
        "Redux / Redux Toolkit",
        "REST APIs",
        "Shadcn UI",
        "TailwindCSS",
        "TypeScript",
      ],
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          type: "Website",
          href: "https://weex.info",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Đại Việt Sử Ký",
      href: "https://daivietsuky.com",
      dates: "2024 - 2025",
      active: true,
      description:
        "Developed a comprehensive GameFi portal connecting to a mobile game via wallet addresses, enabling users to buy in-game items with tokens, top up the game using tokens through a VPC-to-Ruby swap gateway, and purchase NFTs with VPC tokens to enhance community engagement and drive user growth.",
      technologies: [
        "@web3-react",
        "Alibaba Cloud",
        "Next.js",
        "React",
        "Redux / Redux Toolkit",
        "REST APIs",
        "Shadcn UI",
        "TailwindCSS",
        "TypeScript",
      ],
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          type: "Website",
          href: "https://daivietsuky.com",
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
