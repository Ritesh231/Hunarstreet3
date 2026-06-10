import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import LeadGenClientTestomonial from '../components/LeadGenClientTestomonial';
import LeadGenGrowth from '../components/LeadGenGrowth';
import LeadGenBottomSection from '../components/LeadGenBottomSection';
import LeadGenFrequentlyaskedQuestions from "../components/LeadGenFrequentlyaskedQuestions";
import RecruitmentFrequently from "../components/RecruitmentFrequently.jsx";
import { Link } from 'react-router-dom';

const recruitmentAsset = (fileName) => `/assets/RecruitmentPageAssets/${fileName}`;

const blurboll = recruitmentAsset('Ellipse 36.png');
const logo = recruitmentAsset('img1046 1.png');
const hero2 = recruitmentAsset('Group 1000001771.jpg');
const hero3 = recruitmentAsset('Rectangle 30.png');
const line = '/assets/Rectangle 124.png';
const grayback = recruitmentAsset('Rectangle 139.png');
const ses23 = recruitmentAsset('Rectangle 3843.png');
const ses22 = recruitmentAsset('Rectangle 3842.png');
const sound = '/assets/megaphone 4.svg';
const star = recruitmentAsset('Star 22.svg');
const icon1 = recruitmentAsset('streamline-freehand-color_job-profile-search.png');
const icon2 = recruitmentAsset('streamline-freehand-color_job-search-magnifier-briefcase.png');
const step1 = recruitmentAsset('55a9250c-5cbd-4584-89fc-854978709e64 1.png');
const step2 = recruitmentAsset('4cf62608-1f99-4920-b0af-980c10cdf2b1 1.png');
const step3 = recruitmentAsset('cc0d50cd-51b3-4a16-a257-f47016d1375c 1.png');
const step4 = recruitmentAsset('ChatGPT Image Jun 4, 2026, 08_37_18 PM 4.png');
const vector10 = recruitmentAsset('Vector 10.png');
const vector11 = recruitmentAsset('Vector 11.png');
const vector12 = recruitmentAsset('Vector 12.png');
const logoSvg = recruitmentAsset('Logo.svg.png');
const tech1 = recruitmentAsset('ChatGPT Image Jun 6, 2026, 03_26_47 PM 1.png');
const tech2 = recruitmentAsset('ChatGPT Image Jun 6, 2026, 03_26_47 PM 2.png');
const tech3 = recruitmentAsset('ChatGPT Image Jun 6, 2026, 03_26_47 PM 3.png');
const tech4 = recruitmentAsset('ChatGPT Image Jun 6, 2026, 03_26_47 PM 4.png');
const tech5 = recruitmentAsset('ChatGPT Image Jun 6, 2026, 03_26_47 PM 5.png');
const tech6 = recruitmentAsset('ChatGPT Image Jun 6, 2026, 03_26_47 PM 6.png');
const tech7 = recruitmentAsset('ChatGPT Image Jun 6, 2026, 03_26_47 PM 7.png');
const tech8 = recruitmentAsset('ChatGPT Image Jun 6, 2026, 03_26_47 PM 8.png');
const tech9 = recruitmentAsset('ChatGPT Image Jun 6, 2026, 03_26_47 PM 9.png');
const tech10 = recruitmentAsset('ChatGPT Image Jun 6, 2026, 03_26_47 PM 10.png');
const tech11 = recruitmentAsset('ChatGPT Image Jun 6, 2026, 03_26_47 PM 11.png');
const tech12 = recruitmentAsset('ChatGPT Image Jun 6, 2026, 03_26_47 PM 12.png');


