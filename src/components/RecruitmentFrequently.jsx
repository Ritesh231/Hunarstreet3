import { useState } from 'react';

const FAQSection = () => {
    // Accordion list data items
    const faqData = [
        {
            id: 1,
            question: "Where do you source candidates from?",
            answer: "We exclusively source candidates through LinkedIn and other professional social media platforms. We don’t rely on traditional job portals - this means we reach active professionals who aren’t on conventional job boards, giving you access to a deeper, more relevant talent pool."
        },
        {
            id: 2,
            question: "Do you provide staffing or only permanent hiring?",
            answer: "We specialise exclusively in full-time, permanent hiring. We do not offer contract staffing, temporary placements, or blue-collar recruitment. Our sole focus on permanent roles allows us to deliver higher-quality matches and stronger long-term outcomes for both clients and candidates."
        },
        {
            id: 3,
            question: "Do you hire only for Mumbai, or across India?",
            answer: "We operate PAN India. Whether you’re based in Mumbai, Bengaluru, Delhi, Hyderabad, or any other city, we can manage your hiring requirements across all geographies within the country."
        },
        {
            id: 4,
            question: "What is your turnaround time (TAT)?",
            answer: "You will receive the first set of shortlisted profiles within 48–72 hours of mandate confirmation. We prioritise speed without compromising on relevance - every profile is carefully evaluated before it reaches you."
        },
        {
            id: 5,
            question: "Who will be our point of contact?",
            answer: "Every client is assigned a dedicated SPOC (Single Point of Contact) from our team. Your SPOC manages the entire recruitment cycle, ensuring continuity, accountability, and a clear line of communication at all times - no chasing multiple people."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (id) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        // Section IS the white background — full width, no outer padding, no card
        <section className="w-full bg-gradient-to-br from-white via-white to-[#FFFDEE] text-[#051126] py-16 select-none relative overflow-hidden rounded-t-[60px] lg:rounded-t-[100px]">

            {/* Decorative blobs */}
            <img src="/Ellipse 25.svg" className="absolute -top-20 left-0 w-160 h-160 pointer-events-none" alt="" />
            <img src="/Ellipse 26.png" className="absolute right-0 top-0 w-160 h-160 pointer-events-none" alt="" />

            {/* Inner content — constrained & centered */}
            <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center relative z-10">

                {/* =========================================================
                LEFT COLUMN: SECTION HEADINGS & CALL TO ACTION
                ========================================================= */}
                <div className="lg:col-span-5 flex flex-col justify-center items-start text-left space-y-5">

                    <div className="space-y-2">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#0B1B3D]">
                            Frequently Asked
                        </h2>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#FFBF00] relative inline-block">
                            Questions
                        </h2>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-sm">
                        Find answers to common questions about our lead generation process, campaign management, pricing, and results.
                    </p>

                    {/* Call to Action Button with arrow decoration */}
                    <div className="pt-4 relative w-full">
                        <button className="bg-[#FFBF00] hover:bg-[#E6AC00] text-[#051126] font-bold text-xs sm:text-sm px-7 py-3 rounded-xl shadow-[0_0_30px_rgba(250,194,7,0.6)] hover:shadow-[0_0_45px_rgba(250,194,7,0.8)] flex items-center space-x-2 transition-all duration-300 active:scale-95 group">
                            <span>View All</span>
                            <span className="transform group-hover:translate-x-1 transition-transform font-bold">→</span>
                        </button>

                        {/* Curled Yellow Arrow Accent */}
                        <div className="absolute bottom-[-65px] left-[150px] w-48 h-20 hidden md:block select-none opacity-80 animate-pulse">
                            <img src="/Arrow 15.svg" alt="" />
                        </div>
                    </div>

                </div>

                {/* =========================================================
                RIGHT COLUMN: INTERACTIVE ACCORDION PANELS
                ========================================================= */}
                <div className="lg:col-span-7 space-y-3.5 w-full">
                    {faqData.map((faq) => {
                        const isOpen = openIndex === faq.id;
                        return (
                            <div
                                key={faq.id}
                                className={`
                                    w-full rounded-2xl border transition-all duration-300 overflow-hidden
                                    ${isOpen
                                        ? 'bg-[#EBF2FF] border-[#C3D9FF] shadow-sm'
                                        : 'bg-[#EBF2FF]/60 hover:bg-[#EBF2FF] border-transparent'
                                    }
                                `}
                            >
                                {/* Accordion Toggle Header */}
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-xs sm:text-[14px] text-[#0B1B3D] tracking-tight focus:outline-none transition-colors duration-150 group"
                                >
                                    <span className="pr-4 font-extrabold group-hover:text-blue-900 transition-colors">
                                        {faq.question}
                                    </span>

                                    {/* Circle Arrow Icon */}
                                    <div className={`
                                        w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 border
                                        ${isOpen
                                            ? 'bg-[#031430] text-white border-transparent rotate-180'
                                            : 'bg-[#031430] text-white border-transparent'
                                        }
                                    `}>
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                {/* Collapsible Answer */}
                                <div className={`
                                    transition-all duration-300 ease-in-out font-medium text-slate-600 overflow-hidden
                                    ${isOpen ? 'max-h-[200px] opacity-100 border-t border-[#D3E4FF]/60' : 'max-h-0 opacity-0'}
                                `}>
                                    <p className="p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed bg-white/40">
                                        {faq.answer}
                                    </p>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default FAQSection;