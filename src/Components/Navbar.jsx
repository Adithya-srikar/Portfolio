import React, { useEffect, useState } from 'react';
import { AlignLeftIcon, Menu, Moon, Sun } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
        <div
      className={`fixed top-4 inset-x-0 mx-auto max-w-screen-xl px-6 py-3 z-50 flex items-center font-mono transition-all duration-500 ease-in-out
        ${scrolled
          ? 'bg-white/90 shadow-lg rounded-3xl border w-[40%] justify-center max-md:hidden'
          : 'bg-white text-black rounded-xl w-[90%] justify-between'}`}
    >
      {!scrolled && (
        <div className="flex items-center text-xl font-bold">
          <a>
            <AlignLeftIcon className="mr-10 max-md:hidden" />
          </a>
          <span className="text-purple-400">&lt;</span>
          <span className="text-black">Srikar.dev</span>
          <span className="text-purple-400">/&gt;</span>
        </div>
      )}

      <nav className="flex space-x-9 text-lg text-gray-700 items-center max-[1025px]:hidden">
        <a href="#about" className="hover:text-black transition-colors duration-300">About</a>
        <a href="#skills" className="hover:text-black transition-colors duration-300">Skills</a>
        <a href="#experience" className="hover:text-black transition-colors duration-300">Experience</a>
        <a href="#projects" className="hover:text-black transition-colors duration-300">Projects</a>
        <a href="#education" className="hover:text-black transition-colors duration-300">Education</a>
      </nav>

      <div className="flex items-center space-x-4">
        {!scrolled && (
          <>
            <button
              onClick={toggleDarkMode}
              className="hidden md:inline-flex p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="min-[1025px]:hidden inline-flex p-2 rounded hover:bg-gray-200 transition-colors duration-300"
            >
              <Menu />
            </button>
          </>
        )}
      </div>

      {menuOpen && !scrolled && (
        <div className="absolute top-full mt-2 left-0 w-full bg-white shadow-md rounded-lg p-4 md:hidden text-center z-40 transition-all duration-500 ease-in-out">
          <a href="#about" className="block py-2">About</a>
          <a href="#skills" className="block py-2">Skills</a>
          <a href="#experience" className="block py-2">Experience</a>
          <a href="#projects" className="block py-2">Projects</a>
          <a href="#education" className="block py-2">Education</a>
        </div>
      )}
    </div>

  );
};
