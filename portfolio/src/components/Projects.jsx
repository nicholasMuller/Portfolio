import React from "react";
import { projectsData } from "../assets/Projects/projectsData.js";

const Projects = () => {
  // projects file
  const project = projectsData;

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-dark-green">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-light-green border-light-green">
            Projects
          </p>
          <p className="py-6 text-light-green">
            Check out some of my recent work
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div hover:scale-110 duration-500 "
            >
              <div class="text-overlay absolute mx-auto text-2xl opacity-0 group-hover:opacity-100 text-light-green">{item.name}</div>
              <img
                src={item.image}
                alt={item.id}
                title={item.name}
                className="group-hover:opacity-5 duration-500"
              ></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
