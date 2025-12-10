
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
                <option value="intern">Portfolio Builder Intern (₹499)</option>
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
                  <option>AI Solutions</option>
                  <option>Software Development</option>
                  <option>Data Analytics</option>
                  <option>Automation & RPA</option>
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