const Recruitment = () => {
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("technical");
    const [showAll, setShowAll] = useState(false);

    const [selectedRole, setSelectedRole] = useState(
        "Staff Software Engineer"
    );

    const logoCards = [
        { id: 1, gridPos: "col-start-3 row-start-1" },
        { id: 2, gridPos: "col-start-1 col-span-2 row-start-2 row-span-2 is-large" },
        { id: 3, gridPos: "col-start-3 row-start-2" },
        { id: 4, gridPos: "col-start-4 row-start-2" },
        { id: 5, gridPos: "col-start-5 row-start-2" },
        { id: 6, gridPos: "col-start-2 row-start-4" },
        { id: 7, gridPos: "col-start-3 row-start-3" },
        { id: 8, gridPos: "col-start-4 row-start-3" },
        { id: 9, gridPos: "col-start-5 row-start-3" },
        { id: 10, gridPos: "col-start-3 row-start-4" },
    ];
    const techRoles = [
        "Staff Software Engineer",
        "Machine Learning Engineer",
        "Data Science Engineer",
        "DevOps Engineer",
        "Front-End Developers",
        "Back-End Developers",
        "Software Engineers",
        "App Developers",
        "ERP Consultants",
        "CRM Consultants",
        "Cloud Engineers",
        "Tech/Server Support",
        "System Analyst"
    ];

    const nonTechRoles = [
        "EV",
        "Health, Wellness & Fitness",
        "E-commerce",
        "Healthcare",
        "Beauty & Cosmetics",
        "Fintech",
        "Capital Markets",
        "Real Estate",
        "Ad Tech",
        "MICE",
        "Construction",
        "SCM",
        "Retail/Apparel & Fashion",
        "Maritime",
        "Manufacturing",

    ];

    const techLogos = {
        "Staff Software Engineer": [tech1, tech2, tech3, tech4, tech5, tech6, tech7, tech8, tech9, tech10, tech11, tech12],
        "Machine Learning Engineer": [tech5, tech6, tech7, tech8],
        "Data Science Engineer": [tech9, tech10, tech11, tech12],
        "DevOps Engineer": [tech1, tech3, tech5, tech7],
        "Front-End Developers": [tech2, tech4, tech6, tech8],
        "Back-End Developers": [tech9, tech10, tech11, tech12],
        "Software Engineers": [tech1, tech2, tech3, tech4],
        "App Developers": [tech5, tech6, tech7, tech8],
        "ERP Consultants": [tech9, tech10],
        "CRM Consultants": [tech11, tech12],
        "Cloud Engineers": [tech1, tech5, tech9],
        "Tech/Server Support": [tech2, tech6, tech10],
        "System Analyst": [tech3, tech7, tech11]
    };

    const nonTechData = {
        "EV": [
            "Lead - EV Charging",
            "RND Head",
            "Technical Lead - Power Electronics - EV",
            "Sales / Business / Key Accounts Manager",
            "DGM - Lead Digital Twin System Development",
            "Lead Engineer (L3)",
            "Electric Vehicle Thermal Management System Engineer",
            "Vendor Development - Electrical",
            "Senior Manager Purchase Trims",
            "Head Product Development & System EV",
            "AM/DM - Service EV Preparation"
        ],

        "Health, Wellness & Fitness": [
            "Spa Manager",
            "Lead - Workplace Experience",
            "Partnership Specialist",
            "Health and Wellness Coach",
            "Research Manager",
            "Manager New Product Development",
            "Head Of Clinical Research",
            "Medical Affairs Manager",
            "Associate Venue Partnership",
            "Sales / Business Development / Key Accounts Manager"
        ],

        "E-commerce": [
            "E-commerce Manager",
            "Marketplace Manager",
            "Catalog Manager",
            "Digital Marketing Manager",
            "Operations Manager",
            "Supply Chain Manager",
            "Customer Success Manager",
            "Business Development Manager",
            "Category Manager",
            "Key Accounts Manager"
        ],

        "Healthcare": [
            "Hospital Administrator",
            "Clinical Operations Manager",
            "Medical Affairs Manager",
            "Healthcare Consultant",
            "Patient Relationship Manager",
            "Research Manager",
            "Medical Officer",
            "Healthcare Operations Lead",
            "Business Development Manager",
            "Key Accounts Manager"
        ],


        "Beauty & Cosmetics": [
            "Brand Manager",
            "Product Development Manager",
            "Beauty Consultant",
            "Retail Operations Manager",
            "Marketing Manager",
            "Sales Manager",
            "Category Manager",
            "Customer Experience Manager",
            "Business Development Manager",
            "Key Accounts Manager"
        ],

        "Fintech": [
            "Product Manager",
            "Business Analyst",
            "Risk Analyst",
            "Investment Advisor",
            "Relationship Manager",
            "Operations Manager",
            "Growth Manager",
            "Compliance Manager",
            "Business Development Manager",
            "Key Accounts Manager"
        ],

        "Capital Markets": [
            "Wealth Manager",
            "Deputy Manager - Fund Manager",
            "Sales / Business Development / Key Accounts Manager",
            "Startup Fund Raising Manager",
            "Senior Equity Research Analyst",
            "Mutual Fund Analyst",
            "Investment Advisor",
            "Head - Corporate Leasing",
            "Manager Investment Banking",
            "Client Relationship Manager",
            "Investor Relations Analyst"
        ],

        "Real Estate": [
            "Legal Head - Real Estate",
            "Assistant Manager - Sales - Real Estate",
            "Customer Relationship Management Specialist",
            "Real Estate Consultant",
            "Real Estate Project Finance Advisor",
            "Senior Real Estate Analyst",
            "Relationship Manager - Commercial Leasing",
            "Senior Survey Manager",
            "Accounts Manager - Real Estate",
            "Head - Corporate Leasing",
            "Sales / Business Development / Key Accounts Manager"
        ],

        "Ad Tech": [
            "Google Ads Specialist",
            "Search Engine Optimization Manager",
            "Performance Marketing Manager",
            "Sales / Business Development / Key Accounts Manager",
            "Advertising Copywriter",
            "Advertising Copyeditor",
            "Influencer Marketing Manager",
            "Social Media Marketing Manager",
            "Ad Film Maker",
            "Video Editor",
            "Public Relations"
        ],

        "MICE": [
            "Corporate Sales Specialist - MICE & Events",
            "Online Hotel Relations Manager",
            "Sales / Business Development / Key Accounts Manager",
            "Senior Manager - MICE Operations"
        ],

        "Construction": [
            "Construction Manager",
            "Civil Project Architect",
            "Township / Civil Construction Engineer",
            "Sales / Business Development / Key Accounts Manager",
            "Senior Planning Engineer",
            "Interior Designer",
            "Piping Engineer",
            "Senior Civil Engineer",
            "Solar Construction Manager",
            "CAD Engineer",
            "Electrical Engineer",
            "Tunnel Construction Engineer",
            "Warehouse Manager",
            "Environmental Engineer",
            "Finishing Manager - Infrastructure"
        ],

        "SCM": [
            "Manager - SCM",
            "Sales / Business Development / Key Accounts Manager",
            "SCM & Export Logistics Manager",
            "Warehouse Manager",
            "Material Management Engineer",
            "Inventory Manager",
            "Demand Forecasting Manager",
            "Purchasing Manager",
            "Distribution Manager",
            "Supply Chain Analyst / Specialist",
            "Order To Cash (OTC) Specialist"
        ],

        "Retail/Apparel & Fashion": [
            "Store Merchandiser",
            "Marketing Merchandising Manager",
            "Senior Fashion Consultant",
            "Customer Experience Manager",
            "Store Manager",
            "Regional Sourcing Manager",
            "Sales / Business Development / Key Accounts Manager",
            "Operations Manager",
            "Business Manager",
            "Lead Experience Stores",
            "Floor Manager",
            "Visual Merchandiser"
        ],

        "Maritime": [
            "Marine Superintendent",
            "Marine Officer",
            "Sales / Business Development / Key Accounts Manager",
            "Naval Architect",
            "Senior Naval Officer",
            "Ocean Engineer",
            "Marine Technician",
            "Fleet Manager"
        ],

        "Manufacturing": [
            "Automation Manager",
            "Plant Manager",
            "Process Engineer",
            "Manufacturing Operations Lead",
            "Plant Maintenance Engineer",
            "Sales / Business Development / Key Accounts Manager",
            "Production Manager",
            "Production Planning & Control",
            "Plant Operations Engineer",
            "Quality Control Engineer",
            "Business Process Re-Engineering Expert",
            "Safety Engineer"
        ]
    };
    const currentRoles =
        activeTab === "technical"
            ? techRoles
            : nonTechRoles;

    const visibleRoles = showAll
        ? currentRoles
        : currentRoles.slice(0, 5);
    return (
        <div className='relative w-full min-h-screen overflow-hidden '>
            <Navbar setIsDemoOpen={setIsDemoOpen} isDemoOpen={isDemoOpen} />

            <img src={blurboll} alt="BlurOval" className='absolute -bottom-32 -left-32 w-96 h-96 object-cover' />
            <img src={logo} alt="Logo" className='hidden lg:block absolute top-[31px] left-8 w-16 h-16 ' />
            <button
                type="button"
                onClick={() => setIsDemoOpen(true)}
                className="font-messiri absolute hidden lg:block top-[31px]  z-[9999]  right-8 z-20 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#FAC207] px-4 py-2 text-base font-semibold text-[#041C3E] shadow-[0_0_25px_rgba(250,194,7,0.55)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#041C3E] hover:text-white lg:px-5 lg:py-3"
            >
                {/* <i className="ri-calendar-2-line text-lg"></i> */}
                Schedule Demo
            </button>
            <section id="home" className="min-h-screen grid grid-cols-1 text-center  lg:grid-cols-5 lg:text-left items-center justify-items-center px-12  lg:gap-8   w-full">


                <div className='col-span-2  grid items-center justify-items-center lg:items-start lg:justify-items-start gap-4'>

                    <p className='  text-center mt-20 font-jakarta font-semibold text-lg text-[#041C3E] bg-[#90BEFF82] p-2 rounded-lg'>Industry-Specific Hiring Experts</p>
                    <h2 className='text-4xl lg:text-[44px] font-jakarta font-semibold text-[#041C3E] mt-6'>India's Fastest Hiring</h2>
                    <div className='flex items-center gap-4 mt-4 justify-center lg:justify-start  flex-col sm:flex-row  items-center'>
                        <img src={hero3} alt="Hero 1" className='' />
                        <div clasName='  overflow-hidden  '>
                            <h1 className='font-messiri font-semibold text-4xl lg:text-6xl text-[#FAC207]'>Platform</h1>
                            <img src={line} alt="line" className=' ' />
                        </div>
                    </div>
                    <p className='text-[#041C3E] font-jakarta text-lg font-medium'>
                        We help organizations find and hire top talent across Tech and Non-Tech domains through our specialized recruitment process, extensive candidate network.
                    </p>
                    <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8'>
                        <button className="cursor-pointer text-lg bg-[#FAC207] text-[#041C3E] font-messiri  py-2 px-4 rounded-lg hover:bg-[#041C3E] hover:text-white shadow-[0_0_25px_rgba(250,194,7,0.7)]">Get In Touch <i class="ri-arrow-right-long-fill text-sm"></i></button>
                        <button className="cursor-pointer text-lg font-messiri text-[#041C3E] py-2 px-4 rounded-lg hover:bg-[#90BEFF82] hover:text-[#041C3E] border border-[#041C3E]">Share Profile <i class="ri-arrow-right-long-fill text-sm"></i></button>
                    </div>

                </div>
                <div className='col-span-3 mt-5 '>

                    <img src={hero2} alt="Section Image" className='w-full h-full object-contain' />

                </div>
            </section>

            <section id="about" className='grid min-h-screen grid-cols-1 lg:grid-cols-2 px-8 lg:px-16 gap-8 py-12 w-full items-center relative overflow-hidden'
                style={{ backgroundImage: `url(${grayback})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='relative w-full h-[400px] md:h-[480px] flex items-center justify-center mt-12 lg:mt-0'>
                    {/* Megaphone top-left */}
                    <img src={sound} className='absolute -top-6 lg:top-4 -left-2 lg:left-4 w-20 md:w-28 z-10 transform -rotate-[15deg]' alt="megaphone" />

                    {/* Top-right image (ses22) */}
                    <img src={ses22} className='absolute top-2 md:top-6 right-0 lg:right-6 w-[60%] md:w-[55%] rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] z-20 object-cover' alt="recruitment 1" />

                    {/* Bottom-left image (ses23) */}
                    <img src={ses23} className='absolute bottom-2 md:bottom-16 left-4 lg:left-8 w-[65%] md:w-[60%] rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] z-30 object-cover' alt="recruitment 2" />

                    {/* Star in middle */}
                    <img src={star} className='absolute top-[48%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 w-24 md:w-28 z-40' alt="star" />
                </div>

                <div className='flex flex-col items-start justify-center h-full pt-8 lg:pt-0 relative z-10'>
                    <div className="inline-block bg-[#C6DDFB] text-[#041C3E] font-bold text-sm px-4 py-2 rounded-lg mb-6 uppercase tracking-wide">
                        About Recruitment
                    </div>
                    <h2 className="text-4xl lg:text-[44px] font-jakarta font-semibold text-[#041C3E] leading-tight">
                        Recruitment That Delivers<br />
                        <span className="text-[#FFC600] lg:text-6xl font-messiri relative inline-block mt-2">
                            Results
                            <img src={line} alt="underline" className="absolute -bottom-3 left-0 w-full object-contain" />
                        </span>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-5 mt-12 w-full relative lg:w-[80%]">
                        {/* Card 1 */}
                        <div className="bg-[#041C3E] rounded-[24px] p-5 flex-1 text-white shadow-xl flex flex-col justify-between min-h-[190px] relative z-10">
                            <div className="flex items-start justify-between">
                                <div className="bg-white rounded-full p-2.5 flex items-center justify-center w-12 h-12">
                                    <img src={icon1} alt="icon" className="w-6 h-6 object-contain" />
                                </div>
                                <span className="text-[#FFC600] text-4xl font-bold font-jakarta">87%</span>
                            </div>
                            <p className="mt-6 text-base font-jakarta">Success rate in<br />candidate-job<br />matching</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#FFC600] rounded-[24px] p-5 flex-1 text-[#041C3E] shadow-xl flex flex-col justify-between min-h-[190px] relative z-10">
                            <div className="flex items-start justify-between">
                                <div className="bg-white rounded-full p-2.5 flex items-center justify-center w-12 h-12">
                                    <img src={icon2} alt="icon" className="w-6 h-6 object-contain" />
                                </div>
                                <span className="text-[#041C3E] text-4xl font-bold font-jakarta">62%</span>
                            </div>
                            <p className="mt-6 text-base font-jakarta font-bold">success rate in rapid<br />placements</p>
                        </div>

                        {/* Bottom-right megaphone */}
                        <img src={sound} className='absolute -bottom-12 -right-8 lg:-right-28 w-20 md:w-28 z-0 transform rotate-[12deg] opacity-80 scale-x-[-1]' alt="megaphone" />
                    </div>
                </div>
            </section>

            {/* Impact in Numbers Section */}
            <section className="bg-[#041C3E]   py-24 lg:py-0 px-6 lg:px-8 w-full flex flex-col items-center justify-center lg:min-h-screen relative z-20 ">
                <div className="text-center mb-12 mt-6">
                    <h2 className="text-3xl lg:text-[44px] font-jakarta font-semibold text-white mb-2">
                        Impact in <span className="text-[#FAC207] font-messiri relative inline-block lg:text-5xl">
                            Numbers
                            <img src={line} alt="underline" className="absolute -bottom-2 left-0 w-full object-contain" />
                        </span>
                    </h2>
                    <p className="text-white/90 text-base md:text-lg font-jakarta">
                        Delivering successful hiring outcomes through expertise, speed, and a strong talent network.
                    </p>
                </div>

                {/* Container for stats */}
                <div className="w-full max-w-[1400px] relative mt-4 lg:mt-8 mb-8">
                    {/* The gray rounded background spanning across on desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[65%] bg-[#313C47] rounded-[50px] transform -translate-y-1/2 z-0 shadow-lg"></div>

                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-0 items-center justify-items-center w-full">

                        {/* Stat 1 */}
                        <div className="flex flex-col items-center justify-center text-center px-2 lg:px-4 hidden lg:flex">
                            <h3 className="text-[#FAC207] text-3xl   lg:text-4xl xl:text-4xl font-bold  mb-2 lg:mb-4">1,20,000 +</h3>
                            <p className="text-white text-lg lg:text-xl font-jakarta">Candidate<br className="hidden lg:block" />Network</p>
                        </div>

                        {/* Stat 2 (Highlighted Card) */}
                        <div className="relative w-full max-w-[280px] lg:max-w-[290px] col-span-1 sm:col-span-2 lg:col-span-1 h-full mx-auto">
                            <div className="relative bg-white rounded-[32px] px-6 py-8 md:py-10 shadow-[0_0_50px_rgba(250,194,7,0.3)] flex flex-col items-center lg:items-start text-center lg:text-left h-full min-h-[280px] lg:scale-105 z-20">
                                <h3 className="text-[#FAC207] text-4xl md:text-5xl font-bold font-jakarta mb-3">80+</h3>
                                <p className="text-[#041C3E] text-xl md:text-2xl font-bold font-jakarta leading-snug mb-8">Positions<br />Closed Monthly</p>
                                <p className="text-[#041C3E] text-xs md:text-sm font-medium font-jakarta mt-auto">
                                    Consistently helping<br className="hidden lg:block" />organizations fill critical<br className="hidden lg:block" />roles with the right talent.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center px-2 lg:px-4 lg:hidden">
                            <h3 className="text-[#FAC207] text-3xl   lg:text-4xl xl:text-4xl font-bold font-jakarta mb-2 lg:mb-4">1,20,000 +</h3>
                            <p className="text-white text-lg lg:text-xl font-jakarta">Candidate<br className="hidden lg:block" />Network</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center justify-center text-center px-2 lg:px-4">
                            <h3 className="text-[#FAC207] text-4xl lg:text-[40px] xl:text-4xl font-bold font-jakarta mb-2 lg:mb-4">72 H</h3>
                            <p className="text-white text-lg lg:text-xl font-jakarta">Avg Profile<br className="hidden lg:block" />Sharing Time</p>
                        </div>

                        {/* Stat 4 */}
                        <div className="flex flex-col items-center justify-center text-center px-2 lg:px-4">
                            <h3 className="text-[#FAC207] text-4xl lg:text-[40px] xl:text-4xl font-bold font-jakarta mb-2 lg:mb-4">100+</h3>
                            <p className="text-white text-lg lg:text-xl font-jakarta">Clients</p>
                        </div>

                        {/* Stat 5 */}
                        <div className="flex flex-col items-center justify-center text-center px-2 lg:px-4">
                            <h3 className="text-[#FAC207] text-4xl lg:text-[40px] xl:text-4xl font-bold font-jakarta mb-2 lg:mb-4">350+</h3>
                            <p className="text-white text-lg lg:text-xl font-jakarta">Open<br className="hidden lg:block" />Positions</p>
                        </div>


                    </div>
                </div>
            </section>

            {/* Our 4 Step Hiring Section */}
            <section id="positions" className="relative w-full py-24 px-6 lg:px-12 flex flex-col items-center justify-center overflow-hidden z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${grayback})` }}>
                {/* Blur effects */}

                <div className="relative z-10 text-center mb-16 max-w-4xl ">
                    <h2 className="text-4xl lg:text-[44px] font-jakarta font-bold text-[#041C3E] mb-6">
                        Our 4 Step <span className="text-[#FAC207] font-messiri relative inline-block lg:text-5xl">
                            Hiring
                            <img src={line} alt="underline" className="absolute -bottom-2 left-0 w-full object-contain" />
                        </span>
                    </h2>
                    <p className="text-[#041C3E] text-lg md:text-lg font-jakarta font-medium">
                        From understanding your requirements to successful onboarding, we manage every step of the recruitment process.
                    </p>
                </div>

                <div className="relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-4">

                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center flex-1 max-w-[260px]">
                            <img
                                src={step1}
                                alt="Step 1"
                                className="w-full max-w-[220px] h-auto mb-6 hover:-translate-y-2 transition-transform duration-300"
                            />
                            <h3 className="text-[#041C3E] text-xl font-bold font-jakarta mb-3">
                                Share Your Hiring <br />
                                Requirements
                            </h3>
                            <p className="text-[#041C3E] text-sm leading-relaxed">
                                Submit your job description and hiring needs.
                            </p>
                        </div>

                        {/* Arrow */}
                        <img
                            src={vector10}
                            alt=""
                            className="hidden lg:block w-[90px] mt-16 flex-shrink-0"
                        />

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center flex-1 max-w-[260px]">
                            <img
                                src={step2}
                                alt="Step 2"
                                className="w-full max-w-[220px] h-auto mb-6 hover:-translate-y-2 transition-transform duration-300"
                            />
                            <h3 className="text-[#041C3E] text-xl font-bold font-jakarta mb-3">
                                Dedicated Domain <br />
                                Specialists
                            </h3>
                            <p className="text-[#041C3E] text-sm leading-relaxed">
                                Experienced recruiters focused on your hiring goals.
                            </p>
                        </div>

                        {/* Arrow */}
                        <img
                            src={vector11}
                            alt=""
                            className="hidden lg:block w-[90px] mt-16 flex-shrink-0"
                        />

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center flex-1 max-w-[260px]">
                            <img
                                src={step3}
                                alt="Step 3"
                                className="w-full max-w-[220px] h-auto mb-6 hover:-translate-y-2 transition-transform duration-300"
                            />
                            <h3 className="text-[#041C3E] text-xl font-bold font-jakarta mb-3">
                                Sourcing Through <br />
                                Social Media
                            </h3>
                            <p className="text-[#041C3E] text-sm leading-relaxed">
                                Targeted candidate search through professional networks.
                            </p>
                        </div>

                        {/* Arrow */}
                        <img
                            src={vector12}
                            alt=""
                            className="hidden lg:block w-[90px] mt-16 flex-shrink-0"
                        />

                        {/* Step 4 */}
                        <div className="flex flex-col items-center text-center flex-1 max-w-[260px]">
                            <img
                                src={step4}
                                alt="Step 4"
                                className="w-full max-w-[220px] h-auto mb-6 hover:-translate-y-2 transition-transform duration-300"
                            />
                            <h3 className="text-[#041C3E] text-xl font-bold font-jakarta mb-3">
                                Extensive Talent <br />
                                Network
                            </h3>
                            <p className="text-[#041C3E] text-sm leading-relaxed">
                                Access 1,20,000+ pre-screened professionals.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="relative w-full py-24 px-6 lg:px-16 xl:px-24 flex flex-col items-center bg-[#FFFCF6] z-10 overflow-hidden">
                {/* Subtle top-left gradient blur similar to screenshot */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FFF2C8] rounded-full blur-[100px] opacity-70 z-0 pointer-events-none"></div>

                <div className="relative z-10 w-full max-w-[1400px] flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-block bg-[#C6DDFB] text-[#041C3E] font-bold text-sm px-4 py-2 rounded-lg mb-6 uppercase tracking-wide">
                            Why Choose Us ?
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl lg:text-[44px] font-semibold font-jakarta text-[#041C3E] leading-tight">
                            Finding the right talent<br />
                            shouldn't be <span className="text-[#FAC207] font-messiri lg:text-5xl">complicated.</span>
                        </h2>
                    </div>
                    <div className="max-w-md lg:mb-4">
                        <p className="text-[#041C3E] text-lg font-jakarta font-medium leading-relaxed">
                            We combine industry expertise, an extensive candidate network, and a streamlined recruitment process to help businesses hire faster and smarter.
                        </p>
                    </div>
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1400px]">

                    {/* Card 1 */}
                    <div className="bg-[#FAC207] rounded-[32px] p-8 md:p-10 relative overflow-hidden group shadow-lg flex flex-col h-full">
                        <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#F5B500] rounded-full flex items-end justify-start pb-8 pl-8 transition-transform group-hover:scale-110">
                            <i className="ri-focus-2-line text-[#041C3E] text-4xl"></i>
                        </div>
                        <h3 className="text-[#041C3E] text-2xl font-bold font-jakarta mb-4 pr-16 relative z-10">Tailored Recruitment<br />Process</h3>
                        <p className="text-[#041C3E] text-base font-jakarta relative z-10 mt-auto ">
                            We deeply understand your requirements before initiating the recruitment process, ensuring precise matches for your team's needs.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#FFF8E5] rounded-[32px] p-8 md:p-10 relative overflow-hidden group shadow-lg flex flex-col h-full">
                        <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#FFD966] rounded-full flex items-end justify-start pb-8 pl-8 transition-transform group-hover:scale-110">
                            <i className="ri-search-line text-[#041C3E] text-4xl"></i>
                        </div>
                        <h3 className="text-[#041C3E] text-2xl font-bold font-jakarta mb-4 pr-16 relative z-10">Sourcing through<br />social media</h3>
                        <p className="text-[#041C3E] text-base font-jakarta relative z-10 mt-auto  ">
                            We exclusively utilize social media for sourcing no job portals are employed in our process.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#FFF8E5] rounded-[32px] p-8 md:p-10 relative overflow-hidden group shadow-lg flex flex-col h-full">
                        <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#FFD966] rounded-full flex items-end justify-start pb-8 pl-8 transition-transform group-hover:scale-110">
                            <i className="ri-shield-check-fill text-[#041C3E] text-4xl"></i>
                        </div>
                        <h3 className="text-[#041C3E] text-2xl font-bold font-jakarta mb-4 pr-16 relative z-10">Dedicated Account<br />Manager</h3>
                        <p className="text-[#041C3E] text-base font-jakarta relative z-10 mt-auto ">
                            Provides complete accountability and personalized assistance throughout the hiring process!
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#FFF8E5] rounded-[32px] p-8 md:p-10 relative overflow-hidden group shadow-lg flex flex-col h-full">
                        <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#FFD966] rounded-full flex items-end justify-start pb-8 pl-8 transition-transform group-hover:scale-110">
                            <i className="ri-team-fill text-[#041C3E] text-4xl"></i>
                        </div>
                        <h3 className="text-[#041C3E] text-2xl font-bold font-jakarta mb-4 pr-16 relative z-10">Domain Specialist<br />Team</h3>
                        <p className="text-[#041C3E] text-base font-jakarta relative z-10 mt-auto  ">
                            Benefit from the expertise of our specialized recruitment teams led by industry veterans who understand your specific industry needs.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#FFF8E5] rounded-[32px] p-8 md:p-10 relative overflow-hidden group shadow-lg flex flex-col h-full">
                        <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#FFD966] rounded-full flex items-end justify-start pb-8 pl-8 transition-transform group-hover:scale-110">
                            <i className="ri-shake-hands-fill text-[#041C3E] text-4xl"></i>
                        </div>
                        <h3 className="text-[#041C3E] text-2xl font-bold font-jakarta mb-4 pr-16 relative z-10">Candidate<br />Handholding</h3>
                        <p className="text-[#041C3E] text-base font-jakarta relative z-10 mt-auto  ">
                            We offer comprehensive support to candidates, reducing attrition rates and ensuring seamless integration into your organization.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#FFF8E5] rounded-[32px] p-8 md:p-10 relative overflow-hidden group shadow-lg flex flex-col h-full">
                        <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#FFD966] rounded-full flex items-end justify-start pb-8 pl-8 transition-transform group-hover:scale-110">
                            <i className="ri-money-dollar-circle-fill text-[#041C3E] text-4xl"></i>
                        </div>
                        <h3 className="text-[#041C3E] text-2xl font-bold font-jakarta mb-4 pr-16 relative z-10">Reasonable<br />Pricing</h3>
                        <p className="text-[#041C3E] text-base font-jakarta relative z-10 mt-auto  ">
                            We maintain transparency in our pricing, ensuring there are no hidden charges, providing you with a clear understanding of what you're paying for.
                        </p>
                    </div>

                </div>
            </section>

            {/* Industries vice & Trusted By Leading Company */}
            <section id="industries" className="w-full bg-[#031430]  pt-16 flex flex-col items-center rounded-t-[40px] md:rounded-t-[80px] z-20 relative px-12 overflow-hidden">
                {/* Part 1: Industries We Service */}
                <div className="flex flex-col items-center text-center w-full mb-24">
                    <h2 className="text-4xl  lg:text-[44px] font-jakarta font-semibold text-white mb-6">
                        Industries We <span className="text-[#FAC207] font-messiri lg:text-5xl relative inline-block">
                            Service
                            <img src={line} alt="underline" className="absolute -bottom-2 left-0 w-full object-contain" />
                        </span>
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl font-jakarta mb-16 max-w-4xl leading-relaxed">
                        From fast-growing startups to established enterprises, we help organizations across multiple sectors find the right talent to drive their business forward.
                    </p>
                    <style>
                        {`
                        @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(calc(-50% - 0.75rem)); }
                        }
                        .animate-scroll {
                            animation: scroll 25s linear infinite;
                        }
                        .animate-scroll:hover {
                            animation-play-state: paused;
                        }
                        `}
                    </style>
                    <div className="relative w-full overflow-hidden py-4">
                        {/* Gradient Masks */}
                        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#041C3E] to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#041C3E] to-transparent z-10 pointer-events-none"></div>

                        <div className="flex w-max animate-scroll gap-4 lg:gap-6 px-2">
                            {[
                                'Healthcare', 'Manufacturing', 'Information Technology', 'BFSI',
                                'E-Commerce', 'Retail', 'Logistics', 'Supply Chain',
                                'Healthcare', 'Manufacturing', 'Information Technology', 'BFSI',
                                'E-Commerce', 'Retail', 'Logistics', 'Supply Chain'
                            ].map((industry, index) => (
                                <div key={index} className="bg-[#1A3153] border border-[#2B4670] rounded-[24px] w-36 md:w-40 lg:w-44 h-20 md:h-20 flex-shrink-0 flex items-center justify-center text-center shadow-lg transition-transform hover:-translate-y-1 cursor-default">
                                    <span className="text-[#FAC207] font-jakarta font-medium text-sm md:text-base leading-tight">
                                        {industry === 'Information Technology' ? <>Information<br />Technology</> : industry === 'Supply Chain' ? <>Supply<br />Chain</> : industry}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Part 2: Trusted By Leading Company */}


            </section>
            <section className="w-full bg-[#031430] text-white py-16 px-6 sm:px-12 lg:px-20 relative overflow-hidden select-none">



                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* =========================================================
            LEFT COLUMN: TEXT CONTENT & MARKETING BRANDING
            ========================================================= */}
                    <div className="lg:col-span-5 space-y-6 relative z-10 text-left">

                        {/* Section Tag */}
                        <div className="inline-block bg-[#2D436B] border border-blue-400/20 text-[#A5C2F4] text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-lg shadow-sm">
                            Our Clients
                        </div>

                        {/* Heading Container with Floating Megaphone Vector */}
                        <div className="relative pt-4">
                            {/* Absolute Megaphone Illustration position */}
                            <div className="absolute top-[-60px] right-12 sm:right-32 lg:right-0 w-24 h-24 text-[#FFC700]  ">
                                <img src="/megaphone.svg" alt="" />
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                                Trusted By Leading <br />
                                <span className="text-[#FFC700] relative inline-block mt-1">
                                    Company
                                    {/* Underline Flourish Curve effect */}

                                    <img
                                        src="/Rectangle 123.png"
                                        alt=""
                                        className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-48 sm:w-48"
                                    />
                                </span>
                            </h2>
                        </div>

                        {/* Context Description paragraph */}
                        <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-md pt-2">
                            We've partnered with growing businesses, and established organizations to help them find the right talent and achieve their hiring goals.
                        </p>

                        {/* CTA Action Trigger */}
                        <div className="pt-4">
                            <button className="bg-[#FFC700] hover:bg-[#E6B400] text-[#031430] font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-yellow-500/10 flex items-center space-x-2 group transition-all duration-200 active:scale-95">
                                <span>Join Us Now</span>
                                <span className="transform group-hover:translate-x-1 transition-transform font-bold">→</span>
                            </button>
                        </div>

                    </div>

                    {/* =========================================================
            RIGHT COLUMN: BENTO LAYOUT LOGO GRID
            ========================================================= */}
                    <div className="lg:col-span-7 w-full flex justify-center items-center">

                        {/* Desktop/Tablet CSS Grid Container */}
                        <div className="hidden sm:grid grid-cols-5 grid-rows-4 gap-4 w-full max-w-[580px] p-2 aspect-[4/3] items-center justify-items-center">
                            {logoCards.map((card) => {
                                const isLarge = card.gridPos.includes('is-large');
                                return (
                                    <div
                                        key={card.id}
                                        className={`
                    ${card.gridPos.replace('is-large', '')} 
                    bg-white rounded-3xl flex items-center justify-center -mt-8 p-4 shadow-xl border border-white/20 transition-transform duration-300 hover:scale-105 select-none
                    ${isLarge ? 'w-full h-full max-h-[220px]' : 'w-full aspect-square max-w-[100px] sm:max-w-[110px]'}
                  `}
                                    >
                                        {/* Google Logo Placeholder matches the look */}
                                        <div className={`flex items-center font-semibold tracking-tight ${isLarge ? 'text-3xl lg:text-4xl' : 'text-sm sm:text-base'}`}>
                                            <span className="text-[#4285F4]">G</span>
                                            <span className="text-[#EA4335]">o</span>
                                            <span className="text-[#FBBC05]">o</span>
                                            <span className="text-[#4285F4]">g</span>
                                            <span className="text-[#34A853]">l</span>
                                            <span className="text-[#EA4335]">e</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Mobile Clean Fluid Wrapping Grid Alternative */}
                        <div className="grid sm:hidden grid-cols-3 gap-3 w-full">
                            {[...Array(9)].map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl aspect-square p-2 flex items-center justify-center shadow-sm"
                                >
                                    <div className="text-xs font-semibold tracking-tight">
                                        <span className="text-[#4285F4]">G</span>
                                        <span className="text-[#EA4335]">o</span>
                                        <span className="text-[#FBBC05]">o</span>
                                        <span className="text-[#4285F4]">g</span>
                                        <span className="text-[#34A853]">l</span>
                                        <span className="text-[#EA4335]">e</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>
            <section className="relative w-full py-24 px-6 lg:px-16 xl:px-24 flex flex-col  items-center bg-gradient-to-br from-[#FFFCF6] to-[#FFF6E0] z-10">
                <div className="flex flex-col items-center text-center max-w-3xl mb-12">
                    <div className="inline-block bg-[#C6DDFB] text-[#041C3E] font-bold text-sm px-6 py-2 rounded-lg mb-6 tracking-wide">
                        POSITIONS
                    </div>
                    <h2 className="text-4xl md:text-5xl  font-jakarta font-semibold text-[#041C3E] leading-tight mb-6">
                        Connecting Businesses with the<br className="hidden md:block" />
                        <span className="text-[#FAC207] font-messiri lg:text-5xl relative inline-block mt-2">
                            Right Talent
                            <img src={line} alt="underline" className="absolute -bottom-2 left-0 w-full object-contain" />
                        </span>
                    </h2>
                    <p className="text-[#041C3E] text-base md:text-lg font-jakarta mb-8 opacity-90">
                        From technical specialists to business professionals, we help organizations hire skilled candidates across a wide range of roles and experience levels.
                    </p>

                    {/* Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <button
                            onClick={() => {
                                setActiveTab("technical");
                                setShowAll(false);
                                setSelectedRole("Staff Software Engineer");
                            }}
                            className={`font-bold px-8 py-4 rounded-2xl ${activeTab === "technical"
                                ? "bg-[#041C3E] text-[#FAC207]"
                                : "bg-[#E2EFFF] text-[#8BA4C8]"
                                }`}
                        >
                            Technical
                        </button>

                        <button
                            onClick={() => {
                                setActiveTab("nontechnical");
                                setShowAll(false);
                                setSelectedRole("EV");
                            }}
                            className={`font-bold px-8 py-4 rounded-2xl ${activeTab === "nontechnical"
                                ? "bg-[#041C3E] text-[#FAC207]"
                                : "bg-[#E2EFFF] text-[#8BA4C8]"
                                }`}
                        >
                            Non Technical
                        </button>
                    </div>
                </div>

                {/* Split Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 w-full">

                    {/* Left Panel */}
                    <div className="w-full">
                        <div className="bg-[#C6DDFB] rounded-3xl p-4 lg:p-6 shadow-xl">

                            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2">

                                {visibleRoles.map((role, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedRole(role)}
                                        className={`
              shrink-0
              lg:w-full
              px-5 py-4
              rounded-2xl
              flex items-center justify-between
              transition-all duration-300
              ${selectedRole === role
                                                ? "bg-[#041C3E] text-white shadow-lg"
                                                : "bg-white text-[#041C3E] hover:shadow-md"
                                            }
            `}
                                    >
                                        <span className="font-semibold whitespace-nowrap">
                                            {role}
                                        </span>

                                        <i
                                            className={`ri-play-fill text-xl ${selectedRole === role
                                                ? "text-white"
                                                : "text-[#FAC207]"
                                                }`}
                                        />
                                    </button>
                                ))}

                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="shrink-0 lg:w-full bg-[#AECDF6] rounded-2xl px-5 py-4 font-semibold text-[#041C3E]"
                                >
                                    {showAll ? "Less Roles" : "View All Roles"}
                                </button>

                            </div>

                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="w-full bg-white border border-[#EEF4FF] rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl">

                        {activeTab === "technical" ? (
                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4">

                                {(techLogos[selectedRole] || []).map((logo, idx) => (
                                    <div
                                        key={idx}
                                        className="
              bg-[#FFF8E5]
              rounded-3xl
              aspect-square
              flex
              items-center
              justify-center
              p-4
              hover:-translate-y-1
              transition-all
              shadow-sm
            "
                                    >
                                        <img
                                            src={logo}
                                            alt={`logo-${idx}`}
                                            className="w-50 h-50 object-contain"
                                        />
                                    </div>
                                ))}

                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

                                {(nonTechData[selectedRole] || []).map((role, idx) => (
                                    <div
                                        key={idx}
                                        className="
              bg-[#FFF8E5]
              rounded-2xl
              p-5
              min-h-[120px]
              flex
              items-center
              justify-center
              text-center
              hover:-translate-y-1
              hover:shadow-lg
              transition-all
            "
                                    >
                                        <h3 className="font-semibold text-[#041C3E]">
                                            {role}
                                        </h3>
                                    </div>
                                ))}

                            </div>
                        )}

                    </div>

                </div>

            </section>
            <LeadGenClientTestomonial />
            <RecruitmentFrequently />
            <LeadGenBottomSection />
        </div>
    );
};

export default Recruitment;
