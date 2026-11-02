"use client";

import { Star, CheckCircle, BookOpen } from "lucide-react";

export function AuthorTestimonials() {
  const testimonials = [
    {
      quote: "Kandle Direct made my dream of becoming a published author a reality. Keeping 100% of my net royalties changed everything—I recouped my initial production investment within the first six weeks following our Amazon launch.",
      author: "Jane Doe",
      book: "The Whispering Echoes",
      genre: "Historical Fiction",
      rating: 5,
    },
    {
      quote: "I was genuinely impressed by the depth of the editorial review and the quality of the hardcover proof. They respected my authorial voice while elevating the manuscript to the standard expected by traditional bookstores.",
      author: "John Smith",
      book: "The Sovereign Leader",
      genre: "Business & Leadership",
      rating: 5,
    },
    {
      quote: "Having a dedicated consultant who answered my calls and coordinated our Amazon KDP and IngramSpark distribution saved me months of trial and error. Kandle is the premier partner for serious independent writers.",
      author: "Emily Chen",
      book: "Beneath Neon Skies",
      genre: "Speculative Fiction",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="gsap-section relative py-8 lg:py-6 lg:min-h-[calc(100vh-70px)] lg:max-h-[850px] flex flex-col justify-center bg-surface/50 border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent block mb-1">
            Author Case Studies
          </span>
          <h2 className="gsap-title font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight mb-1.5">
            Proven Results for Independent Authors
          </h2>
          <p className="font-sans text-secondary text-xs sm:text-sm leading-relaxed max-w-2xl">
            Read direct experiences from writers who published with Kandle Direct, 
            retained 100% of their royalties, and launched to international readers.
          </p>
        </div>
        
        {/* 3 Editorial Review Cards with Hover Ease */}
        <div className="gsap-cards grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {testimonials.map((test, idx) => (
            <div 
              key={idx} 
              className="hover-ease bg-white p-5 sm:p-6 rounded-xl border border-border shadow-editorial flex flex-col justify-between cursor-default"
            >
              <div>
                {/* 5-Star Rating & Verified Badge */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/80">
                  <div className="flex text-amber-600 gap-0.5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle className="w-3 h-3 text-emerald-700" />
                    Verified Author
                  </span>
                </div>

                {/* Quote Text */}
                <p className="font-serif text-secondary italic text-xs sm:text-sm leading-relaxed mb-4 line-clamp-4">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author Info Footer */}
              <div className="pt-3 border-t border-border/60">
                <div className="font-serif font-bold text-primary text-sm sm:text-base">
                  {test.author}
                </div>
                <div className="text-xs text-secondary flex items-center gap-1.5 mt-0.5 truncate">
                  <BookOpen className="w-3 h-3 text-accent flex-shrink-0" />
                  <span className="italic truncate">{test.book}</span>
                  <span className="text-border">•</span>
                  <span className="truncate">{test.genre}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Credibility Footnote */}
        <div className="mt-5 text-center text-xs text-secondary font-medium">
          Rated <strong className="text-primary font-bold">4.9 / 5.0</strong> across independent reviews • Over 1,200 titles distributed globally
        </div>

      </div>
    </section>
  );
}
