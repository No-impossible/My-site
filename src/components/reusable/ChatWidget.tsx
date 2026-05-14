"use client";

import { MessageCircle } from "lucide-react";

const ChatWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="group relative flex flex-col items-end">
        {/* Chat Window */}
        <div className="absolute bottom-16 right-0 scale-95 opacity-0 invisible translate-y-2 transition-all duration-300 origin-bottom-right group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Chat Content */}
            <div className="h-96 p-4">
              <div className="text-gray-400 text-sm">
                Start a conversation...
              </div>
            </div>

            {/* Footer */}
            <div className="w-full p-4 border-t border-gray-100 flex items-center gap-2">
              <input
                type="text"
                placeholder="Type here..."
                className="flex-1 h-11 px-4 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />

              <button className="h-11 px-5 bg-[#2563eb] text-white rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors whitespace-nowrap shrink-0">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Floating Button */}
        <button className="relative flex items-center justify-center w-14 h-14 bg-[#2563eb] rounded-full text-white shadow-lg transition-transform active:scale-95 border-2 border-transparent hover:border-[#22d3ee]">
          <div className="absolute inset-[-4px] rounded-full border-2 border-[#22d3ee] opacity-0 hover:opacity-100 transition-opacity" />

          <MessageCircle className="w-6 h-6 fill-current" />
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
