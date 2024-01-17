import React, { useEffect } from 'react'
import Home from './Home/Home'
import About from './About/About'
import './Landing.css'
import Contact from './Contact/Contact'

const Landing = () => {
  return (
    <div className='landing'>
        <div className="multi-circle">
            <Home />
            <About />
            <Contact />
        </div>
    </div>
  )
}

export default Landing
