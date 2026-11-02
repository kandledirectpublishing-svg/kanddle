"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function DidYouKnow() {
  const quotes = [
    {
      text: "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
      author: "Toni Morrison",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    },
    {
      text: "You can make anything by writing. Every secret of a writer's soul, every experience of his life is written large in his works.",
      author: "Virginia Woolf",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
    },
    {
      text: "There is no greater agony than bearing an untold story inside you.",
      author: "Maya Angelou",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80",
    },
  ];

  const [activeQuote, setActiveQuote] = useState(0);

  const prevQuote = () => {
    setActiveQuote((curr) => (curr === 0 ? quotes.length - 1 : curr - 1));
  };

  const nextQuote = () => {
    setActiveQuote((curr) => (curr === quotes.length - 1 ? 0 : curr + 1));
  };

  const leftAvatars = [
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80", top: "10%", left: "4%" },
    { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80", top: "35%", left: "10%" },
    { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80", top: "60%", left: "3%" },
    { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80", top: "82%", left: "7%" },
  ];

  const rightAvatars = [
    { src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80", top: "12%", right: "5%" },
    { src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80", top: "36%", right: "9%" },
    { src: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80", top: "62%", right: "4%" },
    { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80", top: "84%", right: "8%" },
  ];

  const pressLogos = [
    { name: "siliconANGLE", text: "siliconANGLE" },
    { name: "FORTUNE", text: "FORTUNE" },
    { name: "PUBLISHERS WEEKLY", text: "PUBLISHERS WEEKLY" },
    { name: "Forbes", text: "Forbes" },
    { name: "WSJ", text: "THE WALL STREET JOURNAL" },
    { name: "STARTUP RISE", text: "STARTUP RISE" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background via-[#FAF8F3] to-background relative overflow-hidden border-b border-[#E7E3D8]">
      
      {/* Floating Avatars Container for Desktop */}
      <div className="hidden lg:block absolute inset-0 max-w-[1300px] mx-auto pointer-events-none">
        {leftAvatars.map((av, i) => (
          <div
            key={i}
            className="absolute w-14 h-14 xl:w-16 xl:h-16 rounded-2xl overflow-hidden shadow-md border-2 border-white transform hover:scale-105 transition-transform duration-300 pointer-events-auto"
            style={{ top: av.top, left: av.left }}
          >
            <img src={av.src} alt="Published author" className="w-full h-full object-cover" />
          </div>
        ))}
        {rightAvatars.map((av, i) => (
          <div
            key={i}
            className="absolute w-14 h-14 xl:w-16 xl:h-16 rounded-2xl overflow-hidden shadow-md border-2 border-white transform hover:scale-105 transition-transform duration-300 pointer-events-auto"
            style={{ top: av.top, right: av.right }}
          >
            <img src={av.src} alt="Published author" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Central White Editorial Card (matching screenshot 3) */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-[#E7E3D8] shadow-xl p-8 sm:p-12 text-center">
          
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent block mb-3">
            Did You Know
          </span>

          <h2 className="section-heading text-primary">
            9 Out of 10 Fully Written Books Never Get Published
          </h2>

          <div className="mt-6 space-y-4 font-sans text-xs sm:text-sm text-secondary leading-relaxed max-w-xl mx-auto">
            <p>
              This is because the publishing process is full of barriers: overcomplicated, 
              time-consuming, and out of reach for most writers. Frustrated and stuck, 
              many give up before they even get the chance.
            </p>
            <p>
              Founded by authors and publishing veterans, Kandle Direct understands 
              the many challenges authors face, and aims to <strong className="text-primary font-bold">democratize publishing</strong> for writers everywhere.
            </p>
          </div>

          {/* Inspirational Quote Box with Controls */}
          <div className="mt-8 pt-8 border-t border-[#E7E3D8]">
            <blockquote className="font-serif italic text-base sm:text-lg text-accent leading-relaxed min-h-[60px] flex items-center justify-center">
              &ldquo;{quotes[activeQuote].text}&rdquo;
            </blockquote>

            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                onClick={prevQuote}
                aria-label="Previous quote"
                className="w-8 h-8 rounded-full border border-[#E7E3D8] bg-[#FAF8F3] hover:bg-white flex items-center justify-center text-secondary hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-border">
                  <img
                    src={quotes[activeQuote].avatar}
                    alt={quotes[activeQuote].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-serif text-xs font-semibold text-primary">
                  {quotes[activeQuote].author}
                </span>
              </div>

              <button
                onClick={nextQuote}
                aria-label="Next quote"
                className="w-8 h-8 rounded-full border border-[#E7E3D8] bg-[#FAF8F3] hover:bg-white flex items-center justify-center text-secondary hover:text-primary transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Media / Press Logo Bar (matching screenshot 3 bottom) */}
        <div className="mt-16 pt-8 border-t border-[#E7E3D8]/80">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {pressLogos.map((item, idx) => (
              <span
                key={idx}
                className="font-serif font-bold text-xs sm:text-sm tracking-wider text-stone-600 uppercase"
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

