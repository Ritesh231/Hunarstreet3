import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Recruitment from '../pages/Recruitment.jsx'
export default function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Recruitment />} />
            </Routes>
        </HashRouter>
    )
}