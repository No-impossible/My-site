"use client";
import { radarData, skills } from "@/constants";
import { motion } from "framer-motion";
import {
    PolarAngleAxis,
    PolarGrid,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from "recharts";



const TechnicalExpertise = () => {
  return (
    <section className="bg-[#0d1117] py-20 px-5 text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
        <p className="text-[#8b949e] max-w-2xl mx-auto">
          Proficient in cutting-edge technologies across the AI/ML stack, from deep learning frameworks to cloud infrastructure.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Progress Bars */}
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-[#58a6ff]">{skill.level}%</span>
              </div>
              <div className="h-2 bg-[#30363d] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right: Radar Chart */}
        <div className="h-[400px] w-full flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-6">Technical Skills Radar</h3>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="#30363d" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: "#8b949e", fontSize: 12 }} 
              />
              <Radar
                name="Skills"
                dataKey="A"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;