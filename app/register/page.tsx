/*"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// INITIAL FORM STATE
const initialData = {
  name: "",
  email: "",
  mobile: "",
  role: "",
  domain: "",
  github_username: "",
};

export default function RegisterWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});


  // Update data
  const update = (field: any) => {
    setData({ ...data, ...field });
  };

  // VALIDATION PER STEP
  const validateStep = () => {
    let err: any = {};

    if (step === 1) {
      if (!data.name) err.name = "Name is required";
      if (!data.email || !data.email.includes("@"))
        err.email = "Enter a valid email";
      if (!data.mobile || data.mobile.length < 10)
        err.mobile = "Enter a valid mobile number";
    }

    if (step === 2 && !data.role) err.role = "Please select a role";

    if (step === 3 && !data.domain) err.domain = "Select your domain";

    if (step === 4 && !data.github_username)
      err.github_username = "GitHub username required";

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep(step + 1);
  };

  const back = () => {
    if (step > 1) setStep(step - 1);
  };

  // SUBMIT TO BACKEND
  const submitData = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/thank-you");
    } else {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-2xl p-8">

       
        <div className="flex justify-between mb-6 text-sm font-semibold text-gray-500">
          <span className={step >= 1 ? "text-indigo-600" : ""}>1. Details</span>
          <span className={step >= 2 ? "text-indigo-600" : ""}>2. Role</span>
          <span className={step >= 3 ? "text-indigo-600" : ""}>3. Domain</span>
          <span className={step >= 4 ? "text-indigo-600" : ""}>4. GitHub</span>
          <span className={step >= 5 ? "text-indigo-600" : ""}>5. Summary</span>
        </div>

        <hr className="mb-6" />

       
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Step 1 — Personal Details
            </h2>

            <div className="mb-4">
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => update({ name: e.target.value })}
                className="border p-2 rounded w-full"
                placeholder="Enter your full name"
              />
              {errors["name"] && <p className="text-red-500">{errors["name"]}</p>}
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => update({ email: e.target.value })}
                className="border p-2 rounded w-full"
                placeholder="Enter your email"
              />
              {errors["email"] && <p className="text-red-500">{errors["email"]}</p>}
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">Mobile Number</label>
              <input
                type="text"
                value={data.mobile}
                onChange={(e) => update({ mobile: e.target.value })}
                className="border p-2 rounded w-full"
                placeholder="Enter mobile number"
              />
              {errors["mobile"] && (
                <p className="text-red-500">{errors["mobile"]}</p>
              )}
            </div>
          </div>
        )}


        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Step 2 — Select Role
            </h2>

            <select
              className="border p-2 rounded w-full"
              value={data.role}
              onChange={(e) => update({ role: e.target.value })}
            >
              <option value="">Select Role</option>
              <option value="mentor">Mentor Registration</option>
              <option value="fresh_grad">Fresh Graduate</option>
              <option value="senior_philanthropy">
                Senior Professional (Philanthropy)
              </option>
            </select>

            {errors["role"] && <p className="text-red-500">{errors["role"]}</p>}
          </div>
        )}

        
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Step 3 — Choose your Domain
            </h2>

            <select
              className="border p-2 rounded w-full"
              value={data.domain}
              onChange={(e) => update({ domain: e.target.value })}
            >
              <option value="">Select Domain</option>
              <option value="ai-ml-it">AI & ML - IT</option>
              <option value="ai-ml-mechanical">AI & ML - Mechanical</option>
              <option value="ai-ml-electronics">AI & ML - Electronics</option>
              <option value="ai-ml-biotech">AI & ML - Biotechnology</option>
            </select>

            {errors["domain"] && (
              <p className="text-red-500">{errors["domain"]}</p>
            )}
          </div>
        )}

        
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Step 4 — GitHub Username
            </h2>

            <input
              type="text"
              value={data.github_username}
              onChange={(e) => update({ github_username: e.target.value })}
              className="border p-2 rounded w-full"
              placeholder="Enter GitHub username"
            />
            {errors["github_username"] && (
              <p className="text-red-500">{errors["github_username"]}</p>
            )}
          </div>
        )}


        {step === 5 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Step 5 — Review & Submit
            </h2>

            <div className="bg-gray-50 p-4 rounded">
              <p><strong>Name:</strong> {data.name}</p>
              <p><strong>Email:</strong> {data.email}</p>
              <p><strong>Mobile:</strong> {data.mobile}</p>
              <p><strong>Role:</strong> {data.role}</p>
              <p><strong>Domain:</strong> {data.domain}</p>
              <p><strong>GitHub:</strong> {data.github_username}</p>
            </div>
          </div>
        )}

       
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={back}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Back
            </button>
          )}

          {step < 5 && (
            <button
              onClick={next}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Continue
            </button>
          )}

          {step === 5 && (
            <button
              onClick={submitData}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Submit Registration
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
*/
/*

"use client";

import React, { useState, useEffect, useRef } from "react";

function RegisterFormInner() {
  const [loading, setLoading] = useState(false);
  const v2WidgetRef = useRef<number | null>(null);

  useEffect(() => {
    // Load v2 explicitly
    const id = setInterval(() => {
      if ((window as any).grecaptcha && !v2WidgetRef.current) {
        v2WidgetRef.current = (window as any).grecaptcha.render(
          "recaptcha-v2-container",
          {
            sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
          }
        );
        clearInterval(id);
      }
    }, 500);

    return () => clearInterval(id);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const token = (window as any).grecaptcha.getResponse();
    if (!token) {
      alert("Please verify reCAPTCHA checkbox");
      return;
    }

    setLoading(true);
    const form = document.getElementById("reg-form") as HTMLFormElement;
    const fd = new FormData(form);
    fd.append("captcha", token);

    const res = await fetch("/api/register/", {
      method: "POST",
      body: fd,
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert("Registered successfully!");
    } else {
      alert("Captcha failed or invalid");
      (window as any).grecaptcha.reset();
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Candidate Registration
        </h1>

        <form id="reg-form" onSubmit={handleSubmit} className="space-y-4">
          
          <input
            name="fullname_hidden"
            autoComplete="off"
            tabIndex={-1}
            style={{ display: "none" }}
          />

          <input name="name" required placeholder="Full Name" className="w-full border px-3 py-2 rounded" />
          <input name="email" required type="email" placeholder="Email" className="w-full border px-3 py-2 rounded" />
          <input name="github" required placeholder="GitHub Username" className="w-full border px-3 py-2 rounded" />
          <input name="college" required placeholder="College / Experience" className="w-full border px-3 py-2 rounded" />

          <select name="domain" required className="w-full border px-3 py-2 rounded">
            <option value="">Select Domain</option>
            <option>AI / ML</option>
            <option>Computer Science</option>
            <option>Mechanical</option>
            <option>Electrical / EEE</option>
          </select>

          <select name="stack" required className="w-full border px-3 py-2 rounded">
            <option value="">Preferred Stack</option>
            <option>MERN</option>
            <option>Python + FastAPI</option>
            <option>Django + React</option>
          </select>

          <input
            name="availability"
            required
            type="number"
            placeholder="Hours per week"
            className="w-full border px-3 py-2 rounded"
          />

         
          <div id="recaptcha-v2-container" className="flex justify-center mt-3 mb-2" />

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            {loading ? "Please wait..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <>
   
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>

      <RegisterFormInner />
    </>
  );
}
*/

