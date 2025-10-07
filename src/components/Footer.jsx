<<<<<<< HEAD
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
=======
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 md:px-12">
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-10 items-start justify-between">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Contact <span className="text-teal-700">Me!</span>
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            If you have any project in your mind.
          </p>
          <p className="text-sm text-gray-500">
            You can reach me through the contact form provided on this website...
          </p>
        </div>

        {/* Form */}
        <form className="flex-1 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md text-black text-lg"
          />
          <input
            type="text"
            placeholder="Your Email Address"
            className="w-full p-3 border border-gray-300 rounded-md text-black text-lg"
>>>>>>> 28216ec59a2d8f9e5d8e3a49fef5f6fe8271178c
          />
          <input
            type="text"
            placeholder="Your Phone No"
<<<<<<< HEAD
            className="w-full p-3 border border-gray-300 rounded-lg text-black text-lg focus:ring-2 focus:ring-teal-500 outline-none transition"
=======
            className="w-full p-3 border border-gray-300 rounded-md text-black text-lg"
>>>>>>> 28216ec59a2d8f9e5d8e3a49fef5f6fe8271178c
          />
          <textarea
            cols="30"
            rows="5"
<<<<<<< HEAD
            placeholder="Your Idea"
            className="w-full p-3 border border-gray-300 rounded-lg text-black text-lg resize-none focus:ring-2 focus:ring-teal-500 outline-none transition"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition"
=======
            placeholder="Your idea"
            className="w-full p-3 border border-gray-300 rounded-md text-black text-lg resize-none"
          />
          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-3 rounded-md text-lg hover:bg-teal-800 transition"
>>>>>>> 28216ec59a2d8f9e5d8e3a49fef5f6fe8271178c
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer Bottom Panel */}
<<<<<<< HEAD
      <div className="mt-12 border-t border-gray-300/70 pt-6 text-center text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <p>© {new Date().getFullYear()} Prachi Rajput. All rights reserved.</p>
          <a href="#" className="hover:text-teal-600 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            Terms & Conditions
          </a>
=======
      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="#">Copyrights</a>
          <a href="#">Privacy notices</a>
          <a href="Portfolio.html">www.MyPortfolio.com</a>
>>>>>>> 28216ec59a2d8f9e5d8e3a49fef5f6fe8271178c
        </div>
      </div>
    </footer>
  );
};

export default Footer;
<<<<<<< HEAD

=======
>>>>>>> 28216ec59a2d8f9e5d8e3a49fef5f6fe8271178c
