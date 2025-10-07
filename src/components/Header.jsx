// import React, { useState } from 'react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <a href="#" className="text-2xl md:text-3xl font-bold text-teal-700">
//           <span className="text-black">Port</span>folio
//         </a>

//         {/* Hamburger Button (Mobile) */}
//         <button
//           className="text-2xl md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>

//         {/* Nav Links */}
//         <nav
//           className={`flex-col md:flex-row md:flex gap-6 md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
//             isOpen ? 'flex p-4' : 'hidden md:flex'
//           }`}
//         >
//           <a href="#" className="text-gray-700 hover:text-teal-700">Home</a>
//           <a
//             href="/Prachi CV.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-700 hover:text-teal-700"
//           >
//             Resume
//           </a>
//           <a href="#skills" className="text-gray-700 hover:text-teal-700">Skills</a>
//           <a
//             href="https://github.com/prachirajput09"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-700 hover:text-teal-700"
//           >
//             Projects
//           </a>
//           <a
//             href="mailto:prachirajput77373@gmail.com"
//             className="text-gray-700 hover:text-teal-700"
//           >
//             Email
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import resume from "../assets/resume.pdf";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-teal-600 to-indigo-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl md:text-3xl font-extrabold text-white tracking-wide"
        >
          <span className="text-yellow-300">Port</span>folio
        </a>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden focus:outline-none text-white text-3xl transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Nav Links */}
        <nav
          className={`flex-col md:flex-row md:flex gap-6 md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none rounded-b-xl md:rounded-none transition-all duration-300 ease-in-out ${
            isOpen ? "flex p-6 space-y-4 md:space-y-0" : "hidden md:flex"
          }`}
        >
          <a
            href="#"
            className="text-gray-800 md:text-white font-medium hover:text-yellow-300 relative after:block after:h-[2px] after:bg-yellow-300 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left"
          >
            Home
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 md:text-white font-medium hover:text-yellow-300 relative after:block after:h-[2px] after:bg-yellow-300 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left"
          >
            Resume
          </a>
          <a
            href="#skills"
            className="text-gray-800 md:text-white font-medium hover:text-yellow-300 relative after:block after:h-[2px] after:bg-yellow-300 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left"
          >
            Skills
          </a>
          <a
            href="https://github.com/prachirajput09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 md:text-white font-medium hover:text-yellow-300 relative after:block after:h-[2px] after:bg-yellow-300 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left"
          >
            Projects
          </a>
          <a
            href="mailto:prachirajput77373@gmail.com"
            className="text-gray-800 md:text-white font-medium hover:text-yellow-300 relative after:block after:h-[2px] after:bg-yellow-300 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left"
          >
            Email
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

