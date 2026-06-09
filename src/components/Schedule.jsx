import React from 'react'

const Schedule = ({ isDemoOpen, setIsDemoOpen }) => {
    return (
        <div
            className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#041C3E]/80 p-4 backdrop-blur-sm transition-all duration-300 ${isDemoOpen
                ? "opacity-100 visible"
                : "pointer-events-none invisible opacity-0"
                }`}
            onClick={(event) => {
                if (event.target === event.currentTarget) setIsDemoOpen(false);
            }}
        >
            <div
                className={`w-full max-w-[95vw] lg:max-w-6xl max-h-[95vh] overflow-y-auto rounded-2xl bg-white shadow-[0_24px_70px_rgba(4,28,62,0.32)] transition-all duration-300 ${isDemoOpen
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-6 scale-95 opacity-0"
                    }`}
            >
                <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] font-jakarta ">

                    {/* LEFT SIDE */}
                    <div className="relative bg-[#011C2B] text-white p-6 sm:p-8 overflow-hidden flex flex-col hidden lg:flex">

                        <div>
                            <h2 className="text-2xl font-semibold">
                                Contact Information
                            </h2>

                            <p className="mt-3 text-white/70">
                                Say something to start a live chat!
                            </p>

                            <div className="mt-10 lg:mt-16 space-y-8 font-sm">

                                <div className="flex items-center gap-4">
                                    <i className="ri-phone-fill text-xl text-[#FAC207]"></i>
                                    <span>+1012 3456 789</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <i className="ri-mail-fill text-xl text-[#FAC207]"></i>
                                    <span>contact@hunarstreet.com</span>
                                </div>

                                <div className="flex items-start gap-4">
                                    <i className="ri-map-pin-fill text-xl text-[#FAC207] mt-1"></i>

                                    <span className="leading-relaxed">
                                        B-1403, Arihant Aura, plot no. 13/1, TTC Industrial Area, Thane Belapur Road, Turbhe
                                        <br />
                                        Navi Mumbai,
                                        <br />
                                        Maharashtra
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-10 lg:mt-auto flex gap-4 relative z-10">

                            <button className="w-10 h-10 rounded-full bg-[#FAC207] text-[#011C2B] flex items-center justify-center hover:scale-110 transition">
                                <i className="ri-twitter-x-line"></i>
                            </button>

                            <button className="w-10 h-10 rounded-full bg-white text-[#011C2B] flex items-center justify-center hover:scale-110 transition">
                                <i className="ri-instagram-line"></i>
                            </button>

                            <button className="w-10 h-10 rounded-full bg-[#FAC207] text-[#011C2B] flex items-center justify-center hover:scale-110 transition">
                                <i className="ri-facebook-fill"></i>
                            </button>

                        </div>

                        {/* Decorative Circles */}
                        <div className="absolute bottom-0 right-0 w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3"></div>

                        <div className="absolute bottom-10 right-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/10"></div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="relative bg-white p-6 sm:p-8 text-sm">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsDemoOpen(false)}
                            className="absolute top-4 right-4 h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
                        >
                            <i className="ri-close-line text-xl"></i>
                        </button>

                        {/* Heading */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#011C2B]">
                                Send us a message
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Fill in the details below and our team will get back to you.
                            </p>
                        </div>

                        {/* First / Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div>
                                <label className="text-sm text-gray-500">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="John"
                                    className="w-full border-b border-gray-300 py-3 outline-none focus:border-[#FAC207] transition"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-500">
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className="w-full border-b border-gray-300 py-3 outline-none focus:border-[#FAC207] transition"
                                />
                            </div>

                        </div>

                        {/* Email / Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                            <div>
                                <label className="text-sm text-gray-500">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full border-b border-gray-300 py-3 outline-none focus:border-[#FAC207] transition"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-500">
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    placeholder="+91 98765 43210"
                                    className="w-full border-b border-gray-300 py-3 outline-none focus:border-[#FAC207] transition"
                                />
                            </div>

                        </div>

                        {/* Subject */}
                        <div className="mt-6">

                            <h4 className="font-semibold text-[#011C2B] mb-4">
                                Select Subject?
                            </h4>

                            <div className="flex flex-col sm:flex-row flex-wrap gap-4">

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="subject" />
                                    Lead Generation
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="subject" />
                                    Hiring Talents
                                </label>


                            </div>

                        </div>

                        {/* Message */}
                        <div className="mt-8">

                            <label className="text-sm text-gray-500">
                                Message
                            </label>

                            <textarea

                                placeholder="Write your message..."
                                className="w-full mt-2 border-b border-gray-300 outline-none resize-none focus:border-[#FAC207]"
                            />

                        </div>

                        {/* Submit Button */}
                        <div className="mt-8 flex justify-center sm:justify-end">

                            <button
                                type="button"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAC207] text-[#011C2B] px-8 py-3 rounded-xl font-semibold shadow-[0_12px_24px_rgba(250,194,7,0.35)] hover:-translate-y-0.5 hover:bg-[#f8c736] transition"
                            >
                                <i className="ri-send-plane-fill"></i>
                                Send Message
                            </button>

                        </div>

                    </div>

                    <div className="relative bg-[#011C2B] text-white p-6 sm:p-8 overflow-hidden flex flex-col lg:hidden ">

                        <div>
                            <h2 className="text-2xl font-semibold">
                                Contact Information
                            </h2>

                            <p className="mt-3 text-white/70">
                                Say something to start a live chat!
                            </p>

                            <div className="mt-10 lg:mt-16 space-y-8 font-sm">

                                <div className="flex items-center gap-4">
                                    <i className="ri-phone-fill text-xl text-[#FAC207]"></i>
                                    <span>+1012 3456 789</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <i className="ri-mail-fill text-xl text-[#FAC207]"></i>
                                    <span>contact@hunarstreet.com</span>
                                </div>

                                <div className="flex items-start gap-4">
                                    <i className="ri-map-pin-fill text-xl text-[#FAC207] mt-1"></i>

                                    <span className="leading-relaxed">
                                        B-1403, Arihant Aura,  plot no. 13/1, TTC Industrial Area, Thane Belapur Road, Turbhe
                                        <br />
                                        Navi Mumbai,
                                        <br />
                                        Maharashtra
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-10 lg:mt-auto flex gap-4 relative z-10">

                            <button className="w-10 h-10 rounded-full bg-[#FAC207] text-[#011C2B] flex items-center justify-center hover:scale-110 transition">
                                <i className="ri-twitter-x-line"></i>
                            </button>

                            <button className="w-10 h-10 rounded-full bg-white text-[#011C2B] flex items-center justify-center hover:scale-110 transition">
                                <i className="ri-instagram-line"></i>
                            </button>

                            <button className="w-10 h-10 rounded-full bg-[#FAC207] text-[#011C2B] flex items-center justify-center hover:scale-110 transition">
                                <i className="ri-facebook-fill"></i>
                            </button>

                        </div>

                        {/* Decorative Circles */}
                        <div className="absolute bottom-0 right-0 w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3"></div>

                        <div className="absolute bottom-10 right-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/10"></div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Schedule