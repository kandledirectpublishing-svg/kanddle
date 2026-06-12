"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { servicesData } from '@/data/services';

export function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary bg-primary text-white">
      {/* Top Bar for Phone Number (Trust Signal) */}
      <div className="bg-background text-primary border-b border-border py-2 px-4 md:px-6 flex justify-end items-center text-sm font-sans">
        <span className="mr-2">Ready to publish? Call us:</span>
        <a href="tel:+447922656521" className="font-bold hover:text-accent transition-colors flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +44 7922 656521
        </a>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between relative">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Kandle Direct Publishing Logo"
              width={160}
              height={160}
              className="h-29 w-35 object-contain"
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 items-center font-sans font-semibold text-gray-300 h-full">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>

          <div className="relative h-full flex items-center"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}>
            <button className="flex items-center hover:text-accent transition-colors py-2">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] max-w-[90vw] bg-card border border-border rounded-b-lg shadow-xl p-6 mt-0">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block p-3 rounded-md hover:bg-surface hover:text-accent transition-colors group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="font-bold text-primary group-hover:text-accent transition-colors text-sm mb-1">{service.title}</div>
                      <div className="text-xs text-secondary font-normal line-clamp-2">{service.shortDescription}</div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border flex justify-center">
                  <Link href="/services" className="text-sm font-bold text-accent hover:underline flex items-center" onClick={() => setIsServicesOpen(false)}>
                    View All Services <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="#testimonials" className="hover:text-accent transition-colors">Testimonials</Link>
          <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center">
          <Link href="/contact" className="bg-accent text-white font-sans font-bold py-2 px-4 rounded hover:bg-accent-hover transition-colors shadow">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
