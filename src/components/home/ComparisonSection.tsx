"use client";

import { Check, X, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ComparisonSection() {
  const features = [
    {
      label: "Net Royalty Retention",
      kandle: "100% of Net Royalties Kept",
      traditional: "10% – 15% (Publisher takes rest)",
      diy: "100% (Minus costly mistakes)",
      highlight: true,
    },
    {
      label: "Publishing Rights & Copyright",
      kandle: "100% Retained by Author",
      traditional: "Surrendered to Publishing House",
      diy: "Retained by Author",
      highlight: true,
    },
    {
      label: "Production Timeline",
      kandle: "4 – 8 Weeks to Global Release",
      traditional: "18 – 24 Months (Slow queues)",
      diy: "Unpredictable / Months of trial",
      highlight: false,
    },
    {
      label: "Dedicated Senior Publishing Advisor",
      kandle: "1-on-1 Assigned Consultant",
      traditional: "Impersonal / Rotating junior staff",
      diy: "None (You are completely alone)",
      highlight: false,
    },
    {
      label: "Creative Control (Title & Cover)",
      kandle: "Author Holds 100% Final Approval",
      traditional: "Publisher retains veto power",
      diy: "Full control (often amateur finish)",
      highlight: false,
    },
    {
      label: "Global Multi-Platform Reach",
      kandle: "Amazon, Apple, B&N, IngramSpark",
      traditional: "Restricted distribution deals",
      diy: "Complex multi-portal setup",
      highlight: false,
    },
  ];

  return (
    <section className="gsap-section relative py-8 lg:py-6 lg:min-h-[calc(100vh-70px)] lg:max-h-[850px] flex flex-col justify-center bg-surface/50 border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-4 text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent block mb-1">
            The Publishing Decision
          </span>
          <h2 className="gsap-title font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight mb-1">
            How Kandle Direct Compares
          </h2>
          <p className="font-sans text-secondary text-xs sm:text-sm leading-relaxed max-w-2xl">
            Discover why independent authors, entrepreneurs, and debut novelists choose Kandle Direct 
            over traditional publishing bureaucracy and stressful DIY self-publishing.
          </p>
        </div>

        {/* Comparison Matrix Table with Hover Ease */}
        <div className="bg-white rounded-xl border border-border shadow-editorial overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-surface border-b border-border p-3 sm:p-3.5 text-xs font-serif font-bold text-primary items-center">
            <div className="col-span-5 md:col-span-4 font-sans text-[11px] uppercase tracking-wider text-secondary">
              Publishing Factor
            </div>
            <div className="col-span-7 md:col-span-4 text-center bg-accent/10 py-1.5 px-3 rounded-lg text-accent border border-accent/20 flex items-center justify-center gap-1.5 font-sans font-bold text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>Kandle Direct</span>
            </div>
            <div className="hidden md:block col-span-2 text-center text-secondary font-sans font-medium text-xs">
              Traditional House
            </div>
            <div className="hidden md:block col-span-2 text-center text-secondary font-sans font-medium text-xs">
              DIY Self-Publishing
            </div>
          </div>

          {/* Table Rows with Hover Ease */}
          <div className="divide-y divide-border">
            {features.map((f, i) => (
              <div 
                key={i}
                className={`grid grid-cols-12 p-3 sm:p-3.5 items-center hover-ease ${
                  f.highlight ? "bg-accent/[0.02]" : ""
                }`}
              >
                {/* Feature Label */}
                <div className="col-span-12 sm:col-span-5 md:col-span-4 mb-1 sm:mb-0">
                  <span className="font-serif font-bold text-xs sm:text-sm text-primary">
                    {f.label}
                  </span>
                </div>

                {/* Kandle Direct Column (Highlighted) */}
                <div className="col-span-12 sm:col-span-7 md:col-span-4 bg-accent/5 sm:bg-transparent p-1.5 sm:p-0 rounded-md sm:rounded-none text-center mb-1 sm:mb-0">
                  <div className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm text-accent">
                    <Check className="w-3.5 h-3.5 text-accent stroke-[2.5]" />
                    <span>{f.kandle}</span>
                  </div>
                </div>

                {/* Traditional Column */}
                <div className="col-span-6 md:col-span-2 text-center text-xs text-secondary flex items-center justify-center gap-1">
                  <span className="md:hidden text-[10px] uppercase font-bold text-secondary">Traditional:</span>
                  <X className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
                  <span>{f.traditional}</span>
                </div>

                {/* Solo DIY Column */}
                <div className="col-span-6 md:col-span-2 text-center text-xs text-secondary flex items-center justify-center gap-1">
                  <span className="md:hidden text-[10px] uppercase font-bold text-secondary">DIY:</span>
                  <span>{f.diy}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Table Strip */}
          <div className="bg-surface/70 p-3.5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-secondary font-medium">
              Ready to publish without signing away your copyright or royalties?
            </span>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg bg-accent text-white font-sans font-bold text-xs hover:bg-accent-hover transition-colors shadow-xs flex items-center gap-1.5"
            >
              <span>Speak with a Publishing Advisor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
