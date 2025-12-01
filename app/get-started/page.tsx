/*"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GetStartedPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("http://127.0.0.1:8000/partnership-registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log("Backend Error:", errorData);
      alert("❌ Submission failed.");
      return;
    }

    alert("✅ Partnership request submitted successfully!");

    setFormData({
      name: "",
      email: "",
      organization: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    alert("❌ Cannot connect to server!");
  }
};


  return (
    <>
    
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 px-6">
     
        <section className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get Started with Brain Train Consultancy Services LLP
          </h1>
          <p className="text-gray-700 text-lg">
            Whether you’re a student, innovator, or enterprise partner — we help
            you learn, build, and grow smarter.
          </p>
        </section>

        <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Join Bootcamp",
              desc: "Upskill with our tech and AI-focused bootcamps led by industry mentors.",
              link: "/bootcamps",
            },
            {
              title: "Launch MVP",
              desc: "Turn your startup idea into a Minimum Viable Product (MVP) with expert guidance.",
              link: "/mvps",
            },
            {
              title: "Apply for Internship",
              desc: "Gain real-world experience and work with top mentors on exciting projects.",
              link: "/internships",
            },
          ].map((card) => (
            <a
              key={card.title}
              href={card.link}
              className="group bg-white shadow-md border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition">
                {card.title}
              </h2>
              <p className="text-gray-600 mb-4">{card.desc}</p>
              <span className="inline-block px-5 py-2 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition">
                Explore
              </span>
            </a>
          ))}
        </section>


        <section className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Partner or Collaborate with Us 🤝
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Interested in partnerships, consultancy, or collaborations? Fill out
            the form below and our team will connect with you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900 "
              />
            </div>

            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Organization / Company (optional)"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900"
            />

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>


        <div className="text-center mt-16 text-gray-600">
          <p>
            Ready to begin your journey?{" "}
            <a
              href="/bootcamps"
              className="text-indigo-600 font-medium hover:underline"
            >
              Explore Bootcamps
            </a>{" "}
            or{" "}
            <a
              href="/contact"
              className="text-indigo-600 font-medium hover:underline"
            >
              Contact Us
            </a>
            .
          </p>
        </div>
      </main>


      <Footer />
    </>
  );
};

export default GetStartedPage;
*/


"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const GetStartedPage: React.FC = () => {
  const [status, setStatus] = useState<{ type: string; message: string } | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/partnership-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setStatus({ type: "error", message: "Submission failed. Try again." });
        return;
      }

      setStatus({ type: "success", message: "Your request was submitted successfully." });

      setFormData({ name: "", email: "", organization: "", message: "" });

      setTimeout(() => setStatus(null), 4000);
    } catch {
      setStatus({ type: "warning", message: "Server not responding. Please try later." });
    }
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50 pt-28 px-6">
        <section className="text-center max-w-4xl mx-auto mb-16">
             <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get Started with Brain Train Consultancy Services LLP
          </h1>
          <p className="text-gray-700 text-lg mt-2">
            Whether you’re a student, innovator, or enterprise partner — we help
            you learn, build, and grow smarter.
          </p>
        </section>

        <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Join Bootcamp",
              desc: "Upskill with our tech and AI-focused bootcamps led by industry mentors.",
              link: "/bootcamps",
            },
            {
              title: "Launch MVP",
              desc: "Turn your startup idea into a Minimum Viable Product (MVP) with expert guidance.",
              link: "/mvps",
            },
            {
              title: "Apply for Internship",
              desc: "Gain real-world experience and work with top mentors on exciting projects.",
              link: "/internships",
            },
          ].map((card) => (
            <a
              key={card.title}
              href={card.link}
              className="group bg-white shadow-md border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition">
                {card.title}
              </h2>
              <p className="text-gray-600 mb-4">{card.desc}</p>
              <span className="inline-block px-5 py-2 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition">
                Explore
              </span>
            </a>
          ))}
        </section>


        <section className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-2xl border border-gray-100">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Partner or Collaborate with Us 🤝
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Interested in partnerships, consultancy, or collaborations? Fill out
            the form below and our team will connect with you.

          </p>

          {status && (
            <div
              className={`flex items-center gap-3 text-sm p-4 rounded-md mb-6 animate-[fadeIn_0.3s_ease] ${
                status.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-300"
                  : status.type === "error"
                  ? "bg-red-50 text-red-700 border border-red-300"
                  : "bg-yellow-50 text-yellow-700 border border-yellow-300"
              }`}
            >
              {status.type === "success" && <CheckCircle className="w-5 h-5" />}
              {status.type === "error" && <XCircle className="w-5 h-5" />}
              {status.type === "warning" && <AlertTriangle className="w-5 h-5" />}
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                 className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900 "

              />
            </div>

            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Organization (Optional)"
               className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900 "

            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900"

            />

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3  bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition"

              >
                Submit Request
              </button>
            </div>
          </form>
        </section>

           <div className="text-center mt-16 text-gray-600">
          <p>
            Ready to begin your journey?{" "}
            <a
              href="/bootcamps"
              className="text-indigo-600 font-medium hover:underline"
            >
              Explore Bootcamps
            </a>{" "}
            or{" "}
            <a
              href="/contact"
              className="text-indigo-600 font-medium hover:underline"
            >
              Contact Us
            </a>
            .
          </p>
        </div>

      </main>

      <Footer />
    </>
  );
};

export default GetStartedPage;
