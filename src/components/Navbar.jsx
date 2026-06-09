import React, { useState } from 'react';
import Schedule from './Schedule';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDemoOpen, setIsDemoOpen] = useState(false);


    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className="w-full bg-white shadow-sm  sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* LEFT: Logo Area */}
                    <div className="flex-shrink-0 w-12 h-12 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
                        <img src="/HunarStreetLogo.svg" alt="HunarStreetLogo" />
                    </div>

                    {/* CENTER: Navigation Links (Pill Style - Hidden on Mobile) */}
                    <div className="hidden md:flex items-center justify-center flex-1 px-4">
                        <div className="bg-[#031530] rounded-full px-8 py-2.5 flex items-center space-x-8 shadow-md">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="text-yellow-500 font-semibold text-sm hover:text-yellow-400 transition-colors"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => window.location.href = '#/recruitment'}
                                className="text-white font-medium text-sm hover:text-yellow-500 transition-colors"
                            >
                                Recruitment
                            </button>
                            <button
                                onClick={() => window.location.href = '#/lead-generation'}
                                className="text-white font-medium text-sm hover:text-yellow-500 transition-colors"
                            >
                                Lead Generation
                            </button>

                        </div>
                    </div>

                    {/* RIGHT: CTA Button (Hidden on Mobile) */}
                    <div className="hidden md:flex items-center">
                        <button
                            onClick={() => setIsDemoOpen(true)}
                            className="bg-[#FFC107] hover:bg-[#E0A800] text-[#031530] font-semibold px-5 py-2.5 rounded-lg shadow-[0_0_15px_rgba(255,193,7,0.3)] transition-all duration-200 text-sm"
                        >
                            Schedule Demo
                        </button>
                    </div>


                    {/* MOBILE MENU BUTTON (Hamburger Icon) */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#031530] hover:bg-gray-100 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                // Close (X) Icon
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger Menu Icon
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#031530] transition-all duration-300`}>
                <div className="px-4 pt-4 pb-6 space-y-3 shadow-lg">
                    <button
                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-yellow-500 bg-[#051937]"
                        onClick={() => scrollToSection('home')}
                    >
                        Home
                    </button>
                    <button
                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#051937] hover:text-yellow-500"
                        onClick={() => {
                            window.location.href = '#/recruitment';
                            setIsOpen(false);
                        }}
                    >
                        Recruitment
                    </button>
                    <button
                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#051937] hover:text-yellow-500"
                        onClick={() => {
                            window.location.href = '#/lead-generation';
                            setIsOpen(false);
                        }}
                    >
                        Lead Generation
                    </button>


                    <div className="pt-4 border-t border-gray-700">
                        <button
                            onClick={() => {
                                setIsDemoOpen(true);
                                setIsOpen(false);
                            }}
                            className="w-full bg-[#FFC107] hover:bg-[#E0A800] text-[#031530] font-semibold px-4 py-3 rounded-md shadow-md text-center block text-base"
                        >
                            Schedule Demo
                        </button>
                    </div>

                </div>
            </div>
            <Schedule isDemoOpen={isDemoOpen} setIsDemoOpen={setIsDemoOpen} />
        </nav>

    );
};

export default Navbar;