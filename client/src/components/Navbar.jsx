import React, { useState, useEffect } from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

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
            if (isSidebarOpen && !e.target.closest(".md\\:hidden")) {
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
        <nav className="h-16 flex flex-row font-Quicksand items-center justify-between md:justify-around bg-white w-full font-poppins absolute top-0">
            <div
                className="md:hidden text-xl cursor-pointer font-medium ml-5"
                onClick={toggleSidebar}
            >
                ☰
            </div>
            <div className="text-[13px] sm:text-md cursor-pointer md:text-[17px] font-bold">
                TRADE
            </div>
            <section className="flex w-80 flex-row justify-evenly items-center">
                <a href="#">Services</a>
                <a href="#">Pricing</a>
                <a href="#">Company</a>
            </section>
            <section className="flex flex-row justify-between items-center w-80">
                <PrimaryButton text="Get Started" />
                <SecondaryButton text="Login"/>
            </section>
            {isSidebarOpen && (
                <div className="md:hidden fixed top-0 left-0 h-full w-50 bg-gray-800 text-white p-4 flex flex-col open">
                    <div className="mb-8">
                        <a
                            href="#HOME"
                            className="block py-2 font-h5 text-sm"
                            onClick={closeSidebar}
                        >
                            HOME
                        </a>
                        <a
                            href="#EVENTS"
                            className="block py-2 font-semibold text-sm"
                            onClick={closeSidebar}
                        >
                            EVENTS
                        </a>
                        <a
                            href="#PARTNERS"
                            className="block py-2 font-semibold text-sm"
                            onClick={closeSidebar}
                        >
                            PARTNERS
                        </a>
                        <a
                            href="#CONTACT-US"
                            className="block py-2 font-semibold text-sm"
                            onClick={closeSidebar}
                        >
                            CONTACT US
                        </a>
                        <a
                            href="#FAQ"
                            className="block py-2 font-semibold text-sm"
                            onClick={closeSidebar}
                        >
                            FAQ
                        </a>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="mb-4 flex items-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-xs ml-2 font-semibold pt-1">
                                Google Developer Student Club
                            </div>
                            <div className="text-xs font-semibold">
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
