import React, { useState, useEffect } from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const links = [
  { id: "home", text: "HOME" },
  { id: "contact-us", text: "CONTACT US" },
  { id: "about", text: "ABOUT" },
];

function Navbar() {
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
    <nav className="h-16 flex absolute flex-row items-center justify-between md:justify-around  bg-white w-full font-poppins  top-0 px-4">
      <div
        className="md:hidden text-2xl font-bold items-center cursor-pointer align-middle ml-5"
        onClick={toggleSidebar}
      >
        Ξ
      </div>
      <div className="text-xl ml-auto md:ml-0 cursor-pointer md:text-[17px] font-bold mx-4">
        INFINITY
      </div>
      {isSidebarOpen ? (
        <div className="md:hidden fixed top-0 left-0 h-full w-60 bg-gray-800 text-white p-4 flex flex-col open">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="block py-2 font-semibold text-sm"
              onClick={closeSidebar}
            >
              {link.text}
            </a>
          ))}
        </div>
      ) : (
        <section className="hidden md:flex flex-row space-x-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-gray-700 hover:text-gray-900"
            >
              {link.text}
            </a>
          ))}
        </section>
      )}
      <section className="flex flex-row items-center space-x-4">
        <PrimaryButton text="Get Started" />
        <SecondaryButton text="Login" />
      </section>
    </nav>
  );
}

export default Navbar;
