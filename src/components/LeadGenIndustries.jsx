
const IndustriesAndGrowthHub = () => {
    // Top Section Data
    const industries = [
        {
            title: <>Fintech &amp; Financial<br />Services</>,
            desc: "payment platforms, lending, wealth management, and CFO-facing tools",
        },
        {
            title: <>Marketing Technology<br />(MarTech)</>,
            desc: "agencies, ad-tech platforms, and analytics tools",
        },
        {
            title: <>HR<br />Technology</>,
            desc: "workforce management, payroll, talent assessment, and employee engagement platforms",
        },
        {
            title: <>EdTech &amp;<br />Corporate Learning</>,
            desc: "online training platforms and professional development tools for businesses",
        },
        {
            title: <>SaaS &amp;<br />Cloud Platforms</>,
            desc: "B2B software, cloud infrastructure, and DevOps tooling companies",
        },
        {
            title: <>HealthTech &amp;<br />MedTech</>,
            desc: "digital health platforms, telemedicine, and medical device companies",
        },
    ];

    // Duplicate cards for seamless infinite loop
    const loopedIndustries = [...industries, ...industries];

    return (
        <section className="w-full bg-[#031430] text-white py-16 relative overflow-hidden select-none">

            {/* Background radial glow accents */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

            {/* =========================================================
          TOP SECTION: INDUSTRIES WE'VE WORKED IN
          ========================================================= */}
            <div className="max-w-7xl mx-auto text-center mb-12 relative z-10 px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                    Industries We've{" "}
                    <span className="text-[#FFC700] el-messiri relative inline-block">
                        Worked
                        <img
                            src="/Rectangle 123.png"
                            alt=""
                            className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-36 sm:w-36"
                        />
                    </span>{" "}
                    In
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mb-10 px-4">
                    We've run campaigns across some of the most active and high-growth B2B verticals, including
                </p>
            </div>

            {/* ── Marquee Track ── */}
            {/* Edge fade masks */}
            <div className="relative z-10"
                style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                }}
            >
                <div className="marquee-track flex gap-5 w-max">
                    {loopedIndustries.map((ind, idx) => (
                        <div
                            key={idx}
                            className="w-[280px] sm:w-[300px] flex-shrink-0 bg-[#D9D9D921] border border-slate-700/50 rounded-2xl p-6 text-left backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-[#FFC700]/50 hover:shadow-[0_0_25px_rgba(255,199,0,0.1)] transition-all duration-300 group cursor-default"
                        >
                            <div>
                                {/* Yellow left accent bar */}
                                <div className="flex items-start space-x-3 mb-4">
                                    <div className="w-[3px] h-6 bg-[#FFC700] rounded-full shrink-0 mt-0.5" />
                                    <h3 className="text-sm font-semibold text-[#FFC700] tracking-wide group-hover:text-amber-300 transition-colors">
                                        {ind.title}
                                    </h3>
                                </div>
                                <p className="text-xs sm:text-sm mt-6 text-slate-400 leading-relaxed font-medium">
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
            <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center mt-20 px-4 sm:px-6 lg:px-8">

                {/* ── MOBILE LAYOUT: card overlaid on center of chart ── */}
                <div className="relative w-full lg:hidden flex items-center justify-center">

                    {/* RecruChart as the base */}
                    <img src="/RecruChart.svg" alt="" className="w-full max-w-[400px]" />

                    {/* CENTER CARD — absolutely centered over the SVG */}
                    <div className="absolute text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[170px] text-black rounded-2xl p-4 flex flex-col items-center text-center z-10">
                        {/* Gold Coin Icon */}
                        <div className="w-10 h-10 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full flex items-center justify-center shadow-md mb-2 border border-amber-200">
                            <span className="text-white font-black text-base select-none">$</span>
                        </div>

                        <h4 className="text-xs font-semibold text-[#051126] tracking-tight leading-tight">
                            Custom growth
                        </h4>
                        <span className="text-xs font-bold text-[#FFB800] mt-0.5 tracking-wide">
                            Package
                        </span>

                        {/* CTA Button */}
                        <button className="mt-3 w-20 bg-[#FAC207] text-[#051126] font-semibold text-[4px]  rounded-lg flex items-center justify-center space-x-1 shadow-md active:scale-95 transition-all duration-200">
                            <span>Get Custom Quote</span>
                            <span className="font-bold">→</span>
                        </button>
                    </div>
                </div>

                {/* ── DESKTOP LAYOUT: overlapping absolute layout ── */}
                <div className="hidden lg:block relative w-full h-[500px]">

                    {/* CENTER CARD */}
                    <div className="w-full max-w-[300px] text-black rounded-3xl p-6 flex flex-col items-center text-center z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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

                    <img src="/RecruChart.svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full" alt="" />
                </div>
            </div>

        </section>
    );
};

export default IndustriesAndGrowthHub;