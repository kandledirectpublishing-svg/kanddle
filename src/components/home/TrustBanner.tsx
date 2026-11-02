"use client";

import { ShieldCheck, BookOpen, Clock, Star } from "lucide-react";

export function TrustBanner() {
  const platforms = [
    { name: "Amazon Kindle", badge: "KDP Certified", icon: "📚" },
    { name: "Barnes & Noble", badge: "NOOK Press", icon: "📖" },
    { name: "Apple Books", badge: "Direct Feed", icon: "🍏" },
    { name: "Google Play", badge: "Global Partner", icon: "📱" },
    { name: "IngramSpark", badge: "Global Distribution", icon: "🖨️" },
    { name: "Kobo Writing Life", badge: "Worldwide", icon: "🌐" },
    { name: "Audible", badge: "Audiobooks", icon: "🎧" },
    { name: "Waterstones", badge: "UK Retailers", icon: "🏛️" },
  ];

  const stats = [
    { value: "100%", label: "Royalties Kept", sub: "Keep all earnings & copyright", icon: ShieldCheck },
    { value: "1,200+", label: "Titles Published", sub: "Fiction, Non-fiction, Memoirs", icon: BookOpen },
    { value: "4 – 8 Weeks", label: "Average Production", sub: "Fast & thorough release", icon: Clock },
    { value: "4.9 / 5.0", label: "Author Rating", sub: "From 500+ verified authors", icon: Star },
  ];

  return (
    <section className="gsap-section relative w-full bg-background py-6 sm:py-8 border-b border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Retail Distribution Header */}
        <div className="text-center mb-3">
          <p className="font-sans text-[11px] uppercase tracking-widest text-secondary font-semibold">
            Global Retail Distribution Network
          </p>
        </div>

        {/* Infinite Auto-Scrolling Retailer Slider / Marquee */}
        <div className="relative w-full overflow-hidden py-1.5 my-1">
          {/* Left & Right Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Sliding track with hover ease */}
          <div className="animate-marquee flex items-center gap-3.5">
            {[...platforms, ...platforms].map((p, i) => (
              <div
                key={i}
                className="hover-ease group flex-shrink-0 flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-surface border border-border cursor-pointer select-none"
              >
                <span className="text-base">{p.icon}</span>
                <span className="font-serif font-bold text-xs sm:text-sm text-primary group-hover:text-accent transition-colors whitespace-nowrap">
                  {p.name}
                </span>
                <span className="text-[10px] text-secondary bg-white px-2 py-0.5 rounded border border-border/80 font-medium whitespace-nowrap">
                  {p.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Clean Editorial Metrics with Hover Ease */}
        <div className="gsap-cards grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-5 mt-3 border-t border-border">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="hover-ease p-3.5 rounded-xl bg-surface/50 border border-border/70 text-center cursor-default"
              >
                <div className="w-7 h-7 mx-auto mb-1.5 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-primary mb-0.5">
                  {s.value}
                </div>
                <div className="font-sans text-xs font-semibold text-primary">
                  {s.label}
                </div>
                <div className="font-sans text-[11px] text-secondary">
                  {s.sub}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
