import React, { useState, useEffect } from "react";

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
        <nav className="flex flex-row font-Quicksand justify-between md:justify-around items-center bg-transparent w-full p-4 font-poppins">
            <div
                className="md:hidden text-xl cursor-pointer font-medium ml-5"
                onClick={toggleSidebar}
            >
                ☰
            </div>
            <section className="flex items-center">
                <div className="pl-2 flex flex-col">
                    <div className="text-[13px] sm:text-md cursor-pointer md:text-[17px] font-bold">
                        Google Developer Student Club
                    </div>
                    <div className="text-[11px] sm:text-[14px] cursor-pointer font-semibold">
                        ESI Sidi Bel Abbes
                    </div>
                </div>
            </section>
            <section className="hidden md:flex gap-7 items-center">
                <a href="#" className="font-semibold text-sm lg:text-base">
                    HOME
                </a>
                <a href="#" className="font-semibold text-sm lg:text-base">
                    EVENTS
                </a>
                <a href="#" className="font-semibold text-sm lg:text-base">
                    PARTNERS
                </a>
                <a href="#" className="font-semibold text-sm lg:text-base">
                    CONTACT US
                </a>
                <a href="#" className="font-semibold text-sm lg:text-base">
                    FAQ
                </a>
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
