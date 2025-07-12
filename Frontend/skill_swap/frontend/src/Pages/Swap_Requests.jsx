import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

export default function Swap_Requests() {
  // Sample data for your offered skills and their skills
  const yourSkills = ['React.js', 'Python', 'UI/UX'];
  const theirSkills = ['Node.js', 'Machine Learning', 'DevOps'];

  const [selectedYourSkill, setSelectedYourSkill] = useState('');
  const [selectedTheirSkill, setSelectedTheirSkill] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedYourSkill || !selectedTheirSkill || !message) {
      alert('Please fill all fields before submitting.');
      return;
    }

    // Handle your logic here (e.g., API call or local storage)
    console.log('Swap Request Submitted:', {
      yourSkill: selectedYourSkill,
      theirSkill: selectedTheirSkill,
      message,
    });

    // Optionally reset fields
    setSelectedYourSkill('');
    setSelectedTheirSkill('');
    setMessage('');
    alert('Request submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 bg-white shadow-md rounded-xl p-6 border">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Send Swap Request</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Choose Your Skill */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Choose one of your offered skills</label>
            <select
              value={selectedYourSkill}
              onChange={(e) => setSelectedYourSkill(e.target.value)}
              className="w-full border rounded-md px-4 py-2"
            >
              <option value="">-- Select Your Skill --</option>
              {yourSkills.map((skill, idx) => (
                <option key={idx} value={skill}>{skill}</option>
              ))}
            </select>
          </div>

          {/* Choose Their Skill */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Choose one of their skills</label>
            <select
              value={selectedTheirSkill}
              onChange={(e) => setSelectedTheirSkill(e.target.value)}
              className="w-full border rounded-md px-4 py-2"
            >
              <option value="">-- Select Their Skill --</option>
              {theirSkills.map((skill, idx) => (
                <option key={idx} value={skill}>{skill}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              placeholder="Write a short message..."
              className="w-full border rounded-md px-4 py-2 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
