export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: 'react' | 'nextjs' | 'all' | 'fullstack';
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon: string;
    color: string;
    experience: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  details: string[];
}

export const portfolioData = {
  personal: {
    name: "Kikelomo James",
    initials: "KJ",
    title: "Frontend Developer",
    shortBio: "I build responsive, user-friendly, and visually appealing web applications using modern frontend technologies.",
    fullBio: "I'm a passionate Frontend Developer who loves building beautiful, responsive, and user-friendly web applications. I enjoy turning ideas into real products that provide amazing user experiences. I'm always learning and exploring new technologies to improve my skills and build better solutions.",
    stats: [
      { label: "Projects Completed", value: "10+", icon: "FolderCheck" },
      { label: "Technologies Mastered", value: "8+", icon: "Code2" },
      { label: "Client Satisfaction", value: "100%", icon: "Smile" },
      { label: "Years Experience", value: "2+", icon: "Sparkles" },
    ],
    social: {
      github: "https://github.com/kike-prog",
      linkedin: "https://www.linkedin.com/in/kikelomo-james-7a399b38a/",
      email: "kikelomom898@gmail.com",
      twitter: "https://twitter.com",
      resumeUrl: "#contact"
    },
    heroImage: "/hero-illustration.jpg",
    avatarImage: "/profile.jpg"
  },

  skills: [
    {
      category: "Frontend Development",
      description: "Building fast, dynamic, and responsive user interfaces with modern toolchains.",
      items: [
        { name: "React", level: "Advanced", icon: "Atom", color: "#61DAFB", desc: "Component architecture, Hooks, State management" },
        { name: "Next.js", level: "Advanced", icon: "Flame", color: "#ffffff", desc: "App Router, SSR, SSG, API routes" },
        { name: "TypeScript", level: "Advanced", icon: "FileCode2", color: "#3178C6", desc: "Strict type safety, generics, interfaces" },
        { name: "JavaScript", level: "Advanced", icon: "Braces", color: "#F7DF1E", desc: "ES6+, Async/Await, DOM manipulation" },
        { name: "Tailwind CSS", level: "Expert", icon: "Palette", color: "#38BDF8", desc: "Responsive design, custom design tokens" },
        { name: "React Native", level: "Intermediate", icon: "Smartphone", color: "#61DAFB", desc: "Cross-platform mobile UI components" },
        { name: "HTML5 & Semantic UI", level: "Expert", icon: "Globe", color: "#E34F26", desc: "Accessible, SEO-friendly clean markup" },
        { name: "CSS3 & Modern Animations", level: "Expert", icon: "Sparkles", color: "#1572B6", desc: "Flexbox, Grid, keyframes, transitions" }
      ]
    },
    {
      category: "Tools & Ecosystem",
      description: "Industry-standard development workflows, version control, and environments.",
      items: [
        { name: "Git", level: "Advanced", icon: "GitBranch", color: "#F05032", desc: "Branching strategies, rebase, merge workflows" },
        { name: "GitHub", level: "Advanced", icon: "Github", color: "#ffffff", desc: "PR reviews, CI/CD Actions, issues" },
        { name: "VS Code", level: "Expert", icon: "Terminal", color: "#007ACC", desc: "Extensions, debugging, productivity setups" },
        { name: "Vite", level: "Advanced", icon: "Zap", color: "#646CFF", desc: "Lightning fast HMR & modern bundling" },
        { name: "Figma to Code", level: "Advanced", icon: "Layers", color: "#F24E1E", desc: "Pixel-perfect implementation of UI mocks" },
        { name: "Vercel / Netlify", level: "Advanced", icon: "Cloud", color: "#00f2fe", desc: "Continuous deployment and preview branches" }
      ]
    }
  ],

  projects: [
    {
      id: "spendwise",
      title: "SpendWise – Expense & Budget Tracker",
      tagline: "Smart Personal Finance & Analytics Dashboard",
      description: "A comprehensive expense tracking application featuring visual budget analytics, interactive spending breakdown charts, category filtering, and real-time transaction management.",
      image: "/spendwise.jpg",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Lucide Icons"],
      category: "react",
      githubUrl: "https://github.com",
      liveUrl: "https://spendwise-demo.vercel.app",
      featured: true,
      highlights: [
        "Interactive spending and income trend charts with dynamic filtering",
        "Category breakdown rings (Housing, Food & Drink, Transport, Shopping)",
        "Real-time balance computation and monthly target progress bars",
        "Responsive, dark-mode native glassmorphism aesthetic"
      ]
    },
    {
      id: "foodapp",
      title: "FoodApp – Gourmet Food Ordering Platform",
      tagline: "Seamless Food Discovery & Real-Time Order Tracking",
      description: "An interactive, ultra-responsive food delivery web app with categorized menus, real-time cart state management, checkout calculations, and live simulated delivery tracking.",
      image: "/foodapp.jpg",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "nextjs",
      githubUrl: "https://github.com",
      liveUrl: "https://foodapp-gourmet.vercel.app",
      featured: true,
      highlights: [
        "Dynamic category filtering (Burgers, Bowls, Salads, Pizza, Drinks)",
        "Smooth micro-interactions for Add to Cart with live quantity badge",
        "Interactive order tracking map and animated delivery status timeline",
        "Glassmorphism order summary drawer with instant price breakdown"
      ]
    }
  ] as Project[],

  experience: [
    {
      id: "exp-1",
      role: "Frontend Developer",
      company: "Tech Innovation Hub",
      location: "Remote / Hybrid",
      period: "2023 – Present",
      type: "Full-time",
      description: [
        "Engineered responsive, highly performant web applications using React, TypeScript, and Next.js for high-growth digital products.",
        "Collaborated closely with UI/UX designers to translate Figma design systems into pixel-perfect, accessible component libraries.",
        "Optimized frontend bundle sizes and Core Web Vitals, achieving 95+ Google Lighthouse scores across landing and dashboard pages.",
        "Built modular state management architectures reducing code redundancy across teams by 35%."
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Git", "REST APIs"]
    },
    {
      id: "exp-2",
      role: "Junior Frontend Developer",
      company: "Digital Web Studio",
      location: "Remote",
      period: "2022 – 2023",
      type: "Contract",
      description: [
        "Developed custom client websites and landing pages with rich animations using JavaScript, HTML5, CSS3, and Tailwind CSS.",
        "Ensured seamless cross-browser compatibility and full mobile responsiveness across various viewports.",
        "Integrated third-party APIs, form handlers, and analytics tracking with zero downtime deployments."
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "GitHub", "Vite"]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Science in Computer Science",
      institution: "SCHOOL OF MANAGEMENT AND TECHNOLOGY",
      period: "2019 – 2023",
      location: "Nigeria",
      grade: "First Class Honours / Top Percentile",
      details: [
        "Core Coursework: Data Structures & Algorithms, Web Engineering, Software Architecture, Human-Computer Interaction (HCI), Object-Oriented Programming, Database Systems.",
        "Led university developer club workshops covering modern React, JavaScript fundamentals, and open-source contribution practices.",
        "Final Year Project: Responsive collaborative web application featuring real-time state synchronization."
      ]
    }
  ]
};
