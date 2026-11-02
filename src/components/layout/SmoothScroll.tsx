"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function GsapAndScrollHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // 1. Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // 2. Handle smooth anchor link scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, { offset: -60, duration: 1.2 });
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    // 3. GSAP Animations for sections, text, and cards
    const ctx = gsap.context(() => {
      // Reveal section titles with smooth ease
      const titles = document.querySelectorAll(".gsap-title");
      titles.forEach((title) => {
        gsap.fromTo(
          title,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Reveal sections with subtle lift
      const sections = document.querySelectorAll(".gsap-section");
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Staggered card reveals with ease
      const cardContainers = document.querySelectorAll(".gsap-cards");
      cardContainers.forEach((container) => {
        const cards = container.children;
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: container,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    });

    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(tickerCallback);
      ctx.revert();
    };
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.4,
        smoothWheel: true,
        wheelMultiplier: 1.1,
        touchMultiplier: 1.6,
        syncTouch: false,
        infinite: false,
      }}
    >
      <GsapAndScrollHandler />
      {children}
    </ReactLenis>
  );
}
