"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles, Layers } from "lucide-react";

export function BlogResources() {
  const articles = [
    {
      title: "How to Self Publish a Book: The Ultimate Guide to Self-Publishing Success",
      desc: "In recent years, the publishing industry has undergone a revolutionary transformation, ushering in an era where authors have more control over their literary journeys than ever before. The advent of self-publishing has democratized...",
      slug: "/blog/self-publishing-services",
      illustration: (
        <div className="w-full h-full bg-[#E8F3EE] flex items-center justify-center p-6 relative overflow-hidden">
          {/* Decorative floating book shapes */}
          <div className="w-24 h-32 bg-[#0D9488]/80 rounded-r-lg shadow-md transform -rotate-6 border-l-4 border-emerald-800 flex items-center justify-center text-white">
            <BookOpen className="w-8 h-8 opacity-80" />
          </div>
          <div className="w-10 h-28 bg-[#C2410C]/80 rounded-full absolute right-12 bottom-4 opacity-70 transform rotate-12" />
        </div>
      ),
    },
    {
      title: "The Best-Selling Book Genres and Why They Succeed",
      desc: "Ever wonder what separates a blockbuster novel from a forgotten one gathering dust on a shelf? Spoiler alert: it's not always about the quality of writing. Often, the secret lies in choosing the...",
      slug: "/blog/concept-development",
      illustration: (
        <div className="w-full h-full bg-[#E7F0F8] flex items-center justify-center p-6 relative overflow-hidden">
          {/* Stack of books illustration */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-24 h-5 bg-[#C2410C] rounded-sm shadow-xs" />
            <div className="w-28 h-6 bg-[#0284C7] rounded-sm shadow-xs" />
            <div className="w-32 h-6 bg-[#16A34A] rounded-sm shadow-xs" />
            <div className="w-36 h-7 bg-[#475569] rounded-sm shadow-xs" />
          </div>
          <Sparkles className="w-6 h-6 text-amber-500 absolute top-6 right-8 animate-pulse" />
        </div>
      ),
    },
    {
      title: "How to Publish a Book with Kandle: A Step-by-Step Guide",
      desc: "Publishing a book used to require an agent, a publisher, and a willingness to wait years for an answer. Self-publishing changed that, but introduced authors to a different set of problems: dozens of...",
      slug: "/blog/kdp-guide",
      illustration: (
        <div className="w-full h-full bg-[#F3EFE6] flex items-center justify-center p-6 relative overflow-hidden">
          {/* Floating book pages */}
          <div className="relative">
            <div className="w-20 h-28 bg-[#0D9488] rounded-md shadow-md transform -rotate-12 absolute -left-8 -top-8 text-white flex items-center justify-center">
              <Layers className="w-6 h-6 opacity-75" />
            </div>
            <div className="w-20 h-28 bg-[#E11D48] rounded-md shadow-md transform rotate-12 relative z-10 text-white flex items-center justify-center">
              <BookOpen className="w-6 h-6 opacity-75" />
            </div>
            <div className="w-18 h-24 bg-[#EAB308] rounded-md shadow-sm transform -rotate-3 absolute -right-6 top-4" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background border-b border-[#E7E3D8]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (matching screenshot 6) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent block mb-2">
            Blog
          </span>
          <h2 className="section-heading text-primary">
            Explore Our Resources
          </h2>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E7E3D8] overflow-hidden shadow-xs hover:border-accent/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Graphic Banner */}
              <div className="h-48 w-full border-b border-[#E7E3D8] overflow-hidden">
                {item.illustration}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['DM_Sans',sans-serif] text-base sm:text-lg font-bold text-primary group-hover:text-accent transition-colors duration-200 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-['DM_Sans',sans-serif] text-xs sm:text-sm text-secondary leading-relaxed line-clamp-4">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E7E3D8]/60">
                  <Link
                    href={item.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent group-hover:text-accent-hover tracking-wider uppercase transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

