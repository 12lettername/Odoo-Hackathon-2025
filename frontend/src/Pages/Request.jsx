import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const previousRequests = [
  {
    id: 1,
    name: 'Abc',
    profilePic: 'https://i.pravatar.cc/150?img=3',
    offered: 'React.js',
    wanted: 'Node.js',
    rating: 4.8,
    status: 'Accepted'
  },
  {
    id: 2,
    name: 'Ravi Sharma',
    profilePic: 'https://i.pravatar.cc/150?img=5',
    offered: 'Python',
    wanted: 'ML',
    rating: 4.4,
    status: 'Pending'
  },
  {
    id: 3,
    name: 'Sara Khan',
    profilePic: 'https://i.pravatar.cc/150?img=6',
    offered: 'UI/UX',
    wanted: 'DevOps',
    rating: 4.9,
    status: 'Rejected'
  }
];

export default function Request() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredRequests = previousRequests.filter(req => {
    const matchesSearch = req.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === 'All' ||
      req.status === filter ||
      req.offered === filter ||
      req.wanted === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Previous Requests</h1>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-2/3 border px-4 py-2 rounded-md"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:w-1/3 border px-4 py-2 rounded-md"
          >
            <option value="All">All</option>
            <option value="Accepted">Accepted</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
            <option value="React.js">React.js</option>
            <option value="Node.js">Node.js</option>
            <option value="Python">Python</option>
            <option value="UI/UX">UI/UX</option>
            <option value="ML">ML</option>
            <option value="DevOps">DevOps</option>
          </select>
        </div>

        {/* Request Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredRequests.map((user) => (
            <div
              key={user.id}
              className="border bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={user.profilePic}
                  alt={user.name}
                  className="w-14 h-14 rounded-full border object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{user.name}</h2>
                  <p className="text-sm text-yellow-600">★ {user.rating}</p>
                </div>
              </div>

              <div className="mb-1 text-sm text-gray-700">
                <strong>Skills Offered:</strong> {user.offered}
              </div>
              <div className="mb-1 text-sm text-gray-700">
                <strong>Skills Wanted:</strong> {user.wanted}
              </div>
              <div className="mt-2 text-sm">
                <strong>Status:</strong>{' '}
                <span
                  className={`font-bold ${
                    user.status === 'Accepted'
                      ? 'text-green-600'
                      : user.status === 'Pending'
                      ? 'text-yellow-600'
                      : 'text-red-600'
                  }`}
                >
                  {user.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredRequests.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No matching requests found.</p>
        )}
      </div>
    </div>
  );
}
