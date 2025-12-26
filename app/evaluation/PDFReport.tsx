
"use client";

import html2pdf from "html2pdf.js";

type Props = {
  unlocked: boolean;
};

export default function PDFReport({ unlocked }: Props) {
  const generatePDF = () => {
    if (!unlocked) return;

    const element = document.getElementById("pdf-content");
    if (!element) return;

    html2pdf()
      .set({
        margin: 10,
        filename: "Assessment_Report.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  return (
    <div className="space-y-4">
      <div className="relative border rounded-lg overflow-hidden">
        {/* Watermark */}
        {!unlocked && (
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <p className="text-5xl font-bold text-gray-300 rotate-[-30deg]">
              PREVIEW ONLY
            </p>
          </div>
        )}

        {/* PDF Content */}
        <div
          id="pdf-content"
          className={`p-8 bg-white ${
            !unlocked ? "blur-sm select-none" : ""
          }`}
        >
          <h1 className="text-2xl font-semibold mb-4">
            Assessment Score Report
          </h1>

          <p className="mb-2">Candidate Name: Monika Singh</p>
          <p className="mb-2">Personality Score: 72 / 100</p>
          <p className="mb-2">Coding Score: 138 / 200</p>
          <p className="mb-6 font-medium">
            Final Status: Recommended
          </p>

          <h2 className="font-semibold mb-2">Remarks</h2>
          <p className="text-sm text-gray-700">
            This report summarizes automated evaluation based on
            problem-solving ability, behavioral consistency, and
            plagiarism indicators.
          </p>
        </div>
      </div>

      {/* Download Button */}
      <button
        disabled={!unlocked}
        onClick={generatePDF}
        className="px-6 py-2 rounded bg-indigo-600 text-white disabled:bg-gray-400"
      >
        Download PDF
      </button>

      {!unlocked && (
        <p className="text-sm text-gray-500">
          Complete payment to unlock official PDF download.
        </p>
      )}
    </div>
  );
}
