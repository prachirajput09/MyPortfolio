import React from 'react';

const Home = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 gap-6 bg-white">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-black text-lg md:text-xl font-medium">Hello! It's Me</h3>
        <h1 className="text-3xl md:text-5xl font-bold text-teal-700 my-2">Prachi Rajput</h1>
        <h3 className="text-black text-lg md:text-xl font-medium">A FRONTEND DEVELOPER</h3>
        <p className="text-black text-sm md:text-base mt-4">
          This is my personal portfolio website to showcase my all works related to web development.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start mt-6 gap-4 text-xl text-teal-700">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="#"
            className="inline-block bg-teal-700 text-white px-6 py-2 rounded-lg hover:bg-teal-800 transition"
          >
            More About Me
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center">
        <img src="/assests/image.png" alt="This is an image" className="w-60 md:w-80 rounded-full shadow-md" />
      </div>
    </section>
  );
};

export default Home;