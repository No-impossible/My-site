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
    title: "How RAG works? (clearly explained in under 2 mins)",
    description:
      "RAG (Retrieval-Augmented Generation) is one of the most practical ways to make LLMs smarter and more reliable. Instead of relying only on training data, it retrieves relevant external information before generating a response, making outputs more accurate and groun....",
    image: "/Images/blog/blog1.png",
    link: "https://www.linkedin.com/in/cody-yount/recent-activity/all/",
  },
  {
    title:
      "If AI writes code, what makes great engineers truly valuable now?",
    description:
      'Great engineers are no longer defined by how fast they write code, but by how deeply they understand systems, workflows, security, scalability, and business impact. AI can generate features, but it still cannot replace judgment, architecture...',
    image: "/Images/blog/blog2.jpeg",
    link: "https://www.linkedin.com/posts/cody-yount_most-people-know-the-tech-market-is-changing-activity-7458837064936112128-dVvB",
  },
  {
    title: "How I'd Master Claude in 5 Days ( As a Developer & AI Engineer )",
    description:
      "Most people use Claude like a simple chatbot, but its real power appears when you treat it as a thinking partner and workflow engine. Instead of asking random questions, you set clear instructions, build reusable prompts and...",
    image: "/Images/blog/blog03.jpeg",
    link: "https://www.linkedin.com/in/cody-yount/recent-activity/all/",
  },
  
];

const Blogs: React.FC = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-white py-20 px-4 sm:px-8">
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
