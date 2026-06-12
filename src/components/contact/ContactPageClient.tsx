"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react";
import { servicesData } from "@/data/services";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Phone number is required"),
  service: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

function validate(data: Partial<FormData>): Partial<Record<keyof FormData, string>> {
  const result = schema.safeParse(data);
  if (result.success) return {};
  const errors: Partial<Record<keyof FormData, string>> = {};
  result.error.issues.forEach((err) => {
    const key = err.path[0] as keyof FormData;
    if (!errors[key]) errors[key] = err.message;
  });
  return errors;
}

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+44 7922 656521",
    href: "tel:+447922656521",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@kandledirectpublishing.com",
    href: "mailto:info@kandledirectpublishing.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "173 Dallow Rd, Luton, LU1 1NX, UK",
    href: "https://maps.google.com/?q=173+Dallow+Rd+Luton+LU1+1NX",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 9am – 6pm GMT",
    href: null,
  },
];

export function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: (values) => {
      const errs = validate(values);
      const hasErrors = Object.keys(errs).length > 0;
      return {
        values: hasErrors ? {} : values,
        errors: Object.fromEntries(
          Object.entries(errs).map(([k, v]) => [k, { type: "manual", message: v }])
        ),
      };
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSuccess(true);
      } else {
        setServerError("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      setServerError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Banner */}
      <div className="bg-primary text-white py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <p className="text-accent font-sans font-bold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-black leading-tight mb-4">
            Let&apos;s Bring Your<br />
            <span className="text-accent">Book to Life.</span>
          </h1>
          <p className="font-sans text-gray-300 text-lg max-w-xl">
            Tell us about your project and a publishing expert will reach out within 1 business day — no obligation, no pressure.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Contact Info Column */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-2">Contact Details</h2>
              <p className="font-sans text-secondary text-sm">
                Reach out directly or fill in the form and we&apos;ll get back to you promptly.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-widest text-secondary mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-sans text-primary font-medium hover:text-accent transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-sans text-primary font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="bg-surface rounded-xl p-6 border border-border">
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-secondary mb-4">Why Choose Us</p>
              <ul className="space-y-3 font-sans text-sm text-primary">
                {[
                  "100% author royalties — always",
                  "Dedicated publishing expert",
                  "No hidden fees, ever",
                  "Global distribution on Day 1",
                  "Response within 1 business day",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-accent font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-3">
            {isSuccess ? (
              /* Success State */
              <div className="bg-white border border-border rounded-2xl shadow-lg p-12 text-center flex flex-col items-center gap-6">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                  <CheckCircle size={40} className="text-accent" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-primary mb-2">Message Received!</h2>
                  <p className="font-sans text-secondary text-lg">
                    Thank you for reaching out. A publishing expert will contact you within 1 business day.
                  </p>
                </div>
                <div className="bg-surface rounded-xl p-6 w-full text-left border border-border">
                  <p className="font-sans text-sm text-secondary">
                    In the meantime, feel free to call us directly at{" "}
                    <a href="tel:+447922656521" className="text-accent font-bold hover:underline">
                      +44 7922 656521
                    </a>{" "}
                    or explore our{" "}
                    <a href="/services" className="text-accent font-bold hover:underline">
                      full list of publishing services
                    </a>
                    .
                  </p>
                </div>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white border border-border rounded-2xl shadow-lg p-8 md:p-10 space-y-6"
                noValidate
              >
                <div>
                  <h2 className="font-serif text-2xl font-bold text-primary mb-1">Request a Free Consultation</h2>
                  <p className="font-sans text-sm text-secondary">Fill in your details below and we&apos;ll be in touch soon.</p>
                </div>

                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-sm font-bold text-primary mb-1.5">
                      First Name <span className="text-accent">*</span>
                    </label>
                    <input
                      {...register("firstName")}
                      type="text"
                      placeholder="Jane"
                      className={`w-full font-sans text-primary px-4 py-3 border rounded-lg text-sm outline-none transition-all focus:ring-2 focus:ring-accent/40 focus:border-accent ${
                        errors.firstName ? "border-red-400 bg-red-50" : "border-border bg-background"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1 font-sans">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-bold text-primary mb-1.5">
                      Last Name <span className="text-accent">*</span>
                    </label>
                    <input
                      {...register("lastName")}
                      type="text"
                      placeholder="Smith"
                      className={`w-full font-sans text-primary px-4 py-3 border rounded-lg text-sm outline-none transition-all focus:ring-2 focus:ring-accent/40 focus:border-accent ${
                        errors.lastName ? "border-red-400 bg-red-50" : "border-border bg-background"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1 font-sans">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-sans text-sm font-bold text-primary mb-1.5">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="jane@example.com"
                    className={`w-full font-sans text-primary px-4 py-3 border rounded-lg text-sm outline-none transition-all focus:ring-2 focus:ring-accent/40 focus:border-accent ${
                      errors.email ? "border-red-400 bg-red-50" : "border-border bg-background"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 font-sans">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-sans text-sm font-bold text-primary mb-1.5">
                    Phone Number <span className="text-accent">*</span>
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+44 7000 000000"
                    className={`w-full font-sans text-primary px-4 py-3 border rounded-lg text-sm outline-none transition-all focus:ring-2 focus:ring-accent/40 focus:border-accent ${
                      errors.phone ? "border-red-400 bg-red-50" : "border-border bg-background"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 font-sans">{errors.phone.message}</p>
                  )}
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block font-sans text-sm font-bold text-primary mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    {...register("service")}
                    className="w-full font-sans text-primary px-4 py-3 border border-border bg-background rounded-lg text-sm outline-none transition-all focus:ring-2 focus:ring-accent/40 focus:border-accent appearance-none cursor-pointer"
                  >
                    <option value="">— Select a service (optional) —</option>
                    {servicesData.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-sans text-sm font-bold text-primary mb-1.5">
                    Tell Us About Your Book
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Give us a brief overview of your project — genre, current stage, goals, timeline..."
                    className="w-full font-sans text-primary px-4 py-3 border border-border bg-background rounded-lg text-sm outline-none transition-all focus:ring-2 focus:ring-accent/40 focus:border-accent resize-none"
                  />
                </div>

                {/* Server Error */}
                {serverError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-600 font-sans">
                    {serverError}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-white font-sans font-bold text-base py-4 rounded-lg hover:bg-accent-hover transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send My Enquiry →"
                  )}
                </button>

                <p className="font-sans text-xs text-secondary text-center">
                  By submitting, you agree to be contacted by Kandle Direct Publishing. We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
