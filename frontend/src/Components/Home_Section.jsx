import React, { useState } from "react";
import { Link } from "react-router-dom";

const dummyRequests = [
  {
    id: 1,
    name: "Abc",
    profilePic: "https://i.pravatar.cc/150?img=3",
    offered: "React.js",
    wanted: "Node.js",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Neha Rathi",
    profilePic: "https://i.pravatar.cc/150?img=4",
    offered: "Vue.js",
    wanted: "React.js",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Karan Malhotra",
    profilePic: "https://i.pravatar.cc/150?img=8",
    offered: "Java",
    wanted: "Spring Boot",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Sanya Mehta",
    profilePic: "https://i.pravatar.cc/150?img=15",
    offered: "Figma",
    wanted: "UX Research",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Ritik Goyal",
    profilePic: "https://i.pravatar.cc/150?img=20",
    offered: "Node.js",
    wanted: "Golang",
    rating: 4.3,
  },
  {
    id: 6,
    name: "Ankita Sharma",
    profilePic: "https://i.pravatar.cc/150?img=27",
    offered: "Flutter",
    wanted: "React Native",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Yash Tiwari",
    profilePic: "https://i.pravatar.cc/150?img=36",
    offered: "Kubernetes",
    wanted: "DevOps",
    rating: 4.1,
  },
  {
    id: 8,
    name: "Meenal Agarwal",
    profilePic: "https://i.pravatar.cc/150?img=17",
    offered: "Photoshop",
    wanted: "UI Design",
    rating: 3.9,
  },
  {
    id: 9,
    name: "Arnav Verma",
    profilePic: "https://i.pravatar.cc/150?img=7",
    offered: "Python",
    wanted: "Django",
    rating: 4.7,
  },
  {
    id: 10,
    name: "Nikita Chauhan",
    profilePic: "https://i.pravatar.cc/150?img=13",
    offered: "HTML/CSS",
    wanted: "React.js",
    rating: 4.4,
  },
];

export default function Home_Section() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredRequests = dummyRequests.filter((req) => {
    const matchesSearch = req.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "All" || req.offered === filter || req.wanted === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-2/3 px-4 py-2 border rounded-md"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-md px-4 py-2 w-full md:w-1/3"
        >
          <option>All</option>
          <option>React.js</option>
          <option>Node.js</option>
          <option>Python</option>
          <option>Java</option>
          <option>ML Projects</option>
          <option>Web Dev</option>
        </select>
      </div>

      {/* Requests Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredRequests.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition-all duration-300 border"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={user.profilePic}
                alt={user.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-sm text-gray-500">
                  <span className="text-yellow-400 mr-1">★</span>
                  {user.rating}
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-700 mb-2">
              <strong>Skills Offered:</strong> {user.offered}
            </div>
            <div className="text-sm text-gray-700 mb-4">
              <strong>Skills Wanted:</strong> {user.wanted}
            </div>
            <Link to="/swap-platform">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
                Send Request
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* If no results */}
      {filteredRequests.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          No matching requests found.
        </div>
      )}
    </div>
  );
}
