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

type CategoryType = "Intern" | "Student" | "Instructor" | "";


export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [category, setCategory] = useState<CategoryType>("");
  const [cooldown, setCooldown] = useState(0);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [tosAccepted, setTosAccepted] = useState(false);
  const recaptchaWidgetRef = useRef<number | null>(null);

   /* Load ToS acceptance */
  useEffect(() => {
    const accepted = localStorage.getItem("tosAccepted");
    setTosAccepted(accepted === "true");
  }, []);

  /* ----------------------------- */
  /* Load reCAPTCHA */
  /* ----------------------------- */

  useEffect(() => {
    loadScript(
  "https://www.google.com/recaptcha/api.js?render=explicit",
  "recaptcha-script"
);


    const interval = setInterval(() => {
      if (
      typeof window !== "undefined" &&
      window.grecaptcha &&
      typeof window.grecaptcha.render === "function" &&
      recaptchaWidgetRef.current === null
    ){
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

     if (!tosAccepted || !acceptedTerms) {
      alert("Please accept the Terms of Service first");
      return;
    }

    setLoading(true);
  

    

    const form = new FormData(e.currentTarget);

    const payload = {
  name: form.get("name")?.toString().trim() || "",
  email: form.get("email")?.toString().trim().toLowerCase() || "",
  password: form.get("password")?.toString() || "",
  confirm_password: form.get("confirm_password")?.toString() || "",

   mobile_number:
    category === "Student"
      ? form.get("mobile_number")?.toString().trim() || null
      : null,

  github_profile:
    form.get("github_profile")?.toString().trim() || null,

  country: form.get("country")?.toString().trim() || "",

  registration_type:
    form.get("registration_type")?.toString() || "",

  internship_type: null,

  weekly_availability: form.get("weekly_availability")
    ? Number(form.get("weekly_availability"))
    : null,

  college: category === "Intern" ? form.get("college") || null : null,
  degree: category === "Intern" ? form.get("degree") || null : null,
  graduation_year:
    category === "Intern" && form.get("graduation_year")
      ? Number(form.get("graduation_year"))
      : null,

  selected_course:
    category === "Student" ? form.get("course") || null : null,

  domain_experience:
    category === "Instructor" && form.get("domain_years")
      ? Number(form.get("domain_years"))
      : null,

  teaching_experience:
    category === "Instructor" && form.get("teaching_years")
      ? Number(form.get("teaching_years"))
      : null,

  currently_employed:
    category === "Instructor"
      ? form.get("currently_employed") || null
      : null,

  demo_video_link:
    category === "Instructor"
      ? form.get("demo_video") || null
      : null,

  description:
    category === "Instructor"
      ? form.get("projects") || null
      : null,

  accepted_tos: true,

  address: {
    address_line: form.get("address_line") || "",
    city: form.get("city") || "",
    state: form.get("state") || "",
    postal_code: form.get("postal_code") || "",
    country: form.get("country") || "",
  },
   recaptcha_token: captchaToken,
};

    try {
      const res = await fetch("http://127.0.0.1:8000/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        window.location.href = "/login";
      } else {
        alert(data.detail || "Registration failed");
        window.grecaptcha.reset();
        setCooldown(30);
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
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
           <div className="text-center text-green-700 font-medium">
            Registration submitted successfully. You may be contacted shortly.
          </div>
        ) : (
          <>
          {/* ----------------------------- */}
          {/* Form */}
         { /* ----------------------------- */}

    

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Honeypot */}
            <input
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <Input label="Full Name" name="name" />
            <Input
              label="Email Address"
              name="email"
              type="email"
            />

            <Input label="Password" name="password" type="password" />
<Input label="Confirm Password" name="confirm_password" type="password" />


            <Input label="GitHub Profile" name="github_profile" />
            <Input label="Country" name="country" />

             {/* Postal Address */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-4">
              <div className="text-sm font-medium text-gray-700">
                Postal Address (for Internship Agreement)
              </div>

              <Input
                label="Address Line"
                name="address_line"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="City" name="city" />
                <Input label="State" name="state" />
              </div>

               <Input
                label="Postal Code (PIN)"
                name="postal_code"
                type="text"
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Registration Type
              </label>
              <select
                name="registration_type"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value as CategoryType)}
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-600"
              >
               <option value="">Select type</option>
              <option value="Intern">Intern (Internship)</option>
              <option value="Student">Student (Course)</option>
              <option value="Instructor">Instructor (Trainer)</option>


              </select>

              
            </div>
     
            {category === "Intern" && (
  <>
    <Input label="College / University" name="college" />
    <Input label="Degree / Branch" name="degree" />
    <Input label="Graduation Year" name="graduation_year" />
    
  </>
)}

{category === "Student" && (
  <>
    <div className="bg-gray-50 border p-4 rounded-lg">
      <label className="block text-sm font-medium mb-1">
        Select Course
      </label>

      <select
        name="course"
        required
        className="w-full border px-4 py-2 rounded-lg"
      >
        <option value="">Choose course</option>
        <option value="ai-business">AI Business Automation</option>
        <option value="ai-data">AI Data Analyst</option>
        <option value="ai-marketing">AI Marketing Intelligence</option>
      </select>
    </div>

    <Input label="Phone Number" name="mobile_number" />
  </>
)}
 
{/* INSTRUCTOR EXTRA */}
{category==="Instructor" && (
<div className="border rounded p-4 bg-blue-50 space-y-3">

<Input label="Domain Experience (years)" name="domain_years" type="number" />

<Input label="Teaching Experience (years)" name="teaching_years" type="number" />

<select name="currently_employed" required className="w-full border p-2 rounded">
<option value="">Currently Employed?</option>
<option value="no">No</option>
<option value="yes">Yes</option>
</select>

<Input label="Teaching Demo Video Link" name="demo_video" />

<label className="text-sm">Upload Credentials (PDF/Image)</label>
<input name="credentials" type="file" required />

<label className="text-sm">Realtime Project Description</label>
<textarea
name="projects"
required
className="w-full border p-2 rounded"
/>

</div>
)}

            <Input
              label="Weekly Availability (hours)"
              name="weekly_availability"
              type="number"
              min="1"
            />

            <div id="recaptcha-v2-container" className="flex justify-center" />

    
          {/* DIGITAL CONSENT SECTION */}
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <input
                  type="checkbox"
                  disabled={!tosAccepted}
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-1 h-4 w-4"
                />
                
               <p className="text-sm text-gray-700 leading-relaxed">
  I confirm that all information provided by me is true, complete, and accurate.
  I voluntarily apply for internship , student or instructor engagement with
  <span className="font-medium"> Brain Train Consultancy Services LLP</span>.
  I understand that this application does not constitute an offer of employment.
</p>

<p className="text-sm text-gray-700 leading-relaxed mt-2">
  By submitting this form, I provide my electronic consent and agree to the{" "}
  <a
    href="/terms"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 font-medium underline"
  >
    Master Terms of Service
  </a>{" "}
  including the Internship, Contributor, Trainer, Mentor, Developer Agreement,
  NDA, Intellectual Property, Revenue Share, Taxation, Termination, and Disclaimer
  clauses, as well as the{" "}
  <a
    href="/privacy"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 font-medium underline"
  >
    Privacy Policy
  </a>.
  <br />
  <span className="block mt-2">
    {tosAccepted ? (
      <span className="text-green-700 font-medium">
        ✔ I confirm that I have read and accepted the Master Terms of Service.
      </span>
    ) : (
      <span className="text-red-600">
        You must read and accept the{" "}
        <a
          href="/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline font-medium"
        >
          Master Terms of Service
        </a>{" "}
        before proceeding.
      </span>
    )}
  </span>
</p>


              </div>  
         
            <button
              type="submit"
              disabled={loading || cooldown > 0 || !tosAccepted || !acceptedTerms}
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

        
             </>
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