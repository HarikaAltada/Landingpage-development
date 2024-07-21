import React from "react";

const ProjectDetail = () => (
  <div className="container mx-auto flex flex-col md:flex-row items-start">
    <div className="w-full md:w-1/2 flex flex-col items-start text-left mb-8 md:mb-0 px-4">
      <h2 className="text-2xl font-bold mb-4 md:mb-8 mt-4 md:mt-20">
        Project 1
      </h2>
      <p className="mb-4">
        Crafted an innovative rental property management app, seamlessly
        integrating secure login, absence registration, and a tenant notice
        board.
      </p>

      <h3 className="text-lg mb-4">
        Business analysis / iOS / Android / QA / UI/UX Design
      </h3>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <div className="flex flex-row items-center mb-4">
          <img
            src="./assets/place_outline_24.png"
            alt="Location"
            className="mr-2"
          />
          <p>India</p>
        </div>
        <div className="flex flex-row items-center mb-4">
          <img
            src="./assets/work_outline_24.png"
            alt="Industry"
            className="mr-2"
          />
          <p>Real Estate</p>
        </div>
      </div>
      <p className="text-lg font-semibold mt-6">
        400% User Growth | +200,000 Active Users
      </p>
      <div className="flex flex-row gap-10 justify-start pt-10">
        <img src="./assets/ios.png" alt="iOS" />
        <img src="./assets/Frame 10782 (1).png" alt="Other Platform" />
      </div>
    </div>
    <div className="w-full md:w-1/2 flex items-start justify-center">
      <img
        src="./assets/image 15 (1).png"
        alt="Project Screenshot"
        className="w-full h-auto lg:w-3/4"
      />
    </div>
  </div>
);

export default ProjectDetail;
