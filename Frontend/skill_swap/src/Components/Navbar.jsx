import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">Skill Swap</div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-blue-600 transition">Login</Link>
        </li>
        <li>
          <Link to="/request" className="hover:text-blue-600 transition">Requests</Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-blue-600 transition">Profile</Link>
        </li>
      </ul>
    </nav>
  )
}
