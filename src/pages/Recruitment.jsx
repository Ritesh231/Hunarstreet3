import { useState } from 'react';
import blurboll from '../assets/RecruitmentPageAssets/Ellipse 36.png'
import logo from '../assets/RecruitmentPageAssets/img1046 1.png';
// import hero1 from '../assets/RecruitmentPageAssets/Ellipse 9.png';
import hero2 from '../assets/hero-right-side.png';
import hero3 from '../assets/RecruitmentPageAssets/Rectangle 30.png';
import line from '../assets/Rectangle 124.png';
import grayback from '../assets/RecruitmentPageAssets/Rectangle 139.png';
import ses23 from '../assets/RecruitmentPageAssets/Rectangle 3843.png';
import ses22 from '../assets/RecruitmentPageAssets/Rectangle 3842.png';
import sound from '../assets/RecruitmentPageAssets/megaphone 4.png';
import star from '../assets/RecruitmentPageAssets/Star 22.png';
import icon1 from '../assets/RecruitmentPageAssets/streamline-freehand-color_job-profile-search.png';
import icon2 from '../assets/RecruitmentPageAssets/streamline-freehand-color_job-search-magnifier-briefcase.png';
import step1 from '../assets/RecruitmentPageAssets/55a9250c-5cbd-4584-89fc-854978709e64 1.png';
import step2 from '../assets/RecruitmentPageAssets/4cf62608-1f99-4920-b0af-980c10cdf2b1 1.png';
import step3 from '../assets/RecruitmentPageAssets/cc0d50cd-51b3-4a16-a257-f47016d1375c 1.png';
import step4 from '../assets/RecruitmentPageAssets/ChatGPT Image Jun 4, 2026, 08_37_18 PM 4.png';
import vector10 from '../assets/RecruitmentPageAssets/Vector 10.png';
import vector11 from '../assets/RecruitmentPageAssets/Vector 11.png';
import vector12 from '../assets/RecruitmentPageAssets/Vector 12.png';
import logoSvg from '../assets/RecruitmentPageAssets/Logo.svg.png';
import tech1 from '../assets/RecruitmentPageAssets/ChatGPT Image Jun 6, 2026, 03_26_47 PM 1.png';
import tech2 from '../assets/RecruitmentPageAssets/ChatGPT Image Jun 6, 2026, 03_26_47 PM 2.png';
import tech3 from '../assets/RecruitmentPageAssets/ChatGPT Image Jun 6, 2026, 03_26_47 PM 3.png';
import tech4 from '../assets/RecruitmentPageAssets/ChatGPT Image Jun 6, 2026, 03_26_47 PM 4.png';
import tech5 from '../assets/RecruitmentPageAssets/ChatGPT Image Jun 6, 2026, 03_26_47 PM 5.png';
import tech6 from '../assets/RecruitmentPageAssets/ChatGPT Image Jun 6, 2026, 03_26_47 PM 6.png';
import tech7 from '../assets/RecruitmentPageAssets/ChatGPT Image Jun 6, 2026, 03_26_47 PM 7.png';
import tech8 from '../assets/RecruitmentPageAssets/ChatGPT Image Jun 6, 2026, 03_26_47 PM 8.png';
import tech9 from '../assets/RecruitmentPageAssets/ChatGPT Image Jun 6, 2026, 03_26_47 PM 9.png';
import tech10 from '../assets/RecruitmentPageAssets/ChatGPT Image Jun 6, 2026, 03_26_47 PM 10.png';
import tech11 from '../assets/RecruitmentPageAssets/ChatGPT Image Jun 6, 2026, 03_26_47 PM 11.png';
import tech12 from '../assets/RecruitmentPageAssets/ChatGPT Image Jun 6, 2026, 03_26_47 PM 12.png';
import LeadGenClientTestomonial from '../components/LeadGenClientTestomonial';
import LeadGenGrowth from '../components/LeadGenGrowth';
import LeadGenBottomSection from '../components/LeadGenBottomSection';
import LeadGenFrequentlyaskedQuestions from "../components/LeadGenFrequentlyaskedQuestions";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Recruitment = () => {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    return (
        <div className='relative w-full min-h-screen overflow-hidden '>
            <Navbar setIsDemoOpen={setIsDemoOpen} isDemoOpen={isDemoOpen} />

            <section id="home" className="min-h-screen grid grid-cols-1 text-center -mt-8  lg:grid-cols-5 lg:text-left items-center justify-items-center px-8  lg:gap-8  w-full">

                <div className='col-span-3 lg:hidden mt-24'>

                    <img src={hero2} alt="Section Image" className='w-full h-full object-contain' />

                </div>
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
                <div className='col-span-3 hidden lg:block'>

                    <img src={hero2} alt="Section Image" className='w-full h-full object-contain' />

                </div>
            </section>

            <section id="about" className='grid min-h-screen grid-cols-1 lg:grid-cols-2 px-8 lg:px-16 gap-8 py-24 w-full items-center relative overflow-hidden'
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

            {/* Industries We Service & Trusted By Leading Company */}
            <section id="industries" className="w-full bg-[#041C3E] py-24   flex flex-col items-center rounded-t-[40px] md:rounded-t-[80px] z-20 relative overflow-hidden">
                {/* Part 1: Industries We Service */}
                <div className="flex flex-col items-center text-center w-full mb-32">
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
                <div className="w-full -ml-36 max-w-[1000px] flex flex-col lg:flex-row  justify-between   pb-12">
                    {/* Left Text Side */}
                    <div className="max-w-2xl text-left w-full relative z-10 flex flex-col items-center xl:items-start text-center xl:text-left">
                        <div className="inline-block bg-[#4A6799] text-white font-bold text-sm px-6 py-3 rounded-lg mb-8 uppercase tracking-wider shadow-sm">
                            Our Clients
                        </div>
                        {/* the sound icon floating */}
                        <div className="relative w-full flex justify-center xl:justify-end">
                            <img src={sound} className="w-20 md:w-28 absolute -top-24 xl:-top-20 right-0 xl:right-16 transform -rotate-12 z-0 opacity-90" alt="megaphone" />
                        </div>

                        <h2 className="text-4xl  lg:text-[44px] font-jakarta font-semibold text-white leading-tight relative z-10">
                            Trusted By Leading<br className="hidden xl:block" />
                            <span className="text-[#FAC207] lg:text-5xl font-messiri relative inline-block mt-3 xl:mt-2">
                                Company
                                <img src={line} alt="underline" className="absolute -bottom-3 left-0 w-full object-contain" />
                            </span>
                        </h2>
                        <p className="text-white/90 text-base md:text-lg lg:text-xl font-jakarta mt-8 mb-12 relative z-10 max-w-lg">
                            We've partnered with growing businesses, and established organizations to help them find the right talent and achieve their hiring goals.
                        </p>
                        <button className="bg-[#FAC207] text-[#041C3E] font-bold font-jakarta px-8 py-4 rounded-[14px] shadow-[0_0_30px_rgba(250,194,7,0.4)] hover:scale-105 transition-transform flex items-center justify-center gap-2 relative z-10 text-lg w-full sm:w-auto">
                            Join Us Now <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>

                    {/* Right Logos Side */}
                    <div className="relative w-full max-w-[600px] h-[580px] flex items-center justify-center scale-75 sm:scale-90 lg:scale-100 xl:scale-90 2xl:scale-100 origin-top xl:origin-right mt-10 xl:mt-0">

                        {/* Big Box */}
                        <div className="absolute top-[160px] left-0 w-[260px] h-[260px] bg-white rounded-[48px] shadow-2xl flex items-center justify-center p-8 hover:-translate-y-2 transition-transform duration-300">
                            <img src={logoSvg} className="w-[70%] object-contain" alt="Google" />
                        </div>

                        {/* Col 2 */}
                        <div className="absolute top-[20px] left-[280px] w-[120px] h-[120px] bg-white rounded-[32px] shadow-xl flex items-center justify-center p-4 hover:-translate-y-2 transition-transform duration-300">
                            <img src={logoSvg} className="w-[70%] object-contain" alt="Google" />
                        </div>
                        <div className="absolute top-[160px] left-[280px] w-[120px] h-[120px] bg-white rounded-[32px] shadow-xl flex items-center justify-center p-4 hover:-translate-y-2 transition-transform duration-300">
                            <img src={logoSvg} className="w-[70%] object-contain" alt="Google" />
                        </div>
                        <div className="absolute top-[300px] left-[280px] w-[120px] h-[120px] bg-white rounded-[32px] shadow-xl flex items-center justify-center p-4 hover:-translate-y-2 transition-transform duration-300">
                            <img src={logoSvg} className="w-[70%] object-contain" alt="Google" />
                        </div>
                        <div className="absolute top-[440px] left-[280px] w-[120px] h-[120px] bg-white rounded-[32px] shadow-xl flex items-center justify-center p-4 hover:-translate-y-2 transition-transform duration-300">
                            <img src={logoSvg} className="w-[70%] object-contain" alt="Google" />
                        </div>

                        {/* Col 3 */}
                        <div className="absolute top-[160px] left-[420px] w-[120px] h-[120px] bg-white rounded-[32px] shadow-xl flex items-center justify-center p-4 hover:-translate-y-2 transition-transform duration-300">
                            <img src={logoSvg} className="w-[70%] object-contain" alt="Google" />
                        </div>
                        <div className="absolute top-[300px] left-[420px] w-[120px] h-[120px] bg-white rounded-[32px] shadow-xl flex items-center justify-center p-4 hover:-translate-y-2 transition-transform duration-300">
                            <img src={logoSvg} className="w-[70%] object-contain" alt="Google" />
                        </div>
                        <div className="absolute top-[440px] left-[420px] w-[120px] h-[120px] bg-white rounded-[32px] shadow-xl flex items-center justify-center p-4 hover:-translate-y-2 transition-transform duration-300">
                            <img src={logoSvg} className="w-[70%] object-contain" alt="Google" />
                        </div>

                        {/* Col 4 */}
                        <div className="absolute top-[160px] left-[560px] w-[120px] h-[120px] bg-white rounded-[32px] shadow-xl flex items-center justify-center p-4 hover:-translate-y-2 transition-transform duration-300">
                            <img src={logoSvg} className="w-[70%] object-contain" alt="Google" />
                        </div>
                        <div className="absolute top-[300px] left-[560px] w-[120px] h-[120px] bg-white rounded-[32px] shadow-xl flex items-center justify-center p-4 hover:-translate-y-2 transition-transform duration-300">
                            <img src={logoSvg} className="w-[70%] object-contain" alt="Google" />
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
                        <button className="bg-[#041C3E] text-[#FAC207] font-bold font-jakarta px-8 py-4 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform">
                            Technical
                        </button>
                        <Link to="https://www.hunarstreet.com/#expertise" className="bg-[#E2EFFF] text-[#8BA4C8] font-bold font-jakarta px-8 py-4 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
                            Non - Technical
                        </Link>
                    </div>
                </div>

                {/* Split Content Area */}
                <div className="w-full max-w-[1400px] flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8">

                    {/* Left Column: Roles List */}
                    <div className="w-full lg:w-[420px] bg-[#C6DDFB] rounded-[40px] p-6 sm:p-8 flex flex-col gap-4 shadow-xl shrink-0">
                        {/* Active Role */}
                        <div className="bg-[#041C3E] text-white rounded-[20px] px-6 py-5 flex items-center justify-between shadow-lg cursor-pointer hover:-translate-y-1 transition-transform">
                            <span className="font-jakarta font-semibold text-[17px]">Staff Software Engineer</span>
                            <i className="ri-play-fill text-white  text-2xl"></i>
                        </div>
                        <Link to="https://www.hunarstreet.com/#expertise" className="bg-white   rounded-[20px] px-6 py-5 flex items-center justify-between shadow-lg cursor-pointer hover:-translate-y-1 transition-transform">
                            <span className="font-jakarta font-semibold text-[#041C3E] text-[17px]">Machine Learning Engineer</span>
                            <i className="ri-play-fill text-[#FAC207] text-2xl"></i>
                        </Link>

                        {/* Inactive Roles */}
                        {['Data Science Engineer', 'DevOps Engineer', 'Front-End Developers', 'Back-End Developers'].map((role, idx) => (
                            <Link key={idx} className="bg-white text-[#041C3E] rounded-[20px] px-6 py-5 flex items-center justify-between shadow-sm cursor-pointer hover:-translate-y-1 transition-transform">
                                <span className="font-jakarta font-semibold text-[17px]">{role}</span>
                                <i className="ri-play-fill text-[#FAC207] text-2xl"></i>
                            </Link>
                        ))}

                        {/* View All Button */}
                        <button className="mt-4 w-full bg-[#AECDF6] bg-opacity-60 text-[#041C3E] rounded-[20px] px-6 py-5 font-jakarta font-bold text-lg hover:bg-opacity-100 transition-colors flex items-center justify-center gap-2">
                            View All Tech Roles <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>

                    {/* Right Column: Tech Stack Grid */}
                    <div className="w-full flex-grow bg-white border-4 border-[#F2F7FF] rounded-[40px] p-6 sm:p-8 md:p-12 shadow-2xl flex items-center justify-center">
                        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                            {[tech1, tech2, tech3, tech4, tech5, tech6, tech7, tech8, tech9, tech10, tech11, tech12].map((tech, idx) => (
                                <div key={idx} className="bg-[#FFF8E5] rounded-[28px] aspect-[5/4] flex flex-col items-center justify-center p-6 hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg cursor-pointer group">
                                    <img src={tech} alt={`Technology ${idx + 1}`} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
            <LeadGenClientTestomonial />
            <LeadGenFrequentlyaskedQuestions />
            <LeadGenBottomSection />
        </div>
    );
};

export default Recruitment;