"use client";

import { RequestForm } from "./RequestForm";

export function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Request a Free Publishing Guide</h2>
          <p className="font-sans text-lg opacity-90">Fill out the form below to speak with a publishing expert today.</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl text-primary max-w-2xl mx-auto">
          <RequestForm source="Homepage Footer Form" />
        </div>
      </div>
    </section>
  );
}
