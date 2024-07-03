// components/Logo.js
import React from 'react';

const Logo = () => {
  return (
    <header className="relative bg-gradient-to-r from-pink-300 to-pink-400 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-4xl font-extrabold text-white tracking-wide hover:text-pink-500 transition duration-300">
          Soft and Warm
        </h1>
        <nav className="space-x-6">
          <a href="#home" className="text-white text-lg hover:text-pink-600 transition duration-300 ">Shop</a>
          <a href="#about" className="text-white text-lg hover:text-pink-600 transition duration-300">About</a>
          <a href="#contact" className="text-white text-lg hover:text-pink-600 transition duration-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Logo;
