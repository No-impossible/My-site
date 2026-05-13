"use client";

import { useState } from "react";

const skills = [
  { label: "Languages", value: "Python, JavaScript, TypeScript" },
  { label: "Web Dev", value: "Next.js, React, Node.js" },
  { label: "AI & ML", value: "TensorFlow, PyTorch, OpenAI APIs" },
  { label: "Cloud", value: "AWS, Azure" },
  { label: "Automation", value: "n8n, Power Automate, Selenium" },
];

const journey = [
  {
    phase: "Origin",
    text: `My journey really began with learning basic programming concepts through YouTube and a few private courses. I started with iOS app development just to pick up a skill, but since I was new to the tech world, I didn't get any real exposure to projects or jobs at that stage. Eventually, I moved toward Python and enrolled in the PIAIC AI course, where I learned the basics of AI and ML and connected with many great minds. Exploring new frameworks and libraries every week sparked my curiosity, especially around browser automation, and that's where my understanding of Python truly became stronger. This is essentially where and how my coding journey began.`,
  },
  {
    phase: "Growth",
    text: `In the tech world and in life overall guidance can make a real difference. My path, however, was shaped largely by self-learning: exploring different sources, experimenting, building projects, and learning through repeated trial and error. That process came with more failures than successes, but it also built resilience and independence. Even today, I recognize that some people benefit from early mentorship, and that perspective has helped me value the journey I took. It taught me how to navigate uncertainty, adapt quickly, and keep moving forward — skills that matter just as much as technical knowledge.`,
  },
  {
    phase: "Now",
    text: `But the good part is that I never gave up. Throughout this journey, I met some amazing people who are excellent at what they do. They are Python developers, data engineers, and AI/ML engineers. They helped me understand different concepts and supported me whenever they could. I will always be grateful to them for their constant support and motivation, the team I met at UdhaarBook. So here I am today, still learning, still growing, and still trying to make my mark in this tech world.`,
  },
];

export default function ProfileCard() {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  return (
    <div
      className="min-h-screen bg-[#0d0f14] text-white font-sans px-4 py-12 flex justify-center"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Google Font Import via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        .phase-btn {
          transition: all 0.25s ease;
        }
        .phase-btn.active {
          background: rgba(99, 179, 237, 0.12);
          border-color: #63b3ed;
          color: #bee3f8;
        }
        .journey-text {
          animation: fadeSlide 0.35s ease forwards;
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .skill-chip:hover {
          background: rgba(99, 179, 237, 0.15);
          border-color: #63b3ed66;
        }
        .glow-ring {
          box-shadow: 0 0 0 3px rgba(99,179,237,0.25), 0 0 28px rgba(99,179,237,0.12);
        }
      `}</style>

      <div className="w-full max-w-3xl">
        {/* ── Header ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-12">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-28 h-28 rounded-2xl overflow-hidden glow-ring">
              {/* Placeholder avatar — swap src for a real image */}
              <div className="w-full h-full bg-gradient-to-br from-[#1a2a4a] to-[#0d1f35] flex items-center justify-center">
                <span className="text-5xl select-none">🧑‍💻</span>
              </div>
            </div>
            {/* Online dot */}
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#0d0f14]" />
          </div>

          {/* Name / bio */}
          <div className="text-center sm:text-left">
            <p className="text-xs tracking-[0.18em] uppercase text-[#63b3ed] mb-1 font-medium">
              Full-Stack · AI/ML · Automation
            </p>
            <h1
              className="text-4xl sm:text-5xl font-extrabold leading-tight text-white mb-1"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Syed Danial
              <br className="sm:hidden" /> Khurram
            </h1>
            <p className="text-sm text-slate-400 mb-4 flex items-center justify-center sm:justify-start gap-1">
              <svg
                className="w-3.5 h-3.5 text-slate-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Karachi, Pakistan
            </p>
            <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
              I love building things and solving problems. Exploring AI, cloud,
              and web development — from web scraping scripts to full-stack
              AI-powered applications. Automation and efficiency are my key
              interests.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-10" />

        {/* ── Skills & Interests ─────────────────────────────── */}
        <section className="mb-12">
          <h2
            className="text-xs tracking-[0.2em] uppercase text-[#63b3ed] mb-5 font-semibold"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Skills & Interests
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map(({ label, value }) => (
              <div
                key={label}
                className="skill-chip flex items-start gap-3 rounded-xl border border-slate-800 bg-[#111520] px-4 py-3 transition-colors duration-200 cursor-default"
              >
                <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#63b3ed] flex-shrink-0" />
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-slate-500 font-medium mb-0.5">
                    {label}
                  </p>
                  <p className="text-slate-200 text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── My Journey ─────────────────────────────────────── */}
        <section>
          <h2
            className="text-xs tracking-[0.2em] uppercase text-[#63b3ed] mb-5 font-semibold"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            My Journey
          </h2>

          {/* Phase tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {journey.map(({ phase }) => (
              <button
                key={phase}
                onClick={() =>
                  setActivePhase(activePhase === phase ? null : phase)
                }
                className={`phase-btn text-xs font-medium px-4 py-1.5 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 ${activePhase === phase ? "active" : ""}`}
              >
                {phase}
              </button>
            ))}
          </div>

          {/* Journey paragraphs */}
          <div className="space-y-5">
            {journey.map(({ phase, text }) => {
              const isFiltered = activePhase !== null;
              const isActive = activePhase === phase;
              return (
                <div
                  key={phase}
                  className={`transition-opacity duration-300 ${isFiltered && !isActive ? "opacity-20 pointer-events-none" : "opacity-100"}`}
                >
                  <div
                    className={`rounded-xl border px-5 py-4 ${isActive ? "border-[#63b3ed44] bg-[#0e1724]" : "border-slate-800 bg-[#111520]"}`}
                  >
                    <span className="inline-block text-[10px] tracking-widest uppercase font-semibold text-[#63b3ed] mb-2">
                      {phase}
                    </span>
                    <p
                      className={`text-slate-300 text-sm leading-7 ${isActive ? "journey-text" : ""}`}
                    >
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <p className="text-center text-slate-700 text-xs mt-14 tracking-widest uppercase">
          Still learning · Still growing · Still building
        </p>
      </div>
    </div>
  );
}
