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

interface RequestFormProps {
  source?: string;
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

export function RequestForm({ source = "Homepage Form" }: RequestFormProps) {
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
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center flex flex-col items-center gap-4 text-primary">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
          <CheckCircle size={28} />
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold mb-1">Request Received!</h3>
          <p className="font-sans text-sm text-secondary">
            Thank you! We have received your details and our publishing expert will contact you within 1 business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-primary" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-sans text-xs font-bold text-secondary mb-1.5 uppercase tracking-wider">
            First Name <span className="text-accent">*</span>
          </label>
          <input
            {...register("firstName")}
            type="text"
            placeholder="Jane"
            className={`w-full p-2.5 border rounded-lg font-sans text-sm outline-none transition-all focus:ring-2 focus:ring-accent/40 focus:border-accent ${
              errors.firstName ? "border-red-400 bg-red-50" : "border-border bg-white"
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
            className={`w-full p-2.5 border rounded-lg font-sans text-sm outline-none transition-all focus:ring-2 focus:ring-accent/40 focus:border-accent ${
              errors.lastName ? "border-red-400 bg-red-50" : "border-border bg-white"
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1 font-sans">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block font-sans text-xs font-bold text-secondary mb-1.5 uppercase tracking-wider">
          Email Address <span className="text-accent">*</span>
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="jane@example.com"
          className={`w-full p-2.5 border rounded-lg font-sans text-sm outline-none transition-all focus:ring-2 focus:ring-accent/40 focus:border-accent ${
            errors.email ? "border-red-400 bg-red-50" : "border-border bg-white"
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
          className={`w-full p-2.5 border rounded-lg font-sans text-sm outline-none transition-all focus:ring-2 focus:ring-accent/40 focus:border-accent ${
            errors.phone ? "border-red-400 bg-red-50" : "border-border bg-white"
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1 font-sans">{errors.phone.message}</p>
        )}
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-xs text-red-600 font-sans">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-white font-sans font-bold text-sm py-3 rounded-lg hover:bg-accent-hover transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer mt-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Get My Free Guide"
        )}
      </button>
    </form>
  );
}
