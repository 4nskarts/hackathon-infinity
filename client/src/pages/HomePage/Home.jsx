// Card.js

import React from "react";
import Navbar from "../../components/Navbar";
import NavbarHome from "../../components/NavBarHome";

const Home = ({ user, issue }) => {
  const formatDate = (date) => {
    // Implement your own date formatting logic here
    // This is just a basic example
    return new Date(date).toLocaleString();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <NavbarHome />
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center px-6 py-4">
          <img
            src={user.profilePicture}
            alt="User Profile"
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <div className="text-xl font-semibold text-gray-800">
              {user.name}
            </div>
            <p className="text-gray-600 text-sm">
              {formatDate(issue.postedTime)}
            </p>
          </div>
        </div>
        <hr className="border-t" />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{issue.title}</h2>
          <p className="text-gray-700 text-base mb-4 overflow-hidden overflow-ellipsis h-16">
            {issue.description}
          </p>
          <div className="mb-4">
            {issue.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="bg-[#FFD500] text-black py-1 px-4 mt-4 rounded-lg">
            Answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
