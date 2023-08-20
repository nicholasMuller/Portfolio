import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {Link} from "react-router-dom";

const Home = () => {
  return (

    <div className="w-full h-screen bg-dark-green text-light-green">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray">
          Nicholas Muller
        </h1>
        <h2 className="text-4xl sm:text-4xl font-bold text-light-green">
          Software Engineer.
        </h2>
        <p className="text-gray py-4 max-w-[700px]">
          Organized and dedicated Master’s recipient from Portland State
          University ready to excel in the field of computer science with
          expertise in Software Engineering, Web Development and Data
          Engineering. Actively seeking full time opportunities in Software
          Engineering and Development. As a professional, I aim to utilize my
          skills in analysis and problem-solving to contribute to your
          organization’s success.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center
           hover:bg-light-green hover:border-light-green hover:text-dark-green">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
