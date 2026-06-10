import { useState } from 'react';

const ClientsTestimonials = () => {
    // Testimonial Data Object List
    const testimonials = [
        {
            id: 1,
            author: "- VP Sales, Euler Motors",
            text: "Within 45 days we had seven discovery calls booked with decision-makers and a much stronger outbound process.",
            rating: 5,
        },
        {
            id: 2,
            author: "- Founder, SaaS Company",
            text: "The team helped us identify our ICP and consistently generate qualified meetings every month.",
            rating: 5,
        },
        {
            id: 3,
            author: "- Growth Lead, Fintech Startup",
            text: "Their outreach strategy improved our response rates significantly and created a predictable pipeline.",
            rating: 5,
        },
    ];

    // Slider State Control
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="w-full bg-[#031430] text-[#0A1A3A] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none">
            <div className="bg-white p-4 rounded-2xl border border-[#FAC207A8] shadow-[0_0_0_1px_rgba(250,194,7,0.2),0_0_40px_rgba(250,194,7,0.6),0_0_80px_rgba(250,194,7,0.3)]">

                <div className="max-w-7xl mx-auto text-center relative z-10">

                    {/* =========================================================
                    SECTION HEADER
                    ========================================================= */}
                    <div className="relative inline-block mb-3">
                        <h2 className="text-3xl mt-10 sm:text-4xl lg:text-5xl font-black text-[#0B1B3D] tracking-tight">
                            What Clients <span className="text-[#FFBF00] relative inline-block">Says ?
                                <span className="absolute left-0 bottom-[-4px] w-full h-[3px] bg-[#FFBF00] rounded-full opacity-80" />
                            </span>
                        </h2>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed px-4">
                        Real feedback from businesses that trusted us to build their outbound pipeline and generate qualified sales opportunities.
                    </p>

                    {/* =========================================================
                    TESTIMONIALS CARDS WRAPPER
                    ========================================================= */}

                    {/* Desktop View: Active index modifies styles dynamically */}
                    <div className="hidden lg:grid grid-cols-3 gap-6 items-center pt-4 pb-12">
                        {testimonials.map((item, idx) => {
                            const isActive = idx === currentIndex;
                            return (
                                <div
                                    key={item.id}
                                    className={`
                                        bg-white border rounded-[28px] p-8 text-left
                                        flex flex-col justify-between relative
                                        transition-all duration-500 ease-out min-h-[340px]
                                        ${isActive
                                            ? 'border-[#FFBF00] scale-105 shadow-[0_20px_40px_rgba(250,194,7,0.15)] z-20'
                                            : 'border-black/10 scale-95 opacity-60 shadow-[0_15px_40px_rgba(0,0,0,0.03)] z-10'
                                        }
                                        ${idx === 1 ? 'translate-y-4' : ''}
                                        ${idx === 2 ? 'translate-y-8' : ''}
                                    `}
                                >
                                    <div>
                                        <div className="flex items-start space-x-3 mb-4">
                                            <span className="text-[#0B1B3D] text-5xl font-serif font-black leading-none -mt-2 shrink-0 select-none">“</span>
                                            <h4 className="text-sm font-black text-[#0B1B3D] tracking-tight pt-1">
                                                {item.author}
                                            </h4>
                                        </div>

                                        <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-semibold pl-6">
                                            {item.text}
                                        </p>
                                    </div>

                                    <div className="pt-6 flex justify-between items-end mt-auto pl-6 relative">
                                        <div className="flex space-x-1.5 mb-1">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 text-[#FFBF00] drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-[#0B1B3D] text-5xl font-serif font-black leading-none select-none absolute bottom-0 right-2 translate-y-2 opacity-90">”</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile & Tablet View: Transition updates automatically */}
                    <div className="block lg:hidden w-full max-w-md mx-auto px-2 pt-2 pb-8">
                        <div className="bg-white border border-slate-200/60 rounded-[24px] p-6 sm:p-8 text-left shadow-lg flex flex-col justify-between min-h-[300px] relative transition-all duration-300">
                            <div>
                                <div className="flex items-start space-x-3 mb-4">
                                    <span className="text-[#0B1B3D] text-4xl font-serif font-black leading-none -mt-1 shrink-0">“</span>
                                    <h4 className="text-xs sm:text-sm font-black text-[#0B1B3D] pt-0.5">
                                        {testimonials[currentIndex].author}
                                    </h4>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold pl-5">
                                    {testimonials[currentIndex].text}
                                </p>
                            </div>
                            <div className="pt-6 flex justify-between items-end mt-auto pl-5 relative">
                                <div className="flex space-x-1.5">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <svg key={i} className="w-4.5 h-4.5 text-[#FFBF00]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-[#0B1B3D] text-4xl font-serif font-black leading-none select-none absolute bottom-0 right-0 translate-y-1">”</span>
                            </div>
                        </div>
                    </div>

                    {/* =========================================================
                    SLIDER CONTROLS (NAVIGATION ARROWS)
                    ========================================================= */}
                    <div className="flex items-center justify-center space-x-4 pt-4">
                        {/* Left Arrow Button */}
                        <button
                            onClick={prevSlide}
                            className="w-11 h-11 rounded-full bg-[#FFBF00] hover:bg-[#E6AC00] text-[#0B1B3D] flex items-center justify-center shadow-md shadow-amber-500/10 transition-all duration-200 active:scale-95 cursor-pointer"
                            aria-label="Previous Testimonial"
                        >
                            <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Right Arrow Button */}
                        <button
                            onClick={nextSlide}
                            className="w-11 h-11 rounded-full bg-white border border-slate-200 text-[#0B1B3D] hover:bg-slate-50 flex items-center justify-center shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
                            aria-label="Next Testimonial"
                        >
                            <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ClientsTestimonials;