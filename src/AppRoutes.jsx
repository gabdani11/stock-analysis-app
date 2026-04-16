import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Stockanalysis from './pages/stockanalysis/Stockanalysis'
import Portfolio from './pages/portfolio/Portfolio'

const Approutes = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/stock-chart" element={<Stockanalysis/>} />
       <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Approutes