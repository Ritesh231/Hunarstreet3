import React, { useState } from 'react';
import logo from '../assets/RecruitmentPageAssets/img1046 1.png';
import Schedule from './Schedule';

const Rnavbar = ({ setIsDemoOpen, isDemoOpen }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'Home', targetId: 'home', href: '#home' },
        { label: 'About', targetId: 'about', href: '#about' },
        { label: 'Positions', targetId: 'positions', href: '#positions' },
        { label: 'Industries', targetId: 'industries', href: '#industries' }
    ];

    const handleScroll = (e, targetId) => {
        e.preventDefault();

        const element = document.getElementById(targetId);

        if (element) {
            const headerOffset = 100;
            const elementPosition =
                element.getBoundingClientRect().top +
                window.pageYOffset -
                headerOffset;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }

        setIsOpen(false);
    };

    return (
        <>
            <div className="mt-8 px-4 lg:px-0 relative z-50">

                {/* MOBILE HEADER */}
                <div className="flex lg:hidden items-center justify-between w-full">

                    {/* Logo Left */}
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-14 w-auto object-contain"
                    />

                    {/* Hamburger Right */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-[#041C3E] hover:text-[#FAC207] hover:bg-gray-100 transition-all"
                    >
                        {isOpen ? (
                            <svg
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* DESKTOP NAVBAR */}
                <div className="hidden lg:flex justify-center">
                    <div className="h-[40px] w-[370px] rounded-full bg-[#041C3E] flex items-center justify-around px-4">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.targetId)}
                                className="text-white px-4 py-2 rounded-full cursor-pointer hover:text-[#FAC207] transition-colors duration-300"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* MOBILE DROPDOWN MENU */}
                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } lg:hidden absolute top-16 left-4 right-4 bg-[#041C3E] rounded-2xl shadow-2xl overflow-hidden`}
                >
                    <div className="p-4 space-y-2">

                        {navItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={(e) => handleScroll(e, item.targetId)}
                                className="block w-full text-left px-4 py-3 rounded-xl text-white hover:bg-[#0A2D5E] hover:text-[#FAC207] transition-all"
                            >
                                {item.label}
                            </button>
                        ))}

                        <div className="pt-3 border-t border-gray-700">
                            <button
                                onClick={() => {
                                    setIsDemoOpen(true);
                                    setIsOpen(false);
                                }}
                                className="w-full bg-[#FAC207] text-[#041C3E] font-semibold py-3 rounded-xl shadow-[0_0_25px_rgba(250,194,7,0.55)] hover:shadow-[0_0_35px_rgba(250,194,7,0.75)] transition-all"
                            >
                                Schedule Demo
                            </button>
                        </div>

                    </div>
                </div>

            </div>

            <Schedule
                isDemoOpen={isDemoOpen}
                setIsDemoOpen={setIsDemoOpen}
            />
        </>
    );
};

export default Rnavbar;