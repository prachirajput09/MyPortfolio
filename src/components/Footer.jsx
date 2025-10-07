// 

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-6 md:px-12">
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
              Me!
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Let’s collaborate and bring your ideas to life.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Fill the form or reach me directly on my socials below.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a
              href="https://github.com/prachirajput09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-teal-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/prachirajput09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Form */}
        <form className="flex-1 bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-200 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg text-black text-lg focus:ring-2 focus:ring-teal-500 outline-none transition"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg text-black text-lg focus:ring-2 focus:ring-teal-500 outline-none transition"
          />
          <input
            type="text"
            placeholder="Your Phone No"
            className="w-full p-3 border border-gray-300 rounded-lg text-black text-lg focus:ring-2 focus:ring-teal-500 outline-none transition"
          />
          <textarea
            cols="30"
            rows="5"
            placeholder="Your Idea"
            className="w-full p-3 border border-gray-300 rounded-lg text-black text-lg resize-none focus:ring-2 focus:ring-teal-500 outline-none transition"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer Bottom Panel */}
      <div className="mt-12 border-t border-gray-300/70 pt-6 text-center text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <p>© {new Date().getFullYear()} Prachi Rajput. All rights reserved.</p>
          <a href="#" className="hover:text-teal-600 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

