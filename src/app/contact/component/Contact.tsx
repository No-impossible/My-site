import { Icon } from "@iconify/react";
import Link from "next/link";
import { CONTACT_DATA } from "@/constants";

export function Contact() {
  return (
    <section
      className="min-h-screen bg-black text-white flex items-center justify-center py-36 sm:py-20 px-4 sm:px-6"
      id="contact"
    >
      <div className="max-w-6xl w-full mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
          Let&apos;s{" "}
          <span className="text-transparent bg-clip-text primary-gradient">
            Connect
          </span>
        </h2>
        <p className="text-[#8b949e] max-w-3xl mx-auto mb-20 leading-relaxed">
          {CONTACT_DATA.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {CONTACT_DATA.info.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              {/* Circular Icon Background */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 mb-6"
                style={{ backgroundColor: item.color }}
              >
                <Icon icon={item.icon} className="text-white w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold mb-2">{item.label}</h3>
              <p className="text-sm text-[#8b949e] mb-4 px-4">{item.sub}</p>

              <Link
                href={item.href}
                className="text-sm font-medium transition-colors"
                style={{
                  color: item.color === "#9333ea" ? "#c084fc" : item.color,
                }}
              >
                {item.value === "Connect with me professionally"
                  ? "View Profile"
                  : item.value}
              </Link>

              {/* {item.label === "Location" && (
                <span className="text-xs font-bold mt-2 text-green-400 uppercase tracking-wider">
                  Open to Remote & Relocation
                </span>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
