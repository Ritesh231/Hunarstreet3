

export default function GrowthNumbersSection() {
    return (
        <section className="w-full bg-[#031430] text-white py-16 px-4 sm:px-6 lg:px-16 overflow-hidden ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* LEFT COLUMN: Grid Layout for Stats Cards */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">

                    {/* CARD 1: Yellow Trust Card (Spans full width on mobile, left on desktop) */}
                    <div className="bg-[#FAC207] text-[#0A1931] rounded-[32px] p-6 sm:p-8 flex flex-col justify-between min-h-[220px] sm:col-span-2 lg:col-span-1">
                        {/* Stars & Avatars Row */}
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            {/* 5 Stars */}
                            <div className="flex gap-1 text-white">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.133 9.21l8.2-1.192z" />
                                    </svg>
                                ))}
                            </div>
                            {/* Stacked Avatars */}
                            <div className="flex -space-x-3 overflow-hidden">
                                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FAAF00] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100" alt="User" />
                                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FAAF00] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" alt="User" />
                                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FAAF00] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100" alt="User" />
                            </div>
                        </div>
                        {/* Card Content Text */}
                        <h3 className="text-xl sm:text-2xl  leading-snug mt-6">
                            Trusted by B2B teams who are serious about growth
                        </h3>
                    </div>

                    {/* CARD 2: White Progress Circle Card */}
                    <div className="bg-white text-[#0A1931] rounded-[32px] p-6 flex flex-col items-center justify-center text-center min-h-[220px] w-48">
                        <div className="relative w-28 h-28 flex items-center justify-center">

                            {/* Outer decorative arc */}
                            <svg
                                className="absolute inset-0 w-full h-full rotate-90"
                                viewBox="0 0 120 120"
                            >
                                <circle
                                    cx="60"
                                    cy="60"
                                    r="50"
                                    fill="none"
                                    stroke="#0A2540"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeDasharray="235 80"
                                />
                            </svg>

                            {/* Blue Ring */}
                            <div className="w-24 h-24  flex items-center justify-center relative">

                                {/* Gold Dot */}
                                <div className="absolute top-10 -right-1 w-3 h-3 bg-[#FAAF00] rounded-full" />

                                {/* Inner Blue Circle */}
                                <div className="w-[78px] h-[78px] rounded-full bg-[#041C3E] flex items-center justify-center">
                                    <span className="text-[#FAAF00] font-bold text-3xl">
                                        30%
                                    </span>
                                </div>

                            </div>
                        </div>

                        <p className="text-sm font-bold text-slate-700 mt-4 max-w-[140px] leading-tight">
                            Average Prospect Reply Rate
                        </p>
                    </div>

                    {/* CARD 3: White 500+ Campaigns Executed Card */}
                    <div className="absolute bottom-12 left-4 bg-white text-[#0A1931] rounded-[32px] p-4 flex items-center gap-4 min-h-[140px]">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=200" alt="Team success high five" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#FAAF00]">500+</span>
                            <span className="text-xs sm:text-sm font-bold text-slate-700 leading-tight mt-0.5">Campaigns<br></br> Executed</span>
                        </div>
                    </div>

                    {/* CARD 4: White 32+ Specialists Card */}
                    <div className="bg-white text-[#0A1931] -ml-8 lg:w-72 rounded-[32px] p-4 flex items-end gap-4 min-h-[140px] relative  sm:col-start-2">
                        <div className=" w-20 h-24 flex-shrink-0 flex items-end justify-center self-end -ml-4 mb-4">
                            <img className="w-full h-auto object-contain  scale-150" src="/RecruitHr2.png" alt="Outbound Growth Specialist" />
                        </div>
                        <div className="flex flex-col z-10 ml-4">
                            <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#FAAF00]">32+</span>
                            <span className="text-xs sm:text-sm font-bold text-slate-700 leading-tight mt-0.5">Outbound Growth<br></br>Specialists</span>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: Section Typography Copy & Call-To-Action */}
                <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">

                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-[1.15]">
                        Numbers that reflect <br />
                        <span className="text-[#FAAF00] font-serif italic font-normal tracking-wide pl-1 relative inline-block mt-1">
                            Real Growth
                            {/* Graphic Underline vector accent stroke loop */}
                            <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#FAAF00]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>

                    <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed max-w-md">
                        From targeted prospecting to booked meetings, our campaigns are built to deliver measurable business outcomes.
                    </p>

                    <button className="bg-[#FAC207] hover:bg-[#E09E00] text-[#0A1931] font-bold px-7 py-3 rounded-xl shadow-[0_0_25px_rgba(250,194,7,0.55)] hover:shadow-[0_0_40px_rgba(250,194,7,0.8)] transition-all duration-300 text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 group">
                        Get In Touch
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

            </div>
        </section>
    );
}