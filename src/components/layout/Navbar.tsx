"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-300">
      {/* Floating Pill Container (matching screenshot) */}
      <div className={`max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-full border border-[#E7E3D8] shadow-sm transition-all duration-300 px-4 sm:px-6 ${
        isScrolled ? 'py-2 shadow-md' : 'py-2.5 sm:py-3'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group py-1 flex-shrink-0">
            <img
              src="/logo-dark.png"
              alt="Kandle Direct Publishing"
              className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links (strictly matching screenshot: Pricing, Services, About Us, Blog, Contact Us) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-['DM_Sans',sans-serif] text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? 'text-teal-600 font-semibold'
                      : 'text-stone-700 hover:text-teal-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <a
              href="tel:+447922656521"
              className="text-xs font-semibold text-secondary hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>+44 7922 656521</span>
            </a>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-secondary hover:text-primary focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto bg-white rounded-2xl border border-[#E7E3D8] shadow-lg p-5 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 font-['DM_Sans',sans-serif] text-sm font-medium text-secondary">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-1.5 transition-colors ${
                    isActive ? 'text-teal-600 font-bold' : 'hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-[#E7E3D8] flex flex-col gap-2.5">
              <a
                href="tel:+447922656521"
                className="text-xs font-semibold text-primary flex items-center gap-2 py-1"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>+44 7922 656521</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-accent text-white text-xs font-bold py-2.5 rounded-full hover:bg-accent-hover transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
