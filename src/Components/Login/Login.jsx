import React, { useEffect, useRef, useState } from 'react'
import './Login.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import googleImg from '../LandingPage/Assets/google.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from '../../Actions/UserAction';


const Login = () => {

  const toastOptions = {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  }

  // const googleAuth = () => {
  //   window.open(
  //     'http://localhost:80/auth/google/callback', "self"
  //   );
  // }

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [href, setHref] = useState(false);

    const dispatch = useDispatch();

    const {error, message, isAuthenticated} = useSelector(state => state.auth)

    const loginHandler = (e) => {
        e.preventDefault();

        dispatch(loginUser(email, password));

        setTimeout(() => {
          if(window.location.pathname.toString() === '/login' && isAuthenticated){
            window.location.pathname = '/';
          }
        }, 3000)
    }

    useEffect(() => {
        if(error){
            toast.error(error, toastOptions);
            dispatch({type: "clearErrors"})
        }
        if(message){
            toast.success(message, toastOptions)
            dispatch({type: "clearMessage"})
        }
      }, [toast, error, message, dispatch]);

      // if(window.location.pathname.toString() === '/login' && isAuthenticated){
      //   window.location.pathname = '/';
      // }


  return (
    <div className='sign-in'>
      <section>
        <div className="sign-inok">
          <form className='loginForm' onSubmit={loginHandler} action="" >
            <h2>Sign In</h2>
            <div className="input-box first">
              <input type="email" placeholder='Email*' 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} />
            </div>
            
            <div className="input-box second">
                <input type="password" placeholder='Password*' 
                required 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} />
                
            </div>

            <div className="input-box seventh" style={{
              marginTop: '10px'
            }}>
                <input type="submit" value='Submit' id='btn' />
            </div>

            <div className="input-box tenth" style={{
              marginTop: '10px'
            }}>
                {/* <Link to={'/auth/google/callback'}> */}
                    <button 
                    className='google_btn' 
                    // onClick={dismissHandler}
                    // onClick={googleAuth}
                    >
                        <img src={googleImg} alt="google icon" />
                        <span>Sign In with Google</span>
                    </button>
                {/* </Link> */}
            </div>

            <div className="group" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '0',
              padding: '0'
            }}>
              {/* <Link to={'/signup'}>New User? Sign Up</Link> */}
              <br />
              <a href="../forgot/password">Forgot Password?</a>
            </div>

          </form>
        </div>
      </section>
    </div>
  )
}

export default Login
