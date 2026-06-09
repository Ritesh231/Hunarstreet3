import React, { useState } from 'react';
import LeadGenHero from '../components/LeadGenHero';
import LeadGenSolution from '../components/LeadGenSolution';
import LeadGenWhatweDo from '../components/LeadGenWhatweDo';
import LeadGenHowitWorks from '../components/LeadGenHowitWorks';
import LeadGenIndustries from '../components/LeadGenIndustries';
import LeadGenWhatMakesDifferent from '../components/LeadGenWhatMakesDifferent';
import LeadGenTrustedClient from '../components/LeadGenTrustedClient';
import LeadGenFrequentlyaskedQuestions from '../components/LeadGenFrequentlyaskedQuestions';
import LeadGenClientTestomonial from '../components/LeadGenClientTestomonial';
import LeadGenGrowth from '../components/LeadGenGrowth';
import LeadGenBottomSection from '../components/LeadGenBottomSection';
import Rnavbar from '../components/Rnavbar';

const LeadGeneration = () => {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    return (
        <div className="w-full bg-white">
            <Rnavbar setIsDemoOpen={setIsDemoOpen} isDemoOpen={isDemoOpen} />
            <LeadGenHero />
            <LeadGenSolution />
            <LeadGenGrowth />
            <LeadGenHowitWorks />
            <LeadGenWhatweDo />
            <LeadGenWhatMakesDifferent />
            <LeadGenIndustries />
            <LeadGenTrustedClient />
            <LeadGenClientTestomonial />
            <LeadGenFrequentlyaskedQuestions />


            <LeadGenBottomSection />
        </div>
    );
};

export default LeadGeneration;
