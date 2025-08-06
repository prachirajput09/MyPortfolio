import React from 'react';

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
      </div>
    </section>
  );
};

export default Projects;
