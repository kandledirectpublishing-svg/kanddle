"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqsList = [
  {
    question: "Can I try Kandle for free?",
    answer:
      "Yes. You can consult with our publishing advisors, receive a comprehensive manuscript review, and explore our custom publishing roadmap completely free of charge with zero obligation.",
  },
  {
    question: "How long will it take to publish my book with Kandle?",
    answer:
      "Most manuscripts are fully edited, custom-designed, formatted, and live across global retail channels within 4 to 8 weeks, depending on the scope of editorial review and author feedback cycles.",
  },
  {
    question: "How much does publishing with Kandle cost?",
    answer:
      "We offer transparent, fixed-price publishing tiers based strictly on your manuscript length and required services. You will receive an all-inclusive quote upfront with no hidden recurring platform fees.",
  },
  {
    question: "What payment methods can I use?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and direct wire transfers via secure 256-bit encrypted checkout.",
  },
  {
    question: "What if I change my mind?",
    answer:
      "We provide a 100% satisfaction guarantee. If you are not satisfied with your initial manuscript review or sample proofs, you are backed by our transparent production agreement.",
  },
  {
    question: "Does Kandle support any languages other than English?",
    answer:
      "Yes. While English is our primary publishing language, we have dedicated editorial, typesetting, and global distribution capabilities for Spanish, French, German, and multilingual editions.",
  },
  {
    question: "How do royalties work?",
    answer:
      "You retain 100% of your net royalties. Sales earnings from Amazon KDP, Barnes & Noble, Apple Books, and IngramSpark are deposited directly to your bank account with zero middleman royalty deductions.",
  },
  {
    question: "Before uploading my manuscript to Kandle's platform, what format should it be in?",
    answer:
      "We accept Microsoft Word (.docx, .doc), Rich Text Format (.rtf), and PDF files. Our editorial team handles all clean-up, styling, and structural conversion into professional print and eBook files.",
  },
  {
    question: "What other services do you offer?",
    answer:
      "In addition to core editing, cover art, and distribution, we offer professional audiobook production, author website creation, global copyright and ISBN registration, and promotional launch campaigns.",
  },
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-background border-b border-[#E7E3D8]">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (matching screenshot 7) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="section-heading text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 font-['DM_Sans',sans-serif] text-secondary text-sm sm:text-base">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* Clean Accordion List with '+' Icon */}
        <div className="border-t border-[#E7E3D8] divide-y divide-[#E7E3D8]">
          {faqsList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4 sm:py-5">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-['DM_Sans',sans-serif] text-sm sm:text-base font-semibold transition-colors duration-200 ${
                    isOpen ? "text-accent" : "text-primary group-hover:text-accent"
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Plus Icon matching Screenshot 7 */}
                  <span className="flex-shrink-0 text-cyan-600 sm:text-teal-600 group-hover:text-accent transition-transform duration-200">
                    <Plus
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${
                        isOpen ? "rotate-45 text-accent" : ""
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 font-['DM_Sans',sans-serif] text-xs sm:text-sm text-secondary leading-relaxed max-w-3xl pr-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
