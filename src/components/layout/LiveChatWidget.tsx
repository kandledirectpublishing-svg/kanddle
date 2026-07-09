"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Background Blur Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Chat Widget Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl w-[90vw] sm:w-[500px] md:w-[600px] overflow-hidden border border-gray-200 flex flex-col"
            style={{ height: "800px", maxHeight: "calc(100vh - 48px)" }}
          >
            {/* Chat Header */}
            <div className="bg-secondary text-white p-4 flex justify-between items-center shrink-0">
              <div>
                <h3 className="font-bold font-montserrat text-lg">Intelligent Assistant</h3>
                <p className="text-sm opacity-90 font-open-sans">Kandle Direct Publishing</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chatbot Iframe */}
            <div className="flex-1 w-full bg-gray-50 relative">
              <iframe
                src="https://kandle-bot.vercel.app/widget"
                className="absolute inset-0 w-full h-full border-none"
                title="Kandle Intelligent Assistant Chatbot"
                allow="clipboard-write"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button - Only show when chat is closed */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-secondary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            aria-label="Open live chat"
          >
            <MessageCircle size={28} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
