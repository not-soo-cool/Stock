import React, { useEffect, useState } from 'react'
import './Home.css'
import logo1 from '../../LandingPage/Assets/logobg2.png'
import { Link } from 'react-router-dom'
import homeImg from '../../LandingPage/Assets/home-img.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../../Actions/UserAction';


const Home = () => {

  const [tab, setTab] = useState(window.location.pathname);
  // console.log(window.location.pathname)

  const dispatch = useDispatch();

  const handleHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleAbout = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  const handleContact = () => {
    window.scrollTo({
      top: 2*window.innerHeight,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const {isAuthenticated, loading} = useSelector(state => state.auth)


  return (
    <div className='home-div'>
      <section className="home-section">
        <header className='home-header'>
          <nav className="navbar">
            <div className="logo" >
              <img src={logo1} alt="" style={{
                height: '50px',
                width: '230px',
                marginTop: '10px'
              }}/>
            </div>
            <ul className="menu" style={{
              marginLeft: '30px',
            }}>
            <li onClick={handleHome}><a href="#">Home</a></li>
            <li onClick={handleAbout}><a href="#">About</a></li>
            {/* <li><a href="/dashboard">Services</a></li> */}
            <li onClick={handleContact}><a href="#">Contact</a></li>
            </ul>
            <div className="buttons" >
              {
                !loading &&
                isAuthenticated ? (<>
                <a href="/dashboard">
                  <input type="button" value="Profile"/>
                </a>
                </>) : 
                (
                <a href="/login">
                  <input type="button" value="Login"/>
                </a>
                )
              }
            </div>
          </nav>
          <div className="text-content">
            <div className="text-area">
              <h2>Worried about Stock ?<br/>We got that for you!!</h2>
              <p>Effortlessly manage your product inventory with our intuitive stock tracking platform. Stay informed, avoid stockouts, and boost efficiency with real-time updates on your diverse range of products.</p>
              {/* <Link to='login' onClick={()=>setTab("../login")} style={{
                textDecoration: 'none'
              }}> */}
              <button className='mui-btn' style={{
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
              }} onClick={handleAbout}>
                Know More &nbsp; <ArrowForwardIcon fontSize='small' sx={{color: 'white'}} />
              </button>
              {/* </Link> */}
            </div>

            <div className="text-image">
              <img src={homeImg} alt="" />
            </div>

          </div>
        </header>
      </section>
    </div>
  )
}

export default Home
