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
      <div className="m-auto w-full h-full flex justify-between items-center px-4 md:px-14">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-medium cursor-pointer" onClick={toggleImage} style={{ color: colors.white }}><img src="./sd.png" alt="My Profile" className="h-[50px] rounded-full" /> </h1>
        <p className="text-xs">Click Me!</p>
        </div>
        {isImageOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={toggleImage}>
                    <img src="./sd.png" alt="My Profile" className="max-w-full max-h-full" />
                </div>
            )}
        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://github.com/dsav99" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/savjot-dhillon/" target= "_blank">LinkedIn</a></li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <a href="/images/resume.pdf" target="_blank" className="p-3 rounded-md font-bold" style={{ backgroundColor: colors.orange }}>Resume ↓</a>
        </div>

        <div className="md:hidden bg-orange-300" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} alt="Menu" />
        </div>
      </div>
      <div className={toggle ? 'absolute m-auto z-10 bg-[#111111] w-full px-8' : 'hidden'}>
        <ul className="flex flex-col text-center">
          <a href="#home" className="p-4 hover:bg-[#ee7600]">Home</a>
          <a href="#about" className="p-4 hover:bg-[#ee7600]">About</a>
          <a href="#projects" className="p-4 hover:bg-[#ee7600]">Projects</a>
          <a href="#contact" className="p-4 hover:bg-[#ee7600]">Contact</a>
          <div className="flex flex-col my-4 gap-4">
            <a href="/images/resume.pdf" target="_blank" className="px-8 py-3 text-center rounded-md bg-[#ee7600] font-bold">Resume ↓</a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
