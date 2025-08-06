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
          />
          <input
            type="text"
            placeholder="Your Phone No"
            className="w-full p-3 border border-gray-300 rounded-md text-black text-lg"
          />
          <textarea
            cols="30"
            rows="5"
            placeholder="Your idea"
            className="w-full p-3 border border-gray-300 rounded-md text-black text-lg resize-none"
          />
          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-3 rounded-md text-lg hover:bg-teal-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer Bottom Panel */}
      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="#">Copyrights</a>
          <a href="#">Privacy notices</a>
          <a href="Portfolio.html">www.MyPortfolio.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
