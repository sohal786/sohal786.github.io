import React, { useState } from "react";

import { hamburgerMenu, close } from "../assets";
import colors from "./colors";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  const [isImageOpen, setImageOpen] = useState(false);

  const toggleImage = () => {
    setImageOpen(!isImageOpen);
  };

  return (
    <div className="relative w-full py-12 m-auto bg-transparent text-white md:max-w-[1780px] max-w-[600px]">
      <div className="m-auto w-full h-full px-4 md:px-14 flex justify-between items-center">
        {/* Profile Image on the Left */}
        <div className="cursor-pointer" onClick={toggleImage}>
          <img src="./myimage.jpg" alt="My Profile" className="h-[50px] rounded-full" />
        </div>

        {/* Conditional Rendering for Image Popup */}
        {isImageOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={toggleImage}>
            <img src="./sd.png" alt="My Profile" className="max-w-full max-h-full" />
          </div>
        )}

        {/* Navigation Links on the Right */}
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-4">
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://github.com/sohal786" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="https://www.linkedin.com/in/akshatsohal/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden bg-orange-300 p-2 rounded-full" onClick={handleClick}>
            <img src={toggle ? close : hamburgerMenu} alt="Menu" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={toggle ? 'absolute m-auto z-10 bg-[#111111] w-full px-8' : 'hidden'}>
        <ul className="flex flex-col text-center">
          <a href="#home" className="p-4 hover:bg-[#ee7600]">Home</a>
          <a href="#about" className="p-4 hover:bg-[#ee7600]">About</a>
          <a href="#projects" className="p-4 hover:bg-[#ee7600]">Projects</a>
          <a href="#contact" className="p-4 hover:bg-[#ee7600]">Contact</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
