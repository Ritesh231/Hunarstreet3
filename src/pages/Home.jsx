import React from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function LandingHero() {
    return (
        <div
            className="w-full min-h-screen bg-white text-slate-800 flex flex-col justify-between overflow-x-hidden p-4 md:p-6 lg:p-8 select-none"
            style={{ fontFamily: "'Segoe UI', sans-serif" }}
        >
            {/* --- NAVBAR --- */}
            <header className="w-full max-w-7xl mx-auto flex items-center justify-between shrink-0 mb-8">
                {/* Brand Logo */}
                <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm">
                    <img src="/HunarStreetLogo.svg" alt="Logo" className="w-full h-full object-contain" />
                </div>

                {/* Center Pill Navigation */}
                <nav className="hidden md:flex bg-[#0B2240] rounded-full px-8 py-3 items-center space-x-10 text-sm font-semibold tracking-wide shadow-lg">
                    <Link to="/" className="text-[#FFCC00] hover:text-amber-300 transition-colors">Home</Link>
                    <Link to="/recruitment" className="text-white/80 hover:text-white transition-colors">Recruitment</Link>
                    <Link to="/lead-generation" className="text-white/80 hover:text-white transition-colors">Lead Generation</Link>
                </nav>

                {/* Action Button */}
                <button className="bg-[#FFCC00] hover:bg-[#e6b800] text-[#0B2240] font-bold px-5 py-2.5 rounded-xl shadow text-xs transition-all transform active:scale-95">
                    Schedule Demo
                </button>
            </header>

            {/* --- HERO HEADER SECTION --- */}
            <section className="w-full max-w-3xl mx-auto text-center shrink-0 mb-12 relative flex flex-col items-center">
                {/* Badge row with megaphone */}
                <div className="flex items-center gap-2 mb-3">
                    <img src="/megaphone.svg" alt="megaphone" className="w-10 h-10 object-contain" />
                    <span className="bg-[#FFCC00] text-[#0B2240] text-[10px] font-black px-4 py-1.5 rounded-md tracking-wide uppercase shadow-sm">
                        One Partner. Two Growth Solutions.
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl font-black text-[#0B2240] tracking-tight leading-tight mb-3">
                    Build. Grow.{' '}
                    <span
                        className="text-[#FFCC00] relative inline-block pb-1"
                        style={{
                            backgroundImage: "url('/Rectangle 123.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'bottom center',
                            backgroundSize: '100% 12px'
                        }}
                    >
                        Succeed.
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-slate-500 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
                    We help businesses hire top talent and generate qualified opportunities to accelerate growth.
                </p>

                {/* Decorative curved arrows (Desktop Only) */}
                <svg
                    className="hidden -mt-4 lg:block absolute left-[-60px] top-[70px] w-32 h-20 text-slate-400 pointer-events-none"
                    viewBox="0 0 120 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M110 5 C60 5, 20 20, 10 55"
                        stroke="#0B2240"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        fill="none"
                    />
                    <path d="M6 45 L10 55 L16 48" stroke="#0B2240" strokeWidth="1.5" fill="none" />
                </svg>

                <svg
                    className="hidden -mt-4 lg:block absolute right-[-60px] top-[70px] w-32 h-20 text-[#FAC207] pointer-events-none"
                    viewBox="0 0 120 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5 C60 5, 100 20, 110 55"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        fill="none"
                    />
                    <path d="M114 45 L110 55 L104 48" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
            </section>

            {/* --- DUAL SPLIT CARDS CONTAINER --- */}
            <main className="w-full -mt-24 max-w-7xl mx-auto flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-40 items-stretch relative">

                {/* Center Hub Logo with Connection Dotted Lines */}
                <div className="hidden mt-16 lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 items-center justify-center w-40 h-40 pointer-events-none">
                    {/* Left line - curves UP towards logo */}
                    <svg
                        className="absolute right-[100px] w-24 h-16"
                        viewBox="0 0 100 60"
                    >
                        <path
                            d="M100 30 Q50 -25 0 50"
                            stroke="#6EA8FF"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            fill="none"
                        />
                    </svg>

                    {/* Center Logo */}
                    <div className="w-14 h-14 bg-[#0B2240] border-4 border-white rounded-full flex items-center justify-center shadow-xl">
                        <img src="/HunarStreetLogo.svg" alt="Hub" className="w-8 h-8" />
                    </div>

                    {/* Right line - curves DOWN away from logo */}
                    <svg
                        className="absolute left-[100px] w-24 h-16"
                        viewBox="0 0 100 60"
                    >
                        <path
                            d="M0 30 Q50 85 100 10"
                            stroke="#FAC207"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            fill="none"
                        />
                    </svg>
                </div>

                {/* --- LEFT: RECRUITMENT --- */}
                <div className="relative rounded-[2.5rem] flex flex-col md:flex-row justify-between p-8 lg:p-10 group min-h-[380px] overflow-visible bg-no-repeat bg-cover shadow-sm"
                    style={{ backgroundImage: "url('/Vector 13.png')" }}>

                    {/* Top Floating Left Graphic Icon */}
                    <div className="absolute -top-10 left-8 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border border-blue-50/50 z-20">
                        <img src="/team1.png" alt="Team" className="w-14 h-14 object-contain" />
                    </div>

                    {/* Left content text frame */}
                    <div className="flex flex-col justify-center gap-2 z-10 max-w-[50%] mt-6 md:mt-0">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0B2240] leading-tight">
                            We Do <br /> Recruitment
                        </h2>
                        <p className="text-slate-500 text-xs font-semibold my-2">
                            Find The Right Talents. <br /> Build Stronger Teams.
                        </p>
                        <Link to="/recruitment" className="bg-[#0B2240] hover:bg-[#123159] text-white text-xs font-bold px-5 py-2.5 rounded-full flex items-center gap-2 w-fit transition-all shadow-md">
                            Explore Recruitment
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>

                    {/* Right Side UI Asset Artwork */}
                    <div className="w-full md:w-[50%] h-64 md:h-full flex items-end justify-end z-10 mt-4 md:mt-0">
                        <img
                            src="/Hunarhome1.png"
                            alt="Recruitment Illustration"
                            className="w-96 h-96 object-contain object-bottom right"
                        />
                    </div>
                </div>

                {/* --- RIGHT: LEAD GENERATION --- */}
                <div className="relative rounded-[2.5rem] flex flex-col md:flex-row-reverse justify-between p-8 lg:p-10 group min-h-[380px] overflow-visible bg-no-repeat bg-cover shadow-sm"
                    style={{ backgroundImage: "url('/Vector 14.png')" }}>

                    {/* Top Floating Right Graphic Icon */}
                    <div className="absolute -top-8 right-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border border-amber-100 z-20">
                        <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center">
                            <FaTelegramPlane className="text-xl text-[#FAC207] transform rotate-12" />
                        </div>
                    </div>

                    {/* Right content text frame */}
                    <div className="flex flex-col justify-center items-end text-right gap-2 z-10 max-w-[50%] mt-6 md:mt-0">
                        <h2 className="text-3xl md:text-4xl font-black leading-tight">
                            <span className="text-[#FFCC00]">We Do</span> <br />
                            <span className="text-[#FFCC00] whitespace-nowrap">Lead Generation</span>
                        </h2>
                        <p className="text-slate-500 text-xs font-semibold my-2">
                            Generate Qualified Opportunities. <br /> Fuel Your Sales Pipeline.
                        </p>
                        <Link to="/lead-generation" className="bg-[#FFCC00] hover:bg-[#e6b800] text-[#0B2240] text-xs font-bold px-5 py-2.5 rounded-full flex items-center gap-2 w-fit transition-all shadow-md">
                            Explore Lead Generation
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>

                    {/* Left Side UI Asset Artwork */}
                    <div className="w-full md:w-[50%] h-64 md:h-full flex items-end justify-start z-10 mt-4 md:mt-0">
                        <img
                            src="/Hunarhome2.png"
                            alt="Lead Generation Illustration"
                            className="w-full h-full object-contain object-bottom left"
                        />
                    </div>
                </div>

            </main>
        </div>
    );
}