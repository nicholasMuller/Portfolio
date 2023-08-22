import React from 'react';

import {BiLogoPostgresql, BiLogoJavascript, 
    BiLogoPython,BiLogoCPlusPlus,
    BiLogoDocker} from "react-icons/bi"
import {LiaJava} from "react-icons/lia"
import {FaReact} from "react-icons/fa"
import {BiLogoTailwindCss} from "react-icons/bi"

const Skills = () => {

  return (
    <div name='skills' className='w-full h-screen bg-light-green text-dark-green'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-dark-green '>Skills</p>
              <p className='py-4'>These are just a few of the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-gray bg-dark-green'>
                  <BiLogoPython size={75} className='mx-auto mt-4'/>
                  <p className='my-4'>PYTHON</p>
              </div>                 
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-gray bg-dark-green'>
                  <LiaJava size={75} className='mx-auto mt-4'/>
                  <p className='my-4'>JAVA</p>
              </div>  
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-gray bg-dark-green'>
                  <BiLogoJavascript size={75} className='mx-auto mt-4'/>
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-gray bg-dark-green'>
                  <BiLogoCPlusPlus size={75} className='mx-auto mt-4'/>
                  <p className='my-4'>C++</p>
              </div>     
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-gray bg-dark-green'>
                  <BiLogoPostgresql size={75} className='mx-auto mt-4'/>
                  <p className='my-4'>SQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-gray bg-dark-green'>
                  <FaReact size={75} className='mx-auto mt-4'/>
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-gray bg-dark-green'>
                  <BiLogoDocker size={75} className='mx-auto mt-4'/>
                  <p className='my-4'>DOCKER</p>                
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-gray bg-dark-green'>
                  <BiLogoTailwindCss size={75} className='mx-auto mt-4'/>
                  <p className='my-4'>TAILWIND</p>
              </div>

          </div>
      </div>
    </div>
  );
};

export default Skills;