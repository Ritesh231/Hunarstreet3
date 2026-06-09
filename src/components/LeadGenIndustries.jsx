

const IndustriesAndGrowthHub = () => {
    // Top Section Data
    const industries = [
        {
            title: <>Fintech & Financial<br />Services</>,
            desc: "payment platforms, lending, wealth management, and CFO-facing tools",
        },
        {
            title: <>Marketing Technology<br />  (MarTech)</>,
            desc: "agencies, ad-tech platforms, and analytics tools",
        },
        {
            title: <>HR <br /> Technology</>,
            desc: "workforce management, payroll, talent assessment, and employee engagement platforms",
        },
        {
            title: <>EdTech <br /> & Corporate Learning</>,
            desc: "online training platforms and professional development tools for businesses",
        },
    ];


    return (
        <section className="w-full bg-[#031430] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none">

            {/* Background radial glow accents */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

            {/* =========================================================
          TOP SECTION: INDUSTRIES WE'VE WORKED IN
          ========================================================= */}
            <div className="max-w-7xl mx-auto text-center mb-24 relative z-10">
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                    <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                        Industries We've{" "}
                        <span className="text-[#FFC700] relative inline-block">
                            Worked

                            <img
                                src="/Rectangle 123.png"
                                alt=""
                                className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-36` sm:w-36"
                            />
                        </span>{" "}
                        In
                    </h2>
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mb-10 px-4">
                    We've run campaigns across some of the most active and high-growth B2B verticals, including
                </p>

                {/* Responsive Grid / Horizontal scroll container */}
                <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-5 pb-6 px-2 scrollbar-none snap-x snap-mandatory">
                    {industries.map((ind, idx) => (
                        <div
                            key={idx}
                            className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 bg-[#D9D9D921] border border-slate-700/50 rounded-2xl p-6 text-left snap-center backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-slate-500/50 transition-all duration-300 group"
                        >
                            <div>
                                {/* Yellow left accent bar indicator */}
                                <div className="flex items-start space-x-3 mb-4">
                                    <div className="w-[3px] h-6 bg-[#FFC700] rounded-full shrink-0 mt-0.5" />
                                    <h3 className="text-sm font-semibold text-[#FFC700] tracking-wide group-hover:text-amber-300 transition-colors">
                                        {ind.title}
                                    </h3>
                                </div>
                                <p className="text-xs sm:text-sm mt-8 text-slate-400 leading-relaxed font-medium">
                                    {ind.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* =========================================================
          BOTTOM SECTION: HUB AND SPOKE MAP
          ========================================================= */}
            <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">

                {/* Dynamic Wrapper: Grid layout on mobile/tablet, Absolute layout on desktop */}
                <div className="relative w-full flex flex-col items-center lg:block lg:h-[500px]">

                    {/* CENTER CARD (The Growth Package Hub) */}
                    <div className="w-full max-w-[300px]  text-black rounded-3xl p-6  flex flex-col items-center text-center z-30 relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 mb-10 lg:mb-0 ">
                        {/* Gold Coin Icon */}
                        <div className="w-12 h-12 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full flex items-center justify-center shadow-md mb-3 border border-amber-200">
                            <span className="text-white font-black text-xl select-none">$</span>
                        </div>

                        <h4 className="text-xl font-extrabold text-[#051126] tracking-tight">
                            Custom growth
                        </h4>
                        <span className="text-sm font-bold text-[#FFB800] mt-0.5 tracking-wide">
                            Package
                        </span>

                        {/* CTA Button */}
                        <button className="mt-5 w-48 bg-[#FAC207] hover:from-[#FFA800] hover:to-[#E69500] text-[#051126] font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center space-x-1 shadow-md shadow-amber-500/10 transition-all duration-200 active:scale-95 group">
                            <span>Get Custom Quote</span>
                            <span className="transform group-hover:translate-x-0.5 transition-transform font-bold">→</span>
                        </button>
                    </div>

                    <img src="/RecruChart.svg" className='hidden lg:block -mt-12' alt="" />

                </div>
            </div>

        </section>
    );
};

export default IndustriesAndGrowthHub;