
// import React from "react";
// import profilePic from "../assets/image.png";
// import wallpaper from "../assets/wallpaper1.jpg";

// const Home = () => {
//   return (
//     <section
//       className="relative flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-20 gap-12 overflow-hidden"
//       style={{
//         backgroundImage: `url(${wallpaper})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-gray-100/90 to-white/90 backdrop-blur-[2px]"></div>

//       {/* Text Section */}
//       <div className="flex-1 relative z-10 text-center md:text-left animate-fade-in-up">
//         <h3 className="text-gray-800 text-lg md:text-xl font-medium mb-2">
//           👋 Hello! It's Me
//         </h3>

//         <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600 animate-gradient-x">
//           Prachi Rajput
//         </h1>

//         <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mt-3">
//           A <span className="text-teal-600">Frontend Developer</span>
//         </h3>

//         <p className="text-gray-600 text-base md:text-lg mt-5 leading-relaxed max-w-md mx-auto md:mx-0">
//           I love creating clean, interactive, and responsive web experiences using
//           modern technologies like <strong>React</strong>, <strong>Tailwind CSS</strong>,
//           and <strong>JavaScript</strong>.
//         </p>

//         {/* Social Icons */}
//         <div className="flex justify-center md:justify-start mt-8 gap-5 text-2xl">
//           {[
//             { icon: "fa-facebook", color: "text-blue-600" },
//             { icon: "fa-instagram", color: "text-pink-500" },
//             { icon: "fa-twitter", color: "text-sky-500" },
//             { icon: "fa-linkedin", color: "text-blue-700" },
//           ].map(({ icon, color }, i) => (
//             <a
//               key={i}
//               href="#"
//               className={`bg-white rounded-full shadow-lg p-3 ${color} hover:scale-110 hover:shadow-2xl transition-transform duration-300`}
//             >
//               <i className={`fa-brands ${icon}`}></i>
//             </a>
//           ))}
//         </div>

//         {/* Button */}
//         <div className="mt-10">
//           <a
//             href="#about"
//             className="inline-block bg-gradient-to-r from-teal-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
//           >
//             More About Me
//           </a>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="flex-1 flex justify-center relative z-10">
//         <div className="relative group">
//           <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
//           <img
//             src={profilePic}
//             alt="Prachi Rajput"
//             className="relative w-60 md:w-80 rounded-full shadow-xl transition-transform duration-500 group-hover:scale-105"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
import React from "react";
import profilePic from "../assets/8.jpg";
import wallpaper from "../assets/wallpaper1.jpg";

const Home = () => {
  return (
    <section
      className="relative flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-20 gap-12 overflow-hidden"
      style={{
       
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-gray-100/90 to-white/90 backdrop-blur-[2px]"></div>

      {/* Text Section */}
      <div className="flex-1 relative z-10 text-center md:text-left animate-fade-in-up">
        <h3 className="text-gray-800 text-lg md:text-xl font-medium mb-2">
          👋 Hello! It's Me
        </h3>

        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600 animate-gradient-x">
          Prachi Rajput
        </h1>

        <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mt-3">
          A <span className="text-teal-600">Frontend Developer</span>
        </h3>

        <p className="text-gray-600 text-base md:text-lg mt-5 leading-relaxed max-w-md mx-auto md:mx-0">
          I love creating clean, interactive, and responsive web experiences using
          modern technologies like <strong>React</strong>, <strong>Tailwind CSS</strong>,
          and <strong>JavaScript</strong>.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start mt-8 gap-5 text-2xl">
          {[
            { icon: "fa-facebook", color: "text-blue-600" },
            { icon: "fa-instagram", color: "text-pink-500" },
            { icon: "fa-twitter", color: "text-sky-500" },
            { icon: "fa-linkedin", color: "text-blue-700" },
          ].map(({ icon, color }, i) => (
            <a
              key={i}
              href="#"
              className={`bg-white rounded-full shadow-lg p-3 ${color} hover:scale-110 hover:shadow-2xl transition-transform duration-300`}
            >
              <i className={`fa-brands ${icon}`}></i>
            </a>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10">
          <a
            href="#about"
            className="inline-block bg-gradient-to-r from-teal-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            More About Me
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center relative z-10">
        <div className="relative group">
          {/* Glow ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500"></div>

          {/* ✅ Perfectly Round Image */}
          <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-105">
            <img
              src={profilePic}
              alt="Prachi Rajput"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
