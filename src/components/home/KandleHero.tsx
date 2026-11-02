"use client";

import Link from "next/image";
import NextLink from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, RefreshCw, TrendingUp, Star } from "lucide-react";

export function KandleHero() {
  const leftCovers = [
    { src: "/images/1.jpg", alt: "Featured Book 1", z: 1, scale: "scale-90", translate: "-translate-x-12 sm:-translate-x-24 opacity-80" },
    { src: "/images/2.jpg", alt: "Featured Book 2", z: 2, scale: "scale-95", translate: "-translate-x-6 sm:-translate-x-12 opacity-90" },
    { src: "/images/3.jpg", alt: "Featured Book 3", z: 3, scale: "scale-100", translate: "translate-x-0 opacity-100" },
  ];

  const rightCovers = [
    { src: "/images/6.jpg", alt: "Featured Book 4", z: 3, scale: "scale-100", translate: "translate-x-0 opacity-100" },
    { src: "/images/1.jpg", alt: "Featured Book 5", z: 2, scale: "scale-95", translate: "translate-x-6 sm:translate-x-12 opacity-90" },
    { src: "/images/2.jpg", alt: "Featured Book 6", z: 1, scale: "scale-90", translate: "translate-x-12 sm:translate-x-24 opacity-80" },
  ];

  const reviewAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
  ];

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 bg-gradient-to-b from-[#F5F9F7] via-[#FAF9F5] to-background overflow-hidden border-b border-[#E7E3D8]">
      {/* Subtle Ambient Corner Gradients (matching screenshot 1) */}
      <div 
        className="absolute -top-20 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-teal-200/35 via-emerald-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -top-20 -right-20 w-[550px] h-[550px] bg-gradient-to-bl from-sky-200/35 via-teal-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-100/20 via-orange-100/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-['DM_Sans',sans-serif] text-4xl sm:text-5xl lg:text-[54px] text-primary font-bold tracking-tight leading-[1.15]">
            Your Words. Your Book. <br className="hidden sm:inline" />
            <span className="text-primary">Your Way.</span>
          </h1>

          <p className="mt-5 font-['DM_Sans',sans-serif] text-secondary text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to publish your book professionally, from proofreading, 
            design, printing, and distribution in one intuitive platform.
          </p>

          <div className="mt-8 flex justify-center">
            <NextLink
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-sans font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </NextLink>
          </div>
        </div>

        {/* Central Visual Composition: Laptop Mockup Flanked by Book Covers */}
        <div className="mt-14 sm:mt-18 relative flex justify-center items-center">
          
          {/* Left Book Covers Fan */}
          <div className="hidden md:flex absolute left-0 lg:left-4 items-center -translate-y-2 pointer-events-none">
            {leftCovers.map((book, i) => (
              <div
                key={i}
                className={`relative w-24 sm:w-28 lg:w-36 aspect-[2/3] rounded-md shadow-md border border-black/10 overflow-hidden transform -rotate-3 transition-transform duration-300 ${book.translate} ${book.scale}`}
                style={{ zIndex: book.z }}
              >
                <Image
                  src={book.src}
                  alt={book.alt}
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>
            ))}
          </div>

          {/* Central Laptop Device Mockup */}
          <div className="relative z-10 w-full max-w-[620px] lg:max-w-[700px] shadow-2xl rounded-2xl border-4 border-stone-800 bg-stone-900 p-2 sm:p-2.5">
            {/* Screen Top Bar */}
            <div className="bg-stone-900 flex items-center justify-between px-3 py-1.5 border-b border-stone-800 rounded-t-lg">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-[10px] font-mono text-stone-400">kandle.publishing/dashboard</div>
              <div className="w-4" />
            </div>

            {/* Laptop Screen Content (Publishing Dashboard) */}
            <div className="bg-[#FAF9F5] p-4 sm:p-6 rounded-b-lg border border-stone-200">
              {/* Dashboard Header */}
              <div className="flex justify-between items-center pb-3 border-b border-[#E7E3D8]">
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-primary">
                    Welcome, Author!
                  </h4>
                  <p className="font-sans text-[11px] text-secondary">
                    Your book project is 85% completed
                  </p>
                </div>
                <span className="text-[10px] font-mono font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  Status: In Distribution
                </span>
              </div>

              {/* Progress Milestones Bar */}
              <div className="mt-4 pt-1">
                <div className="flex items-center justify-between text-[10px] font-sans text-secondary font-medium">
                  <span className="text-accent font-bold">1. Manuscript</span>
                  <span className="text-accent font-bold">2. Proofreading</span>
                  <span className="text-accent font-bold">3. Cover Design</span>
                  <span className="text-accent font-bold">4. Formatting</span>
                  <span className="text-primary font-bold">5. Distribution</span>
                </div>
                <div className="w-full bg-stone-200 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-accent h-full w-[85%] rounded-full" />
                </div>
              </div>

              {/* Mini Stats & Analytics preview inside screen */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-left">
                <div className="bg-white p-2.5 rounded-lg border border-[#E7E3D8]">
                  <span className="block text-[9px] font-mono uppercase text-secondary">Retail Royalty</span>
                  <span className="text-sm font-bold text-primary">100% Kept</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-[#E7E3D8]">
                  <span className="block text-[9px] font-mono uppercase text-secondary">Platforms</span>
                  <span className="text-sm font-bold text-primary">Global Active</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-[#E7E3D8]">
                  <span className="block text-[9px] font-mono uppercase text-secondary">ISBN & Barcode</span>
                  <span className="text-sm font-bold text-primary">Assigned</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Book Covers Fan */}
          <div className="hidden md:flex absolute right-0 lg:right-4 items-center -translate-y-2 pointer-events-none">
            {rightCovers.map((book, i) => (
              <div
                key={i}
                className={`relative w-24 sm:w-28 lg:w-36 aspect-[2/3] rounded-md shadow-md border border-black/10 overflow-hidden transform rotate-3 transition-transform duration-300 ${book.translate} ${book.scale}`}
                style={{ zIndex: book.z }}
              >
                <Image
                  src={book.src}
                  alt={book.alt}
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>
            ))}
          </div>

        </div>

        {/* User Avatars & Review Rating below laptop */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="flex -space-x-2 overflow-hidden">
            {reviewAvatars.map((url, i) => (
              <img
                key={i}
                src={url}
                alt="Author review"
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm font-bold text-primary">Excellent</span>
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-500" />
              ))}
            </div>
            <span className="text-xs text-secondary font-sans">
              based on 1,500+ reviews
            </span>
          </div>
        </div>

        {/* 3-Column Stats Banner (matching screenshot 1 bottom) */}
        <div className="mt-14 pt-8 border-t border-[#E7E3D8] grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Stat 1 */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block leading-none">
                10,000+
              </span>
              <span className="font-sans text-xs text-secondary mt-1 block">
                Books published
              </span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center justify-center gap-3 md:border-x md:border-[#E7E3D8]">
            <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block leading-none">
                1,200+
              </span>
              <span className="font-sans text-xs text-secondary mt-1 block">
                Best sellers
              </span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block leading-none">
                100%
              </span>
              <span className="font-sans text-xs text-secondary mt-1 block">
                Royalties & rights retained
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
