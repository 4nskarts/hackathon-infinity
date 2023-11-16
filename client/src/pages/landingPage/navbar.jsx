import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  const handleBodyClick = (e) => {
    if (isSidebarOpen && e.target.closest(".md\\:hidden") === null) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [isSidebarOpen]);

  return (
    <nav className="flex flex-row justify-between md:justify-around items-center bg-transparent absolute top-0 w-full p-4 font-poppins">
      {/* Hamburger Icon for Smaller Devices (aligned with the logo) */}
      <div
        className="md:hidden text-xl cursor-pointer font-medium ml-5"
        onClick={toggleSidebar}
      >
        ☰
      </div>

      {/* Logo and Brand */}
      <section className="flex items-center">
    
        <div className="pl-2 flex flex-col">
          <div className="text-[13px] sm:text-md cursor-default md:text-[17px] font-bold">
            Google Developer Student Club
          </div>
          <div className="text-[11px] sm:text-[14px] cursor-default font-semibold">ESI Sidi Bel Abbes</div>
        </div>
      </section>

      {/* Navbar Links for Larger Devices */}
      <section className="hidden md:flex gap-7 items-center">
        <Link href="" className="font-semibold text-sm lg:text-base ">
          HOME
        </Link>
        <Link href="" className="font-semibold text-sm lg:text-base ">
          EVENTS
        </Link>
        <Link href="" className="font-semibold text-sm lg:text-base ">
          PARTNERS
        </Link>
        <Link href="" className="font-semibold text-sm lg:text-base ">
          CONTACT US
        </Link>
        <Link href="" className="font-semibold text-sm lg:text-base ">
          FAQ
        </Link>
      </section>

      {/* Sidebar for Smaller Devices */}
      {isSidebarOpen && (
        <div className={`md:hidden fixed top-0 left-0 h-full w-50 bg-gray-800 text-white p-4 flex flex-col open`}>
          <div className="mb-8">
            <Link
              href="#HOME"
              className="block py-2 font-semibold text-sm"
              onClick={closeSidebar}
            >
              HOME
            </Link>
            <Link
              href="EVENTS"
              className="block py-2 font-semibold text-sm"
              onClick={closeSidebar}
            >
              EVENTS
            </Link>
            <Link
              href="PARTNERS"
              className="block py-2 font-semibold text-sm"
              onClick={closeSidebar}
            >
              PARTNERS
            </Link>
            <Link
              href="CONTACT-US"
              className="block py-2 font-semibold text-sm"
              onClick={closeSidebar}
            >
              CONTACT US
            </Link>
            <Link
              href="#FAQ"
              className="block py-2 font-semibold text-sm"
              onClick={closeSidebar}
            >
              FAQ
            </Link>
          </div>
          <div className="flex-grow"></div>{" "}
          {/* This will push the content to the bottom */}
          <div className="mb-4 flex items-center">
            <div className="flex flex-col items-center justify-center">
              <div className="text-xs ml-2 font-semibold pt-1">
                Google Developer Student Club
              </div>
              <div className="text-xs font-semibold">ESI Sidi Bel Abbes</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;