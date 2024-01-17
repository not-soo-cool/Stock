import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import pic31 from '../../LandingPage/Assets/pic31.png'
import pic32 from '../../LandingPage/Assets/pic32.png'
import thumbpic from '../../LandingPage/Assets/thumbs-up.png'


const About = () => {
  return (
    <div className='about-div'>
      <section className="about-section">
        <header className='about-header'>
          <h1>How it Works</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, veniam autem libero dolorem ea placeat?</h2>

          <div className='container'>
            <div className='card'>
              <div className="content">
                <img src={pic31} alt="pic" className='show-on' style={{
                  height: '250px',
                  width: '250px',
                  marginTop: '-35px'
                }}/>
                <h3 className='show-on' style={{
                  fontSize: '25px'
                }}>Auto Filling</h3>
                <img src={pic31} alt="pic" className='show-hover' style={{
                  height: '150px',
                  width: '150px',
                }}/>
                <h3 className='show-hover' style={{
                  marginBottom: '10px'
                }}>Auto Filling</h3>
                <p className='show-hover'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A explicabo quam saepe voluptatum consectetur veritatis eum, quisquam minus ad sapiente!</p>
              </div>
            </div>
            
            <div className='card'>
              <div className="content">
                <img src={pic32} alt="pic" className='show-on' style={{
                  height: '250px',
                  width: '250px',
                  marginBottom: '10px'
                }}/>
                <h3 className='show-on' style={{
                  fontSize: '25px'
                }}>Reduces Time and Effort</h3>
                <img src={pic32} alt="pic" className='show-hover' style={{
                  height: '150px',
                  width: '150px',
                }}/>
                <h3 className='show-hover' style={{
                  marginBottom: '10px'
                }}>Reduces Time and Effort</h3>
                <p className='show-hover'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A explicabo quam saepe voluptatum consectetur veritatis eum, quisquam minus ad sapiente!</p>
              </div>
            </div>

            <div className='card'>
              <div className="content">
                <img src={thumbpic} alt="pic" className='show-on' style={{
                  height: '150px',
                  width: '150px',
                  marginBottom: '50px'
                }}/>
                <h3 className='show-on' style={{
                  fontSize: '25px',
                  marginTop: '10px'
                }}>Convenient</h3>
                <img src={thumbpic} alt="pic" className='show-hover' style={{
                  height: '150px',
                  width: '150px',
                }}/>
                <h3 className='show-hover' style={{
                  margin: '10px 0'
                }}>Convenient</h3>
                <p className='show-hover'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A explicabo quam saepe voluptatum consectetur veritatis eum, quisquam minus ad sapiente!</p>
              </div>
            </div>
          
          </div>  
        </header>
      </section>
    </div>
  )
}

export default About
