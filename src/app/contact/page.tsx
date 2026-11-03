import type { Metadata } from "next";
import { ContactPageClient } from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Kandle Direct Publishing | Call +44 7922 656521 | Free Book Consultation",
  description:
    "Speak directly with a dedicated publishing consultant at +44 7922 656521. Claim your free manuscript evaluation, custom publishing roadmap, and keep 100% of your net royalties.",
  openGraph: {
    title: "Contact Kandle Direct Publishing | Call +44 7922 656521",
    description:
      "Speak directly with a professional publishing consultant. Claim your free manuscript evaluation and production roadmap.",
  },
  alternates: {
    canonical: "https://www.kandledirectpublishing.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
