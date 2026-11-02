"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 bg-gradient-to-b from-[#F5F9F8] via-[#FAF9F5] to-background overflow-hidden border-b border-[#E7E3D8]">
      
      {/* Subtle Ambient Corner Gradients (matching screenshot) */}
      <div 
        className="absolute -top-16 -left-16 w-[520px] h-[520px] bg-gradient-to-br from-teal-200/35 via-emerald-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -top-16 -right-16 w-[520px] h-[520px] bg-gradient-to-bl from-cyan-200/30 via-sky-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-gradient-to-r from-amber-100/25 to-orange-100/20 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & CTA */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <h1 className="font-['DM_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-primary tracking-tight leading-[1.15]">
              Explore Kandle Services: <br className="hidden sm:inline" />
              From Creation to <br className="hidden sm:inline" />
              Publication and Beyond
            </h1>

            <p className="font-['DM_Sans',sans-serif] text-secondary text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              At Kandle, we offer a full range of services to bring your book to life — 
              from editing and design to distribution and marketing. Our expert solutions 
              are built to support every step of your publishing journey with creativity, 
              precision, and impact.
            </p>

            <div className="pt-2 flex justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-['DM_Sans',sans-serif] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Start Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Composition (Laptop + Layered Book Stack + Glasses) */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            
            {/* Sparkle decorative stars */}
            <span className="absolute -top-4 left-1/4 text-teal-500 text-lg animate-pulse">✦</span>
            <span className="absolute top-2 right-12 text-teal-600 text-xl">✦</span>
            <span className="absolute top-1/3 -left-4 text-emerald-500 text-sm">✦</span>
            <span className="absolute -bottom-2 right-1/4 text-accent text-sm">✦</span>

            <div className="relative w-full max-w-[560px] flex items-center justify-center">
              
              {/* Central Laptop Device Mockup in Background */}
              <div className="w-[85%] sm:w-[88%] shadow-xl rounded-xl border-4 border-stone-800 bg-stone-900 p-2 sm:p-2.5 z-0 transform -translate-x-4 sm:-translate-x-8">
                {/* Laptop Top Browser Bar */}
                <div className="flex items-center justify-between px-2.5 py-1 bg-stone-900 border-b border-stone-800 rounded-t-md text-[9px] font-mono text-stone-400">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <span>kandle.publishing/portal</span>
                  <div className="w-3" />
                </div>

                {/* Dashboard Screen */}
                <div className="bg-[#FAF9F5] p-3 sm:p-4 rounded-b-md border border-stone-200">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E3D8]">
                    <span className="font-['DM_Sans',sans-serif] font-bold text-xs text-primary">
                      Welcome Author!
                    </span>
                    <span className="text-[9px] font-mono bg-teal-50 text-teal-700 px-1.5 py-0.5 rounded font-bold">
                      In Progress
                    </span>
                  </div>

                  {/* Horizontal Pipeline Steps */}
                  <div className="mt-3 flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-secondary">
                    <span className="text-accent font-bold">Upload</span>
                    <span>→</span>
                    <span className="text-accent font-bold">Proofreading</span>
                    <span>→</span>
                    <span className="text-primary font-bold">Cover Design</span>
                  </div>

                  <div className="w-full bg-stone-200 h-1 rounded-full mt-2 overflow-hidden">
                    <div className="bg-accent h-full w-[65%] rounded-full" />
                  </div>

                  {/* Mini Cards preview inside laptop */}
                  <div className="mt-3 grid grid-cols-2 gap-2 text-left">
                    <div className="bg-white p-1.5 rounded border border-[#E7E3D8] text-[8px]">
                      <span className="text-secondary block">Retail Split</span>
                      <strong className="text-primary font-bold">100% Royalty</strong>
                    </div>
                    <div className="bg-white p-1.5 rounded border border-[#E7E3D8] text-[8px]">
                      <span className="text-secondary block">Distribution</span>
                      <strong className="text-primary font-bold">Active Worldwide</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Layered 3D Book Stack Overlapping Laptop (Right Side) */}
              <div className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center drop-shadow-2xl">
                
                {/* Book 1 (Top Blue) */}
                <div className="w-44 sm:w-56 h-8 sm:h-9 bg-[#2563EB] rounded-sm border-b-2 border-blue-900 shadow-sm relative flex items-center px-3 text-[10px] text-white font-mono tracking-wider font-semibold transform rotate-1">
                  <div className="w-1.5 h-full bg-blue-300 mr-2 opacity-50" />
                  <span className="truncate">EDITORIAL GUIDE</span>
                </div>

                {/* Book 2 (Cyan/Teal) */}
                <div className="w-48 sm:w-60 h-9 sm:h-10 bg-[#0891B2] rounded-sm border-b-2 border-cyan-900 shadow-md relative flex items-center px-3 text-[10px] text-white font-mono tracking-wider font-semibold transform -rotate-1 -mt-1">
                  <div className="w-1.5 h-full bg-cyan-200 mr-2 opacity-50" />
                  <span className="truncate">MANUSCRIPT REVIEW</span>
                </div>

                {/* Book 3 (Deep Purple with bookmark ribbon) */}
                <div className="w-52 sm:w-64 h-10 sm:h-11 bg-[#4F46E5] rounded-sm border-b-2 border-indigo-950 shadow-md relative flex items-center px-4 text-xs text-white font-mono tracking-wider font-semibold transform rotate-2 -mt-1">
                  <div className="w-2 h-full bg-indigo-300 mr-2 opacity-60" />
                  <span className="truncate">COVER DESIGN & ART</span>
                  {/* Bookmark ribbon hanging */}
                  <div className="absolute right-8 -bottom-3 w-4 h-6 bg-amber-400 rounded-b-sm shadow-xs border border-amber-600" />
                </div>

                {/* Book 4 (Light Indigo / White page block) */}
                <div className="w-56 sm:w-68 h-9 sm:h-10 bg-[#FAF8F5] border border-stone-300 shadow-md relative flex items-center px-4 text-xs text-stone-800 font-mono tracking-wider font-bold transform -rotate-1 -mt-1">
                  <div className="w-2 h-full bg-accent mr-2" />
                  <span className="truncate">INTERIOR TYPESETTING</span>
                </div>

                {/* Book 5 (Deep Violet Large Base) */}
                <div className="w-60 sm:w-72 h-11 sm:h-12 bg-[#6366F1] rounded-sm border-b-2 border-indigo-950 shadow-lg relative flex items-center px-4 text-xs text-white font-mono tracking-wider font-bold transform rotate-1 -mt-1">
                  <div className="w-2 h-full bg-indigo-300 mr-2 opacity-60" />
                  <span className="truncate">GLOBAL DISTRIBUTION</span>
                </div>

                {/* Book 6 (Thick White Hardcover Base) */}
                <div className="w-64 sm:w-80 h-12 sm:h-14 bg-white rounded-b-md border border-stone-300 border-b-4 border-b-stone-400 shadow-xl relative flex items-center px-5 text-xs text-primary font-mono tracking-wider font-extrabold -mt-1">
                  <div className="w-2.5 h-full bg-[#FF6200] mr-3" />
                  <span className="truncate">KANDLE DIRECT PUBLISHING</span>
                </div>

              </div>

              {/* Stylish Round Reading Glasses Resting at Laptop Base (Center-Bottom) */}
              <div className="absolute -bottom-6 left-1/3 -translate-x-1/2 z-30 pointer-events-none drop-shadow-md">
                <svg width="120" height="48" viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Left Lens */}
                  <circle cx="28" cy="24" r="18" stroke="#2563EB" strokeWidth="4" fill="rgba(255,255,255,0.7)" />
                  <path d="M18 16L30 30" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" />
                  {/* Bridge */}
                  <path d="M46 22C54 18 66 18 74 22" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
                  {/* Right Lens */}
                  <circle cx="92" cy="24" r="18" stroke="#2563EB" strokeWidth="4" fill="rgba(255,255,255,0.7)" />
                  <path d="M82 16L94 30" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" />
                  {/* Temples */}
                  <path d="M10 24L2 14" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
                  <path d="M110 24L118 14" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
