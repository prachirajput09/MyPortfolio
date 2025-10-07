import React from "react";
import photo from "../assets/image.png";
import photo1 from "../assets/image1.png";
import photo2 from "../assets/image2.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-8xl mx-auto py-16 px-10 bg-gradient-to-r from-gray-50 to-gray-100"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-sm text-gray-600 uppercase tracking-wide">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-teal-700">Projects</span>
        </h2>
      </div>

      {/* Project Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <img src={photo} alt="DevConnect" className="rounded-md mb-3" />
          <h3 className="font-semibold text-lg text-gray-900">DevConnect</h3>
          <p className="text-sm text-gray-600 mb-3">
            A full-stack developer social platform with posts, comments, likes,
            and Cloudinary integration.
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/prachirajput09/DevConnect"
              target="_blank"
              className="text-blue-600 hover:underline"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://devconnect-1-77n4.onrender.com/"
              target="_blank"
              className="text-blue-600 hover:underline"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <img src={photo1} alt="CGPA Calculator" className="rounded-md mb-3" />
          <h3 className="font-semibold text-lg text-gray-900">
            CGPA Calculator
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            A responsive CGPA calculator built with modern UI using Tailwind
            CSS.
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/prachirajput09/Cgpa_Calculator"
              target="_blank"
              className="text-blue-600 hover:underline"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://cgpa-calculator2.netlify.app/"
              target="_blank"
              className="text-blue-600 hover:underline"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <img src={photo2} alt="Amazon Clone" className="rounded-md mb-3" />
          <h3 className="font-semibold text-lg text-gray-900">Amazon Clone</h3>
          <p className="text-sm text-gray-600 mb-3">
            An Amazon homepage clone using HTML, CSS, and JavaScript to
            replicate UI and layout.
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/prachirajput09/Amazon-Clone"
              target="_blank"
              className="text-blue-600 hover:underline"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="http://amazonclone34.netlify.app/"
              target="_blank"
              className="text-blue-600 hover:underline"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
