// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const experiences = [
//   {
//     title: "Self-employed",
//     company: "Self Employed",
//     duration: "Apr 2025 - Present",
//     description:
//       "Building healthcare, fintech, and SaaS platforms using AI, cloud, and full-stack technologies.",
//     color: "#f59e0b", // Orange
//   },
//   {
//     title: "DevOps Engineer",
//     company: "Peerlogic",
//     duration: "Mar 2022 - Mar 2025",
//     description:
//       "Built AI-powered healthcare communication and analytics systems.",
//     color: "#3b82f6", // Orange
//   },

//   {
//     title: "Senior Software Engineer",
//     company: "AdviNOW Medical",
//     duration: "Dec 2017 - Feb 2022",
//     description:
//       "Developed AI-driven healthcare automation and patient workflow platforms.",
//     color: "#10b981", // Green
//   },
//   {
//     title: "Software Engineer",
//     company: "WebPT",
//     duration: "Aug 2011 - Oct 2017",
//     description:
//       "Worked on healthcare SaaS applications for clinical and practice management workflows.",
//     color: "#f59e0b", // Blue
//   },
//   {
//     title: "Bachelor of Science, Computer Science",
//     company: "Arizona State University",
//     duration: "Aug 2007 - May 2011",
//     description:
//       "Studied computer science with focus on software engineering and full-stack development.",
//     color: "#3b82f6", // Blue
//   },
// ];

// const ProfessionalJourney = () => {
//   return (
//     <section className="bg-black py-20 px-5 text-white overflow-hidden">
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
//         <p className="text-[#8b949e]">
//           From machine learning internships to leading AI projects, my journey
//           has been driven by curiosity and innovation.
//         </p>
//       </div>

//       <div className="relative max-w-5xl mx-auto">
//         <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-blue-500 via-green-500 to-orange-500" />

//         <div className="space-y-12">
//           {experiences.map((exp, index) => (
//             <div
//               key={index}
//               className={`flex items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
//             >
//               {/* Card Container */}
//               <div className="w-1/2 px-8">
//                 <motion.div
//                   initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   viewport={{ once: true }}
//                   className="bg-[#151C27] p-6 rounded-xl border border-[#30363d] hover:border-blue-500/50 transition-colors shadow-xl"
//                 >
//                   <h3 className="text-xl font-bold">{exp.title}</h3>
//                   <p
//                     className="text-sm font-semibold mb-3"
//                     style={{ color: exp.color }}
//                   >
//                     {exp.company} • {exp.duration}
//                   </p>
//                   <p className="text-[#8b949e] text-sm leading-relaxed">
//                     {exp.description}
//                   </p>
//                 </motion.div>
//               </div>

//               <div
//                 className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-black"
//                 style={{ backgroundColor: exp.color }}
//               />

//               <div className="w-1/2" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProfessionalJourney;


"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Self-employed",
    company: "Self Employed",
    duration: "Apr 2025 - Present",
    description:
      "Building healthcare, fintech, and SaaS platforms using AI, cloud, and full-stack technologies.",
    color: "#f59e0b",
  },
  {
    title: "DevOps Engineer",
    company: "Peerlogic",
    duration: "Mar 2022 - Mar 2025",
    description:
      "Built AI-powered healthcare communication and analytics systems.",
    color: "#3b82f6",
  },
  {
    title: "Senior Software Engineer",
    company: "AdviNOW Medical",
    duration: "Dec 2017 - Feb 2022",
    description:
      "Developed AI-driven healthcare automation and patient workflow platforms.",
    color: "#10b981",
  },
  {
    title: "Software Engineer",
    company: "WebPT",
    duration: "Aug 2011 - Oct 2017",
    description:
      "Worked on healthcare SaaS applications for clinical and practice management workflows.",
    color: "#f59e0b",
  },
  {
    title: "Bachelor of Science, Computer Science",
    company: "Arizona State University",
    duration: "Aug 2007 - May 2011",
    description:
      "Studied computer science with focus on software engineering and full-stack development.",
    color: "#3b82f6",
  },
];

const ProfessionalJourney = () => {
  return (
    <section className="bg-black py-20 px-5 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Professional Journey
        </h2>

        <p className="text-[#8b949e]">
          From machine learning internships to leading AI projects,
          my journey has been driven by curiosity and innovation.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Line */}
        <div
          className="
            absolute h-full w-[2px]
            bg-gradient-to-b from-blue-500 via-green-500 to-orange-500
            left-1/2 -translate-x-1/2
            max-[500px]:left-4
            max-[500px]:translate-x-0
          "
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`
                relative flex items-center w-full
                max-[500px]:pl-12
                ${index % 2 === 0 ? "flex-row-reverse" : ""}
                max-[500px]:flex-row
              `}
            >
              {/* Card Container */}
              <div className="w-1/2 px-8 max-[500px]:w-full max-[500px]:px-0">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? 50 : -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                  viewport={{ once: true }}
                  className="
                    bg-[#151C27]
                    p-6
                    rounded-xl
                    border border-[#30363d]
                    hover:border-blue-500/50
                    transition-colors
                    shadow-xl
                  "
                >
                  <h3 className="text-xl font-bold">
                    {exp.title}
                  </h3>

                  <p
                    className="text-sm font-semibold mb-3"
                    style={{ color: exp.color }}
                  >
                    {exp.company} • {exp.duration}
                  </p>

                  <p className="text-[#8b949e] text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <div
                className="
                  absolute
                  w-4 h-4
                  rounded-full
                  border-4 border-black
                  z-10
                  left-1/2 -translate-x-1/2
                  max-[500px]:left-4
                  max-[500px]:translate-x-0
                "
                style={{
                  backgroundColor: exp.color,
                }}
              />

              {/* Empty Space */}
              <div className="w-1/2 max-[500px]:hidden" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;