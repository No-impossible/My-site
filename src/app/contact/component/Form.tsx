import React from "react";

const FormSection = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8 md:p-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 container">
        {/* Left Column: Send Me a Message */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold tracking-tight">
            Send Me a Message
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-[#1e293b] border border-slate-700 rounded-sm px-4 py-3 text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full bg-[#1e293b] border border-slate-700 rounded-sm px-4 py-3 text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">
                Subject
              </label>
              <div className="relative">
                <select className="w-full bg-[#1e293b] border border-slate-700 rounded-sm px-4 py-3 text-slate-400 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
                  <option>Select a subject</option>
                  <option>Project Inquiry</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">
                Project Budget (Optional)
              </label>
              <div className="relative">
                <select className="w-full bg-[#1e293b] border border-slate-700 rounded-sm px-4 py-3 text-slate-400 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
                  <option>Select budget range</option>
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000+</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-[#1e293b] border border-slate-700 rounded-sm px-4 py-3 text-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2563eb] hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Right Column: Subscribe to Newsletter */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold tracking-tight">
            Subscribe to my Newsletter
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow bg-[#1e293b] border border-slate-700 rounded-sm px-4 py-3 text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button className="bg-[#2563eb] hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormSection;
