import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black px-10 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold font-serif">
          <Link to="/">Youssef Awadalla</Link>
        </div>

        <div className="hidden md:flex space-x-10">
          <Link
            className="text-lg text-white hover:text-gray-400"
            to="/projects"
          >
            Projects
          </Link>
          <Link className="text-lg text-white hover:text-gray-400" to="/about">
            About
          </Link>
          <Link
            className="text-lg text-white hover:text-gray-400"
            to="/contact"
          >
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-400 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden pt-6 container mx-auto flex flex-col items-center gap-6">
          <Link
            className="block text-lg text-white hover:text-gray-400"
            to="/projects"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            className="block text-lg text-white hover:text-gray-400"
            to="/about"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            className="block text-lg text-white hover:text-gray-400"
            to="/contact"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
