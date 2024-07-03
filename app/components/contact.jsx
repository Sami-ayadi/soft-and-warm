// components/Contact.js
import React from 'react';
import { FaPhone, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center justify-center gap-4 p-4">
      
      <div className="flex gap-4">
        <a href="tel:+21619930" className="text-gray-800 hover:text-blue-500 transition duration-300">
          <FaPhone className="text-2xl" />
        </a>
        <a href="https://www.instagram.com/softandwarm_/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 transition duration-300">
          <FaInstagram className="text-2xl" />
        </a>
        <a href="https://www.facebook.com/your_facebook_handle/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 transition duration-300">
          <FaFacebook className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
