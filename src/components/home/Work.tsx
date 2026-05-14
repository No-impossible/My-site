"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

// --- ANIMATION VARIANTS ---
const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const PROJECTS = [
  {
    title: "AdviNOW Medical",
    description:
      "An AI-powered healthcare automation platform designed to improve the patient journey through digital intake systems, provider-facing workflows, clinical automation, and secure healthcare data architecture.",
    technologies: ["React", "Node.js", "AWS", "Healthcare AI", "Automation"],
    href: "https://advinow.com",
    image: "/Images/work/Work6.png",
    links: [
      {
        type: "website",
        href: "https://advinow.com",
        icon: "mdi:world-wide-web",
      },
    ],
  },

  {
    title: "BombaiMTY Restaurant Platform",
    description:
      "A modern restaurant ordering and menu-management platform featuring category-based navigation, product cards, responsive ordering workflows, and optimized customer browsing experiences for food businesses.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "E-Commerce",
      "Responsive UI",
    ],
    href: "https://bombai-mty-menu.vercel.app/",
    image: "/Images/work/Work9.png",
    links: [
      {
        type: "website",
        href: "https://bombai-mty-menu.vercel.app/",
        icon: "mdi:web",
      },
      {
        type: "github",
        href: "https://github.com/No-impossible/food-menu",
        icon: "mdi:github",
      },
    ],
  },
  {
    title: "Wethr.net",
    description:
      "A real-time weather market analytics platform designed for prediction-market traders using live forecasting data, analytics dashboards, and rapid decision-support interfaces focused on clarity, speed, and usability.",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Analytics",
      "Data Visualization",
    ],
    href: "https://wethr.net",
    image: "/Images/work/Work4.png",
    links: [
      {
        type: "website",
        href: "https://wethr.net",
        icon: "mdi:web",
      },
    ],
  },
  {
    title: "MediVault",
    description:
      "A secure healthcare platform focused on centralized medical-history management, patient record accessibility, and healthcare workflow integration. Built with a clean and modern interface emphasizing trust, accessibility, and secure healthcare data handling.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Healthcare UI",
      "Secure Data Systems",
    ],
    href: "https://medivault-healthcare.vercel.app/",
    image: "/Images/work/Work7.png",
    links: [
      {
        type: "website",
        href: "https://medivault-healthcare.vercel.app/",
        icon: "mdi:web",
      },
      {
        type: "github",
        href: "https://github.com/No-impossible/Medivault--next-generation-patient-portal",
        icon: "mdi:github",
      },
    ],
  },

  {
    title: "Peerlogic AI Platform",
    description:
      "Built an AI-powered healthcare communication intelligence platform helping clinics and dental practices analyze patient-call workflows, operational bottlenecks, scheduling behavior, and revenue-impact insights.",
    technologies: [
      "Node.js",
      "Healthcare SaaS",
      "AI Workflows",
      "Dashboards",
      "Analytics",
    ],
    href: "https://www.peerlogic.com/",
    image: "/Images/work/Work5.png",
    links: [
      {
        type: "website",
        href: "https://www.peerlogic.com/",
        icon: "mdi:web",
      },
    ],
  },

  {
    title: "ScreenApp",
    description:
      "A high-performance screen recording and intelligence platform that transforms long meetings into structured knowledge. Features AI-powered summaries, Chrome extension integration, and searchable video repositories for streamlined team collaboration.",
    technologies: [
      "Next.js",
      "AI Transcription",
      "Browser Extensions",
      "Video Processing",
      "SaaS Architecture",
    ],
    href: "https://screenapp.io/",
    image: "/Images/work/Work10.png",
    links: [
      {
        type: "website",
        href: "https://screenapp.io/",
        icon: "mdi:web",
      },
      {
        type: "github",
        href: "https://github.com/No-impossible/meeting-b",
        icon: "mdi:github",
      },
    ],
  },
];

function ProjectCard({ item }: { item: any }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative flex flex-col md:block md:min-h-[400px] rounded-[2rem] overflow-hidden bg-[#151C27] shadow-lg border border-white/5"
    >
      {/* Background Image layer */}
      <div className="relative h-[250px] md:h-full md:absolute md:inset-0 overflow-hidden bg-black">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600" />
        )}
      </div>

      {/* Interactive Overlay Layer */}
      <div className="relative flex-1 bg-[#151C27]/95 md:bg-black/85 md:backdrop-blur-xl md:absolute md:inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6 md:p-10 z-10">
        <div className="flex flex-row justify-between items-start md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-700">
          <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
            {item.title}
          </h3>
          <Link
            href={item.href || "#"}
            target="_blank"
            className="w-12 h-12 rounded-full bg-[#1f6feb] text-white flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Icon icon="solar:arrow-right-up-linear" className="w-6 h-6" />
          </Link>
        </div>

        <div className="md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-700 delay-75 mt-4">
          <p className="text-[#8b949e] text-sm md:text-base mb-6 line-clamp-3">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {item.technologies.slice(0, 5).map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 text-[10px] font-mono rounded bg-white/5 text-[#58a6ff] border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {item.links?.map((link: any, idx: number) => (
              <Link
                key={idx}
                href={link.href}
                target="_blank"
                className="p-2 rounded-full bg-white/5 hover:bg-white hover:text-black transition-all text-white border border-white/10"
              >
                <Icon icon={link.icon} className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  // Column logic: 0, 2 go left; 1, 3 go right
  const leftColumnProjects = PROJECTS.filter((_, i) => i % 2 === 0);
  const rightColumnProjects = PROJECTS.filter((_, i) => i % 2 !== 0);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger}
      id="work"
      className="py-20 md:py-32 relative bg-black min-h-screen"
    >
      {/* Background Text */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] flex justify-center">
        <h2
          className="text-[20rem] font-black text-transparent"
          style={{ WebkitTextStroke: "2px white" }}
        >
          WORKS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Selected Work
          </h2>
          <p className="text-[#8b949e] text-xl mt-4">
            A showcase of minimal aesthetics and complex logic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-8 md:gap-12">
            {leftColumnProjects.map((item, i) => (
              <ProjectCard key={i} item={item} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 md:gap-12 md:pt-32">
            {rightColumnProjects.map((item, i) => (
              <ProjectCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