/*
"use client";

import React, { useEffect, useRef, useState } from "react";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const v2WidgetRef = useRef<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      if ((window as any).grecaptcha && !v2WidgetRef.current) {
        v2WidgetRef.current = (window as any).grecaptcha.render(
          "recaptcha-v2-container",
          { sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY! }
        );
        clearInterval(id);
      }
    }, 400);

    return () => clearInterval(id);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const token = (window as any).grecaptcha.getResponse();
    if (!token) {
      alert("Please complete reCAPTCHA");
      return;
    }

    setLoading(true);
    const fd = new FormData(e.target as HTMLFormElement);
    fd.append("captcha", token);

    const res = await fetch("/api/register", { method: "POST", body: fd });
    const data = await res.json();
    setLoading(false);

    if (data.success) alert("Registered Successfully!");
    else {
      alert("Captcha failed. Try again.");
      (window as any).grecaptcha.reset();
    }
  }

  return (
    <>
      <script src="https://www.google.com/recaptcha/api.js" async defer />

      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-5">
        <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-center mb-2">Global Registration</h1>
          <p className="text-center text-gray-600 text-sm mb-6">
            Select correctly: Portfolio Intern (Paid) or External Contributor (Free)
          </p>

          <form id="reg-form" onSubmit={handleSubmit} className="space-y-4">

    
            <input
              name="bot_field"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <input name="full_name" required placeholder="Full Name" className="w-full border px-3 py-2 rounded" />
            <input name="email" required type="email" placeholder="Email Address" className="w-full border px-3 py-2 rounded" />
            <input name="github" required placeholder="GitHub Profile Link" className="w-full border px-3 py-2 rounded" />
            <input name="country" required placeholder="Country" className="w-full border px-3 py-2 rounded" />

            <select
              name="category"
              required
              className="w-full border px-3 py-2 rounded"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose Registration Type</option>
              <option value="intern">Portfolio Builder Intern (₹499 / $49)</option>
              <option value="contributor">External Collaborator / Contributor (Free)</option>
            </select>

            
            {category === "intern" && (
              <div className="border rounded p-3">
                <label className="font-semibold text-sm">Internship Specialization</label>
                <select name="intern_division" required className="w-full border px-3 py-2 rounded mt-1">
                  <option value="">Select Division</option>
                  <option>AI / ML</option>
                  <option>Full Stack</option>
                  <option>Mechanical</option>
                  <option>Electrical / Embedded</option>
                </select>

                <p className="text-xs text-gray-600 mt-2">
                  * NDA & IP Not Required. Portfolio code belongs to you.
                </p>
              </div>
            )}

            {category === "contributor" && (
              <div className="border rounded p-3">
                <label className="font-semibold text-sm">Contributor Division</label>
                <select name="contrib_division" required className="w-full border px-3 py-2 rounded mt-1">
                  <option value="">Select Division</option>
                  <option>AI / ML Contributor</option>
                  <option>Engineering Tools</option>
                  <option>Electronics / Mechanical</option>
                </select>

                <p className="text-xs text-gray-600 mt-2">
                  * NDA + IP + CLA Required. Will work only on non-confidential MVP initially.
                </p>
              </div>
            )}

            <input
              name="availability"
              required
              type="number"
              placeholder="Weekly Availability (Hours)"
              className="w-full border px-3 py-2 rounded"
            />

            
            <div id="recaptcha-v2-container" className="mt-4 flex justify-center" />

            <button
              disabled={loading}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded"
            >
              {loading ? "Submitting..." : "Submit Registration"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
*/

