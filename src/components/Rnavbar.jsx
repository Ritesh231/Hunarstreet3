import React, { useState } from 'react';
import logo from '../assets/RecruitmentPageAssets/img1046 1.png';


const Rnavbar = ({ setIsDemoOpen, isDemoOpen }) => {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { label: 'Home', targetId: 'home', href: '#home' },
        { label: 'About', targetId: 'about', href: '#about' },
        { label: 'Positions', targetId: 'positions', href: '#positions' },
        { label: 'Industries', targetId: 'industries', href: '#industries' }
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <div className='fixed inset-x-0 top-[30px] flex lg:justify-center z-50 px-4   lg:px-0'>
            {/* Desktop Navbar */}
            <div className='h-[53px] w-[438px] rounded-full bg-[#041C3E] flex items-center justify-around px-4 hidden lg:flex z-50'>
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        onClick={(e) => handleScroll(e, item.targetId)}
                        className='text-white px-4 py-2 rounded-full cursor-pointer hover:text-[#FAC207] transition-colors duration-300'
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
                onClick={toggleMenu}
                className='lg:hidden z-50 text-blue-900 hover:text-[#FAC207] duration-300 text-2xl'
            >
                {isOpen ? (
                    <i className="ri-close-line hidden"></i>
                ) : (
                    <i className="ri-menu-line font-medium"></i>
                )}
            </button>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300 z-40 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-[#041C3E] lg:hidden z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} shadow-lg`}
            >
                {/* Menu Header with Close Button */}
                <div className='flex items-center justify-between p-6 border-b border-gray-700'>
                    <img src={logo} alt="Logo" className='h-16' />
                    <button
                        onClick={() => setIsOpen(false)}
                        className='text-white hover:text-[#FAC207] transition-colors duration-300'
                    >
                        <i className="ri-close-line text-2xl"></i>

                    </button>
                </div>

                {/* Menu Items */}
                <div className='flex flex-col py-6'>
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={(e) => handleScroll(e, item.targetId)}
                            className='text-white px-6 py-4 hover:bg-[#0a2d5e] hover:text-[#FAC207] transition-all duration-300 border-b border-gray-700 last:border-b-0 cursor-pointer block'
                        >
                            {item.label}
                        </a>
                    ))}
                    <button
                        type="button"
                        onClick={() => setIsDemoOpen(true)}
                        className="font-messiri mt-5  mx-4 lg:block top-[31px]  z-[9999]  right-8 z-20 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#FAC207] px-4 py-2 text-base font-semibold text-[#041C3E] shadow-[0_0_25px_rgba(250,194,7,0.55)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#041C3E] hover:text-white lg:px-5 lg:py-3"
                    >
                        {/* <i className="ri-calendar-2-line text-lg"></i> */}
                        Schedule Demo
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Rnavbar