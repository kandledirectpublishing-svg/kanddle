"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, BookMarked } from "lucide-react";
import Link from "next/link";

export function FeaturedShowcase() {
  const books = [
    {
      src: "/images/2.jpg",
      alt: "Featured Book Title 1",
      rotation: -6,
      translateY: 8,
      zIndex: 10,
    },
    {
      src: "/images/1.jpg",
      alt: "Featured Book Title 2",
      rotation: 0,
      translateY: -8,
      zIndex: 20,
    },
    {
      src: "/images/3.jpg",
      alt: "Featured Book Title 3",
      rotation: 6,
      translateY: 8,
      zIndex: 10,
    },
  ];

  const categories = [
    "Commercial Fiction",
    "Business & Leadership",
    "Memoir & Biography",
    "Sci-Fi & Fantasy",
    "Self-Help & Mindset",
    "Children's Illustrated",
  ];

  return (
    <section className="gsap-section relative w-full py-8 lg:py-6 lg:min-h-[calc(100vh-70px)] lg:max-h-[850px] flex items-center bg-background border-b border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Literary Narrative & Categorization */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent block">
              Bespoke Art Direction
            </span>
            
            <h2 className="gsap-title font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-[1.15]">
              Designed to Compete on Global Bookshelves
            </h2>

            <p className="font-sans text-secondary text-xs sm:text-sm leading-relaxed max-w-xl">
              Your book cover is your primary sales vehicle. Our creative directors craft 
              market-tested designs that capture attention at thumbnail size on Amazon 
              and feel substantial as physical hardcovers and paperbacks.
            </p>

            {/* Category Pills with Hover Ease */}
            <div className="pt-1">
              <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider block mb-2">
                Proven Expertise Across Genres:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat, i) => (
                  <span 
                    key={i} 
                    className="hover-ease text-xs px-2.5 py-1 rounded-md bg-surface text-secondary border border-border font-medium cursor-default"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Editorial Quote Card with Hover Ease */}
            <div className="hover-ease p-4 rounded-xl bg-surface border border-border flex items-start gap-3 mt-3 cursor-default">
              <BookMarked className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-sans text-xs text-secondary italic leading-relaxed">
                  &ldquo;The bridge between writer and reader is refined into a single seamless journey. Kandle transformed our vision into an Amazon bestseller.&rdquo;
                </p>
                <span className="text-[11px] font-sans font-bold text-primary block mt-1">
                  Verified Debut Fiction Author
                </span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/contact"
                className="bg-accent text-white font-sans font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg hover:bg-accent-hover transition-colors shadow-xs flex items-center gap-1.5"
              >
                <span>Publish Your Book</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="tel:+447922656521"
                className="border border-border bg-white hover:bg-surface text-primary font-sans font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Call +44 7922 656521</span>
              </a>
            </div>

          </div>

          {/* Right Column: Natural 3D Book Presentation */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative flex justify-center items-center h-[280px] sm:h-[340px] w-full max-w-[420px]">
              {books.map((book, index) => (
                <motion.div
                  key={index}
                  className="absolute rounded-lg overflow-hidden cursor-pointer"
                  style={{
                    zIndex: book.zIndex,
                    width: "42%",
                    aspectRatio: "2/3",
                    left: index === 0 ? "10%" : index === 1 ? "29%" : "48%",
                    boxShadow: "0 18px 30px -8px rgba(28, 25, 23, 0.25), 0 0 0 1px rgba(0,0,0,0.06)",
                  }}
                  initial={{ opacity: 0, y: 25, rotate: book.rotation * 1.5 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: book.translateY, 
                    rotate: book.rotation,
                  }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ type: "spring", stiffness: 70, damping: 15, delay: index * 0.12 }}
                  whileHover={{ 
                    scale: 1.06, 
                    zIndex: 35, 
                    y: book.translateY - 12,
                    rotate: book.rotation * 0.4,
                    boxShadow: "0 25px 45px -10px rgba(28, 25, 23, 0.35)",
                  }}
                >
                  <div className="relative w-full h-full bg-surface">
                    <Image
                      src={book.src}
                      alt={book.alt}
                      fill
                      sizes="(max-width: 640px) 160px, 220px"
                      className="object-cover"
                      priority={index === 1}
                    />
                    <div className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/35 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-white/10 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
