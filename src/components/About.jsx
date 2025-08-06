import React from 'react';

const About = () => {
  return (
    <section className="py-10 px-6 md:px-12 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="/assests/7.jpg"
            alt="About"
            className="w-60 md:w-80 rounded-lg shadow-md"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">
            About <span className="text-teal-700">My</span> Skills
          </h2>
          <h3 className="text-lg md:text-xl text-gray-700 mb-3">A Frontend Developer</h3>
          <p className="text-sm md:text-base text-gray-600">
            As a frontend developer I have a great knowledge of various frontend languages like
            HTML, CSS and JavaScript...
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block bg-teal-700 text-white px-6 py-2 rounded-lg hover:bg-teal-800 transition"
            >
              Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
