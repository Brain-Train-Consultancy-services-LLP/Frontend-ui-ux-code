"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineUser, AiOutlineFileText, AiOutlineCode, AiOutlineBarChart, AiOutlineCreditCard } from "react-icons/ai";

export default function TestInstructionsPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  const handleStartTest = () => {
    if (agreed) router.push("/test/personality");
  };

  const steps = [
    { label: "Registration", icon: <AiOutlineUser /> },
    { label: "Personality Test", icon: <AiOutlineFileText /> },
    { label: "Coding Test", icon: <AiOutlineCode /> },
    { label: "Score Evaluation", icon: <AiOutlineBarChart /> },
    { label: "Payment / Reattempt", icon: <AiOutlineCreditCard /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-10 space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Test Instructions</h1>
          <p className="text-gray-600 text-lg">Read carefully before starting the assessment</p>
        </div>

        {/* Stepper */}
        <div className="relative flex items-center justify-between mb-8">
          {/* Horizontal line */}
          <div className="absolute top-5 left-5 right-5 h-0.5 bg-gray-300 z-0"></div>
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center relative z-10">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl">
                {step.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 mt-2 text-center">{step.label}</span>
            </div>
          ))}
        </div>

        {/* Important Rules */}
        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-2xl shadow-sm space-y-2">
          <h2 className="text-xl font-semibold text-red-800">Important Rules</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Do not use AI tools to answer questions.</li>
            <li>Plagiarism or copying is strictly prohibited.</li>
            <li>No random clicks or navigation to bypass questions.</li>
            <li>Complete the test in one session once started.</li>
            <li>Maintain honesty and integrity throughout.</li>
          </ul>
        </div>

        {/* Tips */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-2xl shadow-sm space-y-1">
          <h2 className="text-xl font-semibold text-blue-800">Tips for Best Performance</h2>
          <p className="text-gray-700 text-sm">
            Ensure a distraction-free environment. Read each question carefully and answer honestly for accurate results.
          </p>
        </div>

        {/* Agreement */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="w-5 h-5 text-blue-600 rounded border-gray-300"
          />
          <label className="text-gray-700 text-sm">I have read and understood all rules and instructions</label>
        </div>

        {/* Start Button */}
        <div className="flex justify-center">
          <button
            onClick={handleStartTest}
            disabled={!agreed}
            className={`px-12 py-3  rounded-xl text-lg font-semibold transition transform shadow-md ${
              agreed
                ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
}
