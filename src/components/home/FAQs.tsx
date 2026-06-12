"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqsList = [
  {
    question: "Do I keep 100% of my rights and royalties?",
    answer: "Yes, absolutely. With Kandle Direct, you retain full ownership, copyright, and control of your book. You keep 100% of the net royalties generated from all book sales."
  },
  {
    question: "How much does it cost to publish a book with Kandle Direct?",
    answer: "We offer clear, customized pricing packages tailored to your specific needs. Whether you need comprehensive editing, formatting, cover design, or just global distribution setup, we will provide a clear, transparent quote before starting. No hidden fees."
  },
  {
    question: "What platforms will my book be distributed to?",
    answer: "We publish and distribute your book globally to all major retailers, including Amazon Kindle, Barnes & Noble, Apple Books, Google Play, Kobo, and other brick-and-mortar library databases through our global distribution partners."
  },
  {
    question: "How long does the book publishing process take?",
    answer: "On average, the publishing timeline is between 4 to 8 weeks. This depends heavily on the level of editing required, cover design revisions, and how quickly you review and approve files. Your dedicated consultant will keep you updated at every step."
  },
  {
    question: "Can you publish both print and eBook formats?",
    answer: "Yes. We format and optimize books for both digital formats (EPUB/Kindle) and high-quality print-on-demand formats (paperback and hardcover), ensuring your book looks professional on any device or bookshelf."
  },
  {
    question: "Will I have support throughout the publishing journey?",
    answer: "Yes, every author gets paired with a dedicated publishing consultant who coordinates everything, answers your questions, and acts as your single point of contact from manuscript upload to live book launch."
  }
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-lg text-secondary">
            Everything you need to know about publishing your book with Kandle Direct.
          </p>
        </div>

        <div className="space-y-4">
          {faqsList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none focus:ring-2 focus:ring-accent/40 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-bold text-primary transition-colors hover:text-accent">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`text-secondary flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : ""}`}
                    size={20}
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-border/50">
                        <p className="font-sans text-secondary leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
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
