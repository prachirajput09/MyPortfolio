import React from "react";

const Training = () => {
  return (   
    <section   
      id="training"
      className="py-20 px-6 md:px-16 bg-gradient-to-b from-gray-100 via-white to-gray-50"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600">
          Training & Achievements
        </h2>
        <p className="text-gray-600 mt-3">
          Practical experiences and recognitions that shaped my skills.
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-gray-800">
            Java Core Training
          </h3>
          <p className="text-sm text-teal-600 mt-1">Xtrude Engineers Pvt. Ltd. | June 2024 – Aug 2024</p>
          <p className="text-gray-600 mt-3">
          Learned about core Java concepts such as loops ,arrays and linked list.
          </p>
        </div>

        {/* <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-gray-800">Hackathon Participation</h3>
          <p className="text-sm text-teal-600 mt-1">Coding Ninjas HackFest 2024</p>
          <p className="text-gray-600 mt-3">
            Built a team project “DevConnect” in 48 hours using MERN stack.  
            Ranked among the top 15% submissions.
          </p>
        </div> */}

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-gray-800">
            Academic Achievement
          </h3>
          <p className="text-gray-600 mt-3">
            Consistently scored above 8.5 CGPA in Computer Science Engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Training;
