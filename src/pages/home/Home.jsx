import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import bgImage from '../../assets/images/Firefly.jpg'
import StockTrending from '../../features/trendingStock/StockTrending'
import StockNews from '../../features/trendingStock/StockNews'
import Footer from '../../components/footer/Footer'
import {gsap} from 'gsap'
import { SplitText } from 'gsap/SplitText'
import Chatbot from '../../components/chatbot/Chatbot'


const Home = () => {
   let split = SplitText.create('.heroHeading', {type:'words'})
   gsap.from(split.words, {
    opacity:0,
    y:30,
    duration: 1,
    stagger: 0.1
   })
  return (
    <div >
        <Navbar/>
        <Chatbot/>
        <main className='heroSection'>
            <div className="content">
                <img src={bgImage} alt="backgroundImage" loading='lazy' />
                <div className="heading">
                    <h1 className='heroHeading' style={{overflow:'hidden'}}>Intelligence for the <br /> Modern Invester</h1>
                    <p>Track live markets, analyze deep trends with AI Prediction, and build <br /> your perfect portfolio on Stock Analysis</p>
                </div>
            </div>
        </main>
        <StockTrending/>
        <StockNews/>
        <Footer/>
    </div>
  )
}

export default Home