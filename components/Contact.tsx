/*
"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative py-24  text-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        
      
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-300 text-lg">
            Have a question or want to schedule a consultation? Fill out the form and we will get back to you.
          </p>

          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-yellow-400 text-2xl" />
              <span>contact@braintrain.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-yellow-400 text-2xl" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
              <span>NIT Jalandhar, Punjab, India</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>

       
        <div className="h-96 rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400">
          <iframe
            title="BrainTrain Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.123456789!2d75.567890!3d31.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391aabcd12345678%3A0x1234567890abcdef!2sNIT%20Jalandhar!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

       
        <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-400/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full animate-bounce-slow"></div>
      </div>
    </section>
  );
};

export default Contact;*/

//bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900/90

"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    state: "",
    inquiryType: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting Brain Train Consultancy Services LLP!");
    console.log(formData);
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
          Take the First Step
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Contact us to learn how Brain Train Consultancy Services LLP can help
          deliver enterprise-grade AI & digital solutions that accelerate your progress.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 text-gray-900"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 text-gray-900"
          />

          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 text-gray-900"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 text-gray-900"
          />

          <input
            type="text"
            name="company"
            placeholder="Company *"
            value={formData.company}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 text-gray-900"
          />

          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title *"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 text-gray-900"
          />

          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 text-gray-900"
          >
            <option value="">State *</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Tamilnadu">Tamilnadu</option>
            <option value="Delhi">Delhi</option>
            <option value="Bihar">Bihar</option>
          </select>

          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 text-gray-900"
          >
            <option value="">Inquiry Type *</option>
            <option value="Consulting">Consulting</option>
            <option value="Training">Training</option>
            <option value="Partnership">Partnership</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 md:col-span-2 text-gray-900"
          />

          <div className="flex items-start space-x-3 md:col-span-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-sm text-gray-600">
              * I would like Brain Train Consultancy Services LLP to contact me based on
              the information provided above. For details, please see our{" "}
              <a href="/privacy" className="text-blue-700 underline">
                Privacy Policy
              </a>.
            </label>
          </div>

          <div className="flex justify-between items-center md:col-span-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Submit
            </button>

            <a
              href="#top"
              className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-6 py-2 rounded-lg font-medium transition"
            >
              Back to Top
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
