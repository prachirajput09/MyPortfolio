
import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-500 text-3xl" />, level: "90%" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl" />, level: "85%" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" />, level: "95%" },
  { name: "CSS3 / Tailwind", icon: <FaCss3Alt className="text-blue-500 text-3xl" />, level: "90%" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" />, level: "75%" },
  { name: "MongoDB", icon: <FaDatabase className="text-emerald-600 text-3xl" />, level: "70%" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-8 bg-gradient-to-r from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-teal-600 to-indigo-600 h-3 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

