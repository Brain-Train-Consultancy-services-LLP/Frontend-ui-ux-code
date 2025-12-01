"use client";

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

  const [errors, setErrors] = useState({});

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

        {/* STEP INDICATOR */}
        <div className="flex justify-between mb-6 text-sm font-semibold text-gray-500">
          <span className={step >= 1 ? "text-indigo-600" : ""}>1. Details</span>
          <span className={step >= 2 ? "text-indigo-600" : ""}>2. Role</span>
          <span className={step >= 3 ? "text-indigo-600" : ""}>3. Domain</span>
          <span className={step >= 4 ? "text-indigo-600" : ""}>4. GitHub</span>
          <span className={step >= 5 ? "text-indigo-600" : ""}>5. Summary</span>
        </div>

        <hr className="mb-6" />

        {/* ------------- STEP 1: Email + Details --------------- */}
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

        {/* ------------- STEP 2: ROLE ---------------- */}
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

        {/* ------------- STEP 3: DOMAIN ---------------- */}
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

        {/* ------------- STEP 4: GITHUB ---------------- */}
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

        {/* ------------- STEP 5: SUMMARY ---------------- */}
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

        {/* BUTTONS */}
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

