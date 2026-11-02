"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckCircle, Loader2, ArrowRight, ShieldCheck } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Phone is required"),
});

type FormData = z.infer<typeof schema>;

interface RequestFormProps {
  source?: string;
  compact?: boolean;
}

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

export function RequestForm({ source = "Homepage Form", compact = false }: RequestFormProps) {
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
        body: JSON.stringify({ ...data, message: `Request from: ${source}` }),
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

  if (isSuccess) {
    return (
      <div className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-8 text-center flex flex-col items-center gap-3.5 text-primary animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
          <CheckCircle size={30} />
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold mb-1.5 text-primary">Free Guide on Its Way!</h3>
          <p className="font-sans text-xs sm:text-sm text-secondary leading-relaxed max-w-sm">
            Thank you! Your publishing blueprint will be sent shortly. A publishing advisor will reach out within 1 business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${compact ? 'space-y-2.5' : 'space-y-4'} text-primary`} noValidate>
      {/* Row 1: Names */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block font-sans text-xs font-bold text-secondary mb-1.5 uppercase tracking-wider">
            First Name <span className="text-accent">*</span>
          </label>
          <input
            {...register("firstName")}
            type="text"
            placeholder="Jane"
            className={`w-full ${compact ? 'px-3 py-2 text-xs sm:text-sm rounded-lg' : 'p-3 text-sm rounded-xl'} border font-sans outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/30 focus:border-accent ${
              errors.firstName ? "border-red-400 bg-red-50/50" : "border-border bg-white hover:border-gray-400"
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1 font-sans">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="block font-sans text-xs font-bold text-secondary mb-1.5 uppercase tracking-wider">
            Last Name <span className="text-accent">*</span>
          </label>
          <input
            {...register("lastName")}
            type="text"
            placeholder="Smith"
            className={`w-full ${compact ? 'px-3 py-2 text-xs sm:text-sm rounded-lg' : 'p-3 text-sm rounded-xl'} border font-sans outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/30 focus:border-accent ${
              errors.lastName ? "border-red-400 bg-red-50/50" : "border-border bg-white hover:border-gray-400"
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1 font-sans">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Row 2: Email and Phone */}
      <div className={compact ? "grid grid-cols-1 sm:grid-cols-2 gap-3" : "space-y-4"}>
        <div>
          <label className="block font-sans text-xs font-bold text-secondary mb-1.5 uppercase tracking-wider">
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="jane@example.com"
            className={`w-full ${compact ? 'px-3 py-2 text-xs sm:text-sm rounded-lg' : 'p-3 text-sm rounded-xl'} border font-sans outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/30 focus:border-accent ${
              errors.email ? "border-red-400 bg-red-50/50" : "border-border bg-white hover:border-gray-400"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 font-sans">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block font-sans text-xs font-bold text-secondary mb-1.5 uppercase tracking-wider">
            Phone Number <span className="text-accent">*</span>
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+44 7000 000000"
            className={`w-full ${compact ? 'px-3 py-2 text-xs sm:text-sm rounded-lg' : 'p-3 text-sm rounded-xl'} border font-sans outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/30 focus:border-accent ${
              errors.phone ? "border-red-400 bg-red-50/50" : "border-border bg-white hover:border-gray-400"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1 font-sans">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-xs text-red-600 font-sans">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-accent text-white font-sans font-bold ${
          compact ? 'py-2.5 text-xs sm:text-sm mt-1 rounded-lg' : 'py-3.5 text-sm sm:text-base mt-2 rounded-xl'
        } hover:bg-accent-hover transition-colors shadow-xs flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer active:scale-[0.99]`}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Sending Request...</span>
          </>
        ) : (
          <>
            <span>Get My Free Publishing Guide</span>
            <ArrowRight size={16} />
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-1.5 text-xs text-secondary/80 pt-1">
        <ShieldCheck size={14} className="text-accent" />
        <span>100% Confidential • Zero Spam Guarantee • Free Consultation</span>
      </div>
    </form>
  );
}
