// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/dashboard" className="text-white">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile" className="text-white">Profile</Link>
        </li>
        <li>
          <Link to="/" className="text-white">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
