import React, { useState, useEffect } from "react";

const links = [
  { id: "home", text: "HOME" },
  { id: "events", text: "EVENTS" },
  { id: "partners", text: "PARTNERS" },
  { id: "contact-us", text: "CONTACT US" },
  { id: "faq", text: "FAQ" },
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
    <nav className="flex flex-row font-Quicksand justify-between md:justify-around items-center bg-transparent w-full p-4 font-poppins">
      <div
        className="md:hidden text-2xl cursor-pointer font-medium ml-5" // Adjusted size here
        onClick={toggleSidebar}
      >
        ☰
      </div>
      <section className="flex items-center space-x-2 md:space-x-4">
        <div className="flex flex-col">
          <div className="text-sm md:text-base cursor-pointer font-bold">
            Google Developer Student Club
          </div>
          <div className="text-xs md:text-sm cursor-pointer font-semibold">
            ESI Sidi Bel Abbes
          </div>
        </div>
      </section>
      <section className="hidden md:flex gap-4 items-center">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="font-semibold text-xs md:text-sm lg:text-base" // Adjusted size here
          >
            {link.text}
          </a>
        ))}
      </section>
      {isSidebarOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-1/3 bg-gray-800 text-white p-4 flex flex-col open">
          {" "}
          {/* Adjusted width here */}
          <div className="mb-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="block py-2 font-semibold text-xs md:text-sm" // Adjusted size here
                onClick={closeSidebar}
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className="flex-grow"></div>
          <div className="mb-2 flex items-center">
            <div className="flex flex-col items-center justify-center">
              <div className="text-xs md:text-sm font-semibold pt-1">
                Google Developer Student Club
              </div>
              <div className="text-xs md:text-sm font-semibold">
                ESI Sidi Bel Abbes
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
