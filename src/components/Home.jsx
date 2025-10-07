// import React from 'react';

// const Home = () => {
//   return (
//     <section className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 gap-6 bg-white bg-gradient-to-r from-gray-50 to-gray-100">
//       {/* Text Content */}
//       <div className="flex-1 text-center md:text-left">
//         <h3 className="text-black text-lg md:text-xl font-medium">Hello! It's Me</h3>
//         <h1 className="text-3xl md:text-5xl font-bold text-teal-700 my-2">Prachi Rajput</h1>
//         <h3 className="text-black text-lg md:text-xl font-medium">A FRONTEND DEVELOPER</h3>
//         <p className="text-black text-sm md:text-base mt-4">
//           This is my personal portfolio website to showcase my all works related to web development.
//         </p>

//         {/* Social Icons */}
//         <div className="flex justify-center md:justify-start mt-6 gap-4 text-xl text-teal-700">
//           <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
//             <i className="fa-brands fa-facebook"></i>
//           </a>
//           <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" rel="noopener noreferrer">
//             <i className="fa-brands fa-instagram"></i>
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <i className="fa-brands fa-twitter"></i>
//           </a>
//           <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
//             <i className="fa-brands fa-linkedin"></i>
//           </a>
//         </div>

//         {/* CTA Button */}
//         <div className="mt-6">
//           <a
//             href="#"
//             className="inline-block bg-teal-700 text-white px-6 py-2 rounded-lg hover:bg-teal-800 transition"
//           >
//             More About Me
//           </a>
//         </div>
//       </div>

//       {/* Image */}
//       <div className="flex-1 flex justify-center">
//         <img src="/assests/image.png" alt="This is an image" className="w-60 md:w-80 rounded-full shadow-md" />
//       </div>
//     </section>
  
//   );
// };

// export default Home;

import photo from "../assets/wallpaper1.jpg";
import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-16 gap-10 bg-gradient-to-r from-gray-50 via-white to-gray-100">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-black text-lg md:text-xl font-medium animate-fade-in">
          👋 Hello! It's Me
        </h3>
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600 my-3 animate-slide-up">
          Prachi Rajput
        </h1>
        <h3 className="text-gray-800 text-lg md:text-2xl font-semibold animate-fade-in-delay">
          A <span className="text-teal-600">Frontend Developer</span>
        </h3>
        <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed max-w-lg">
          This is my personal portfolio website to showcase my projects and
          skills related to modern web development.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start mt-6 gap-5 text-2xl">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 bg-white rounded-full shadow p-3 hover:bg-blue-600 hover:text-white transition"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 bg-white rounded-full shadow p-3 hover:bg-pink-500 hover:text-white transition"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 bg-white rounded-full shadow p-3 hover:bg-sky-500 hover:text-white transition"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://in.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 bg-white rounded-full shadow p-3 hover:bg-blue-700 hover:text-white transition"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href="#about"
            className="inline-block bg-gradient-to-r from-teal-600 to-indigo-600 text-white px-8 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            More About Me
          </a>
        </div>
      </div>

         <div className="flex-1 flex justify-center">
        <img src="/assests/image.png" alt="This is an image" className="w-60 md:w-80 rounded-full shadow-md" />
       </div>
    </section>
  );
};

export default Home;



