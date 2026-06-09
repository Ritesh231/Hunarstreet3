import React from 'react';
// Imported crisp, modern brand icons from react-icons/fa6
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const OfficeAndFooter = () => {
    return (
        <div className="w-full bg-[#031430]  text-white relative overflow-hidden select-none">

            {/* Topography wavy line design simulation overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] z-0" />

            {/* =========================================================
            1. VIDEO CONTAINER SECTION ("A Walk Through Our Office")
            ========================================================= */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3 text-white">
                    A Walk Through Our <span className="text-[#FFBF00] relative inline-block leading-none">
                        Office
                        <img
                            src="/Rectangle 123.png"
                            alt=""
                            className="absolute left-0 -bottom-2 w-full h-auto"
                        />
                    </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-12 font-medium">
                    Meet the people, culture, and collaborative environment that drive successful hiring outcomes every day.
                </p>

                {/* Video Wrapper Box */}
                <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] bg-slate-900/60 rounded-[32px] border border-slate-700/40 shadow-2xl p-2 group">
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#FFBF00] rounded-full -z-10 hidden md:block" />
                    <div className="absolute -right-8 -top-6 w-24 h-24 bg-[#FFBF00] rounded-full -z-10 hidden md:block" />

                    <div className="w-full h-full rounded-[24px] bg-black/40 border border-white/5 flex items-center justify-center relative overflow-hidden">
                        <img src="/Rectangle 3857.png" alt="" className='w-full h-full object-cover' />
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 cursor-pointer shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white ml-1 fill-current" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================================
            2. CTA LAYER CONTAINER ("Let's Talk About Your Pipeline?")
            ========================================================= */}
            <div className="w-full px-4 -mt-36 sm:px-6 lg:px-8 relative z-20 translate-y-[100px]">
                <div className="max-w-4xl mx-auto bg-[#FFC700] text-[#031430] rounded-[36px] p-8 sm:p-12 text-center shadow-[0_0_40px_rgba(144,190,255,0.5),0_20px_60px_rgba(144,190,255,0.35)] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#031430_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none" />

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#031430] mb-4">
                        Let's Talk About Your <br className="sm:hidden" /> Pipeline?
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold max-w-2xl mx-auto mb-8 leading-relaxed text-[#031430]/80">
                        If you're looking for a consistent, reliable source of new business leads, we'd love to talk. Book a free 30-minute call. We'll look at your target market and discuss what a realistic campaign could look like for your business.
                    </p>

                    <button className="bg-white hover:bg-slate-50 text-[#031430] font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md flex items-center space-x-2 mx-auto transition-all duration-200 active:scale-95 group">
                        <span>Book Free Strategy Session</span>
                        <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
                    </button>
                </div>
            </div>

            {/* =========================================================
            3. FOOTER FRAME SECTION (White Fluid Bottom Backdrop)
            ========================================================= */}
            <footer className="w-full bg-white text-[#0A1A3A] pt-36 pb-6 px-4 sm:px-6 lg:px-8 rounded-t-[40px] sm:rounded-t-[60px] relative z-10 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0A1A3A_1px,transparent_1px)] [background-size:14px_14px] rounded-t-[60px]" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 pb-12 border-b border-slate-200 relative z-10 text-left">

                    {/* Left Column Block */}
                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Quick Links</h4>
                        <ul className="space-y-2.5 text-sm font-bold text-[#0A1A3A]/80">
                            <li className="hover:text-[#FFC700] cursor-pointer transition-colors">Recruitment</li>
                            <li className="hover:text-[#FFC700] cursor-pointer transition-colors">Lead Generation</li>
                        </ul>
                        <div className="pt-2">
                            <button className="bg-[#FFC700] hover:bg-[#E6B400] text-[#031430] font-black text-xs px-5 py-3 rounded-xl shadow-md flex items-center space-x-1.5 transition-transform duration-150 active:scale-95 group">
                                <span>Get In Touch</span>
                                <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Center Column Block */}
                    <div className="md:col-span-4 space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Contact Us</h4>
                        <div className="space-y-1">
                            <p className="text-xs font-extrabold text-[#0A1A3A] uppercase tracking-wider">Address</p>
                            <p className="text-xs sm:text-[13px] text-slate-500 font-semibold leading-relaxed max-w-xs">
                                B-1403, Arihant Aura, plot no. 13/1, TTC Industrial Area, Thane Belapur Road, Turbhe, Navi Mumbai - 400705
                            </p>
                        </div>
                    </div>

                    {/* Right Column Block */}
                    <div className="md:col-span-5 space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Need Help ? Or Any queries ? feel free to reach out</h4>

                        <form onSubmit={(e) => e.preventDefault()} className="w-full flex items-center bg-transparent border border-slate-200 rounded-xl p-1 max-w-md shadow-sm focus-within:border-slate-400 transition-colors">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm font-medium text-[#0A1A3A] placeholder-slate-400 focus:outline-none"
                            />
                            <button type="submit" className="bg-[#FFC700] hover:bg-[#E6B400] text-[#031430] font-black text-xs px-5 py-2.5 rounded-lg shadow-sm transition-colors">
                                Send
                            </button>
                        </form>

                        {/* Updated Social Grid with Real Icons */}
                        <div className="flex items-center space-x-3 pt-2">
                            <a
                                href="#facebook"
                                className="w-9 h-9 rounded-xl bg-[#FFC700] hover:bg-[#E6B400] text-[#031430] flex items-center justify-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-90"
                                aria-label="Link to Facebook"
                            >
                                <FaFacebookF className="text-sm" />
                            </a>
                            <a
                                href="#instagram"
                                className="w-9 h-9 rounded-xl bg-[#FFC700] hover:bg-[#E6B400] text-[#031430] flex items-center justify-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-90"
                                aria-label="Link to Instagram"
                            >
                                <FaInstagram className="text-base" />
                            </a>
                            <a
                                href="#linkedin"
                                className="w-9 h-9 rounded-xl bg-[#FFC700] hover:bg-[#E6B400] text-[#031430] flex items-center justify-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-90"
                                aria-label="Link to LinkedIn"
                            >
                                <FaLinkedinIn className="text-sm" />
                            </a>
                            <a
                                href="#twitter"
                                className="w-9 h-9 rounded-xl bg-[#FFC700] hover:bg-[#E6B400] text-[#031430] flex items-center justify-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-90"
                                aria-label="Link to Twitter"
                            >
                                <FaXTwitter className="text-sm" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* =========================================================
                4. SUB-FOOTER COPYRIGHT BAR
                ========================================================= */}
                <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-bold text-slate-400 relative z-10 space-y-3 sm:space-y-0">
                    <p>©2026 Hunarstreet. All Copyrights Reserved.</p>
                    <div className="flex items-center space-x-1 font-extrabold text-[#0A1A3A]">
                        <span>Design & Developed By</span>
                        <img src="/TechSuryaLogo.svg" alt="" />
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default OfficeAndFooter;