import React from 'react'
import RecruitmentHero from '../components/RecruitmentHero';
import RecruitmentSolution from '../components/RecruitmentSolution';
import RecruitmentGrowth from '../components/RecruitmentGrowth';
import RecruitmentHowItWorks from '../components/RecruitmentHowitWorks';
import RecruitmentWhatWeDo from '../components/RecruitmentWhatweDo';
import RecruitmentWhatMakesDifferent from '../components/RecruitmentWhatMakesDifferent';
import RecruitmentIndustries from "../components/RecruitmentIndustries";
import RecruitmentTrustedClient from "../components/RecruitmentTrustedClient"
import RecruitmentClientTestomonial from "../components/RecruitmentClientTestomonial"
import RecruitmentFrequentlyaskedQuestions from "../components/RecruitmentFrequentlyaskedQuestions"
import RecruitmentBottomSection from "../components/RecruitmentBottomSection"
import Navbar from "../components/Navbar";

export default function Recruitment() {
    return (
        <div id="home">
            <Navbar />
            <RecruitmentHero />
            <div id="solution">
                <RecruitmentSolution />
            </div>
            <RecruitmentGrowth />
            <RecruitmentHowItWorks />
            <div id="services">
                <RecruitmentWhatWeDo />
            </div>
            <RecruitmentWhatMakesDifferent />
            <div id="industries">
                <RecruitmentIndustries />
            </div>
            <RecruitmentTrustedClient />
            <RecruitmentClientTestomonial />
            <RecruitmentFrequentlyaskedQuestions />
            <RecruitmentBottomSection />

        </div>
    )
}