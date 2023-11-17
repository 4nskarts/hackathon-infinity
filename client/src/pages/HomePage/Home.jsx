// Card.js

import React, { useState } from "react";
import NavbarHome from "../../components/NavBarHome";
import Modal from "react-modal";
import "./Card.css";

const Home = ({ users, issues }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateIssue = () => {
    // Add logic to handle creating a new issue
    // This is where you might make an API call to create a new issue
    closeModal();
  };

  return (
    <>
      {isModalOpen ? (
        <div>
          <div className="w-screen h-screen bg-black opacity-70 items-center fixed inset-0 "></div>
          <div className="bg-[#edede9] absolute -translate-x-1/2 rounded-md -translate-y-1/2 leading-[1.4] max-w-[800px] min-w-[500px] px-7 py-3.5 left-2/4 top-[50%]">
            <h2 className="font-semibold text-xl">✕ Raise a New Issue ✕</h2>
            <form className="mt-6 gap-8" onSubmit={handleCreateIssue}>
              <div className="flex flex-col gap-1 mt-4 mb-2">
                <label>Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="off"
                  required
                  className="block w-full px-2 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-700 bg-gray-200 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex flex-col gap-1 mt-4 mb-2">
                <label>Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  required
                  className="block w-full px-2 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-700 bg-gray-200 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2 mt-4 mb-4">
                <label>Tags</label>
                <input
                  id="tags"
                  name="tags"
                  type="text"
                  autoComplete="off"
                  placeholder="Enter tags separated by commas"
                  className="block w-full px-2 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-700 bg-gray-200 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex gap-4 justify-center mt-4 items-center">
                <button
                  type="submit"
                  className="shrink-0 align-middle bg-[#FFD500] text-black rounded-lg p-2"
                >
                  Create Issue
                </button>
              </div>
            </form>
            <button
              className="text-red-800 border-2 font-semibold text-lg absolute right-4 top-2"
              onClick={closeModal}
            >
              x
            </button>
          </div>
        </div>
      ) : null}

      <div className="mt-16">
        <NavbarHome />
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 lg:grid-cols-4 gap-0 p-8">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="max-w-sm mx-2 my-8 bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="flex justify-center items-center px-6 py-4">
                <div className="flex justify-center items-center">
                  <img
                    src={users[index].profilePicture}
                    alt="User Profile"
                    className=" rounded-full mt-0 mr-4"
                  ></img>
                </div>
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

      {/* Button to open the modal */}
      <button
        className="fixed bottom-8 right-8 bg-[#FFD500] text-black py-2 px-4 text-4xl rounded-full"
        onClick={openModal}
      >
        +
      </button>
    </>
  );
};

export default Home;
