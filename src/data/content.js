export const homeContent = {
  hero: {
    badge: "Welcome to Our Platform",
    title: "Innovate, Build & Scale Your Digital Vision",
    subtitle: "We create high-performance, beautiful, and scalable web solutions tailored to elevate your brand and accelerate your growth.",
    primaryCta: { label: "Explore Services", href: "/services" },
    secondaryCta: { label: "Get In Touch", href: "/contact" },
  },
  stats: [
    { value: "99.9%", label: "Uptime & Reliability" },
    { value: "250+", label: "Projects Delivered" },
    { value: "45+", label: "Global Partners" },
    { value: "24/7", label: "Dedicated Support" },
  ],
  features: [
    {
      title: "Cutting-Edge Architecture",
      description: "Built on Next.js with modular component structures, ensuring lightning-fast load times and seamless navigation.",
      icon: "Speed",
    },
    {
      title: "Material Design 3",
      description: "Polished UI crafted with Material-UI (MUI) components, full accessibility, responsive grids, and design tokens.",
      icon: "DesignServices",
    },
    {
      title: "Enterprise Scalability",
      description: "Designed from the ground up to support high concurrency, dynamic routes, and future backend integrations.",
      icon: "Hub",
    },
    {
      title: "SEO & Mobile Ready",
      description: "Fully responsive across smartphones, tablets, and desktops with standard metadata for maximum search visibility.",
      icon: "Devices",
    },
  ],
  ctaBanner: {
    title: "Ready to take your project to the next level?",
    subtitle: "Connect with our team today and let's turn your ideas into impactful reality.",
    buttonLabel: "Start a Conversation",
    buttonHref: "/contact",
  },
};

export const aboutContent = {
  header: {
    title: "About Our Company",
    subtitle: "Discover our mission, our dedicated team, and the core values that guide everything we engineer.",
  },
  mission: {
    title: "Our Mission & Vision",
    paragraphs: [
      "We believe technology should empower teams to achieve their highest potential without unnecessary complexity. Our focus is delivering reliable, intuitive, and modern web applications that solve real-world problems.",
      "Founded with a vision for design excellence and engineering integrity, we combine modern software principles with user-centric design to create digital products that leave a lasting impression.",
    ],
  },
  values: [
    {
      title: "Customer-Centric",
      description: "We listen closely to user needs and iterate rapidly to deliver solutions that exceed expectations.",
    },
    {
      title: "Engineering Excellence",
      description: "We prioritize clean code, testability, performance, and best architectural practices.",
    },
    {
      title: "Continuous Innovation",
      description: "We adopt proven modern tools, frameworks, and workflows to stay ahead of industry standards.",
    },
    {
      title: "Integrity & Transparency",
      description: "Honest communication, transparent timelines, and lasting partnerships are our bedrock.",
    },
  ],
  team: [
    {
      name: "Alex Morgan",
      role: "Founder & Lead Architect",
      bio: "10+ years specializing in distributed systems, modern frontend architectures, and product strategy.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sarah Chen",
      role: "Head of Product Design",
      bio: "Passionate about accessible UI/UX, design systems, and crafting memorable brand identities.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "David Kim",
      role: "Lead Full-Stack Engineer",
      bio: "Expert in Next.js, API integrations, cloud infrastructure, and real-time data pipelines.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
  ],
};

export const servicesContent = {
  header: {
    title: "Our Services & Solutions",
    subtitle: "Tailored engineering, design, and consulting packages crafted to scale your business.",
  },
  servicesList: [
    {
      title: "Web Application Development",
      description: "High-performance, secure, and reactive web applications tailored to your business workflows using Next.js and Material UI.",
      features: ["Custom React & Next.js builds", "API & Third-party Integrations", "Database & Auth architecture", "SEO & Core Web Vitals optimization"],
      highlight: true,
    },
    {
      title: "UI/UX & Design Systems",
      description: "Holistic design systems, wireframing, high-fidelity prototypes, and component library setups that align your product aesthetics.",
      features: ["Component library development", "Responsive layout engineering", "Accessibility (WCAG 2.1) compliance", "Design tokens & theming"],
      highlight: false,
    },
    {
      title: "Cloud Architecture & DevOps",
      description: "Automated deployment pipelines, serverless infrastructures, edge routing, and monitoring for bulletproof uptime.",
      features: ["CI/CD automated workflows", "Containerization & Docker", "Edge caching & CDN setup", "Infrastructure monitoring & logs"],
      highlight: false,
    },
    {
      title: "Consulting & Code Audits",
      description: "Deep-dive technical reviews, security checks, performance profiling, and modernization strategies for existing platforms.",
      features: ["Architecture review", "Lighthouse & speed audit", "Refactoring roadmap", "Security posture assessment"],
      highlight: false,
    },
  ],
  faqs: [
    {
      question: "How do I replace this placeholder content with my own?",
      answer: "You can simply update the files in `src/data/content.js` and `src/config/siteConfig.js`. All pages automatically pull data from these centralized modules!",
    },
    {
      question: "Can I add more pages easily?",
      answer: "Yes! Simply create a new folder under `src/app/<page-name>/` with a `page.jsx` file, and add its route to `siteConfig.navLinks` in `src/config/siteConfig.js`.",
    },
    {
      question: "How do I customize the MUI theme colors and fonts?",
      answer: "Open `src/theme/theme.js` where you can modify the primary/secondary palette, typography, border radiuses, and component overrides.",
    },
    {
      question: "Does this support server-side rendering (SSR) and client components?",
      answer: "Yes, it leverages Next.js App Router with `@mui/material-nextjs` AppRouterCacheProvider for seamless SSR and hydration without CSS flash.",
    },
  ],
};

export const portfolioContent = {
  header: {
    title: "Portfolio & Case Studies",
    subtitle: "Explore a selection of recent projects, customer stories, and engineering achievements.",
  },
  categories: ["All", "Web App", "UI/UX Design", "Enterprise", "E-Commerce"],
  projects: [
    {
      id: 1,
      title: "Apex Analytics Platform",
      category: "Web App",
      summary: "Real-time SaaS analytics dashboard with interactive data visualizations, multi-tenant authentication, and export utilities.",
      tags: ["Next.js", "MUI", "TypeScript", "Charts"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Luminary Design System",
      category: "UI/UX Design",
      summary: "Comprehensive multi-brand design tokens, accessible components, and documentation hub used by over 50 frontend engineers.",
      tags: ["Design System", "Figma", "MUI", "Accessibility"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Starlight Marketplace",
      category: "E-Commerce",
      summary: "High-converting modern retail storefront featuring instant facet filtering, server-side caching, and frictionless checkout.",
      tags: ["Next.js", "Stripe", "Microservices", "MUI"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Nexus Enterprise Portal",
      category: "Enterprise",
      summary: "Internal tooling application streamlining cross-departmental requests, inventory management, and automated approvals.",
      tags: ["Next.js", "GraphQL", "MUI DataGrid", "RBAC"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

