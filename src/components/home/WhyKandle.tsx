"use client";

import Image from "next/image";
import { Award, UserCheck, Palette, Globe2 } from "lucide-react";

export function WhyKandle() {
  const features = [
    {
      icon: Award,
      title: "Premium-Quality Publishing",
      desc: "Publish with the highest standards. Your book will be expertly designed and produced, ready to inspire readers.",
      iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    },
    {
      icon: UserCheck,
      title: "Personal Guidance",
      desc: "Your dedicated publishing consultant is with you every step of the way, making the process seamless, efficient, and enjoyable.",
      iconBg: "bg-cyan-50 text-cyan-600 border border-cyan-200",
    },
    {
      icon: Palette,
      title: "Full Creative Control",
      desc: "Enjoy the freedom to publish your way. You retain 100% of your net royalties, complete copyright ownership, and creative approval.",
      iconBg: "bg-amber-50 text-accent border border-amber-200",
    },
    {
      icon: Globe2,
      title: "Global Distribution and Marketing",
      desc: "In any format — eBook, audiobook, or print-on-demand — your book will be distributed and marketed worldwide, with just a few clicks.",
      iconBg: "bg-teal-50 text-teal-600 border border-teal-200",
    },
  ];

  return (
    <section id="why-kandle" className="py-20 lg:py-28 bg-background border-b border-[#E7E3D8]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (matching screenshot 2) */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent block mb-2">
            Why Kandle Direct
          </span>
          <h2 className="section-heading text-primary">
            Publishing Your Book Has Never Been Easier
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Author with printed book & laptop */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-[#E7E3D8] bg-[#F5F2EB]">
              <Image
                src="/images/blog/publishing-consultant.jpg"
                alt="Happy published author holding her book"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="font-serif text-sm font-semibold block">
                  Author Spotlight
                </span>
                <span className="text-xs text-stone-200">
                  Published with 100% royalties kept
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Clean Feature Cards */}
          <div className="lg:col-span-7 space-y-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E7E3D8] shadow-xs hover:border-accent/40 hover:shadow-sm transition-all duration-200 flex items-start gap-4 sm:gap-5"
                >
                  {/* Circular Feature Icon Badge */}
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${feature.iconBg}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Card Content */}
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-primary mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-secondary leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

