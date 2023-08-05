 import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/NM-Logo.png'

import React from 'react'

const NavBar = () => {
  return (
    <div className = 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#d4d8c8]'>
    <div>
        <img src={Logo} alt="Nicholas Muller Initials Logo" style={{width: '50px'}} />
    </div>
    </div>
  )
}

export default NavBar