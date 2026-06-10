import { FaTelegramPlane } from "react-icons/fa";
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";

export default function LandingHero() {
    const navigate = useNavigate();
    return (
        <div id="home"
            className="w-full bg-white text-slate-800 flex flex-col justify-between  px-4 md:px-6 lg:px-6 select-none relative min-h-screen"
            style={{ fontFamily: "'Segoe UI', sans-serif" }}
        >
            {/* Background Decorative Ellipses */}
            <img src="/Ellipse 25.svg" alt="" className='absolute -bottom-56 left-0 w-48 h-[700px] object-cover z-10 lg:block hidden  z-10' />
            <img src="/Ellipse 26.png" alt="" className='absolute -top-96 right-0 w-96 h-[2000px] object-cover z-10 lg:block hidden' />

            <Navbar />

            {/* --- HERO HEADER SECTION --- */}
            <section className="w-full max-w-3xl mx-auto text-center shrink-0 mb-8 lg:mb-12 relative flex flex-col items-center">
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
                            backgroundPosition: 'center calc(100% + 6px)',
                            backgroundSize: '150% 12px'
                        }}
                    >
                        Succeed.
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-black text-xs md:text-sm max-w-md mx-auto leading-relaxed px-2">
                    We help businesses hire top talent and generate qualified opportunities to accelerate growth.
                </p>

                {/* Decorative curved arrows (Desktop Only) */}
                <img
                    src="/Arrow 6.svg"
                    alt=""
                    className="hidden lg:block absolute left-[-32px] top-[70px] w-32 h-20 pointer-events-none -mt-4"
                />

                <img
                    src="/Arrow 05.svg"
                    alt=""
                    className="hidden lg:block absolute right-[-24px] top-[70px] w-32 h-20 pointer-events-none -mt-4"
                />


            </section>

            {/* =========================================================
            DESKTOP VIEWPORT: Only visible on desktop screens (lg up)
            ========================================================= */}
            <main
                id="solution"
                className="hidden lg:grid w-full -mt-16 xl:-mt-24  mx-auto flex-1 grid-cols-2 gap-16 xl:gap-32 items-stretch relative"
            >
                {/* Center Hub Logo with Connection Dotted Lines */}
                <div className="hidden mt-16 lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 items-center justify-center w-40 h-40 pointer-events-none">
                    <svg className="absolute right-[100px] w-24 h-16" viewBox="0 0 100 60">
                        <path d="M100 30 Q50 -25 0 50" stroke="#6EA8FF" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                    </svg>
                    <div className="w-14 h-14 bg-[#0B2240] border-4 border-white rounded-full flex items-center justify-center shadow-xl">
                        <img src="/HunarStreetLogo.svg" alt="Hub" className="w-8 h-8" />
                    </div>
                    <svg className="absolute left-[100px] w-24 h-16" viewBox="0 0 100 60">
                        <path d="M0 30 Q50 85 100 10" stroke="#FAC207" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                    </svg>
                </div>

                {/* --- DESKTOP LEFT: RECRUITMENT --- */}
                <div className="relative rounded-[2.5rem] flex flex-col md:flex-row justify-between p-8 xl:p-10 group min-h-[220px] xl:min-h-[250px] overflow-visible"
                    style={{
                        backgroundImage: "url('/Vector 13.png')",
                        backgroundSize: "100% 100%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <div className="absolute -top-10 left-8 w-28 h-28 bg-white rounded-full border border-blue-300 z-20 flex items-center justify-center shadow-[0_-6px_20px_rgba(66,133,244,0.18)]">
                        <img src="/team1.png" alt="Team" className="w-14 h-14 object-contain" />
                    </div>
                    <div className="flex flex-col justify-center gap-2 z-10 max-w-[50%] mt-6 md:mt-0">
                        <h2 className="text-3xl 2xl:text-5xl  font-black text-[#0B2240] leading-tight">We Do <br /> Recruitment</h2>
                        <p className="text-black text-sm 2xl:text-lg font-semibold my-2">Find The Right Talents. <br /> Build Stronger Teams.</p>
                        <button className="bg-[#0B2240] hover:bg-[#123159] rounded-lg text-white text-sm  px-2 py-2.5 flex items-center gap-2 w-fit transition-all duration-300 border border-[#0B2240] shadow-[0_0_0_1px_rgba(11,34,64,0.2),0_0_20px_rgba(11,34,64,0.35)] hover:shadow-[0_0_30px_rgba(11,34,64,0.5)]">
                            Explore Recruitment <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                    <div className="w-full md:w-[50%] h-64 md:h-full flex items-end justify-end z-10 mt-4 md:-mt-4">
                        <div className="absolute bottom-0 -right-4 z-10 pointer-events-none">
                            <img
                                src="/Hunarhome1.png"
                                className="w-[420px] xl:w-[360px] 2xl:w-[550px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* --- DESKTOP RIGHT: LEAD GENERATION --- */}
                <div className="relative rounded-[2.5rem] flex flex-col md:flex-row-reverse justify-between p-8 lg:p-10 group min-h-[280px] overflow-visible bg-no-repeat bg-cover shadow-sm"
                    style={{ backgroundImage: "url('/Vector 14.png')" }}>
                    <div className="absolute -top-8 right-8 w-24 h-24 bg-white rounded-full border border-amber-100 z-20 flex items-center justify-center shadow-[0_0_0_1px_rgba(250,194,7,0.15),0_0_15px_rgba(250,194,7,0.25),0_0_30px_rgba(250,194,7,0.18)]">
                        <div className="w-24 h-24 rounded-full flex items-center justify-center">
                            <FaTelegramPlane className="text-4xl text-[#FAC207] rotate-12" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-end text-right gap-2 z-10 max-w-[50%] mt-6 md:mt-0">
                        <h2 className="text-3xl 2xl:text-6xl font-black text-[#0B2240] leading-[1.1]"><span className="text-[#FAC207]">We Do</span> <br /><span className="text-[#FAC207] whitespace-nowrap">Lead Generation</span></h2>
                        <p className="text-black text-sm 2xl:text-lg font-semibold my-2">Generate Qualified Opportunities. <br /> Fuel Your Sales Pipeline.</p>
                        <button onClick={() => navigate("/lead-generation")} className="bg-[#FFCC00] whitespace-nowrap hover:bg-[#e6b800] text-[#0B2240] text-sm px-3 py-2.5 rounded-xl flex items-center gap-2 w-fit transition-all duration-300 shadow-[0_0_25px_rgba(255,204,0,0.45)] hover:shadow-[0_0_40px_rgba(255,204,0,0.7)]">
                            Explore Lead Generation <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                    <div className="w-full md:w-[50%] h-64 md:h-full flex items-end justify-start z-10 mt-4 md:mt-0">
                        <div className="absolute -bottom-4 -left-36 z-10 pointer-events-none">
                            <img
                                src="/Hunarhome2.png"
                                className="w-[450px] xl:w-[430px] 2xl:w-[580px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/* =========================================================
            MOBILE & TABLET VIEWPORT CONTAINER: (Visible on everything below 1024px)
            ========================================================= */}
            <main className="lg:hidden w-full flex flex-col gap-12 px-4 md:px-12 pb-12 relative z-20 max-w-2xl mx-auto">

                {/* --- MOBILE/TABLET RECRUITMENT CARD --- */}
                <div
                    className="relative rounded-[2rem] bg-[#F4F8FF] border border-blue-50 p-6 md:p-8 pt-14 flex flex-col justify-between bg-no-repeat bg-cover shadow-sm "

                >
                    {/* Floating Corner Badge */}
                    <div className="absolute -top-7 left-6 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full border border-blue-100 z-20 flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.08),0_0_20px_rgba(66,133,244,0.22)]">
                        <img
                            src="/team1.png"
                            alt="Team"
                            className="w-8 h-8 md:w-9 md:h-9 object-contain"
                        />
                    </div>

                    {/* Inner Container */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 w-full">
                        {/* Text Content - Full width on mobile */}
                        <div className="w-full sm:w-[55%] text-center flex flex-col gap-2 z-10">
                            <h2 className="text-2xl md:text-4xl font-black text-[#0B2240] leading-tight">
                                We Do  Recruitment
                            </h2>
                            <p className="text-slate-700 text-xs md:text-sm font-semibold">
                                Find The Right Talents. <br /> Build Stronger Teams.
                            </p>
                            <button
                                onClick={() => navigate("/recruitment")}
                                className="bg-[#0B2240] ml-16 text-white text-xs md:text-sm font-semibold px-4 py-2.5 rounded-lg flex items-center justify-center  gap-2 w-fit mt-2 shadow-md hover:bg-opacity-90 transition-all"
                            >
                                Explore Recruitment <span>→</span>
                            </button>
                        </div>

                        {/* Illustration - Full width on mobile, right-aligned */}
                        <div className="w-full sm:w-[45%] flex justify-center sm:justify-end items-end  sm:mt-0">
                            <img
                                src="/Hunarhome1.png"
                                alt="Recruitment Illustration"
                                className="w-full max-w-[360px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* --- MOBILE/TABLET LEAD GENERATION CARD --- */}
                <div
                    className="relative rounded-[2rem] bg-[#FFFBEB] border border-amber-50 p-6 md:p-8 pt-14 flex flex-col justify-between bg-no-repeat bg-cover shadow-sm "

                >
                    {/* Floating Corner Badge */}
                    <div className="absolute -top-7 right-6 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-md flex items-center justify-center border border-amber-100 z-20">
                        <FaTelegramPlane className="text-xl md:text-2xl text-[#FAC207] transform rotate-12" />
                    </div>

                    {/* Inner Container */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 w-full">
                        {/* Text Content - Full width on mobile */}
                        <div className="w-full sm:w-[55%] text-center flex flex-col items-center gap-2 z-10 order-1 sm:order-2">
                            <h2 className="text-2xl md:text-3xl font-black text-[#0B2240] leading-tight">
                                <span className="text-[#FAC207]">We Do Lead<br></br> Generation</span>
                            </h2>
                            <p className="text-slate-600 text-xs md:text-sm font-semibold">
                                Generate Qualified Opportunities. <br /> Fuel Your Sales Pipeline.
                            </p>
                            <button className="bg-[#FFCC00] text-[#0B2240] text-xs md:text-sm font-bold px-4 py-2.5 rounded-lg flex items-center gap-2 w-fit mt-2 shadow-md hover:bg-opacity-90 transition-all">
                                Explore Lead Generation <span>→</span>
                            </button>
                        </div>

                        {/* Illustration - Full width on mobile, left-aligned */}
                        <div className="w-full sm:w-[45%] flex justify-center sm:justify-start items-end mt-4 sm:mt-0 order-2 sm:order-1">
                            <img
                                src="/Hunarhome2.png"
                                alt="Lead Generation Illustration"
                                className="w-full max-w-[360px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}