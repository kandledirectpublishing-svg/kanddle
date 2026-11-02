import { KandleHero } from "@/components/home/KandleHero";
import { WhyKandle } from "@/components/home/WhyKandle";
import { DidYouKnow } from "@/components/home/DidYouKnow";
import { HowItWorks } from "@/components/home/HowItWorks";
import { BookShowcase } from "@/components/home/BookShowcase";
import { BlogResources } from "@/components/home/BlogResources";
import { FAQs } from "@/components/home/FAQs";
import { ContactForm } from "@/components/home/ContactForm";

export default function Home() {
  return (
    <main className="bg-background">
      {/* 1. Hero: Floating header, headline, CTA pill, laptop mockup flanked by book covers, rating avatars & stats */}
      <KandleHero />

      {/* 2. Why Kandle: Author with printed book & laptop + 4 feature cards */}
      <WhyKandle />

      {/* 3. Did You Know: Floating author avatars surrounding central mission card + Toni Morrison quote + media logos */}
      <DidYouKnow />

      {/* 4. How It Works: Interactive 4-step tabbed workflow card with dashboard upload UI */}
      <HowItWorks />

      {/* 5. Featured Books Showcase: Centered prominent book cover + receding fanned covers with author bylines */}
      <BookShowcase />

      {/* 6. Blog & Resources: 3-column educational cards with graphic banners */}
      <BlogResources />

      {/* 7. Frequently Asked Questions: Clean '+' accordion */}
      <FAQs />

      {/* 8. Final CTA Section with Lead Capture Form & Phone Support */}
      <ContactForm />
    </main>
  );
}
