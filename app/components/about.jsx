// components/About.js
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-pink-300 to-pink-400 py-10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
          <p className="text-white font-bold max-w-2xl mx-auto mb-6">
            Welcome to Soft and Warm, your ultimate destination for elegant and
            comfortable women’s clothing. Our mission is to provide
            high-quality, stylish, and affordable fashion that meets the needs
            of every woman. Explore our collection and find the perfect outfit
            for any occasion.
          </p>
          <div className="mt-6">
            <a
              className="inline-flex items-center px-5 py-3 text-sm font-medium text-pink-600 transition duration-300 bg-gray-100 rounded hover:bg-pink-400 hover:text-gray-100"
              href="https://www.instagram.com/softandwarm_/"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
