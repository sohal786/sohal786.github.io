import React, { useState, useEffect } from "react";
import { Navbar, WorkExperience } from "./components";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css";
import MapCanvas from "./components/MapCanvas";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed top-4 right-4 z-50 bg-[#ee7600] text-white text-sm px-4 py-2 rounded hover:bg-[#40566B] transition duration-300 ease-in-out shadow-lg"
          aria-label="Scroll to top"
        >
          ↑ Top
        </button>
      )}
      <MapCanvas />
      <div className="overlay-content">
        <Navbar />
        <Hero />
      </div>
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  );
}
