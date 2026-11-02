import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy & Author Rights Guarantee | Kandle Direct',
  description:
    'Read Kandle Direct Publishing privacy policy, author rights guarantee, 100% royalty policy, and confidential manuscript protection guidelines.',
  alternates: {
    canonical: 'https://www.kandledirectpublishing.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen pt-28 sm:pt-36 pb-20">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 border-b border-[#E7E3D8] pb-8 text-center sm:text-left">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent block mb-2">
            Legal & Compliance
          </span>
          <h1 className="section-heading text-primary">
            Privacy Policy & Author Rights Guarantee
          </h1>
          <p className="mt-3 font-['DM_Sans',sans-serif] text-sm text-secondary">
            Last Updated: January 2026 | Kandle Direct Publishing Ltd.
          </p>
        </div>

        {/* Core Guarantee Callout */}
        <div className="bg-white rounded-2xl border border-emerald-200 p-6 sm:p-8 mb-12 shadow-xs flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-['DM_Sans',sans-serif] text-lg font-bold text-primary mb-1">
              The Kandle 100% Rights & Royalty Guarantee
            </h2>
            <p className="font-['DM_Sans',sans-serif] text-sm text-secondary leading-relaxed">
              Kandle Direct Publishing makes zero claim to your intellectual property. All copyright, publishing rights, trademark rights, film/adaptation rights, and net royalties remain 100% exclusively yours in perpetuity.
            </p>
          </div>
        </div>

        {/* Policy Body */}
        <div className="bg-white rounded-3xl border border-[#E7E3D8] p-8 sm:p-12 shadow-sm space-y-8 font-['DM_Sans',sans-serif] text-sm text-secondary leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">
              1. Manuscript Confidentiality
            </h2>
            <p>
              When you submit a manuscript, sample chapter, or concept draft to Kandle Direct Publishing, your work is governed by our strict Non-Disclosure Protocol. Your intellectual property will never be sold, leased, shared, scraped by public artificial intelligence engines, or distributed to third parties without your prior written authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">
              2. Royalty Routing & Payment Terms
            </h2>
            <p>
              All retail royalties generated across distribution channels—including Amazon Kindle Direct Publishing (KDP), Barnes & Noble Press, Apple Books, Kobo, Google Play, and IngramSpark—are deposited directly into your designated author bank account. Kandle Direct does not take any commission, percentage, or ongoing royalty split from your book sales.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">
              3. Information We Collect
            </h2>
            <p>
              We collect information that you directly provide when inquiring about our services or requesting a consultation, including your name, email address, telephone number, and manuscript details. We use this data solely to provide customized publishing roadmaps and support your publishing milestones.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">
              4. Data Protection & 256-Bit SSL Security
            </h2>
            <p>
              Our website and customer consultation portals use industry-standard 256-bit Secure Sockets Layer (SSL) encryption to safeguard all transmitted personal data and credit/payment transactions. We adhere strictly to the UK Data Protection Act 2018 and the General Data Protection Regulation (GDPR).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">
              5. Contact Us Regarding Your Privacy
            </h2>
            <p>
              If you have any questions about this Privacy Policy, your author rights, or data protection practices, please contact our Data Compliance Officer:
            </p>
            <div className="p-4 bg-[#FAF8F3] rounded-xl border border-border text-xs text-primary space-y-1">
              <p><strong>Email:</strong> info@kandledirectpublishing.com</p>
              <p><strong>Phone:</strong> +44 7922 656521</p>
              <p><strong>Address:</strong> 173 Dallow Rd, Luton, LU1 1NX, United Kingdom</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}

