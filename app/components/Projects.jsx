import React from "react";

const projects = ["Project 1", "Project 2", "Project 3", "Project 4"];

const Projects = ({ selectedProject, setSelectedProject }) => (
  <div className="pt-5 lg:pl-8 w-full">
    <div className="container mx-auto text-start">
      <h2 className="lg:text-3xl font-bold mb-8">Projects we are proud of</h2>
      <p className="mb-8 lg:w-1/2">
        Our software development company is truly proud of the wonderful clients
        we have worked with. We enjoy a long-term partnership.
      </p>
      <div className="flex flex-wrap gap-4">
        {projects.map((project, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              selectedProject === index ? "border-b-4 border-yellow-500" : ""
            }`}
            onClick={() => setSelectedProject(index)}
          >
            {project}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
