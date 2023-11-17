// Card.js

import React from "react";
import NavbarHome from "../../components/NavBarHome";
import "./Card.css";

const Home = ({ users, issues }) => {
  const formatDate = (date) => {
    // Implement your own date formatting logic here
    // This is just a basic example
    return new Date(date).toLocaleString();
  };
  console.log(issues);

  return (
    <div className="min-h-screen mt-16">
      <NavbarHome />
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 lg:grid-cols-4 gap-0 p-8">
        {issues.map((issue, index) => (
          <div
            key={index}
            className="max-w-sm mx-2 my-8 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="flex items-center px-6 py-4">
              <img
                src={users[index].profilePicture}
                alt="User Profile"
                className="h-12 w-12 rounded-full mr-4"
              />
              <div>
                <div className="text-xl font-semibold text-gray-800">
                  {users[index].name}
                </div>
                <p className="text-gray-600 text-sm">
                  {formatDate(issue.postedTime)}
                </p>
              </div>
            </div>
            <hr className="border-t" />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">{issue.title}</h2>
              <p className="text-gray-700 text-base mb-4 overflow-hidden overflow-ellipsis h-16 line-clamp-4">
                {issue.description}
              </p>
              <div className="mb-4 flex justify-end">
                {issue.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
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
        ))}
      </div>
    </div>
  );
};

export default Home;
