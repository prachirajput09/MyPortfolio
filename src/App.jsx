// import React from "react";


// import Header from './components/Header';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Footer from './components/Footer';

// import Skills from './components/Skills';

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Home />
//       <About />
//       <Skills/>
//       <Projects />
//       <Footer />
           
//     </div>
//   );
// };

// export default App;
import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Training from "./components/Training";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Navigation Bar */}
      <Header />

      {/* Hero Section */}
      <Home />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Certifications Section */}
      <Certifications />

      {/* Training Section */}
      <Training />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
