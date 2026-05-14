//Navbar
export const NAVBAR_DATA = {
  brand: {
    name: "Cody Yount",
    href: "/",
  },
  navItems: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/project" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ],
};

// footer
export const FOOTER_DATA = {
  year: 2026,
  name: "Cody Yount",
  prefixText: "Built with passion for",
  highlightedTexts: [
    { text: "AI", className: "text-sky-400 font-medium" },
    { text: "innovation", className: "text-amber-400 font-medium" },
  ],
};

//TechnicalExpertise
export const skills = [
  { name: "Python & Deep Learning", level: 90, color: "#3b82f6" },
  { name: "Computer Vision", level: 80, color: "#10b981" },
  { name: "Cloud Services (AWS / Azure)", level: 85, color: "#a855f7" },
  { name: "Data Engineering", level: 90, color: "#10b981" },
  { name: "Web Development", level: 80, color: "#f59e0b" },
];

export const radarData = [
  { subject: "Python & Deep Learning", A: 90, fullMark: 100 },
  { subject: "MLOps", A: 75, fullMark: 100 },
  { subject: "Web Development", A: 80, fullMark: 100 },
  { subject: "Cloud (AWS/Azure)", A: 85, fullMark: 100 },
  { subject: "Data Engineering", A: 90, fullMark: 100 },
  { subject: "Computer Vision", A: 80, fullMark: 100 },
];

//about
export const PROFILE_DATA = {
  name: "Cody Yount",
  firstName: "Cody Yount",
  location: "United States",
  avatarUrl: "/Images/about/profile.webp",

  title:
    "Senior Full-Stack & Backend Engineer | Healthcare, FinTech, AWS, AI/RAG & Secure Data Platforms",

  bio: [
    "I build secure, scalable software platforms across healthcare, fintech, SaaS, and analytics-heavy environments. My work focuses on backend architecture, cloud infrastructure, AI-enabled workflows, and building systems that teams can trust in production.",

    "Over the years, I’ve worked across the full stack using React, Next.js, TypeScript, Node.js, Python, FastAPI, PostgreSQL, AWS, Docker, and CI/CD pipelines. I enjoy designing reliable APIs, structured data systems, and clean user experiences that solve real operational problems.",

    "I’m especially interested in practical AI engineering, including RAG workflows, vector search, LLM-powered internal tools, and workflow automation around structured healthcare and business data. My approach is centered on usability, security, maintainability, and long-term scalability rather than hype-driven AI solutions.",
  ],

  skills: [
    {
      category: "Frontend Development",
      items: "React, Next.js, TypeScript, JavaScript",
    },
    {
      category: "Backend Engineering",
      items: "Node.js, Python, FastAPI, REST APIs, PostgreSQL",
    },
    {
      category: "Cloud & DevOps",
      items: "AWS, Docker, Terraform, CI/CD, Monitoring",
    },
    {
      category: "AI & Data Systems",
      items: "LLM APIs, RAG Workflows, Vector Search, pgvector, AI Automation",
    },
    {
      category: "Healthcare & Secure Systems",
      items:
        "HIPAA-aware Workflows, PHI-sensitive Systems, Role-based Access Control, Audit Logging",
    },
  ],

  journey: [
    "My journey started with Computer Science studies at Arizona State University, where I built a strong foundation in software engineering, backend systems, databases, and application architecture. Early on, I became interested in building systems that solve operational problems at scale.",

    "I spent several years working in healthcare SaaS environments, contributing to platforms focused on clinical workflows, reporting systems, scheduling, billing, analytics, and patient operations. Those experiences taught me how important reliability, data integrity, and usability are in software that supports real-world healthcare processes.",

    "Later, I worked on AI-powered healthcare and communication intelligence platforms involving backend systems, cloud deployments, operational analytics, and automation workflows. These projects deepened my expertise in secure system architecture, AI integrations, structured data pipelines, and scalable cloud infrastructure.",

    "Today, I work with healthcare, fintech, and SaaS teams building secure and production-focused platforms involving full-stack engineering, AI/RAG workflows, analytics dashboards, cloud systems, and workflow automation. I focus on creating software that is maintainable, trustworthy, and designed for real operational use.",
  ],

  projects: [
    {
      title: "Wethr.net",
      subtitle: "Real-Time Weather Market Analytics Platform",
      description:
        "A performance-focused analytics platform built for prediction-market traders using live weather data, forecasting models, and market-focused insights. Designed to transform complex weather information into fast, decision-oriented visual experiences.",
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Analytics"],
      image: "/Images/projects/wethr.webp",
      source: "LinkedIn Project Screenshot",
    },

    {
      title: "Peerlogic AI Platform",
      subtitle: "AI-Powered Healthcare Communication Intelligence",
      description:
        "Built backend workflows and analytics systems for a healthcare communication platform that transformed patient-call data into operational and revenue insights for clinics and dental practices.",
      tech: ["Node.js", "AI Workflows", "Healthcare SaaS", "Dashboards"],
      image: "/Images/projects/peerlogic.webp",
      source: "LinkedIn Project Screenshot",
    },

    {
      title: "AI Secure Data Workspace",
      subtitle: "Internal AI/RAG Workflow Platform",
      description:
        "A modern AI-powered internal workspace platform featuring secure document retrieval, vector search, RAG pipelines, role-based access control, and analytics dashboards for structured business data.",
      tech: ["Next.js", "Python", "FastAPI", "pgvector", "OpenAI APIs"],
      image: "/Images/projects/ai-workspace.webp",
      source: "Generate screenshot using ChatGPT",
    },
  ],
};

//contact
export const CONTACT_DATA = {
  title: "Let's Connect",
  description:
    "I'm always interested in discussing new opportunities, innovative projects, and potential collaborations. Whether you're looking for an AI engineer or want to explore cutting-edge solutions together, I'd love to hear from you.",
  info: [
    {
      label: "Email",
      value: "danikhurram27@gmail.com",
      sub: "For professional inquiries and collaborations",
      icon: "solar:letter-bold",
      color: "#2563eb",
      href: "mailto:danikhurram27@gmail.com",
    },
    {
      label: "Location",
      value: "Based in Karachi, Pakistan",
      sub: "Open to Remote & Relocation",
      icon: "solar:map-point-bold",
      color: "#22c55e",
      href: "#",
    },
    {
      label: "LinkedIn",
      value: "Connect with me professionally",
      sub: "View Profile",
      icon: "solar:link-bold",
      color: "#9333ea",
      href: "https://linkedin.com/in/syeddanialkhurram",
    },
  ],
};