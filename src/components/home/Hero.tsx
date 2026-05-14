"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import GridPattern from "../ui/grid-pattern";

const Hero = () => {
  return (
    <section className="bg-[#151C27] min-h-screen flex items-center px-5 py-10 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 w-full">
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          className="absolute inset-0 opacity-10"
        />
        {/* Left Content */}
        <div className="flex-1 text-left">
         <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            <span className="primary-gradient">Senior Full-Stack & Backend Engineer</span> <br />
            <span className="inline-block my-2">&</span> <br />
            <span className="text-[#58a6ff]">
              <Typewriter
                options={{
                  strings: [
                    "Healthcare",
                    "FinTech",
                    "AWS",
                    "AI/RAG",
                    "Secure Data Platforms"
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 100,
                }}
              />
            </span>
          </h1>

          <p className="text-[#8b949e] text-lg md:text-xl leading-relaxed max-w-[500px] mb-10">
           Senior Full-Stack & Backend Engineer | Healthcare, FinTech, AWS, AI/RAG & Secure Data Platforms
          </p>

          <div className="flex flex-row gap-4 justify-start">
            <button
              className="bg-[#1f6feb]  hover:bg-[#0053d0] text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 ease-in-out  shadow-[0_0_15px_rgba(250,250,250,0.35)] hover:shadow-[0_0_20px_rgba(20,202,240,0.35)]"
              onClick={() => console.log("Viewing projects...")}
            >
              View Projects
            </button>
            <button
              className="border border-[#30363d] text-[#58a6ff] hover:bg-[#1f6feb] hover:text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 ease-in-out "
              onClick={() => console.log("Downloading...")}
            >
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center w-full">
          <div className="relative w-full max-w-[700px] group">
            <Image
              src="/Images/hero/hero-ai-workspace.webp"
              alt="AI Workstation with multiple monitors"
              height={600}
              width={700}
              className="rounded-xl shadow-2xl shadow-black/50 w-full h-auto object-cover border border-white/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
 
