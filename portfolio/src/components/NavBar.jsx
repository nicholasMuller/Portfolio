import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/NM-Logo.png";
import Resume from "../assets/Muller_Resume.pdf"

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleClick = () => {
    setNav(!nav)
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#d4d8c8] text-[#3e4943]">
      <div>
        <img
          src={Logo}
          alt="Nicholas Muller Initials Logo"
          style={{ width: "70px" }}
        />
      </div>

      {/* menu */}

        <ul className="hidden md:flex">
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Education</li>
          <li>Contact</li>
        </ul>


    {/* hamburger */}
    <div onClick={handleClick} className="md:hidden z-10">
      {!nav ? <FaBars/> : <FaTimes/>}
    </div>


    {/* mobile */}

    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#d4d8c8] flex flex-col justify-center items-center'}>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Projects</li>
          <li className="py-6 text-4xl">Education</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>


    {/* Socials */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-twitter-blue'>
            <a
              className='flex justify-between items-center w-full text-gray'
              href='https://www.linkedin.com/in/nicholas-c-muller/'
              target="_blank" rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray'
              href='https://github.com/nicholasMuller'
              target="_blank" rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray'
              href= "mailto: nicholas.c.muller@gmail.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray'
              href= {Resume} type="application/pdf" target="_blank" rel="noopener noreferrer">            
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          </ul>

    </div>

    </div>
  );
};

export default NavBar;
