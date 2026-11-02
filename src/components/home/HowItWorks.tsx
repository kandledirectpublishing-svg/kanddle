"use client";

import { useState } from "react";
import Link from "next/link";
import { UploadCloud, Award, ArrowRight, CheckCircle2, FileText, Sparkles, BookOpen, Globe2 } from "lucide-react";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      tabNumber: "Step 1",
      tabTitle: "Upload Your Manuscript",
      heading: "Upload Your Manuscript With A Few Clicks",
      bullets: [
        {
          icon: UploadCloud,
          text: "Easily upload your manuscript using Kandle's simple intake. Just fill in a few details like your title, genre, and word count.",
        },
        {
          icon: Award,
          text: "Instantly secure your 100% copyright ownership and receive a transparent production agreement for your book.",
        },
      ],
      mockupType: "upload",
    },
    {
      tabNumber: "Step 2",
      tabTitle: "Edit & Perfect Your Book",
      heading: "Comprehensive Editorial & Proofing",
      bullets: [
        {
          icon: CheckCircle2,
          text: "Meticulous line editing and proofreading by seasoned publishing editors, preserving your unique authorial voice.",
        },
        {
          icon: Sparkles,
          text: "Detailed manuscript evaluation report with market-readiness suggestions and audience positioning.",
        },
      ],
      mockupType: "editor",
    },
    {
      tabNumber: "Step 3",
      tabTitle: "Design Your Cover & Layout",
      heading: "Bespoke Cover Art & Interior Typesetting",
      bullets: [
        {
          icon: BookOpen,
          text: "Custom genre-specific cover art designed by senior creative directors, optimized for physical print and digital stores.",
        },
        {
          icon: Award,
          text: "Industry-standard interior typesetting with elegant typography, chapter headers, and drop caps.",
        },
      ],
      mockupType: "design",
    },
    {
      tabNumber: "Step 4",
      tabTitle: "Publish & Distribute",
      heading: "Global Distribution Across All Retailers",
      bullets: [
        {
          icon: Globe2,
          text: "Direct ingestion into Amazon KDP, Barnes & Noble, Apple Books, and worldwide brick-and-mortar catalogs via IngramSpark.",
        },
        {
          icon: Award,
          text: "Direct deposit setup for 100% net sales royalties directly to your personal bank account.",
        },
      ],
      mockupType: "distribution",
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-background border-b border-[#E7E3D8]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (matching screenshot 4) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent block mb-2">
            How It Works
          </span>
          <h2 className="section-heading text-primary">
            Publish with Kandle in Just Four Simple Steps
          </h2>
          <p className="mt-4 font-['DM_Sans',sans-serif] text-secondary text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Kandle proofreads, designs covers, formats, publishes, and starts distributing your book in just a couple of weeks.
          </p>
        </div>

        {/* Interactive 4-Step Card Container */}
        <div className="bg-white rounded-3xl border border-[#E7E3D8] shadow-sm p-6 sm:p-10 lg:p-12">
          
          {/* Top Step Navigation Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 pb-8 border-b border-[#E7E3D8]">
            {steps.map((s, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-3 sm:p-4 rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#FAF8F3] border-b-2 border-accent"
                      : "hover:bg-[#FAF8F3]/60"
                  }`}
                >
                  <span
                    className={`block font-mono text-xs font-bold mb-1 ${
                      isActive ? "text-accent" : "text-secondary"
                    }`}
                  >
                    {s.tabNumber}
                  </span>
                  <span
                    className={`block font-serif text-xs sm:text-sm md:text-base font-semibold ${
                      isActive ? "text-primary" : "text-secondary hover:text-primary"
                    }`}
                  >
                    {s.tabTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Body */}
          <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary leading-tight">
                {current.heading}
              </h3>

              <div className="space-y-4 pt-1">
                {current.bullets.map((bullet, i) => {
                  const Icon = bullet.icon;
                  return (
                    <div key={i} className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-secondary leading-relaxed">
                        {bullet.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right UI Dashboard Mockup (matching screenshot 4 mockup) */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF9F5] rounded-2xl border border-[#E7E3D8] shadow-sm p-4 sm:p-6 overflow-hidden">
                
                {/* Mockup Top Window Controls */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E7E3D8] text-xs text-secondary font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                  </div>
                  <span className="text-[10px] text-stone-500">kandle.dashboard/publish</span>
                  <span className="text-[10px] text-accent font-bold">Step {activeStep + 1} of 4</span>
                </div>

                {/* Dashboard Process Timeline */}
                <div className="mt-4 flex items-center justify-between px-2 text-[10px] sm:text-xs font-mono text-secondary">
                  <span className={activeStep >= 0 ? "text-accent font-bold" : "text-stone-400"}>1. Upload</span>
                  <span className="text-stone-300">→</span>
                  <span className={activeStep >= 1 ? "text-accent font-bold" : "text-stone-400"}>2. Editorial</span>
                  <span className="text-stone-300">→</span>
                  <span className={activeStep >= 2 ? "text-accent font-bold" : "text-stone-400"}>3. Design</span>
                  <span className="text-stone-300">→</span>
                  <span className={activeStep >= 3 ? "text-accent font-bold" : "text-stone-400"}>4. Distribute</span>
                </div>

                {/* Mockup Dynamic Content Area */}
                {activeStep === 0 && (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    {/* Dotted Upload Drop Area with paper stack icon */}
                    <div className="border-2 border-dashed border-[#E7E3D8] hover:border-accent/60 rounded-xl p-6 sm:p-8 text-center bg-white flex flex-col items-center justify-center transition-colors">
                      <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-3">
                        <UploadCloud className="w-6 h-6" />
                      </div>
                      <span className="font-serif text-sm font-bold text-primary block">
                        Upload your manuscript
                      </span>
                      <span className="font-sans text-[11px] text-secondary mt-1 block">
                        DOCX, PDF, RTF up to 100MB
                      </span>
                    </div>

                    {/* Meta Fields Form Mockup */}
                    <div className="bg-white p-4 rounded-xl border border-[#E7E3D8] space-y-2.5 text-left">
                      <div>
                        <span className="text-[10px] font-mono text-secondary block">Book Title</span>
                        <div className="text-xs font-serif font-bold text-primary bg-[#FAF9F5] p-2 rounded border border-border">
                          The Whispering Echoes
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-secondary block">Genre / Category</span>
                        <div className="text-xs text-primary bg-[#FAF9F5] p-2 rounded border border-border">
                          Historical Fiction
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-secondary block">Author Name</span>
                        <div className="text-xs text-primary bg-[#FAF9F5] p-2 rounded border border-border">
                          Jane Doe
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="mt-6 bg-white p-5 rounded-xl border border-[#E7E3D8] space-y-3 text-left">
                    <div className="flex items-center justify-between border-b border-border pb-2">
                      <span className="font-serif text-sm font-bold text-primary">Line Editing Proof #1</span>
                      <span className="text-[10px] font-mono bg-amber-50 text-accent px-2 py-0.5 rounded">In Review</span>
                    </div>
                    <div className="space-y-2 font-serif text-xs text-secondary italic">
                      <p className="border-l-2 border-emerald-500 pl-3">
                        &ldquo;The dawn broke over the harbor with a quiet intensity...&rdquo; (Syntax & cadence refined)
                      </p>
                      <p className="border-l-2 border-accent pl-3">
                        &ldquo;Chapter 3 timeline adjusted for historical narrative coherence.&rdquo;
                      </p>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="mt-6 bg-white p-5 rounded-xl border border-[#E7E3D8] grid grid-cols-2 gap-4 items-center">
                    <div className="aspect-[2/3] bg-stone-100 rounded-lg overflow-hidden relative border border-border">
                      <img src="/images/1.jpg" alt="Cover Proof" className="object-cover w-full h-full" />
                    </div>
                    <div className="space-y-2 text-left">
                      <span className="font-mono text-[10px] text-accent font-bold uppercase block">Bespoke Concept #3</span>
                      <h4 className="font-serif text-sm font-bold text-primary">Hardcover & Digital Proof</h4>
                      <p className="text-[11px] font-sans text-secondary leading-relaxed">
                        High-definition 300DPI print wrap with gold foil debossing specifications ready.
                      </p>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="mt-6 bg-white p-5 rounded-xl border border-[#E7E3D8] space-y-3 text-left">
                    <div className="flex items-center justify-between border-b border-border pb-2">
                      <span className="font-serif text-sm font-bold text-primary">Global Ingestion Matrix</span>
                      <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded">Active Worldwide</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2 bg-[#FAF9F5] rounded border border-border">Amazon KDP: Live</div>
                      <div className="p-2 bg-[#FAF9F5] rounded border border-border">Barnes & Noble: Live</div>
                      <div className="p-2 bg-[#FAF9F5] rounded border border-border">Apple Books: Live</div>
                      <div className="p-2 bg-[#FAF9F5] rounded border border-border">IngramSpark: Distributed</div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

