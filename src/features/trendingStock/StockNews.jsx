import React from 'react'
import './stockNews.scss'
import News from './components/News'
import { UseStock } from './hook/UseStock'
import { useEffect } from 'react'

const StockNews = () => {
  const { fetchStockNews, stockNews, loading } = UseStock();
  
  

  useEffect(() => {
    fetchStockNews();

  }, []);
  if(loading){
    return <div className='loading'>Loading...</div>
  }

  return (
    <div className='stockNews'>
        <div className="heading">
            <h4>
                Latest Stock News
            </h4>
        </div>
        <div className="newsHeading">
            {
              stockNews.filter(news=>news.category === 'top news').slice(0,10).map((newsItem, index) => (
                <News key={index} data={newsItem} />
              ))
            }

        </div>
    </div>
  )
}

export default StockNews