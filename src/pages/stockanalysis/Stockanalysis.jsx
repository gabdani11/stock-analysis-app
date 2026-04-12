import React from 'react'
import Stockchart from './components/Stockchart'
import './stockanalysis.scss'
import Navbar from '../../components/navbar/Navbar'

const Stockanalysis = () => {
  return (
    <div className='stockChartPage'>
      <Navbar/>
      <div className="stockChart">
        <Stockchart/>
      </div>
      

    </div>
  )
}

export default Stockanalysis
