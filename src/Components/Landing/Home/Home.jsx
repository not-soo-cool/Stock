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
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/dashboard">Services</a></li>
            <li><a href="/contact">Contact</a></li>
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
              <h2>Learn To Enjoy,<br/>Every Moment Of Your Life</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum facere in nam, officiis aspernatur consectetur aliquid sequi possimus et. Sint.</p>
              {/* <Link to='login' onClick={()=>setTab("../login")} style={{
                textDecoration: 'none'
              }}> */}
              <button className='mui-btn' style={{
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
              }}>
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
