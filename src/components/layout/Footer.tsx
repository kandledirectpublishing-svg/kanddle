"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Lock, 
  Facebook, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Share2 
} from "lucide-react";

export function Footer() {
  const paymentMethods = [
    { name: "Apple Pay", label: "Apple Pay" },
    { name: "Discover", label: "DISCOVER" },
    { name: "Google Pay", label: "G Pay" },
    { name: "Mastercard", label: "Mastercard" },
    { name: "Amex", label: "AMERICAN EXPRESS" },
    { name: "PayPal", label: "PayPal" },
    { name: "Visa", label: "VISA" },
  ];

  return (
    <footer className="py-12 sm:py-16 bg-gradient-to-b from-[#FAF9F5] via-[#F0F7F5] to-[#E9F3F0] px-4 sm:px-6 lg:px-8 border-t border-[#E7E3D8] relative overflow-hidden">
      
      {/* Subtle Ambient Footer Glows (matching screenshot) */}
      <div 
        className="absolute -top-12 -left-12 w-[480px] h-[480px] bg-gradient-to-br from-teal-200/30 via-emerald-100/20 to-transparent rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -top-12 -right-12 w-[480px] h-[480px] bg-gradient-to-bl from-cyan-200/30 via-sky-100/20 to-transparent rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Large Rounded Footer Card Container (matching screenshot 8) */}
      <div className="max-w-[1240px] mx-auto bg-white/95 backdrop-blur-sm rounded-3xl border border-[#E7E3D8] shadow-sm p-8 sm:p-12 lg:p-14 relative z-10">
        
        {/* Top 6-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 pb-12 border-b border-[#E7E3D8]">
          
          {/* Col 1: Logo & Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block group">
              <img
                src="/logo-dark.png"
                alt="Kandle Direct Publishing"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Col 2: Product */}
          <div>
            <h4 className="font-['DM_Sans',sans-serif] text-xs font-bold text-primary mb-3">
              Product
            </h4>
            <ul className="space-y-2 font-['DM_Sans',sans-serif] text-xs text-secondary">
              <li><Link href="#how-it-works" className="hover:text-accent transition-colors">Self-Publish with Kandle</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Book Marketing</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Free Book Review</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Dedicated Advisors</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Global Distribution</Link></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="font-['DM_Sans',sans-serif] text-xs font-bold text-primary mb-3">
              Resources
            </h4>
            <ul className="space-y-2 font-['DM_Sans',sans-serif] text-xs text-secondary">
              <li><Link href="#how-it-works" className="hover:text-accent transition-colors">How Does Kandle Work?</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Writing & Publishing Blog</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Book Genres List</Link></li>
              <li><Link href="#showcase" className="hover:text-accent transition-colors">Bestseller Showcase</Link></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="font-['DM_Sans',sans-serif] text-xs font-bold text-primary mb-3">
              Company
            </h4>
            <ul className="space-y-2 font-['DM_Sans',sans-serif] text-xs text-secondary">
              <li><Link href="/about" className="hover:text-accent transition-colors">About us</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">News and Media</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Author Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link href="#why-kandle" className="hover:text-accent transition-colors">Trust & Legitimacy</Link></li>
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div>
            <h4 className="font-['DM_Sans',sans-serif] text-xs font-bold text-primary mb-3">
              Legal
            </h4>
            <ul className="space-y-2 font-['DM_Sans',sans-serif] text-xs text-secondary">
              <li><Link href="/privacy-policy" className="hover:text-accent transition-colors">Author Agreement</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-accent transition-colors">Terms and Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-accent transition-colors">Cancellation Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Col 6: Get in Touch & Socials */}
          <div className="space-y-3 font-['DM_Sans',sans-serif] text-xs text-secondary">
            <h4 className="font-bold text-primary mb-3">
              Get in Touch
            </h4>
            <p>
              <a href="mailto:info@kandledirectpublishing.com" className="hover:text-accent transition-colors">
                info@kandledirectpublishing.com
              </a>
            </p>
            <p>
              Main:{" "}
              <a href="tel:+447922656521" className="hover:text-accent font-medium text-primary transition-colors">
                +44 7922 656521
              </a>
            </p>
            <p>
              Support:{" "}
              <a href="tel:+447922656521" className="hover:text-accent font-medium text-primary transition-colors">
                +44 7922 656521
              </a>
            </p>
            <p className="text-[11px] text-stone-500 pt-1">
              173 Dallow Rd, Luton, LU1 1NX, UK
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-2 text-stone-600">
              <a href="https://www.facebook.com/kandledirectpublishing/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/kandle-direct-publishing/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/kandledirectpublishing/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Trust & Security Bar (matching screenshot 8 bottom) */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 font-['DM_Sans',sans-serif]">
          
          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2 text-xs">
              <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-primary block leading-none">100% hassle-free</span>
                <span className="text-[11px] text-secondary">30-day money-back guarantee</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <div className="w-7 h-7 rounded-full bg-cyan-50 text-cyan-600 border border-cyan-200 flex items-center justify-center flex-shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-primary block leading-none">SSL Secure payment</span>
                <span className="text-[11px] text-secondary">Protected by 256-bit encryption</span>
              </div>
            </div>
          </div>

          {/* Payment Method Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono text-stone-600">
            {paymentMethods.map((pm, i) => (
              <span key={i} className="px-2 py-0.5 rounded border border-[#E7E3D8] bg-[#FAF8F3] text-stone-700">
                {pm.label}
              </span>
            ))}
          </div>

          {/* Sitemap & Copyright */}
          <div className="text-[11px] text-secondary flex items-center gap-2">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              HTML Sitemap
            </Link>
            <span>|</span>
            <span>© 2026 Kandle Direct Publishing</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
