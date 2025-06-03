import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About Me', 'Skills', 'Projects', 'Education', 'Contact'];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      {/* Main Navbar */}
      <nav
        className={`fixed top-10 items-center transition-all duration-700 ease-in-out ${
          isScrolled
            ? 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-purple-400/20 rounded-full mx-8 mt-4 shadow-lg shadow-purple-400/10'
            : 'bg-white/5 dark:bg-gray-900/5 backdrop-blur-md border-b border-purple-400/10'
        }`}
      >
        <div className={`transition-all duration-700 ${isScrolled ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'}`}>
          <div className="flex items-center justify-between w-full">
            {/* Left side - Hamburger menu + Logo */}
            <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
              <button
                onClick={toggleSidebar}
                className="flex flex-col space-y-1 p-2 sm:p-3 hover:bg-purple-400/10 rounded-lg transition-all duration-300 group"
                aria-label="Menu"
              >
                <div className="w-4 sm:w-5 lg:w-6 h-0.5 bg-purple-400 transition-all group-hover:scale-110"></div>
                <div className="w-3 sm:w-4 lg:w-4 h-0.5 bg-purple-400 transition-all group-hover:scale-110"></div>
                <div className="w-2 sm:w-2 lg:w-2 h-0.5 bg-purple-400 transition-all group-hover:scale-110"></div>
              </button>

              {/* Logo */}
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-400 tracking-tight hover:text-purple-300 transition-colors cursor-pointer whitespace-nowrap">
                &lt;srikar.dev/&gt;
              </div>
            </div>

            {/* Center - Navigation Links */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-6 xl:space-x-8 flex-1 justify-center">
              {navItems.map((item) => (
                <button
                  key={item}
                  className="text-sm lg:text-base text-purple-400 dark:text-purple-300 hover:text-purple-300 dark:hover:text-purple-200 transition-all duration-300 font-medium px-2 lg:px-4 py-2 rounded-lg hover:bg-purple-400/10 whitespace-nowrap"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right side - Dark/Light mode toggle */}
            <div className="flex items-center space-x-2">
              {/* Mobile menu indicator */}
              <div className="md:hidden text-xs text-purple-400/60">
                Menu
              </div>
              
              <button
                onClick={toggleDarkMode}
                className="p-2 sm:p-3 hover:bg-purple-400/10 rounded-lg transition-all duration-300 group"
                aria-label="Toggle dark mode"
              >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                  <Sun 
                    className={`absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 text-purple-400 transition-all duration-500 ${
                      isDarkMode ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                    }`}
                  />
                  <Moon 
                    className={`absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 text-purple-400 transition-all duration-500 ${
                      isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
          onClick={toggleSidebar}
        ></div>
        
        {/* Sidebar content */}
        <div
          className={`absolute left-0 top-0 h-full w-72 sm:w-80 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border-r border-purple-400/20 shadow-2xl transform transition-transform duration-500 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4 sm:p-6">
            {/* Sidebar header */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <div className="text-lg sm:text-xl font-bold text-purple-400">
                &lt;srikar.dev/&gt;
              </div>
              <button
                onClick={toggleSidebar}
                className="p-2 hover:bg-purple-400/10 rounded-lg transition-colors"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 relative">
                  <div className="absolute top-2 sm:top-3 left-0 w-5 sm:w-6 h-0.5 bg-purple-400 rotate-45"></div>
                  <div className="absolute top-2 sm:top-3 left-0 w-5 sm:w-6 h-0.5 bg-purple-400 -rotate-45"></div>
                </div>
              </button>
            </div>

            {/* Navigation items for mobile */}
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item}
                  className="block w-full text-left px-3 py-2.5 text-sm text-purple-400 dark:text-purple-300 hover:text-purple-300 dark:hover:text-purple-200 hover:bg-purple-400/10 rounded-lg transition-all duration-300 font-medium"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isSidebarOpen ? 'slideInLeft 0.5s ease-out forwards' : 'none'
                  }}
                >
                  {item}
                </button>
              ))}
            </nav>

          </div>
        </div>
      </div>


    </div>
  );
};