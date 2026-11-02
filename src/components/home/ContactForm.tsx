"use client";

import { RequestForm } from "./RequestForm";
import { Phone, ShieldCheck } from "lucide-react";

export function ContactForm() {
  return (
    <section 
      id="contact" 
      className="py-20 lg:py-28 bg-[#FAF8F3] border-t border-[#E7E3D8]"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Editorial Reassurance */}
          <div className="lg:col-span-5 max-w-[560px]">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent block mb-2">
              Get In Touch
            </span>
            <h2 className="section-heading text-primary">
              Publish Your Book
            </h2>
            <p className="mt-4 font-['DM_Sans',sans-serif] text-secondary text-sm sm:text-base leading-relaxed">
              Request your free publishing guide and consult directly with an experienced advisor.
            </p>

            <div className="mt-8 pt-8 border-t border-[#E7E3D8] space-y-6">
              <div>
                <span className="font-mono text-xs text-secondary/80 block mb-1">
                  Direct Line
                </span>
                <a
                  href="tel:+447922656521"
                  className="inline-flex items-center gap-2 font-['DM_Sans',sans-serif] text-lg font-bold text-primary hover:text-accent transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>+44 7922 656521</span>
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-secondary leading-relaxed font-['DM_Sans',sans-serif]">
                <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  All manuscripts remain strictly confidential. You retain 100% of your rights and net royalties.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E7E3D8] shadow-sm">
              <div className="mb-6">
                <h3 className="font-['DM_Sans',sans-serif] text-xl font-bold text-primary">
                  Request Free Guide
                </h3>
                <p className="mt-1 font-['DM_Sans',sans-serif] text-xs text-secondary">
                  Complete the details below to receive your guide within 24 hours.
                </p>
              </div>

              <RequestForm source="Homepage Final Form" compact={false} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