/*

"use client";

import React, { useEffect, useRef, useState } from "react";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const v2WidgetRef = useRef<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      if ((window as any).grecaptcha && !v2WidgetRef.current) {
        v2WidgetRef.current = (window as any).grecaptcha.render("recaptcha-v2-container", {
          sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        });
        clearInterval(id);
      }
    }, 400);

    return () => clearInterval(id);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const token = (window as any).grecaptcha.getResponse();
    if (!token) {
      alert("Please complete reCAPTCHA");
      return;
    }

    setLoading(true);
    const fd = new FormData(e.target as HTMLFormElement);
    fd.append("captcha", token);

    // 1️⃣ If FREE contributor → no payment → simple register
    if (category === "contributor") {
      const res = await fetch("http://127.0.0.1:8000/register", { method: "POST", body: fd });
      const data = await res.json();
      setLoading(false);

      if (data.success) {
        alert("Contributor Registration Successful!");
        window.location.href = "/dashboard";
      } else {
        alert("Captcha failed. Try again.");
        (window as any).grecaptcha.reset();
      }
      return;
    }

    // 2️⃣ If PAID intern → payment route
    if (category === "intern") {
      const res = await fetch("http://127.0.0.1:8000/create-subscription", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      setLoading(false);

      if (!data.subscription_id) {
        alert("Error creating subscription.");
        return;
      }

      if (!data.subscription_id) {
    alert("Error creating subscription.");
    return;
  }

  if (!(window as any).Razorpay) {
    alert("Payment window not ready. Refresh and try again.");
    return;
  }

   
  const rzp = new (window as any).Razorpay({
    key: data.key,
    subscription_id: data.subscription_id,
    name: "BrainTrain Internship Program",
    description: "5-Day Trial → Auto Activation",
    theme: { color: "#0A57D9" },
    handler: function () {
      alert("Welcome! 5-Day Trial Activated 🎉");
      window.location.href = "/dashboard";
    },
    modal: { ondismiss: () => alert("Payment closed.") },
  });

  rzp.open();
     
  }

  return (
    <>
      <script src="https://www.google.com/recaptcha/api.js" async defer />
      <script src="https://checkout.razorpay.com/v1/checkout.js" async defer />

      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-5">
        <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-center mb-2">Global Registration</h1>
          <p className="text-center text-gray-600 text-sm mb-6">
            Select correctly: Intern (Trial + Paid) or Contributor (Free)
          </p>

          <form id="reg-form" onSubmit={handleSubmit} className="space-y-4">
            <input name="bot_field" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <input name="full_name" required placeholder="Full Name" className="w-full border px-3 py-2 rounded" />
            <input name="email" required type="email" placeholder="Email Address" className="w-full border px-3 py-2 rounded" />
            <input name="github" required placeholder="GitHub Profile Link" className="w-full border px-3 py-2 rounded" />
            <input name="country" required placeholder="Country" className="w-full border px-3 py-2 rounded" />

            <select name="category" required className="w-full border px-3 py-2 rounded"
              onChange={(e) => setCategory(e.target.value)}>
              <option value="">Choose Registration Type</option>
              <option value="intern">Portfolio Builder Intern (₹499 / $49)</option>
              <option value="contributor">External Contributor (Free)</option>
            </select>

            {category === "intern" && (
              <div className="border rounded p-3 bg-blue-50">
                <label className="font-semibold text-sm">Internship Specialization</label>
                <select name="intern_division" required className="w-full border px-3 py-2 rounded mt-1">
                  <option value="">Select Division</option>
                  <option>AI / ML</option>
                  <option>Full Stack</option>
                  <option>Mechanical</option>
                  <option>Embedded</option>
                </select>
                <p className="text-xs text-blue-700 mt-2 font-medium">
                  * 5-Day Trial → Auto Billing on Day 6
                </p>
              </div>
            )}

            {category === "contributor" && (
              <div className="border rounded p-3 bg-green-50">
                <label className="font-semibold text-sm">Contributor Division</label>
                <select name="contrib_division" required className="w-full border px-3 py-2 rounded mt-1">
                  <option value="">Select Division</option>
                  <option>AI / ML</option>
                  <option>Engineering Tools</option>
                  <option>Electronics</option>
                </select>
                <p className="text-xs text-green-700 mt-2 font-medium">
                  * Zero billing. Access depends on contribution activity.
                </p>
              </div>
            )}

            <input
              name="availability"
              required
              type="number"
              placeholder="Weekly Availability (Hours)"
              className="w-full border px-3 py-2 rounded"
            />

            <div id="recaptcha-v2-container" className="mt-4 flex justify-center" />

            <button
              disabled={loading}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded"
            >
              {loading ? "Processing..." : category === "intern" ? "Start Trial & Pay" : "Submit Registration"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}*/


