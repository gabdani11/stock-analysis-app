import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useState } from 'react'


const Navbar = () => {
  const [active, setActive] = useState(false)

  gsap.from('.navbar nav', {y:-100, duration:1.5, ease: 'bounce'})
  return (
    <div className='navbar'>
    <nav>
        <div className='logo'>
          <img src="/logoicon.webp" alt="" />
          <h1><Link to='/'>StockForge</Link></h1>
        </div>
        <ol>
            <li>
              <Link to='/'>
              <svg className='homeIcon' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 21V13.6C9 13.0399 9 12.7599 9.109 12.546C9.20487 12.3578 9.35785 12.2049 9.54601 12.109C9.75993 12 10.04 12 10.6 12H13.4C13.9601 12 14.2401 12 14.454 12.109C14.6422 12.2049 14.7951 12.3578 14.891 12.546C15 12.7599 15 13.0399 15 13.6V21M2 9.5L11.04 2.72C11.3843 2.46181 11.5564 2.33271 11.7454 2.28294C11.9123 2.23902 12.0877 2.23902 12.2546 2.28295C12.4436 2.33271 12.6157 2.46181 12.96 2.72L22 9.5M4 8V17.8C4 18.9201 4 19.4802 4.21799 19.908C4.40974 20.2843 4.7157 20.5903 5.09202 20.782C5.51985 21 6.0799 21 7.2 21H16.8C17.9201 21 18.4802 21 18.908 20.782C19.2843 20.5903 19.5903 20.2843 19.782 19.908C20 19.4802 20 18.9201 20 17.8V8L13.92 3.44C13.2315 2.92361 12.8872 2.66542 12.5091 2.56589C12.1754 2.47804 11.8246 2.47804 11.4909 2.56589C11.1128 2.66542 10.7685 2.92361 10.08 3.44L4 8Z" stroke="currentColor" stroke-Width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>Home
              </Link>
              </li>
            <li><Link to='/stock-chart'>Chart</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <svg className='searchBtn' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L16.65 16.65M11 6C13.7614 6 16 8.23858 16 11M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" stroke-Width="2" stroke-Linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg className='menuIcon' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H15" stroke="currentColor" stroke-Width="2" stroke-Linecap="round" stroke-linejoin="round"/>
            </svg>
        </ol>
        <svg
        onClick={()=>setActive(true)} 
        className='menuIcon' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H15" stroke="currentColor" stroke-Width="2" stroke-Linecap="round" stroke-linejoin="round"/>
            </svg>

    </nav>
    <div className="responsive" style={{display:active?'flex':'none'}}>
      <div 
      className="closeBtn"
      onClick={()=>setActive(false)}
      >

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>


      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/stock-chart'>
              Charts
            </Link>
          </li>
          <li>
            <Link to='/portfolio'>
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default Navbar