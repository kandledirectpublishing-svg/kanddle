"use client";

import { RequestForm } from "./RequestForm";

export function KandleHero() {
  return (
    <section className="relative w-full bg-surface py-16 lg:py-24 overflow-hidden border-b border-border">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and Value Propositions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-tight">
              Your Book Publishing Journey Starts with <span className="text-accent text-shadow-sm">Kandle Direct</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-secondary max-w-2xl leading-relaxed">
              Keep 100% of your rights and royalties. Affordable book publishing packages, professional formatting, and beautiful cover design tailored for you.
            </p>
            
            {/* Benefit bullets */}
            <ul className="space-y-4 font-sans text-secondary max-w-xl">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-sm mt-0.5">
                  ✓
                </span>
                <div>
                  <span className="font-bold text-primary">Retain 100% Ownership:</span> Keep all your rights and 100% of net royalties.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-sm mt-0.5">
                  ✓
                </span>
                <div>
                  <span className="font-bold text-primary">Full-Service Publishing:</span> Professional editing, formatting, and custom cover design.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-sm mt-0.5">
                  ✓
                </span>
                <div>
                  <span className="font-bold text-primary">Global Distribution:</span> Available on Amazon, Barnes & Noble, Apple Books, and more.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-sm mt-0.5">
                  ✓
                </span>
                <div>
                  <span className="font-bold text-primary">Personal Consultation:</span> Work one-on-one with a dedicated publishing expert.
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Hero Contact Form Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-border">
              <div className="mb-6 text-center">
                <h2 className="font-serif text-2xl font-bold text-primary mb-1.5">Get Your Free Guide</h2>
                <p className="font-sans text-sm text-secondary">Speak with a publishing expert today.</p>
              </div>
              
              <RequestForm source="Homepage Hero Form" />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-l from-accent/10 to-transparent"></div>
    </section>
  );
}