"use client";

import React, { useEffect, useRef, useState } from "react";
import { loadScript } from "@/utils/loadScript"
import { generateQRCodeDataURL } from "@/utils/generateQRCode";
import { CreditCard, QrCode, Loader2 } from "lucide-react";
import Image from "next/image";
import qrCodeUrl from "@/public/assets/images/qrcode.png";

declare global {
  interface Window {
    grecaptcha: any;
    Razorpay: any;
  }
}

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
    const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"razorpay" | "qr">(
    "razorpay"
  );
  const v2WidgetRef = useRef<number | null>(null);

  useEffect(() => {
    loadScript("https://www.google.com/recaptcha/api.js", "recaptcha-script");
    loadScript("https://checkout.razorpay.com/v1/checkout.js", "razorpay-script");

    const id = setInterval(() => {
      if (window.grecaptcha && !v2WidgetRef.current) {
        try {
          v2WidgetRef.current = window.grecaptcha.render("recaptcha-v2-container", {
            sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",
          });
          clearInterval(id);
        } catch (error) {
          console.error("reCAPTCHA render error:", error);
        }
      }
    }, 400);

    return () => clearInterval(id);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const token = (window as any).grecaptcha.getResponse();
    if (!token) {
      alert("Please complete reCAPTCHA");
      return;
    }

    setLoading(true);
    const fd = new FormData(e.target as HTMLFormElement);
    fd.append("captcha", token);

    // ============ FREE CONTRIBUTOR =============
    if (category === "contributor") {
      const res = await fetch("http://127.0.0.1:8000/register", { method: "POST", body: fd });
      const data = await res.json();
      setLoading(false);

      if (data.success) {
        alert("Contributor Registration Successful!");
        window.location.href = "/dashboard";
      } else {
        alert("Captcha failed. Try again.");
        (window as any).grecaptcha.reset();
      }
      return;
    }

    // ============ PAID INTERN (TRIAL + SUBSCRIPTION) =============
    if (category === "intern") {
      const res = await fetch("http://127.0.0.1:8000/create-subscription", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      setLoading(false);

      if (!data.subscription_id) {
        alert("Error creating subscription.");
        return;
      }
       if (data.qr_code_data) {
          const qrUrl = await generateQRCodeDataURL(data.qr_code_data);
          setQrCodeUrl(qrUrl);
        }

        if (paymentMethod === 'qr') {
          setShowQRCode(true);
          return;
        }

      // Razorpay must be loaded
      if (!(window as any).Razorpay) {
        alert("Payment window not ready. Refresh and try again.");
        return;
      }

      const rzp = new (window as any).Razorpay({
        key: data.key,
        subscription_id: data.subscription_id,
        name: "BrainTrain Internship Program",
        description: "5-Day Trial → Auto Activation",
        theme: { color: "#0A57D9" },
        handler: function () {
          alert("Welcome! 5-Day Trial Activated 🎉");
          window.location.href = "/dashboard";
        },
        modal: { ondismiss: () => alert("Payment closed.") },
      });

      rzp.open();
    }
  }
return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-5">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Global Registration</h1>
          <p className="text-gray-600 text-sm">
            Select correctly: Intern (Trial + Paid) or Contributor (Free)
          </p>
        </div>

        {showQRCode && qrCodeUrl ? (
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <QrCode className="w-12 h-12 text-blue-700" />
            </div>
            <h2 className="text-xl font-semibold">Scan to Pay</h2>
            <div className="bg-white p-4 rounded-lg border-2 border-blue-200 inline-block">
              <Image
                src={qrCodeUrl}
                width={256}
                height={256}
                alt="Payment QR Code"
                className="w-64 h-64"
/>
            </div>
            <p className="text-sm text-gray-600">
              Scan this QR code with any UPI app to complete payment
            </p>
            <button
              onClick={() => setShowQRCode(false)}
              className="text-blue-700 hover:text-blue-800 text-sm font-medium"
            >
              Back to form
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="bot_field"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                name="full_name"
                required
                placeholder="Enter your full name"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                name="email"
                required
                type="email"
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GitHub Profile
              </label>
              <input
                name="github"
                required
                placeholder="https://github.com/username"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <input
                name="country"
                required
                placeholder="Enter your country"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Registration Type
              </label>
              <select
                name="category"
                required
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose Registration Type</option>
                <option value="intern">Portfolio Builder Intern (₹499 / $49)</option>
                <option value="contributor">External Contributor (Free)</option>
              </select>
            </div>

            {category === 'intern' && (
              <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50 space-y-3">
                <label className="block text-sm font-semibold text-gray-800">
                  Internship Specialization
                </label>
                <select
                  name="intern_division"
                  required
                  className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                >
                  <option value="">Select Division</option>
                  <option>AI / ML</option>
                  <option>Full Stack</option>
                  <option>Mechanical</option>
                  <option>Embedded</option>
                </select>

                <div className="mt-4">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Payment Method
                  </label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('razorpay')}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border-2 transition ${
                        paymentMethod === 'razorpay'
                          ? 'border-blue-700 bg-blue-700 text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-blue-500'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span className="text-sm font-medium">Card/UPI</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('qr')}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border-2 transition ${
                        paymentMethod === 'qr'
                          ? 'border-blue-700 bg-blue-700 text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-blue-500'
                      }`}
                    >
                      <QrCode className="w-4 h-4" />
                      <span className="text-sm font-medium">QR Code</span>
                    </button>
                  </div>
                </div>

                <p className="text-xs text-blue-800 font-medium">
                  * 5-Day Trial → Auto Billing on Day 6
                </p>
              </div>
            )}

            {category === 'contributor' && (
              <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50 space-y-3">
                <label className="block text-sm font-semibold text-gray-800">
                  Contributor Division
                </label>
                <select
                  name="contrib_division"
                  required
                  className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                >
                  <option value="">Select Division</option>
                  <option>AI / ML</option>
                  <option>Engineering Tools</option>
                  <option>Electronics</option>
                </select>
                <p className="text-xs text-green-800 font-medium">
                  * Zero billing. Access depends on contribution activity.
                </p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Weekly Availability (Hours)
              </label>
              <input
                name="availability"
                required
                type="number"
                min="1"
                placeholder="e.g., 10"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div id="recaptcha-v2-container" className="flex justify-center my-4" />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-gray-400 text-white font-medium py-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <span>
                  {category === 'intern' ? 'Start Trial & Pay' : 'Submit Registration'}
                </span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

