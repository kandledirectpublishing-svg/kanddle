"use client";

import { MessageSquare, Edit3, BookOpen, Rocket, Check, Clock } from "lucide-react";

export function Roadmap() {
  const steps = [
    {
      number: "01",
      timeline: "Days 1 – 5",
      title: "Manuscript Evaluation",
      desc: "Comprehensive review of scope, genre positioning, and publication goals with your dedicated advisor.",
      points: ["Genre market audit", "Target audience profiling", "Custom production schedule"],
      icon: MessageSquare,
    },
    {
      number: "02",
      timeline: "Weeks 2 – 4",
      title: "Editorial & Art Direction",
      desc: "Meticulous line editing and proofreading paired with custom, genre-specific cover art concepts.",
      points: ["Professional copyediting", "Custom bespoke cover art", "Interior font & margin styling"],
      icon: Edit3,
    },
    {
      number: "03",
      timeline: "Weeks 5 – 6",
      title: "Typesetting & Formatting",
      desc: "Flawless formatting for Kindle EPUB and high-definition print files for paperback and hardcover.",
      points: ["Multi-device testing", "Barcode & ISBN generation", "Digital & print proof approval"],
      icon: BookOpen,
    },
    {
      number: "04",
      timeline: "Weeks 7 – 8",
      title: "Global Distribution Launch",
      desc: "Live distribution across Amazon KDP, Apple Books, and Barnes & Noble with 100% royalty routing.",
      points: ["Direct author account setup", "100% royalty routing", "Global catalog ingestion"],
      icon: Rocket,
    },
  ];

  return (
    <section className="gsap-section relative py-8 lg:py-6 lg:min-h-[calc(100vh-70px)] lg:max-h-[850px] flex flex-col justify-center bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent block mb-1">
            The Publishing Process
          </span>
          <h2 className="gsap-title font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight mb-1.5">
            From Raw Manuscript to Global Bestseller
          </h2>
          <p className="font-sans text-secondary text-xs sm:text-sm leading-relaxed max-w-2xl">
            Four disciplined milestones designed to ensure editorial excellence, award-grade cover design, 
            and stress-free distribution across major global retailers.
          </p>
        </div>
        
        {/* Stepped Process Cards with Hover Ease */}
        <div className="gsap-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 relative">
          
          {/* Subtle connected track on desktop */}
          <div className="hidden lg:block absolute top-6 left-8 right-8 h-px bg-border -z-0" />

          {steps.map((step, idx) => {
            return (
              <div 
                key={idx} 
                className="hover-ease bg-surface/50 rounded-xl p-5 border border-border shadow-editorial flex flex-col justify-between cursor-default"
              >
                <div>
                  {/* Step Number & Timeline Header */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-serif font-bold text-xs shadow-xs">
                      {step.number}
                    </div>
                    
                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-secondary bg-white px-2 py-0.5 rounded-md border border-border">
                      <Clock className="w-3 h-3 text-accent" />
                      {step.timeline}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-primary mb-2">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="font-sans text-xs text-secondary leading-relaxed mb-4 line-clamp-2">
                    {step.desc}
                  </p>

                  {/* Key Milestones */}
                  <div className="space-y-1.5 pt-3 border-t border-border/80 mb-2">
                    {step.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-primary">
                        <Check className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                        <span className="truncate">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestone Footer */}
                <div className="mt-4 pt-2.5 border-t border-border/60 text-[10px] font-mono text-secondary flex justify-between items-center">
                  <span>Milestone {idx + 1} of 4</span>
                  <span className="text-accent font-semibold font-sans">100% Rights Kept</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
