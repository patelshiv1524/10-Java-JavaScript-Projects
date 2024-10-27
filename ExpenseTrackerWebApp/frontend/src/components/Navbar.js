import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Expense Tracker</Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/dashboard" className="text-white">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile" className="text-white">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
