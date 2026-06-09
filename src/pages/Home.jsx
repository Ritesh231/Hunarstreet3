import React from 'react';

export default function LandingHero() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 text-slate-800 font-sans overflow-x-hidden">

            {/* --- NAVBAR --- */}
            <header className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo Placeholder */}
                <div className="w-16 h-16 bg-slate-900 rounded-md flex items-center justify-center text-amber-400 font-bold text-xl">
                    {/* <img src="logo.png" alt="Logo" className="object-contain" /> */}
                    H
                </div>

                {/* Center Pill Navigation */}
                <nav className="hidden md:flex bg-[#0B2240] rounded-full px-6 py-2.5 items-center space-x-8 text-sm font-medium">
                    <a href="#home" className="text-amber-400 hover:text-amber-300 transition">Home</a>
                    <a href="#recruitment" className="text-white hover:text-slate-200 transition">Recruitment</a>
                    <a href="#lead-gen" className="text-white hover:text-slate-200 transition">Lead Generation</a>
                </nav>

                {/* CTA Button */}
                <button className="bg-[#FFCC00] hover:bg-[#E6B800] text-slate-900 font-semibold px-5 py-2.5 rounded-full shadow-md text-sm transition">
                    Schedule Demo
                </button>
            </header>

            {/* --- HERO HEADER SECTION --- */}
            <section className="max-w-4xl mx-auto text-center px-4 pt-12 pb-6 relative">
                {/* Sub-tagline badge */}
                <div className="inline-flex items-center gap-2 bg-[#FFCC00] text-slate-900 text-xs md:text-sm font-bold px-4 py-1.5 rounded-sm shadow-sm mb-6 uppercase tracking-wider">
                    {/* Megaphone icon placeholder */}
                    <span className="text-lg">📢</span>
                    One Partner. Two Growth Solutions.
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-black text-[#0B2240] tracking-tight mb-4">
                    Build. Grow. <span className="text-[#FFCC00] relative inline-block">Succeed.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                    We help businesses hire top talent and generate qualified opportunities to accelerate growth.
                </p>
            </section>

            {/* --- DUAL SPLIT CARDS SECTION --- */}
            <main className="max-w-7xl mx-auto px-4 py-12 relative">

                {/* Center Connecting Logo Placeholder (Desktop Only) */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-[#0B2240] border-4 border-white rounded-full items-center justify-center text-white shadow-lg">
                    {/* <img src="center-logo.png" alt="..." /> */}
                    H
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative items-stretch">

                    {/* LEFT CARD: RECRUITMENT */}
                    <div className="relative bg-gradient-to-b from-blue-50/70 to-white border border-blue-100/50 rounded-[2.5rem] p-8 md:p-12 shadow-sm flex flex-col justify-between overflow-hidden">
                        {/* Curved background shape accentuation using clip-path properties if needed, or simple rounded edges */}

                        {/* Top Left Floating Badge */}
                        <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center mb-6">
                            {/* Team icon placeholder */}
                            <span className="text-2xl">👥</span>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2240] mb-3">
                                We Do <br /> Recruitment
                            </h2>
                            <p className="text-slate-600 mb-6 max-w-xs">
                                Find The Right Talents. <br /> Build Stronger Teams.
                            </p>

                            <button className="bg-[#0B2240] hover:bg-[#081a33] text-white text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition group shadow-md mb-8">
                                Explore Recruitment
                                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>

                        {/* Left Graphic Asset Placeholder */}
                        <div className="mt-4 w-full h-64 md:h-72 bg-slate-100 rounded-2xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm">
                            {/* Insert your Candidate UI component / image here */}
                            [Candidate Panel / Profiles Image Placeholder]
                        </div>

                        {/* Absolute Decorative Arrow (Left to Center) */}
                        <div className="hidden lg:block absolute -right-4 top-12 w-12 h-12 text-slate-400">
                            {/* Curved Arrow SVG */}
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 transform rotate-45">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-6 6m0 0l-3-3m3 3V15" />
                            </svg>
                        </div>
                    </div>

                    {/* RIGHT CARD: LEAD GENERATION */}
                    <div className="relative bg-gradient-to-b from-amber-50/50 to-white border border-amber-100/50 rounded-[2.5rem] p-8 md:p-12 shadow-sm flex flex-col justify-between overflow-hidden">

                        {/* Top Right Floating Badge */}
                        <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center mb-6 ml-auto lg:ml-0">
                            {/* Paper airplane icon placeholder */}
                            <span className="text-2xl text-amber-500">🚀</span>
                        </div>

                        <div className="lg:text-right flex flex-col lg:items-end">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#FFCC00] mb-3 drop-shadow-sm">
                                We Do <br /><span className="text-[#0B2240]">Lead Generation</span>
                            </h2>
                            <p className="text-slate-600 mb-6 max-w-xs lg:text-right">
                                Generate Qualified Opportunities. <br /> Fuel Your Sales Pipeline.
                            </p>

                            <button className="bg-[#FFCC00] hover:bg-[#E6B800] text-slate-900 text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition group shadow-md mb-8">
                                Explore Lead Generation
                                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>

                        {/* Right Graphic Asset Placeholder */}
                        <div className="mt-4 w-full h-64 md:h-72 bg-slate-100 rounded-2xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm">
                            {/* Insert your Lead Gen / Dashboard component / image here */}
                            [Lead Gen Analytics / LinkedIn UI Image Placeholder]
                        </div>

                        {/* Absolute Decorative Arrow (Center to Right) */}
                        <div className="hidden lg:block absolute -left-8 top-12 w-12 h-12 text-[#FFCC00]">
                            {/* Curved Arrow SVG */}
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 transform -rotate-45">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}