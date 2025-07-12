import React from 'react';
import Navbar from '../Components/Navbar';

const userData = {
  name: 'Abc',
  location: 'New Delhi, India',
  profilePic: 'https://i.pravatar.cc/150?img=3',
  skillsOffered: ['React.js', 'Node.js', 'MongoDB'],
  skillsWanted: ['AI/ML', 'DevOps'],
  availability: 'Weekdays, 6PM - 9PM',
  profileType: 'Public', // or 'Private'
};

export default function User_Profile() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl mt-8 border">
        
        {/* Profile Picture */}
        <div className="flex justify-center mb-4">
          <img
            src={userData.profilePic}
            alt={userData.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
          />
        </div>

        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">User Profile</h1>

        {/* Name & Location */}
        <div className="mb-4 text-center">
          <p className="text-lg font-semibold">Name: <span className="font-normal">{userData.name}</span></p>
          <p className="text-lg font-semibold">Location: <span className="font-normal">{userData.location}</span></p>
        </div>

        {/* Skills Offered */}
        <div className="mb-4">
          <p className="text-lg font-semibold mb-1">Skills Offered:</p>
          <div className="flex flex-wrap gap-2">
            {userData.skillsOffered.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
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
            {userData.skillsWanted.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="mb-4">
          <p className="text-lg font-semibold">Availability: <span className="font-normal">{userData.availability}</span></p>
        </div>

        {/* Profile Type */}
        <div className="mb-2">
          <p className="text-lg font-semibold">Profile Type:{" "}
            <span className={`font-bold ${userData.profileType === 'Public' ? 'text-green-600' : 'text-red-600'}`}>
              {userData.profileType}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
