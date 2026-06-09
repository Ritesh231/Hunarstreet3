import React from 'react';

const TrustedClients = () => {
    // Mock array representing the different logo cards on the right layout
    // We specify custom grid sizing and placement mappings to handle the exact look
    const logoCards = [
        { id: 1, gridPos: "col-start-3 row-start-1" },
        { id: 2, gridPos: "col-start-1 col-span-2 row-start-2 row-span-2 is-large" },
        { id: 3, gridPos: "col-start-3 row-start-2" },
        { id: 4, gridPos: "col-start-4 row-start-2" },
        { id: 5, gridPos: "col-start-5 row-start-2" },
        { id: 6, gridPos: "col-start-2 row-start-4" },
        { id: 7, gridPos: "col-start-3 row-start-3" },
        { id: 8, gridPos: "col-start-4 row-start-3" },
        { id: 9, gridPos: "col-start-5 row-start-3" },
        { id: 10, gridPos: "col-start-3 row-start-4" },
    ];

    return (
        <section className="w-full bg-[#031430] text-white py-16 px-6 sm:px-12 lg:px-20 relative overflow-hidden select-none">

            {/* Subtle bottom glowing boundary accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-yellow-500/20 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* =========================================================
            LEFT COLUMN: TEXT CONTENT & MARKETING BRANDING
            ========================================================= */}
                <div className="lg:col-span-5 space-y-6 relative z-10 text-left">

                    {/* Section Tag */}
                    <div className="inline-block bg-[#2D436B] border border-blue-400/20 text-[#A5C2F4] text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-lg shadow-sm">
                        Our Clients
                    </div>

                    {/* Heading Container with Floating Megaphone Vector */}
                    <div className="relative pt-4">
                        {/* Absolute Megaphone Illustration position */}
                        <div className="absolute top-[-60px] right-12 sm:right-32 lg:right-0 w-24 h-24 text-[#FFC700]  ">
                            <img src="/megaphone.svg" alt="" />
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                            Trusted By Leading <br />
                            <span className="text-[#FFC700] relative inline-block mt-1">
                                Company
                                {/* Underline Flourish Curve effect */}

                                <img
                                    src="/Rectangle 123.png"
                                    alt=""
                                    className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-48 sm:w-48"
                                />
                            </span>
                        </h2>
                    </div>

                    {/* Context Description paragraph */}
                    <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-md pt-2">
                        We've partnered with growing businesses, and established organizations to help them find the right talent and achieve their hiring goals.
                    </p>

                    {/* CTA Action Trigger */}
                    <div className="pt-4">
                        <button className="bg-[#FFC700] hover:bg-[#E6B400] text-[#031430] font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-yellow-500/10 flex items-center space-x-2 group transition-all duration-200 active:scale-95">
                            <span>Join Us Now</span>
                            <span className="transform group-hover:translate-x-1 transition-transform font-bold">→</span>
                        </button>
                    </div>

                </div>

                {/* =========================================================
            RIGHT COLUMN: BENTO LAYOUT LOGO GRID
            ========================================================= */}
                <div className="lg:col-span-7 w-full flex justify-center items-center">

                    {/* Desktop/Tablet CSS Grid Container */}
                    <div className="hidden sm:grid grid-cols-5 grid-rows-4 gap-4 w-full max-w-[580px] p-2 aspect-[4/3] items-center justify-items-center">
                        {logoCards.map((card) => {
                            const isLarge = card.gridPos.includes('is-large');
                            return (
                                <div
                                    key={card.id}
                                    className={`
                    ${card.gridPos.replace('is-large', '')} 
                    bg-white rounded-3xl flex items-center justify-center -mt-8 p-4 shadow-xl border border-white/20 transition-transform duration-300 hover:scale-105 select-none
                    ${isLarge ? 'w-full h-full max-h-[220px]' : 'w-full aspect-square max-w-[100px] sm:max-w-[110px]'}
                  `}
                                >
                                    {/* Google Logo Placeholder matches the look */}
                                    <div className={`flex items-center font-semibold tracking-tight ${isLarge ? 'text-3xl lg:text-4xl' : 'text-sm sm:text-base'}`}>
                                        <span className="text-[#4285F4]">G</span>
                                        <span className="text-[#EA4335]">o</span>
                                        <span className="text-[#FBBC05]">o</span>
                                        <span className="text-[#4285F4]">g</span>
                                        <span className="text-[#34A853]">l</span>
                                        <span className="text-[#EA4335]">e</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile Clean Fluid Wrapping Grid Alternative */}
                    <div className="grid sm:hidden grid-cols-3 gap-3 w-full">
                        {/* Main Featured Big Card element */}
                        <div className="col-span-3 bg-white rounded-2xl py-8 px-4 flex items-center justify-center shadow-md">
                            <div className="text-3xl font-semibold tracking-tight">
                                <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
                            </div>
                        </div>
                        {/* Secondary companion layout elements */}
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="bg-white rounded-xl aspect-square p-2 flex items-center justify-center shadow-sm">
                                <div className="text-xs font-semibold tracking-tight">
                                    <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TrustedClients;