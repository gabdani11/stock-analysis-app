import React from 'react'
import './stocktrending.scss'
import Stock from './components/Stock'
import { UseStock } from './hook/UseStock.jsx'
import { useEffect } from 'react'
import { useState } from 'react'

const StockTrending = () => {
  const { stockData, loading, fetchStockData } = UseStock();
  const isMobile = window.innerWidth <= 768;
  const [visibleCount, setVisibleCount] = useState(isMobile ? 4 : 10);
  useEffect(() => {
    if(stockData.length === 0) {
    fetchStockData();
    if (window.innerWidth <= 768) {
    setVisibleCount(4);
  } else {
    setVisibleCount(10);
  }
  }
  }, []);
  if(loading){
    return <div className='loading'>Loading...</div>
  }

  return (
    <div className='trendingStockContainer'>
        <div className="title">
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 <h1>Trending Stock</h1>
        </div>
        <div className="trendingStockList">
          {stockData.slice(0, visibleCount).map((stock) => (
            <Stock key={stock.id} data={stock} />
          ))}
        </div>
        {visibleCount < stockData.length && 
        (
        <button 
        className='showMoreBtn' 
        onClick={() => setVisibleCount(stockData.length)}>
        Show More
       </button>
       )}
      {/* this is called conditional rendering, if the first codintion is true the && next expression will render. */}
    </div>
  )
}

export default StockTrending