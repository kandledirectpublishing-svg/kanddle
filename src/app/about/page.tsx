import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Award, Users, BookOpen, ArrowRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { ContactForm } from '@/components/home/ContactForm';

export const metadata: Metadata = {
  title: 'About Us | Why Independent Authors Choose Kandle Direct',
  description:
    'Learn about Kandle Direct Publishing. Founded by authors and publishing veterans to give writers 100% of their royalties, creative control, and global retail distribution.',
  alternates: {
    canonical: 'https://www.kandledirectpublishing.com/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "100% Royalties & Copyright",
      desc: "Unlike traditional publishers who retain 85% to 90% of royalties, Kandle charges transparent production fees. You retain every dollar of your net sales and 100% of your intellectual property.",
    },
    {
      icon: Award,
      title: "Publishing Craftsmanship",
      desc: "Every manuscript is handled by seasoned editors, professional interior typesetters, and senior cover art directors. No generic templates or automated shortcuts.",
    },
    {
      icon: Users,
      title: "Dedicated 1-on-1 Advisors",
      desc: "You are paired with a dedicated publishing consultant who guides your book from intake to global launch. Call or email your advisor directly at every step.",
    },
    {
      icon: TrendingUp,
      title: "Worldwide Retail Reach",
      desc: "Direct ingestion into Amazon Kindle, Barnes & Noble NOOK, Apple Books, Google Play, and worldwide bookstore catalogs via IngramSpark.",
    },
  ];

  return (
    <div className="bg-background min-h-screen pt-28 sm:pt-36">
      
      {/* Hero Banner */}
      <section className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent block mb-3">
          Our Story & Mission
        </span>
        <h1 className="section-heading text-primary max-w-3xl mx-auto">
          Democratizing Publishing for Independent Authors
        </h1>
        <p className="mt-5 font-['DM_Sans',sans-serif] text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Founded by authors and industry veterans, Kandle Direct was built to eliminate the barriers of traditional publishing: overcomplicated gatekeeping, predatory royalty splits, and agonizingly slow timelines.
        </p>
      </section>

      {/* Narrative & Author Story Spread */}
      <section className="py-16 border-y border-[#E7E3D8] bg-white">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5 font-['DM_Sans',sans-serif]">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent block">
                The Kandle Difference
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-tight">
                Where Author Autonomy Meets Traditional Quality
              </h2>
              <p className="text-secondary text-sm sm:text-base leading-relaxed">
                9 out of 10 fully completed manuscripts never get published. Writers get lost in labyrinthine submission queues, agent rejections, and confusing production costs.
              </p>
              <p className="text-secondary text-sm sm:text-base leading-relaxed">
                At Kandle Direct, we believe that if you have invested your heart and soul into writing a book, you deserve a transparent, predictable path to market—without sacrificing your royalties or your rights.
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-semibold text-primary">Over 10,000+ titles published worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-semibold text-primary">Zero percent royalty cut taken by Kandle</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-semibold text-primary">Average release timeframe of 4 to 8 weeks</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#E7E3D8] bg-[#FAF8F3]">
                <img
                  src="/images/blog/publishing-consultant.jpg"
                  alt="Kandle Publishing Advisors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="py-20 lg:py-28 bg-[#FAF8F3]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent block mb-2">
              Our Pillars
            </span>
            <h2 className="section-heading text-primary">
              Built on Author Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E7E3D8] shadow-xs hover:border-accent/40 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-['DM_Sans',sans-serif] text-xl font-bold text-primary mb-2">
                    {v.title}
                  </h3>
                  <p className="font-['DM_Sans',sans-serif] text-sm text-secondary leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lead Form CTA */}
      <ContactForm />

    </div>
  );
}

