import React from "react";
import Image from "next/image";

interface BlogPost {
  title: string;
  description: string;
  image: string;
  link: string;
}

const blogs: BlogPost[] = [
  {
    title: "Production-Grade MCP Security Architecture",
    description:
      "MCP systems don't fail because teams lack awareness of security risks, but because enforcement layers are incorrectly or inconsistently implemented. This blog outlines a production-grade architecture where the LLM only suggests actions while the system enforces them...",
    image: "/Images/work/work1.webp",
    link: "#",
  },
  {
    title:
      "Azure AI Foundry vs Copilot Studio vs Custom Architectures: How to Actually Choose the Right Agentic AI Approach",
    description:
      'In the Azure ecosystem, there isn\'t a single "best" way to build AI agents, there are different levels of abstraction. Microsoft Copilot Studio offers speed and powerful out-of-the-box orchestration, especially when combined with well-designed tools and MCP integrations...',
    image: "/Images/work/work1.webp",
    link: "#",
  },
  {
    title: "The Fastest Python Package Manager You'll Ever Use",
    description:
      "uv is a modern, high-performance Python packaging tool designed to replace traditional tools like pip and virtualenv. Built with speed and simplicity in mind, uv combines dependency management, virtual environments, and package installation into a single workflow...",
    image: "/Images/work/work1.webp",
    link: "#",
  },
  {
    title:
      "A Step-by-Step Guide to Install and Run Cloud Code for Free (Using Ollama + Qwen3Coder 30B)",
    description:
      "In this step-by-step guide, you'll learn how to install and run Cloud Code locally for free using Ollama and the Qwen3Coder 30B large language model on macOS. We'll walk through installing Ollama, downloading the model, and launching your own local AI coding assistant...",
    image: "/Images/work/work1.webp",
    link: "#",
  },
  {
    title: "Digital FTEs: The Rise of AI as a Workforce Unit",
    description:
      "FTE is a business concept, not a technology. AI agents become FTEs only when they are treated like workers: fixed cost, defined responsibility, measurable output. This is now being called Digital FTEs or FTE AI Agents. Digital FTEs excel at structured, repetitive, high-volume work...",
    image: "/Images/work/work1.webp",
    link: "#",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-white py-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-12 tracking-tight uppercase">
          BLOGS
        </h2>

        {/* Blog List */}
        <div className="space-y-12">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start group"
            >
              {/* Thumbnail Container */}
              <div className="w-full md:w-80 flex-shrink-0 relative aspect-video overflow-hidden rounded-xl border border-neutral-800">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority={index < 2} // Optimization for first two images
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold leading-tight group-hover:text-blue-400 transition-colors cursor-pointer">
                  {blog.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed line-clamp-4">
                  {blog.description}
                </p>
                <a
                  href={blog.link}
                  className="inline-flex items-center text-xs text-neutral-500 hover:text-white transition-colors uppercase tracking-wider"
                >
                  Read article <span className="ml-1 text-lg">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
