"use client";

import { useState } from "react";
import Image from "next/image";

export function BookShowcase() {
  const books = [
    {
      src: "/images/2.jpg",
      title: "The Sovereign Leader",
      author: "Debra Bliss",
    },
    {
      src: "/images/3.jpg",
      title: "Beneath Neon Skies",
      author: "John Calu",
    },
    {
      src: "/images/1.jpg",
      title: "Love Unconditionally",
      author: "Candace Grant",
    },
    {
      src: "/images/6.jpg",
      title: "The Scout",
      author: "Larry Boucher",
      featured: true,
    },
    {
      src: "/images/2.jpg",
      title: "Black Mountain Raiders",
      author: "Charlie Quinn",
    },
    {
      src: "/images/1.jpg",
      title: "The Curious Journey",
      author: "Ilan Heitner",
    },
    {
      src: "/images/3.jpg",
      title: "Silent Horizon",
      author: "Leianne McNeill",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(3); // Default center book (The Scout)

  return (
    <section id="showcase" className="py-20 lg:py-28 bg-[#FAF8F3] border-b border-[#E7E3D8] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (matching screenshot 5) */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <h2 className="section-heading text-primary">
            Your Book Deserves a Global Audience
          </h2>
          <p className="mt-3 font-['DM_Sans',sans-serif] text-secondary text-sm sm:text-base">
            From award-winning debut fiction to global business bestsellers published with Kandle.
          </p>
        </div>

        {/* Horizontal Book Covers Spread (matching screenshot 5) */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-5 md:gap-7 py-4 overflow-x-auto no-scrollbar">
          {books.map((book, idx) => {
            const distance = Math.abs(idx - activeIndex);
            const isCenter = idx === activeIndex;

            // Calculating progressive scale, opacity, and blur based on distance from active center book
            let scaleClass = "scale-75 sm:scale-80 opacity-40 blur-[1px]";
            let zIndex = 10;
            let shadowClass = "shadow-sm";

            if (distance === 0) {
              scaleClass = "scale-105 sm:scale-110 opacity-100 blur-none";
              zIndex = 40;
              shadowClass = "shadow-2xl ring-1 ring-black/10";
            } else if (distance === 1) {
              scaleClass = "scale-90 sm:scale-95 opacity-85 blur-none";
              zIndex = 30;
              shadowClass = "shadow-md";
            } else if (distance === 2) {
              scaleClass = "scale-80 sm:scale-85 opacity-60 blur-[0.5px]";
              zIndex = 20;
              shadowClass = "shadow-sm";
            }

            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`flex-shrink-0 flex flex-col items-center cursor-pointer transition-all duration-300 transform ${scaleClass}`}
                style={{ zIndex }}
              >
                {/* Book Cover Container */}
                <div
                  className={`relative w-28 sm:w-36 md:w-44 lg:w-52 aspect-[2/3] rounded-lg overflow-hidden bg-white border border-[#E7E3D8] ${shadowClass} transition-shadow duration-300`}
                >
                  <Image
                    src={book.src}
                    alt={book.title}
                    fill
                    sizes="(max-width: 640px) 120px, (max-width: 1024px) 180px, 220px"
                    className="object-cover"
                    priority={isCenter}
                  />
                  {/* Subtle book spine shading */}
                  <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />
                </div>

                {/* Author Byline */}
                <span
                  className={`mt-4 font-sans text-xs sm:text-sm transition-colors duration-200 text-center ${
                    isCenter ? "font-serif font-bold text-primary" : "text-secondary/70"
                  }`}
                >
                  By {book.author}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

