import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const user = {
  name: 'Abc',
  profilePic: 'https://i.pravatar.cc/150?img=3',
  skillsOffered: ['React.js', 'Tailwind CSS'],
  skillsWanted: ['Node.js'],
  rating: 4.8,
  feedback: 'Very collaborative and a quick learner!',
};

export default function Swap_Platform() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-xl mx-auto p-6 mt-8 bg-white rounded-2xl shadow-md border">
        {/* Profile Photo */}
        <div className="flex justify-center mb-4">
          <img
            src={user.profilePic}
            alt={user.name}
            className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
          />
        </div>

        {/* Name + Rating */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-blue-600">{user.name}</h2>
          <p className="text-sm text-yellow-600 mt-1">★ {user.rating}</p>
        </div>

        {/* Skills Offered */}
        <div className="mb-4">
          <p className="text-lg font-semibold mb-1">Skills Offered:</p>
          <div className="flex flex-wrap gap-2">
            {user.skillsOffered.map((skill, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Wanted */}
        <div className="mb-4">
          <p className="text-lg font-semibold mb-1">Skills Wanted:</p>
          <div className="flex flex-wrap gap-2">
            {user.skillsWanted.map((skill, i) => (
              <span
                key={i}
                className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Feedback */}
        <div className="mb-6">
          <p className="text-lg font-semibold mb-1">Feedback:</p>
          <p className="text-sm text-gray-600 italic">"{user.feedback}"</p>
        </div>

        {/* Request Button */}
        <div className="text-center">
          <Link to="/swap-requests">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition">
              Send Swap Request
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
