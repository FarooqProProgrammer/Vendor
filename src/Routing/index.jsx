import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/Header'

export default function Routing() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' Component={Home} />
            </Routes>
        </BrowserRouter>
    )
}
