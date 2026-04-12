import React from 'react'
import './news.scss'

const News = ({data}) => {
  const date = new Date(data.datetime * 1000);
  const formattedDate = date.toLocaleDateString();
  
  return (
    <div className='news'>
      <div>
        <img src={data.image} alt="" />
      <h4 className='headline'>{data.headline}</h4>
      <p className='description'>{data.summary}</p>
      </div>
      <div className='date'>
        <span>{formattedDate}</span>
        <span className='readMore'><a href={data.url} target="_blank" rel="noopener noreferrer">Read more</a></span>
      </div>
    </div>
  )
}

export default News