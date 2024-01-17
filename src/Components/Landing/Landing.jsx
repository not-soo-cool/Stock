import React, { useEffect } from 'react'
import Home from './Home/Home'
import About from './About/About'
import './Landing.css'
import Contact from './Contact/Contact'

const Landing = () => {

  let sections = document.querySelectorAll('section');
  console.log(sections);
  console.log("Kuchh bhi");

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      console.log(top)
      let offset = sec.offsetTop - 100;
      console.log(offset)
      let height = sec.offsetHeight;
      console.log(height)
      let id = sec.getAttribute('id');
      console.log(id)
    })
  }

  useEffect(() => {
    console.log("Bas karo")
  })

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
