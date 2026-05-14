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
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
            <span className="primary-gradient">AI Engineer</span> <br />
            <span className="inline-block my-2">&</span> <br />
            <span className="text-[#58a6ff]">
              <Typewriter
                options={{
                  strings: [
                    "Cloud AI Architect",
                    "Full-Stack Developer",
                    "Data Engineer",
                    "ML Engineer",
                    "Computer Vision Expert",
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
            Passionate about building intelligent systems that solve real-world
            problems. Specialized in computer vision, deep learning, and
            cloud-native AI solutions.
          </p>

          <div className="flex flex-row gap-4 justify-start">
            <button
              className="bg-[#1f6feb] hover:bg-[#238636] text-white px-6 py-3 rounded-md font-semibold transition-colors"
              onClick={() => console.log("Viewing projects...")}
            >
              View Projects
            </button>
            <button
              className="border border-[#30363d] text-[#58a6ff] hover:bg-[#30363d] px-6 py-3 rounded-md font-semibold transition-colors"
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
 
