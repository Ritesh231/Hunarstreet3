import React from 'react';

export default function HeroSection() {
    return (
        <section className="relative w-full  overflow-hidden py-4 px-4 sm:px-6 lg:px-16 ">
            {/* Left Yellow Background Patch */}
            <div className="absolute left-0 top-[180px] w-[320px] h-[420px] bg-gradient-to-b from-[#FFF4CC]/60 to-[#FFF4CC]/20 rounded-r-[120px] -z-10 hidden lg:block" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center ">

                {/* LEFT COLUMN: Content & CTAs */}
                <div className="lg:col-span-6  flex flex-col space-y-6 text-center lg:text-left z-10">

                    {/* Subheading Tag */}
                    <div className="self-center lg:self-start bg-[#FAC207] text-[#0A2540] text-xs md:text-sm font-semibold px-4 py-1.5 rounded-md shadow-sm">
                        Real Lead. Real Pipeline. Real Revenue
                    </div>

                    {/* Main Typography Header */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[34px] xl:text-[38px] font-semibold text-[#0A2540]  leading-[1.8] tracking-normal">
                        Build a Predictable <span className="text-[#F4B400]">B2B</span>
                        <br className="hidden lg:block" />
                        <span className="whitespace-nowrap">
                            Pipeline Without <br className='md:hidden'></br>Hiring an Entire
                        </span>


                        {/* Inline Badged Text */}
                        <span className="relative inline-flex items-center gap-2 mt-2 lg:mt-0">
                            <span className="inline-flex items-center -space-x-2 bg-gray-100 p-1 rounded-full border border-gray-200 shadow-sm align-middle h-9 w-20 md:h-11 md:w-24 overflow-hidden">
                                <img className="rounded-full object-cover" src="/HunarRecruit2.png" alt="Team member" />

                            </span>
                            <span className="text-[#FAAF00] font-serif italic font-normal tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-[56px] pl-1 relative">
                                Sales Team
                                {/* Handcrafted gold underline curve */}
                                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#FAAF00]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                        </span>
                    </h1>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                        <button className="w-full sm:w-auto bg-[#FAC207] hover:bg-[#E09E00] text-[#0A2540] font-bold px-8 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all duration-200 text-sm md:text-base flex items-center justify-center gap-2 group">
                            Book Free Session
                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                        <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#0A2540] font-semibold px-8 py-3.5 rounded-md border border-gray-300 shadow-sm transition-all duration-200 text-sm md:text-base flex items-center justify-center gap-2">
                            See How It Works →
                        </button>
                    </div>

                    {/* Abstract bottom decorative swirl arrow */}
                    <div className="hidden lg:block pl-28 pt-2">
                        <img src="/Arrow 07.png" className='w-40 h-40' alt="" />
                    </div>
                </div>

                {/* RIGHT COLUMN: Imagery & Floating Badges */}
                <div className="lg:col-span-6 relative flex flex-col items-center justify-center w-full min-h-[520px] md:min-h-[580px] lg:min-h-[620px] px-4 sm:px-6 bg-white">

                    {/* 1. Subtle Radial Gradient Aura (Stays underneath the central image layer) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                        <div className="w-[85%] sm:w-[75%] aspect-square rounded-full bg-gradient-to-tr from-blue-50/60 to-amber-50/60 blur-3xl opacity-70" />
                    </div>

                    {/* 2. Floating Badges and Icons (Forced to z-20 and z-30 to display directly on top of your asset) */}

                    {/* Yellow Megaphone - Top Left */}
                    <div className="absolute top-[6%] left-[12%] sm:left-[18%] z-20 opacity-95 animate-pulse" style={{ animationDuration: '4s' }}>
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#FAAF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                    </div>

                    {/* PAN India Operations Badge - Top Right */}
                    <div className="absolute top-[4%] right-[4%] sm:right-[8%] bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-2 flex items-center gap-2.5 z-30 max-w-[150px] sm:max-w-[175px]">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                            <img
                                className="w-full h-full object-cover"
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=100"
                                alt="Operations Thumbnail"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[11px] sm:text-xs font-bold text-[#0A2540] leading-tight">PAN India Operations</span>
                        </div>
                    </div>

                    {/* 3. Central Image Layer (Your single base composite image set to lower index) */}
                    <div className="w-full max-w-[700px] px-2 mb-2 relative z-10 flex justify-center">
                        <img
                            className="w-full h-auto object-contain select-none filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.04)]"
                            src="/HunarRecruit1.png"
                            alt="B2B Campaign Experts"
                            draggable="false"
                        />
                    </div>


                    {/* 4. Bottom Cards Layer (Positioned on top with z-30 to break borders elegantly) */}
                    <div className="w-full max-w-[490px] flex items-stretch gap-4 sm:gap-5 mt-[-10px] relative z-30 px-2">

                        {/* Metric Card (Left Side Overlay) */}
                        <div className="bg-white rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-gray-100 p-4 sm:p-5 w-[42%] flex flex-col justify-center">
                            <div className="text-2xl sm:text-3xl font-semibold text-[#0A2540] tracking-tight">500+</div>

                            {/* Internal Progress Bar */}
                            <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                                <div className="w-[82%] h-full bg-gradient-to-r from-[#FAC207] to-[#0A2540] rounded-full" />
                            </div>

                            <div className="text-[10px] sm:text-[11px] font-bold text-gray-400 mt-2 tracking-wider uppercase leading-snug">
                                Campaigns Executed
                            </div>
                        </div>

                        {/* Brand Statement Summary Card (Right Side Overlay) */}
                        <div className="bg-[#FAC207] text-[#0A2540] rounded-2xl p-4 sm:p-5 w-[58%] shadow-[0_15px_35px_rgba(250,175,0,0.28)] flex items-center border border-amber-400">
                            <p className="text-[11px] sm:text-xs md:text-[13px] font-semibold leading-relaxed tracking-wide">
                                HunarStreet Technologies helps B2B companies connect with their ideal clients through targeted LinkedIn and email campaigns run by a dedicated team.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}