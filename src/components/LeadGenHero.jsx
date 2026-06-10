import { useState } from "react";
import Schedule from "../components/Schedule";

export default function HeroSection() {
    const [openSchedule, setOpenSchedule] = useState(false);

    const scrollToHowItWorks = () => {
        const section = document.getElementById("howitworks");

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section className="relative w-full overflow-hidden py-8 px-4 sm:px-6 lg:px-6 bg-white lg:py-4">
            {/* Left Yellow Background Patch - Kept for Desktop */}
            <div className="absolute left-0 top-[180px] w-[420px] h-[520px] bg-gradient-to-r from-[#FAC2076E]/30 to-[#FAC2076E]/10 rounded-r-[120px] blur-[20px] z-0 hidden lg:block" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">

                {/* LEFT COLUMN: Content & CTAs */}
                <div className="lg:col-span-6 flex flex-col space-y-4 md:space-y-6 text-center lg:text-left z-10">

                    {/* Subheading Tag */}
                    <div className="self-center lg:self-start bg-[#FAC207] text-[#0A2540] text-xs md:text-sm font-semibold px-4 py-1.5 rounded-md shadow-sm">
                        Real Lead. Real Pipeline. Real Revenue
                    </div>

                    {/* Main Typography Header */}
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[34px] xl:text-[38px] font-semibold text-[#0A2540] leading-snug lg:leading-[1.5] tracking-normal">
                        Build a Predictable <span className="text-[#F4B400]">B2B</span> Pipeline

                        <br className="block lg:hidden" />

                        Without Hiring an Entire

                        <br className="hidden lg:block" />

                        {/* Inline Badged Text */}
                        <span className="relative inline-flex items-center gap-2 mt-2 lg:mt-0 vertical-mid align-middle">
                            <span className="inline-flex items-center -space-x-2  p-0.5 md:p-1 rounded-full shadow-sm h-7 w-14 md:h-20 md:w-36">
                                <img className="rounded-full object-cover w-full h-full" src="/HunarRecruit2.png" alt="Team member" />
                            </span>
                            <span className="text-[#FAAF00] el-messiri font-normal tracking-wide text-3xl sm:text-5xl md:text-6xl lg:text-[56px] pl-1 relative whitespace-nowrap">
                                Sales Team
                                {/* Handcrafted gold underline curve */}
                                <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-[#FAAF00]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                        </span>
                    </h1>

                    {/* Action Buttons */}
                    <div className="flex flex-row items-center justify-center lg:justify-start gap-3 pt-2 md:pt-4">
                        <button
                            onClick={() => setOpenSchedule(true)} className="w-1/2 sm:w-auto el-messiri bg-[#FAC207] hover:bg-[#E09E00] text-[#0A2540] font-bold px-4 lg:px-8 py-3.5 rounded-md shadow-[0_0_25px_rgba(250,194,7,0.6)] hover:shadow-[0_0_35px_rgba(250,194,7,0.8)] transition-all duration-300 text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 group">
                            Book Free Session →
                        </button>

                        <button onClick={scrollToHowItWorks} className="w-1/2 sm:w-auto el-messiri hover:bg-gray-50 text-[#0A2540] font-semibold px-4 lg:px-8 py-3.5 rounded-md border border-gray-300 shadow-sm transition-all duration-200 text-xs sm:text-sm md:text-base flex items-center justify-center gap-2">
                            See How It Works →
                        </button>
                    </div>

                    {/* Abstract bottom decorative swirl arrow */}
                    <div className="hidden lg:block pl-28 pt-2">
                        <img src="/Arrow 07.png" className="w-40 h-40" alt="" />
                    </div>
                </div>

                {/* RIGHT COLUMN: Imagery & Floating Badges */}
                <div className="lg:col-span-6 relative flex flex-col items-center justify-center w-full min-h-[320px] sm:min-h-[450px] md:min-h-[580px] lg:min-h-[620px] px-2 sm:px-6">

                    {/* Subtle Radial Gradient Aura */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                        <div className="w-[85%] sm:w-[75%] aspect-square rounded-full bg-gradient-to-tr from-blue-50/60 to-amber-50/60 blur-3xl opacity-70" />
                    </div>

                    {/* Floating Megaphone - Hidden on small mobile to avoid layout clutter */}
                    <div className="absolute top-[10%] left-[5%] sm:left-[18%] z-20 opacity-95 animate-pulse w-8 sm:w-auto">
                        <img src="/megaphone.svg" alt="" className="-scale-x-100 w-full h-auto" />
                    </div>

                    {/* PAN India Operations Badge */}
                    <div className="absolute top-[4%] right-[2%] sm:right-[8%] bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-1.5 sm:p-2 flex items-center gap-2 z-30 max-w-[130px] sm:max-w-[175px]">
                        <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                            <img
                                className="w-full h-full object-cover"
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=100"
                                alt="Operations Thumbnail"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[9px] sm:text-xs font-bold text-[#0A2540] leading-tight">PAN India Operations</span>
                        </div>
                    </div>

                    {/* Central Image Layer */}
                    <div className="w-full max-w-[340px] sm:max-w-[500px] lg:max-w-[1100px] px-2 mb-6 lg:mb-2 lg:-mt-40 lg:mr-14 relative z-0 flex justify-center">
                        <img
                            className="w-[130%] lg:w-[180%] max-w-none h-[550px] object-contain select-none"
                            src="/HunarRecruit1.png"
                            alt="B2B Campaign Experts"
                            draggable="false"
                        />
                    </div>

                    {/* On Desktop: Absolute overlapping position. On Mobile: Flat grid flexbox below the illustration */}
                    <div className="w-full -mt-24 lg:mt-[-10px] relative z-30 px-2 flex flex-col sm:flex-row items-center justify-center gap-4 lg:block lg:max-w-[490px]">

                        {/* Left Floating Metric Card */}
                        <div className="w-full sm:w-[180px] lg:absolute lg:left-[-100px] lg:-top-24  lg:z-30 lg:w-[180px]">
                            <div className="bg-white rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-gray-100 p-4">
                                <div className="text-2xl font-semibold text-[#0A2540] tracking-tight">
                                    500+
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                                    <div
                                        className="w-[82%] h-full rounded-full"
                                        style={{
                                            background: 'linear-gradient(to right, #FAC207 0% 40%, #0A2540 40% 100%)',
                                        }}
                                    />
                                </div>
                                <div className="text-[10px] text-black font-semibold mt-2 tracking-wider uppercase leading-snug">
                                    Campaigns Executed
                                </div>
                            </div>
                        </div>

                        {/* Brand Statement Summary Card */}
                        <div className="w-full sm:flex-1 lg:absolute lg:right-0 lg:right-[-50px] lg:-top-[30%] lg:-translate-y-1/2 lg:z-30 lg:w-[80%] bg-[#FAC207] text-[#0A2540] rounded-2xl p-4 sm:p-5 shadow-[0_15px_35px_rgba(250,175,0,0.28)] flex items-center border border-amber-400">
                            <p className="text-[11px] text-[#041C3E] sm:text-xs md:text-[13px] leading-relaxed tracking-wide text-center sm:text-left lg:whitespace-nowrap">
                                HunarStreet Technologies helps B2B companies<br className="hidden lg:inline" /> connect with their ideal clients through targeted<br className="hidden lg:inline" /> LinkedIn and email campaigns run by a dedicated team.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
            {openSchedule && (
                <Schedule
                    isDemoOpen={openSchedule}
                    setIsDemoOpen={setOpenSchedule}
                />
            )}
        </section>
    );
}
