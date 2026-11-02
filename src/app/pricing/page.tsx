import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ShieldCheck, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { ContactForm } from '@/components/home/ContactForm';
import { FAQs } from '@/components/home/FAQs';

export const metadata: Metadata = {
  title: 'Publishing Pricing & Packages | 100% Author Royalties | Kandle Direct',
  description:
    'Transparent, fixed-price book publishing packages. Retain 100% of your net royalties, complete copyright ownership, and get published across Amazon, Barnes & Noble, and worldwide bookstores.',
  alternates: {
    canonical: 'https://www.kandledirectpublishing.com/pricing',
  },
};

export default function PricingPage() {
  const tiers = [
    {
      name: "Essential Publishing",
      tagline: "Ideal for debut authors seeking professional retail publication.",
      price: "£699",
      period: "fixed price",
      featured: false,
      features: [
        "Editorial Proofreading & Line Review",
        "Custom Front & Back Cover Design",
        "Kindle EPUB & Print-Ready PDF Formatting",
        "Amazon KDP Account Setup & Distribution",
        "Dedicated ISBN & Barcode Assignment",
        "100% Net Sales Royalties Retained",
        "Complete Copyright Ownership",
        "Dedicated Publishing Coordinator",
      ],
      ctaText: "Choose Essential",
    },
    {
      name: "Professional Author",
      tagline: "Our most comprehensive package for serious independent writers.",
      price: "£1,499",
      period: "fixed price",
      featured: true,
      popularBadge: "Most Popular",
      features: [
        "Meticulous Copyediting & Syntax Refinement",
        "Bespoke High-Definition Cover Art (3 Concepts)",
        "Hardcover, Paperback & Universal eBook Layout",
        "Global Retail Distribution (Amazon, B&N, Apple Books)",
        "IngramSpark Brick-and-Mortar Catalog Listing",
        "Official Copyright Registry Documentation",
        "100% Net Sales Royalties Directly Deposited",
        "Senior 1-on-1 Publishing Consultant",
        "Physical Hardcover Proof Sent to Your Door",
      ],
      ctaText: "Choose Professional",
    },
    {
      name: "Bestseller Launch",
      tagline: "Full-service production paired with high-impact promotional launch.",
      price: "£2,799",
      period: "fixed price",
      featured: false,
      features: [
        "Developmental Editorial Assessment & Substantive Edit",
        "Award-Grade Bespoke Cover Artwork with Foil Deboss Specs",
        "Audiobook Production & ACX Audible Distribution",
        "Worldwide Print & Digital Ingestion in 40,000+ Stores",
        "Amazon Ads Campaign Strategy & Keyword Audit",
        "Official Author Media Kit & Press Release",
        "100% Net Royalties & All Subsidiary Rights Yours",
        "Priority 24/7 Senior Publishing Advisor Access",
        "Lifetime Catalog Maintenance & Re-Formatting",
      ],
      ctaText: "Choose Bestseller",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-28 sm:pt-36">
      
      {/* Hero Banner with Soft Ambient Gradient */}
      <section className="relative max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-teal-500/10 via-amber-500/5 to-accent/10 rounded-full blur-3xl pointer-events-none -z-10" 
          aria-hidden="true" 
        />

        <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-600 block mb-2">
          Transparent Pricing
        </span>
        <h1 className="section-heading text-primary max-w-3xl mx-auto">
          Keep 100% of Your Royalties. <br className="hidden sm:inline" />
          Zero Hidden Fees.
        </h1>
        <p className="mt-4 font-['DM_Sans',sans-serif] text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Unlike traditional publishing houses that take 85% to 90% of your earnings, Kandle charges a transparent, fixed package rate. You keep every dollar of your net sales.
        </p>
      </section>

      {/* 3 Pricing Cards Grid */}
      <section className="py-12 border-t border-[#E7E3D8] bg-[#FAF8F3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  tier.featured
                    ? "bg-white border-2 border-teal-600 shadow-xl lg:-translate-y-2"
                    : "bg-white border border-[#E7E3D8] shadow-xs hover:border-teal-500/50 hover:shadow-md"
                }`}
              >
                {tier.popularBadge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal-600 text-white font-['DM_Sans',sans-serif] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {tier.popularBadge}
                  </div>
                )}

                <div>
                  <h3 className="font-['DM_Sans',sans-serif] text-2xl font-bold text-primary mb-1">
                    {tier.name}
                  </h3>
                  <p className="font-['DM_Sans',sans-serif] text-xs text-secondary mb-6 leading-relaxed">
                    {tier.tagline}
                  </p>

                  <div className="mb-6 pb-6 border-b border-[#E7E3D8] flex items-baseline gap-2">
                    <span className="font-['DM_Sans',sans-serif] text-4xl sm:text-5xl font-extrabold text-primary">
                      {tier.price}
                    </span>
                    <span className="font-['DM_Sans',sans-serif] text-xs text-secondary font-medium">
                      / {tier.period}
                    </span>
                  </div>

                  <div className="space-y-3 font-['DM_Sans',sans-serif] text-xs sm:text-sm text-secondary">
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E7E3D8]">
                  <Link
                    href="/contact"
                    className={`w-full py-3.5 rounded-full font-['DM_Sans',sans-serif] font-bold text-sm text-center flex items-center justify-center gap-2 transition-all duration-200 ${
                      tier.featured
                        ? "bg-teal-600 hover:bg-teal-700 text-white shadow-md hover:shadow-lg"
                        : "bg-[#FAF8F3] hover:bg-teal-600 text-primary hover:text-white border border-[#E7E3D8]"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQs */}
      <FAQs />

      {/* Final Consultation Form */}
      <ContactForm />

    </div>
  );
}

