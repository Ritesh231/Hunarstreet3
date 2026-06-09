import React from 'react';

export default function StrategyChannelsSection() {
    const features = [
        {
            text: "ICP-based prospect list building using LinkedIn Sales Navigator and verified CRM tools",
            isActive: true, // Yellow active banner state matching your design
        },
        {
            text: "Personalised, multi-step outreach content for LinkedIn and email - reviewed and approved by you",
            isActive: false,
        },
        {
            text: "LinkedIn connection campaigns and follow-up message sequences",
            isActive: false,
        },
        {
            text: "Email infrastructure setup, domain warming, and deliverability monitoring",
            isActive: false,
        },
        {
            text: "A/B testing of content and subject lines & Response management - engaging replies meaningfully",
            isActive: false,
        },
        {
            text: "Regular performance reporting and campaign optimisation",
            isActive: false,
        },
    ];

    return (
        <section className="w-full bg-gradient-to-b from-[#F0F6FE] to-white text-[#0A2540] py-16 px-4 sm:px-6 lg:px-16 relative overflow-hidden">

            {/* Decorative Floating Megaphones (Left & Right top corners) */}
            <div className="absolute top-10 left-4 sm:left-12 lg:left-24 opacity-80 animate-bounce hidden sm:block" style={{ animationDuration: '6s' }}>
                <img src="/megaphone.svg" alt="Megaphone" className="w-24 h-24" />
            </div>

            <div
                className="absolute top-10 right-4 sm:right-12 lg:right-24 opacity-80 animate-bounce hidden sm:block"
                style={{ animationDuration: '5s' }}
            >
                <img
                    src="/megaphone.svg"
                    alt="Megaphone"
                    className="-scale-x-100  w-24 h-24"
                />
            </div>

            <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">

                {/* Top Tag */}
                <span className="bg-[#D2E3FC] text-[#1A73E8] text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-md mb-4 shadow-sm">
                    What we do ?
                </span>

                {/* Header Typography */}
                <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-center tracking-tight text-[#0A2540] leading-tight max-w-2xl">
                    One Strategy. Two Powerful <br className="hidden sm:inline" />
                    <span className="text-[#FAC207] relative inline-block mt-4 sm:mt-4">
                        Channels
                        {/* Custom vector underline accent */}
                        <svg
                            className="w-full max-w-[280px] h-3 text-[#0A2540]"
                            viewBox="0 0 300 12"
                            fill="currentColor"
                            preserveAspectRatio="none"
                        >
                            {/* Arching upward on the top side, completely flat on the bottom side, and compressed in height */}
                            <path d="M 0,10 C 60,3 120,0 150,0 C 180,0 240,3 300,10 C 225,10 75,10 0,10 Z" />
                        </svg>
                    </span>
                </h2>

                {/* Context Subheading */}
                <p className="text-gray-600 text-center text-xs sm:text-sm font-semibold max-w-2xl leading-relaxed mt-6 mb-12 px-2">
                    We combine LinkedIn outreach and email campaigns into a single coordinated growth system designed to generate qualified conversations and predictable pipeline growth.
                </p>

                {/* Feature Grid Matrix */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex items-start gap-4 p-5 sm:p-6 rounded-2xl transition-all duration-200 border transform hover:-translate-y-0.5
                ${feature.isActive
                                    ? 'bg-[#FAC207] text-[#0A2540] border-[#FAC2075E] shadow-md'
                                    : 'bg-white text-[#0A2540] border-[#FAC2075E] shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-md'
                                }`}
                        >
                            {/* Custom Round Checkmark Box Icon */}
                            <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 border mt-0.5
                ${feature.isActive ? 'border-[#0A2540]' : 'border-gray-300'}`}
                            >
                                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>

                            {/* Grid Feature Core Copy String */}
                            <p className={`text-xs sm:text-sm font-semibold leading-relaxed tracking-wide
                ${feature.isActive ? 'text-[#0A2540]' : 'text-slate-600'}`}
                            >
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}