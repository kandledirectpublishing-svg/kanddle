"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FeaturedShowcase() {
  // Book covers to display
  const books = [
    {
      src: "/images/2.jpg",
      alt: "Featured Book Cover 1",
      rotation: -8,
      translateY: 12,
      translateX: 25,
      zIndex: 10,
    },
    {
      src: "/images/1.jpg",
      alt: "Featured Book Cover 2",
      rotation: 0,
      translateY: -8,
      translateX: 0,
      zIndex: 20,
    },
    {
      src: "/images/3.jpg",
      alt: "Featured Book Cover 3",
      rotation: 8,
      translateY: 12,
      translateX: -25,
      zIndex: 10,
    },
  ];

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden flex flex-col">
      {/* Top Section: Heading, Badge, and Quote with Grid Background */}
      <div 
        className="relative w-full bg-background pt-20 pb-36 md:pb-48 lg:pb-60 border-t border-border"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(31, 41, 55, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(31, 41, 55, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      >
        {/* Subtle decorative elements matching the screenshot */}
        <div className="absolute top-12 left-10 opacity-10 pointer-events-none select-none text-primary font-serif text-8xl">
          📖
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 pointer-events-none select-none text-primary font-serif text-8xl">
          📚
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Heading */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block text-accent bg-accent/10 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                End-To-End Publishing
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-tight">
                One Partner. <br />
                <span className="text-accent italic text-shadow-sm font-semibold">Absolute Ownership.</span>
              </h2>
            </div>

            {/* Right side: Quote Block */}
            <div className="lg:col-span-5 lg:pt-12">
              <div className="border-l-2 border-accent pl-5 max-w-md lg:ml-auto">
                <p className="font-sans text-secondary italic text-base md:text-lg leading-relaxed">
                  &ldquo;The bridge between writer and reader has been refined into a single seamless journey.&rdquo;
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section: Solid background strip that overlaps the book covers */}
      <div className="relative w-full bg-primary py-12 md:py-16 lg:py-20 text-white z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left side: The Overlapping Books container */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <div className="relative flex justify-center items-end h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px] w-full max-w-[440px] -mt-[140px] sm:-mt-[180px] md:-mt-[220px] lg:-mt-[260px] z-20">
                {books.map((book, index) => (
                  <motion.div
                    key={index}
                    className="absolute shadow-2xl rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
                    style={{
                      zIndex: book.zIndex,
                      width: "38%",
                      aspectRatio: "2/3",
                      left: `${31 + book.translateX}%`,
                    }}
                    initial={{ opacity: 0, y: 50, rotate: book.rotation * 1.5 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: book.translateY, 
                      rotate: book.rotation,
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 60, delay: index * 0.15 }}
                    whileHover={{ 
                      scale: 1.08, 
                      zIndex: 30, 
                      y: book.translateY - 20,
                      rotate: book.rotation * 0.5,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                    }}
                  >
                    <div className="relative w-full h-full border border-white/10 rounded-lg overflow-hidden bg-surface">
                      <Image
                        src={book.src}
                        alt={book.alt}
                        fill
                        sizes="(max-width: 640px) 150px, 200px"
                        className="object-cover"
                        priority={index === 1}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side: Description & Call-To-Action buttons */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <h3 className="font-sans text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                Our book designs stand out in their uniqueness, catering to a{" "}
                <span className="font-bold text-white block sm:inline">
                  diverse array of categories.
                </span>
              </h3>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="bg-accent hover:bg-accent-hover text-white font-sans font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-accent/20 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Get in touch with us now!
                </a>
                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="border border-white/30 hover:border-white/60 hover:bg-white/5 text-white font-sans font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Live Chat
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
