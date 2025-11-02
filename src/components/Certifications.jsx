import React from "react";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 px-6 md:px-16 bg-gradient-to-b from-white via-gray-50 to-gray-100"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
          Certifications
        </h2>
        <p className="text-gray-600 mt-3">
          Courses and certifications that enhanced my web development journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          {
            title: "React.js Course",
            org: "Xtrude Engineers",
            desc: "Learned component-based architecture, hooks, and state management.",
          },
          {
            title: "Web Designing",
            org: "Xtrude Engineers",
            desc: "Strengthened fundamentals of HTML, CSS, and asynchronous JS.",
          },
          {
            title: "Artificial Intelligence",
            org: "Skill Dunia",
            desc: "Learned about AI and machine learning concepts.",
          },
         
        ].map((cert, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
            <p className="text-sm text-teal-600 mt-1">{cert.org}</p>
            <p className="text-gray-600 mt-3">{cert.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
