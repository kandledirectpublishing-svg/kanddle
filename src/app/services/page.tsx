import type { Metadata } from 'next';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { ArrowRight, CheckCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ContactForm } from '@/components/home/ContactForm';

export const metadata: Metadata = {
  title: 'Publishing Services | Explore Kandle Services From Creation to Publication',
  description:
    'Explore 22+ professional book publishing services — editing, bespoke cover art, typesetting, Amazon KDP setup, and global distribution. 100% royalties kept.',
  alternates: {
    canonical: 'https://www.kandledirectpublishing.com/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* 1. Hero Section matching screenshot (Headline + description + CTA + laptop with layered book stack & glasses) */}
      <ServicesHero />

      {/* 2. All Services Catalog Grid */}
      <section id="services-list" className="py-20 lg:py-28 bg-[#FAF8F3] border-b border-[#E7E3D8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent block mb-2">
              All 22 Services
            </span>
            <h2 className="section-heading text-primary">
              Our Complete Publishing Catalog
            </h2>
            <p className="mt-3 font-['DM_Sans',sans-serif] text-secondary text-sm sm:text-base">
              Every service is available standalone or bundled into a customized production roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service, index) => (
              <Link
                key={service.slug || index}
                href={`/services/${service.slug}`}
                className="bg-white rounded-2xl border border-[#E7E3D8] p-6 sm:p-7 shadow-xs hover:border-accent/50 hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent bg-accent/5 px-2.5 py-1 rounded-md border border-accent/20">
                      {service.category}
                    </span>
                    <span className="font-mono text-xs text-stone-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-['DM_Sans',sans-serif] text-xl font-bold text-primary group-hover:text-accent transition-colors duration-200 mb-2.5">
                    {service.title}
                  </h3>

                  <p className="font-['DM_Sans',sans-serif] text-xs sm:text-sm text-secondary leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E7E3D8]/70 flex items-center justify-between text-xs font-['DM_Sans',sans-serif] font-bold text-primary group-hover:text-accent transition-colors">
                  <span>Explore Details</span>
                  <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Final Consultation Form */}
      <ContactForm />

    </div>
  );
}
