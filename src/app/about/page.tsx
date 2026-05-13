import Image from "next/image";
import { PROFILE_DATA } from "@/constants";

export default function ProfilePage() {
  const { name, firstName, location, bio, skills, journey, avatarUrl } =
    PROFILE_DATA;

  return (
    <div className="min-h-screen bg-[#121212] text-gray-400 p-8 md:p-20 font-sans selection:bg-blue-500/30">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <aside className="md:col-span-1 flex flex-col items-center md:items-start">
          <div className="relative w-44 h-44 rounded-full overflow-hidden border-[6px] border-[#1e1e1e] shadow-2xl mb-6">
            <Image
              src={avatarUrl}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {name}
            </h2>
            <p className="text-gray-600 mt-1">{location}</p>
          </div>
        </aside>

        <main className="md:col-span-3 space-y-12">
          <section>
            <h1 className="text-4xl font-bold text-white mb-8">{firstName}</h1>
            <div className="space-y-6 text-lg leading-relaxed">
              {bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-6">
              Skills & Interests
            </h3>
            <ul className="list-disc list-outside ml-5 space-y-3">
              {skills.map((skill, i) => (
                <li key={i}>
                  <span className="text-gray-200 font-medium">
                    {skill.category}:
                  </span>{" "}
                  {skill.items}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <div className="space-y-6 leading-relaxed">
              {journey.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
