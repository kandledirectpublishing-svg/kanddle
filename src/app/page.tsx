import { KandleHero } from "@/components/home/KandleHero";
import { PremiumServices } from "@/components/home/PremiumServices";
import { Roadmap } from "@/components/home/Roadmap";
import { AuthorTestimonials } from "@/components/home/AuthorTestimonials";
import { ContactForm } from "@/components/home/ContactForm";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <KandleHero />
      <PremiumServices />
      <Roadmap />
      <AuthorTestimonials />
      <ContactForm />
    </main>
  );
}
