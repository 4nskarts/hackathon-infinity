import React, { useState, useEffect } from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import ThirdButton from "./ThirdButton";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const links = [
    { id: "home", text: "HOME" },
    { id: "features", text: "FEATURES" },
    { id: "testimonial", text: "TESTIMONIALS" },
    //   { id: "about", text: "ABOUT" },
];

function Navbar() {
    const navigate = useNavigate()
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    // Function to handle the activation of a link.
    const handleSetActive = (to) => {
        console.log(to);
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
        <nav className="h-16 flex fixed flex-row items-center justify-between md:justify-around  bg-white w-full font-  top-0 px-4 z-50">
            <div
                className="md:hidden text-2xl font-bold items-center cursor-pointer align-middle ml-5"
                onClick={toggleSidebar}
            >
                Ξ
            </div>
            <div className="text-xl ml-auto md:ml-0 cursor-pointer md:text-[17px] font-bold mx-4">
                CREVIX
            </div>
            {isSidebarOpen ? (
                <>
                    <div className="md:hidden fixed top-0 left-0 h-full w-60 bg-black text-white p-4 flex flex-col justify-between">
                        <div>
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
                        <div className="flex flex-col mb-2 justify-between">
                            <ThirdButton text="Login" />
                        </div>
                    </div>
                    <div className="pointer-events-none z-40 fixed top-0 left-[240px] bottom-0 right-0 bg-[rgba(0,0,0,0.6)] "></div>
                </>
            ) : (
                <section className="hidden md:flex flex-row space-x-8">
                    {links.map((link) => (
                        <Link
                            className="text-gray-600 hover:text-gray-900 hover:cursor-pointer"
                            activeClass="active"
                            to={link.id}
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onSetActive={handleSetActive}
                        >
                            {link.text}
                        </Link>
                    ))}
                </section>
            )}
            <section className="flex flex-row items-center space-x-4">
                <PrimaryButton text="Get Started" onClick={() => navigate("/contactus")}/>
                <SecondaryButton text="Login" />
            </section>
        </nav>
    );
}

export default Navbar;
