import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Recruitment from '../pages/Recruitment'
import LeadGeneration from '../pages/LeadGeneration'

export default function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recruitment" element={<Recruitment />} />
                <Route path="/lead-generation" element={<LeadGeneration />} />
            </Routes>
        </HashRouter>
    )
}