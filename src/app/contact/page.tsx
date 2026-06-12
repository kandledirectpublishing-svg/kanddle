import type { Metadata } from "next";
import { ContactPageClient } from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Publishing Consultation",
  description:
    "Speak with a professional publishing expert at Kandle Direct Publishing. Get a free, no-obligation consultation for your book project — call, email, or fill in the form.",
  openGraph: {
    title: "Contact Kandle Direct Publishing",
    description:
      "Speak with a professional publishing expert. Get a free, no-obligation consultation for your book project.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
