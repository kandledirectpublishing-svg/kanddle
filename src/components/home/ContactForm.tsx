"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Phone is required"),
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

export function ContactForm() {
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
        body: JSON.stringify({ ...data, message: "Request from homepage guide form" }),
      });
      if (res.ok) {
        setIsSuccess(true);
      } else {
        setServerError("Something went wrong. Please try again.");
      }
    } catch {
      setServerError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Request a Free Publishing Guide</h2>
          <p className="font-sans text-lg opacity-90">Fill out the form below to speak with a publishing expert today.</p>
        </div>

        {isSuccess ? (
          <div className="bg-white/10 border border-white/20 rounded-2xl p-12 text-center flex flex-col items-center gap-6">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
              <CheckCircle size={32} className="text-accent" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold mb-2">Thank You!</h3>
              <p className="font-sans text-gray-300 text-lg">
                We&apos;ve received your request and will be in touch within 1 business day.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl text-primary space-y-6"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-sans text-sm font-bold mb-2">
                  First Name <span className="text-accent">*</span>
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="Jane"
                  className={`w-full p-3 border rounded-lg font-sans text-sm outline-none transition-all focus:ring-2 focus:ring-accent/40 focus:border-accent ${
                    errors.firstName ? "border-red-400 bg-red-50" : "border-border"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1 font-sans">{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <label className="block font-sans text-sm font-bold mb-2">
                  Last Name <span className="text-accent">*</span>
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="Smith"
                  className={`w-full p-3 border rounded-lg font-sans text-sm outline-none transition-all focus:ring-2 focus:ring-accent/40 focus:border-accent ${
                    errors.lastName ? "border-red-400 bg-red-50" : "border-border"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1 font-sans">{errors.lastName.message}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="block font-sans text-sm font-bold mb-2">
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="jane@example.com"
                  className={`w-full p-3 border rounded-lg font-sans text-sm outline-none transition-all focus:ring-2 focus:ring-accent/40 focus:border-accent ${
                    errors.email ? "border-red-400 bg-red-50" : "border-border"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 font-sans">{errors.email.message}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="block font-sans text-sm font-bold mb-2">
                  Phone Number <span className="text-accent">*</span>
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+44 7000 000000"
                  className={`w-full p-3 border rounded-lg font-sans text-sm outline-none transition-all focus:ring-2 focus:ring-accent/40 focus:border-accent ${
                    errors.phone ? "border-red-400 bg-red-50" : "border-border"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 font-sans">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {serverError && (
              <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-600 font-sans">
                {serverError}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-white font-sans font-bold text-lg py-4 rounded-lg hover:bg-accent-hover transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Get My Free Guide"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
