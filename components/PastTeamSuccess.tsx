"use client";

import { pastTeamSuccess } from "@/lib/data";

export default function PastTeamSuccess() {
  return (
    <section className="w-full py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Past Team Success
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            Alumni from our past teams who have successfully progressed
            into professional roles across leading organizations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pastTeamSuccess.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm 
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Name */}
              <h3 className="text-xl font-semibold text-slate-800">
                {member.name}
              </h3>

              {/* Divider */}
              <div className="h-px bg-slate-100 my-4" />

              {/* Alumni */}
              <p className="text-sm text-slate-600">
                Alumni.{" "}
                <span className="font-medium text-slate-800">
                  {member.alumni}
                </span>
              </p>

              {/* Placement */}
              <p className="text-sm text-slate-600 mt-1">
                Placed At.{" "}
                <span className="font-medium text-slate-800">
                  {member.placedAt}
                </span>
              </p>

              {/* Status */}
              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-green-700">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Verified Success
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
