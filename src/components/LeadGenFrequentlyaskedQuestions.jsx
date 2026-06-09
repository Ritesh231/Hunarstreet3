import React, { useState } from 'react';

const FAQSection = () => {
    // Accordion list data items
    const faqData = [
        {
            id: 1,
            question: "What exactly does your service include?",
            answer: "Our service provides an all-inclusive outbound pipeline framework including precise ICP specification, targeted contact list building, custom email copy variation, systematic multi-channel sequences, and live response tracking management handled entirely by our dedicated execution specialists."
        },
        {
            id: 2,
            question: "How do you verify the prospect data lists?",
            answer: "We pass all verified contacts through multiple verification steps, filtering out dead entries, invalid servers, and generic addresses to maintain high deliverability scores and protect domain health."
        },
        {
            id: 3,
            question: "What channels do you use for outreach campaigns?",
            answer: "We utilize structured omnichannel approaches combining direct executive email sequences alongside automated and personal LinkedIn connection campaigns to reach leads where they are most responsive."
        },
        {
            id: 4,
            question: "How long before we see confirmed discovery calls booked?",
            answer: "Most custom campaigns begin registering positive reply actions and high-intent interest signals within the first 14 to 30 days following configuration, list setup, and sequence deployment phases."
        },
        {
            id: 5,
            question: "What is your pricing model for the growth packages?",
            answer: "Pricing structures are customized depending directly on target scope metrics, localized market parameters, specialized data requirements, and desired pipeline volume expectations."
        }
    ];

    // Track the currently open accordion panel ID
    const [openIndex, setOpenIndex] = useState(1);

    const toggleFAQ = (id) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <section className="w-full bg-[#031430] py-16 px-4 sm:px-6 lg:px-12 flex items-center justify-center select-none">

            {/* Main Container: Replicates the white card frame with yellow gradient glow corners */}
            <div className="max-w-6xl w-full bg-gradient-to-br from-white via-white to-[#FFFDEE] text-[#051126] rounded-[40px] shadow-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

                <img src="/Ellipse 25.svg" className='absolute -top-20 left-0 w-160 h-160 ' alt="" />
                <img src="/Ellipse 26.png" className='absolute right-0 w-160 h-160 ' alt="" />

                {/* =========================================================
            LEFT COLUMN: SECTION HEADINGS & CALL TO ACTION
            ========================================================= */}
                <div className="lg:col-span-5 flex flex-col justify-center items-start text-left relative z-10 space-y-5">

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

                        {/* Curled Yellow Arrow Accent Line Asset */}
                        <div className="absolute bottom-[-65px] left-[150px] w-48 h-20 text-[#FFBF00]/80 hidden md:block select-none opacity-80 animate-pulse">
                            <img src="/Arrow 15.svg" alt="" />
                        </div>
                    </div>

                </div>

                {/* =========================================================
            RIGHT COLUMN: INTERACTIVE ACCORDION PANELS
            ========================================================= */}
                <div className="lg:col-span-7 space-y-3.5 w-full relative z-10">
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
                                {/* Accordion Toggle Header Trigger Area */}
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-xs sm:text-[14px] text-[#0B1B3D] tracking-tight focus:outline-none transition-colors duration-150 group"
                                >
                                    <span className="pr-4 font-extrabold group-hover:text-blue-900 transition-colors">
                                        {faq.question}
                                    </span>

                                    {/* Circle Dropdown Button Arrow */}
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

                                {/* Collapsible Content Area */}
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