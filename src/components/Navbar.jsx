import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-blue-600">
          Obligate
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Curriculum</Link>
          <Link to="/" className="text-gray-700 hover:text-blue-600">Why Us</Link>
          <Link to="/" className="text-gray-700 hover:text-blue-600">Testimonials</Link>
          <Link to="/" className="text-gray-700 hover:text-blue-600">Pricing</Link>
        </div>
        <div>
            <Link
          to="/"
          className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 mr-4 rounded hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          to="/"
          className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Signup
        </Link> 
        </div>
        <div className="md:hidden text-4xl text-gray-800" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white shadow">
          <Link to="/" onClick={toggleMenu} className="block text-gray-700">Curriculum</Link>
          <Link to="/" onClick={toggleMenu} className="block text-gray-700">Why Us</Link>
          <Link to="/" onClick={toggleMenu} className="block text-gray-700">Testimonials</Link>
          <Link to="/" onClick={toggleMenu} className="block text-gray-700">Pricing</Link>
          <Link
            to="/"
            onClick={toggleMenu}
            className="block bg-blue-600 text-white px-4 py-2 rounded text-center"
          >
            Login
          </Link>
          <Link
            to="/"
            onClick={toggleMenu}
            className="block bg-blue-600 text-white px-4 py-2 rounded text-center"
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
