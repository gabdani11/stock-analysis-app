import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Stockanalysis from './pages/stockanalysis/Stockanalysis'

const Approutes = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/stock-chart" element={<Stockanalysis/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Approutes