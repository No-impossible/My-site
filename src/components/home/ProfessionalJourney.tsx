"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "AI Engineer",
    company: "Kaispe",
    duration: "Jan 2025 - Present",
    description:
      "Building cloud-deployed, parsing & object detection, face recognition, agents, and healthcare AI.",
    color: "#3b82f6", // Blue
  },
  {
    title: "Data Scientist",
    company: "Toko Lab (UdhaarBook)",
    duration: "Mar 2024 - Dec 2024",
    description:
      "Built Django automation workflows, user segmentations, and data pipelines.",
    color: "#10b981", // Green
  },
  {
    title: "ML Engineer Intern",
    company: "Technomide Software House",
    duration: "May 2023 - Oct 2023",
    description: "Trained pharma datasets and deployed models with REST APIs.",
    color: "#f59e0b", // Orange
  },
];

const ProfessionalJourney = () => {
  return (
    <section className="bg-black py-20 px-5 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
        <p className="text-[#8b949e]">
          From machine learning internships to leading AI projects, my journey
          has been driven by curiosity and innovation.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-blue-500 via-green-500 to-orange-500" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              {/* Card Container */}
              <div className="w-1/2 px-8">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#151C27] p-6 rounded-xl border border-[#30363d] hover:border-blue-500/50 transition-colors shadow-xl"
                >
                  <h3 className="text-xl font-bold">{exp.title}</h3>
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

              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-black"
                style={{ backgroundColor: exp.color }}
              />

              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
