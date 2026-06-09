import React from 'react';

export default function OutboundGrowthSection() {
    const features = [
        { text: "ICP Definition & Strategy", positioning: "lg:top-[38%] lg:-right-[18%]" },
        { text: "LinkedIn Outreach", positioning: "lg:top-[48%] lg:-left-[16%]" },
        { text: "Lead Qualification", positioning: "lg:bottom-[22%] lg:-left-[30%]" },
        { text: "Response Management", positioning: "lg:bottom-[8%] lg:-left-[5%]" },
        { text: "Prospect Research", positioning: "lg:bottom-[15%] lg:right-[2%]" }
    ];

    return (
        <section className="relative w-full  bg-[#FCFBF7] overflow-hidden py-4 lg:py-4 px-4 sm:px-6 lg:px-16">
            <img src="/Rectangle 4(1).png" alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
            {/* Background Topography Texture lines placeholder effect */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0A2540_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center relative z-10">

                {/* LEFT COLUMN: Circular Image Composition */}
                <div className="lg:col-span-4 flex justify-center lg:justify-start relative">

                    {/* Subtle Golden Background Circle Accent */}
                    <div className="absolute -top-6 -right-2 w-48 h-48 rounded-full bg-[#FAC20720] -z-10 flex items-center justify-center">
                        <div className="w-28 h-28 rounded-full bg-[#FAC20729]/20" />
                    </div>

                    {/* Main Rounded Frame */}
                    <div className="">
                        <img
                            className="w-full h-full object-cover scale-105"
                            src="/Rectangle 14.png"
                            alt="Team working on laptops"
                        />
                    </div>

                    {/* Dark Blue Decorative Starburst/Badge Shape Bottom Left */}
                    <div className="absolute -bottom-6 left-6 text-[#0A2540] animate-spin" style={{ animationDuration: '20s' }}>
                        <img src="/Star 1.png" alt="" />
                    </div>
                </div>

                {/* CENTER COLUMN: Text Content & Copy */}
                <div className="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start space-y-5">

                    {/* Solution Tag */}
                    <span className="bg-[#D2E3FC] text-[#1A73E8] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-md">
                        Solution
                    </span>

                    {/* Header Typography */}
                    <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0A2540] leading-[1.15] tracking-tight">
                        Your Dedicated <br />

                        <span className="whitespace-nowrap">
                            Outbound{" "}
                            <span className="relative inline-block text-[#FAAF00]">
                                Growth Team

                                <img
                                    src="/Rectangle 123.png"
                                    alt=""
                                    className="absolute left-0 -bottom-2 w-full"
                                />
                            </span>
                        </span>
                    </h2>

                    <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed max-w-md pt-2">
                        Instead of hiring and managing a Business Development team, get an experienced outbound engine built for predictable pipeline growth.
                    </p>

                    {/* CTA Button */}
                    <button className="bg-[#FAAF00] hover:bg-[#E09E00] text-[#0A2540] font-bold px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm flex items-center gap-2 group mt-2">
                        Enquire Now
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

                {/* RIGHT COLUMN: Interactive Feature Map & Model Frame */}
                <div className="lg:col-span-4 relative min-h-[420px] sm:min-h-[500px] lg:min-h-[580px] w-full flex items-end justify-center lg:justify-end mt-8 lg:mt-0">

                    {/* Headline Callout: "What will include?" */}
                    <div className="absolute top-0 right-4 lg:right-12 flex flex-col items-end">
                        <h3 className="text-xl sm:text-2xl font-serif italic font-bold text-[#0A2540] tracking-wide">
                            What will include ?
                        </h3>
                        {/* Hand-drawn decorative arrow pointing down */}
                        <div className="text-[#FAAF00] -mt-8 -mr-14 w-40 h-32 md:h-48 md:w-48 ">
                            <img src="/Arrow 8.png" alt="" />
                        </div>
                    </div>

                    {/* Central Animated Business Woman Model Image Asset */}
                    <div className="w-64 sm:w-72 lg:w-[310px] h-auto object-contain z-10 pr-0 lg:pr-8">
                        <img
                            className="w-full h-auto filter drop-shadow-2xl"
                            src="/RecruitHr.png"
                            alt="Growth Success Presenter"
                        />
                    </div>

                    {/* Yellow Glow Behind Person */}
                    <div className="absolute bottom-0 right-16 w-64 h-64 rounded-full bg-[#FAC207]/20 blur-3xl -z-10" />

                    <div className="absolute top-40 left-8 w-40 h-40 rounded-full bg-[#FAC207]/15 blur-2xl -z-10" />

                    <div className="absolute bottom-24 left-24 w-32 h-32 rounded-full bg-[#FAC207]/20 blur-xl -z-10" />

                    {/* Dynamic Badges Map: Desktop = Floating Canvas Layout | Mobile = Clean grid list under image */}
                    <div className="contents lg:block">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md mt-6 lg:mt-0 lg:absolute lg:inset-0 lg:max-w-none pointer-events-none z-20">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className={`pointer-events-auto bg-white/95 backdrop-blur-sm text-[#0A2540] font-bold text-xs sm:text-sm px-4 py-3 rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.04)] border border-[#FAC2075E] flex items-center justify-center text-center lg:absolute transition-all duration-300 transform hover:scale-105 ${feature.positioning} w-full lg:w-auto lg:min-w-[160px]`}
                                >
                                    {feature.text}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

            {/* Accent Brand Baseline Bar across bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#FAAF00]" />
        </section>
    );
}