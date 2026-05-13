//Navbar
export const NAVBAR_DATA = {
  brand: {
    name: "Cody Yount",
    href: "#home",
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
  firstName: "Danial",
  location: "Karachi, Pakistan",
  avatarUrl: "/Images/about/profile.webp",
  bio: [
    "I don't really have many words, it's just that I love building things and solving problems. I have been exploring AI, cloud, and web development for some time now.",
    "My journey started with learning programming basics and now I'm building projects that integrate cross platforms together with python nextjs and different stacks. The journey started with simple codes then went to writing web scrapping scripts. Now I am focusing on building full-stack applications and exploring AI/ML technologies to create innovative solutions. Automation and efficiency are my key interests.",
  ],
  skills: [
    {
      category: "Programming Languages",
      items: "Python, JavaScript, TypeScript",
    },
    { category: "Web Development", items: "Next.js, React, Node.js" },
    {
      category: "AI & Machine Learning",
      items: "TensorFlow, PyTorch, OpenAI APIs",
    },
    { category: "Cloud Platforms", items: "AWS, Azure" },
    {
      category: "Automation tools",
      items: "n8n, power automate flows, selenium",
    },
  ],
  journey: [
    "My journey really began with learning basic programming concepts through YouTube and a few private courses. I started with iOS app development just to pick up a skill, but since I was new to the tech world, I didn't get any real exposure to projects or jobs at that stage. Eventually, I moved toward Python and enrolled in the PIAIC AI course...",
    "In the tech world and in life overall guidance can make a real difference. My path, however, was shaped largely by self-learning: exploring different sources, experimenting, building projects, and learning through repeated trial and error...",
    "But the good part is that I never gave up. Throughout this journey, I met some amazing people who are excellent at what they do. They helped me understand different concepts and supported me whenever they could.",
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