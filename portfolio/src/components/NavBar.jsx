import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/NM-Logo.png";
import Resume from "../assets/Muller_Resume.pdf";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#d4d8c8] text-[#3e4943]">
      <div id="logo" >
      <Link to='home' smooth={true} duration={500}>
        <img
          src={Logo}
          alt="Nicholas Muller Initials Logo"
          style={{ width: "70px" }}
        />
        </Link>
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          {" "}
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          {" "}
          <Link to="education" smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li>
          {" "}
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#d4d8c8] flex flex-col justify-center items-center"
        }
      >
        <li>
          <Link onClick={handleClick} className="text-4xl" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} className="text-4xl" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          {" "}
          <Link onClick={handleClick} className="text-4xl" to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          {" "}
          <Link onClick={handleClick} className="text-4xl" to="education" smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li>
          {" "}
          <Link onClick={handleClick} className="text-4xl" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>

      </ul>

      {/* Socials */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-twitter-blue">
            <a
              className="flex justify-between items-center w-full text-gray"
              href="https://www.linkedin.com/in/nicholas-c-muller/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray"
              href="https://github.com/nicholasMuller"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray"
              href="mailto: nicholas.c.muller@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray"
              href={Resume}
              type="application/pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
