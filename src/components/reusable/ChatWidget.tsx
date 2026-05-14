"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex flex-col items-end">
        {/* Chat Window - Now triggered by the isOpen state */}
        <div
          className={`absolute bottom-16 right-0 w-80 transition-all duration-300 origin-bottom-right 
          ${
            isOpen
              ? "scale-100 opacity-100 visible translate-y-0"
              : "scale-95 opacity-0 invisible translate-y-2"
          }`}
        >
          {/* Shadow and Background */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100">
            {/* Chat Content */}
            <div className="h-96 p-4 overflow-y-auto">
              <div className="text-gray-400 text-sm">
                Start a conversation...
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-gray-100 flex items-center gap-2">
              <input
                type="text"
                placeholder="Type here..."
                className="min-w-0 flex-1 h-10 px-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button className="h-10 px-4 bg-[#2563eb] text-white rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors whitespace-nowrap shrink-0">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Floating Action Button (FAB) */}
        <button
          onClick={toggleChat}
          className={`relative flex items-center justify-center w-14 h-14 bg-[#2563eb] rounded-full text-white shadow-lg transition-all active:scale-95 border-2 
          ${isOpen ? "border-[#22d3ee] rotate-90" : "border-transparent"}`}
        >
          {/* The Cyan Halo Ring */}
          <div
            className={`absolute inset-[-4px] rounded-full border-2 border-[#22d3ee] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          />

          {/* Toggle between Message and X icon */}
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6 fill-current" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
