// NavbarHome.js

import { useState, useEffect } from "react";
import PrimaryButton from "./PrimaryButton";
import ThirdButton from "./ThirdButton";
import { NavLink } from "react-router-dom";
// SearchBar.js

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
        placeholder="Search for issues or blogs"
      />
      <button className="absolute right-3 text-xl text-center items-center top-1.5 focus:outline-none">
        {/* You can use an icon here, like a search icon */}
        {">"}
      </button>
    </div>
  );
};

function NavbarHome() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleBodyClick = (e) => {
      const isClickInsideSidebar = e.target.closest(".md\\:hidden");
      if (isSidebarOpen && !isClickInsideSidebar) {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
      document.body.addEventListener("click", handleBodyClick);
    } else {
      document.body.style.overflow = "auto";
      document.body.removeEventListener("click", handleBodyClick);
    }

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [isSidebarOpen]);

  return (
    <nav className="h-16 flex absolute flex-row items-center justify-between md:justify-around bg-white w-full font-poppins top-0 px-4">
      <div
        className="md:hidden text-2xl font-bold items-center cursor-pointer align-middle ml-5"
        onClick={toggleSidebar}
      >
        Ξ
      </div>
      <div className="text-xl ml-auto md:ml-0 cursor-pointer md:text-[17px] font-bold mx-4">
        INFINITY
      </div>
      <div className="hidden md:flex items-center">
        <SearchBar />
      </div>
      {isSidebarOpen ? (
        <>
          <div className="md:hidden fixed top-0 left-0 h-full w-60 bg-black text-white p-4 flex flex-col justify-between">
            {/* Add search bar component here if needed */}
            <div className="flex flex-col mb-2 justify-between">
              <ThirdButton text="Logout" />
              <NavLink
                to={"/profile"}
                className="py-2.5 px-10 rounded-lg text-sm bg-white text-black
                border-solid border-2 border-black"
              >
                Profile
              </NavLink>
            </div>
          </div>
          <div className="pointer-events-none z-40 fixed top-0 left-[240px] bottom-0 right-0 bg-[rgba(0,0,0,0.6)] "></div>
        </>
      ) : (
        <section className="hidden md:flex flex-row space-x-8">
          {/* Add search bar component here if needed */}
          <div className="flex flex-row items-center space-x-4">
            <ThirdButton text="Logout" />
            <ThirdButton text="Profile" />
            {/* <PrimaryButton text="Create" /> */}
          </div>
        </section>
      )}
    </nav>
  );
}

export default NavbarHome;
