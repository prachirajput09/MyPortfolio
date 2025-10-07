import React from 'react';
<<<<<<< HEAD
import photo from "../assets/image.png";
import photo1 from "../assets/image1.png";
import photo2 from "../assets/image2.png";
   
const Projects = () => {
  return (
    <section id="projects" className="max-w-8xl mx-auto py-16 px-10 bg-gradient-to-r from-gray-50 to-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">
        My <span className="text-teal-700">Projects</span>
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Project 1 */}
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <img
            src={photo}
            alt="DevConnect"
            className="rounded-md mb-3"
          />
          <h3 className="font-semibold text-lg">DevConnect</h3>
          <p className="text-sm text-gray-600">A full-stack developer social platform.</p>
          <div className="flex gap-3 mt-3">
            <a href="https://github.com/prachirajput09/DevConnect" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
            <a href="https://devconnect-1-77n4.onrender.com/"  target="_blank" className="text-blue-600 hover:underline">Live Demo</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <img
            src={photo1}
            alt="CGPA Calculator"
            className="rounded-md mb-3"
          />
          <h3 className="font-semibold text-lg">CGPA Calculator</h3>
          <p className="text-sm text-gray-600">A responsive CGPA calculator app.</p>
          <div className="flex gap-3 mt-3">
            <a href="https://github.com/prachirajput09/Cgpa_Calculator" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
            <a href="https://cgpa-calculator2.netlify.app/"  target="_blank" className="text-blue-600 hover:underline">Live Demo</a>
          </div>
        </div>

        {/* Project 3 - Amazon Clone */}
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <img
            src={photo2}
            alt="Amazon Clone"
            className="rounded-md mb-3"
          />
          <h3 className="font-semibold text-lg">Amazon Clone</h3>
          <p className="text-sm text-gray-600">
            A Amazon clone built with HTML, CSS, and JavaScript to replicate layout and design.
          </p>
          <div className="flex gap-3 mt-3">
            <a href="https://github.com/prachirajput09/Amazon-Clone" target="_blank"  className="text-blue-600 hover:underline">GitHub</a>
            <a href="http://amazonclone34.netlify.app/" target="_blank"  className="text-blue-600 hover:underline">Live Demo</a>
          </div>
        </div>

=======

const Projects = () => {
  return (
    <section className="py-10 px-6 md:px-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-sm text-black uppercase">Portfolio</p>
        <h5 className="text-2xl md:text-4xl font-bold">
          <span className="text-teal-700">Latest</span> Projects
        </h5>
      </div>

      {/* Project Cards */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Project 1 */}
        <div className="bg-gray-50 shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-orange-500 text-center mb-3">Amazon Clone</h2>
          <p className="text-sm text-black">
            A website cloning involves replicating a successful site's concept, incorporating its features while adding unique ones to create a distinct platform. Here I made a clone of the Amazon website using HTML and CSS showing its layout.
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-50 shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-orange-500 text-center mb-3">Landing Page</h2>
          <p className="text-sm text-black">
            A Landing page is where the customer is sent after clicking on the product. This project includes the website of MakeMyTrip to book your flights, providing all the necessary details about the flight bookings.
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-50 shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-orange-500 text-center mb-3">Calculator</h2>
          <p className="text-sm text-black">
            This project includes a Calculator that performs operations like addition, subtraction, multiplication, and division. It uses HTML to create the structure, CSS for styling, and JavaScript for calculation functionality.
          </p>
        </div>
>>>>>>> 28216ec59a2d8f9e5d8e3a49fef5f6fe8271178c
      </div>
    </section>
  );
};

export default Projects;
<<<<<<< HEAD

=======
>>>>>>> 28216ec59a2d8f9e5d8e3a49fef5f6fe8271178c
