"use client";

import Link from "next/link";
import { 
  BookOpen, 
  PenTool, 
  Layout, 
  DollarSign, 
  Check, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

const allServices = [
  {
    number: "01",
    tag: "Editorial",
    title: "Professional Book Editing",
    description: "Our veteran editors eliminate errors, enhance pacing, and refine your storytelling while preserving your author voice.",
    deliverables: ["Developmental editing", "Line editing & proofreading", "Grammar & style guide audit", "Author review cycles"],
    icon: PenTool,
    slug: "editing-services"
  },
  {
    number: "02",
    tag: "Art Direction",
    title: "Bespoke Cover Design",
    description: "Stop readers in their tracks. We craft market-tested covers optimized for digital thumbnails and print editions.",
    deliverables: ["Front, back & spine design", "3D promotional mockups", "Print-ready CMYK files", "Barcode & ISBN placement"],
    icon: Layout,
    slug: "cover-design-services"
  },
  {
    number: "03",
    tag: "Production",
    title: "Global Distribution Setup",
    description: "Reach readers worldwide. We set up and optimize your title across Amazon KDP, Apple, Barnes & Noble, and Ingram.",
    deliverables: ["Amazon KDP optimization", "Hardcover & paperback setup", "eBook EPUB formatting", "Metadata & keyword strategy"],
    icon: BookOpen,
    slug: "global-distribution"
  },
  {
    number: "04",
    tag: "Ownership",
    title: "100% Royalty Retention",
    description: "Unlike vanity presses or traditional publishers who take 85% of your earnings, Kandle ensures every cent is yours.",
    deliverables: ["Zero royalty cuts", "Direct account setup", "Full copyright ownership", "Transparent sales dashboards"],
    icon: DollarSign,
    slug: "publishing-packages"
  }
];

export function PremiumServices() {
  return (
    <section id="services" className="gsap-section relative py-8 lg:py-6 lg:min-h-[calc(100vh-70px)] lg:max-h-[850px] flex flex-col justify-center bg-surface/60 border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-5 text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent block mb-1">
            Publishing Services
          </span>
          <h2 className="gsap-title font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight mb-1.5">
            Everything Required to Publish with Distinction
          </h2>
          <p className="font-sans text-secondary text-xs sm:text-sm leading-relaxed max-w-2xl">
            From raw manuscript to global bookshelf. Select individual a-la-carte services 
            or partner with us for a complete, end-to-end publishing package.
          </p>
        </div>

        {/* 4 Editorial Service Cards with Background Hover Ease */}
        <div className="gsap-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {allServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.slug}
                className="hover-ease group bg-white rounded-xl p-5 border border-border shadow-editorial flex flex-col justify-between cursor-default"
              >
                <div>
                  {/* Phase & Tag Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/80">
                    <span className="font-mono text-xs font-bold text-secondary">
                      {service.number}
                    </span>
                    <span className="text-[10px] font-sans font-semibold text-accent uppercase tracking-wider">
                      {service.tag}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-primary mb-3 group-hover:text-accent transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-primary mb-1.5 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-secondary leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="space-y-1.5 pt-3 border-t border-border/60 mb-4">
                    {service.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-primary">
                        <Check className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center justify-between w-full pt-2.5 border-t border-border/60 text-xs font-bold text-primary hover:text-accent transition-colors group/link mt-auto"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3 h-3 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout Strip */}
        <div className="mt-5 p-4 sm:p-5 rounded-xl bg-primary text-white border border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-xs sm:text-sm">
                Unsure which publishing tier your manuscript requires?
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-300">
                Our publishing directors will review your manuscript scope and provide a fixed-price production plan.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap px-4 py-2 rounded-lg bg-accent text-white font-sans font-bold text-xs hover:bg-accent-hover transition-colors shadow-xs flex items-center gap-1.5"
          >
            <span>Request Custom Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
