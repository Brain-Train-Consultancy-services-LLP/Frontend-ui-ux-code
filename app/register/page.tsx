"use client";

import React, { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { loadScript } from "@/utils/loadScript";

declare global {
  interface Window {
    grecaptcha: {
      render: (container: string, options: { sitekey: string }) => number;
      getResponse: () => string;
      reset: () => void;
    };
  }
}

type CategoryType = "intern" | "contributor" | "";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [category, setCategory] = useState<CategoryType>("");
  const [cooldown, setCooldown] = useState(0);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const recaptchaWidgetRef = useRef<number | null>(null);

  /* ----------------------------- */
  /* Load reCAPTCHA */
  /* ----------------------------- */

  useEffect(() => {
    loadScript("https://www.google.com/recaptcha/api.js", "recaptcha-script");

    const interval = setInterval(() => {
      if (window.grecaptcha && recaptchaWidgetRef.current === null) {
        try {
          recaptchaWidgetRef.current = window.grecaptcha.render(
            "recaptcha-v2-container",
            {
              sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",
            }
          );
          clearInterval(interval);
        } catch (err) {
          console.error("reCAPTCHA error:", err);
        }
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  /* ----------------------------- */
  /* Cooldown timer */
  /* ----------------------------- */

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown(cooldown - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  /* ----------------------------- */
  /* Submit */
  /* ----------------------------- */

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const captchaToken = window.grecaptcha.getResponse();
    if (!captchaToken) {
      alert("Please verify reCAPTCHA");
      return;
    }

    if (!acceptedTerms) {
      alert("You must accept the Terms of Service to continue");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("captcha", captchaToken);
    formData.append("accepted_terms", "true");

    try {
      const res = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        body: formData,
      });

      const data: { success?: boolean; message?: string } = await res.json();

      if (data.success) {
        setSuccess(true);
        setCooldown(30);
      } else {
        alert(data.message || "Registration failed");
        window.grecaptcha.reset();
        setCooldown(30);
      }
    } catch (error) {
      alert("Server error. Try again later.");
      console.error(error);
      setCooldown(30);
    } finally {
      setLoading(false);
    }
  }

  /* ----------------------------- */
  /* UI */
  /* ----------------------------- */

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg border border-gray-200 p-8">

        {/* Org Branding */}
        <div className="text-center mb-8">
          <div className="text-xl font-semibold text-gray-900">
            Brain Train Consultancy Services LLP 
          </div>
          <div className="text-xs text-gray-500">
            Secure organizational onboarding
          </div>
        </div>

         {success ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold">
              Check your email for verification
            </h2>
          </div>
        ) : (
          /* ----------------------------- */
          /* Form */
          /* ----------------------------- */
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Honeypot */}
            <input
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <Input label="Full Name" name="full_name" />
            <Input
              label="Email Address"
              name="email"
              type="email"
            />


            <Input label="GitHub Profile" name="github" />
            <Input label="Country" name="country" />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Registration Type
              </label>
              <select
                name="category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value as CategoryType)}
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select type</option>
                <option value="intern">Intern</option>
                <option value="contributor">Contributor</option>
              </select>
            </div>

            {category && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Division
                </label>
                <select
                  name="division"
                  required
                  className="w-full border border-gray-300 px-4 py-2.5 rounded-lg"
                >
                  <option value="">Select division</option>
                  <option>Software Development</option>
                  <option>AI / ML</option>
                  <option>Data Analytics</option>
                  <option>Engineering Tools</option>
                </select>
              </div>
            )}

            <Input
              label="Weekly Availability (hours)"
              name="availability"
              type="number"
              min="1"
            />

            <div id="recaptcha-v2-container" className="flex justify-center" />

             {/* Terms */}
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1 h-4 w-4"
              />
              <p>
                I agree to the{" "}
                <a href="/terms" target="_blank" className="text-blue-700 font-medium">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" target="_blank" className="text-blue-700 font-medium">
                  Privacy Policy
                </a>
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || cooldown > 0}
              className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-gray-400 text-white py-3 rounded-lg font-medium transition flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Processing
                </>
              ) : cooldown > 0 ? (
                `Retry in ${cooldown}s`
              ) : (
                "Submit"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ----------------------------- */
/* Reusable Input Component */
/* ----------------------------- */

type InputProps = {
  label: string;
  name: string;
  type?: string;
  min?: string | number;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

function Input({
  label,
  name,
  type = "text",
  min,
  onBlur,
}: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        name={name}
        type={type}
        min={min}
        required
        onBlur={onBlur}
        className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
}
