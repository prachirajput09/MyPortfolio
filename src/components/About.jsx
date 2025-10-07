<<<<<<< HEAD

import React from "react";
import photo from "../assets/wallpaper1.jpg";

import resume from "../assets/resume.pdf";
const About = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-gray-50 via-white to-gray-100">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="flex-1 flex justify-center relative">
          <div className="absolute -top-4 -left-4 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-teal-400 to-indigo-500 rounded-2xl blur-2xl opacity-20"></div>
          <img
            src={photo}
            alt="About Me"
            className="w-64 md:w-80 relative rounded-2xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
=======
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
>>>>>>> 28216ec59a2d8f9e5d8e3a49fef5f6fe8271178c
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center md:text-left">
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
            About <span className="text-teal-600">Me</span> & Skills
          </h2>
          <h3 className="text-lg md:text-xl text-indigo-600 mb-4 font-semibold">
            Frontend Developer | MERN Stack Enthusiast
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            I’m a passionate frontend developer with expertise in building
            beautiful, responsive, and user-friendly web applications. With
            hands-on experience in{" "}
            <span className="font-semibold text-teal-600">
              React, Tailwind CSS, JavaScript, and Node.js
            </span>
            , I focus on crafting clean UI and seamless user experiences.
            My journey as a developer has been fueled by curiosity and a love
            for problem-solving.
          </p>

          {/* Highlights / Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-white shadow-lg rounded-xl border-t-4 border-teal-500 hover:scale-105 hover:shadow-xl transition duration-300 text-center">
              <h4 className="text-3xl font-extrabold text-teal-600">5+</h4>
              <p className="text-gray-600 text-sm mt-2">Projects Completed</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl border-t-4 border-indigo-500 hover:scale-105 hover:shadow-xl transition duration-300 text-center">
              <h4 className="text-3xl font-extrabold text-indigo-600">10+</h4>
              <p className="text-gray-600 text-sm mt-2">Tech Skills</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl border-t-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition duration-300 text-center">
              <h4 className="text-3xl font-extrabold text-yellow-500">2+</h4>
              <p className="text-gray-600 text-sm mt-2">Years Learning</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-block bg-gradient-to-r from-teal-600 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              View Projects
            </a>
            <a
              href={resume}
              download
              className="inline-block border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-600 hover:text-white transition duration-300"
            >
              Download CV
=======
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
>>>>>>> 28216ec59a2d8f9e5d8e3a49fef5f6fe8271178c
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
<<<<<<< HEAD



=======
>>>>>>> 28216ec59a2d8f9e5d8e3a49fef5f6fe8271178c
