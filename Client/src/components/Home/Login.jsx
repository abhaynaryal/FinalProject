import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/Context'
import axios from 'axios'
import { toast } from 'react-toastify'
import './Login.css'  // Import the external CSS file
// import Sidebar from './sidebar/Sidebar'
// import Navbar from './Navbar/Navbar'
import { Link } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const { backendUrl, setIsLoggedIn } = useContext(Context)

  const [state, setState] = useState('Sign Up')
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true;
      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/auth/register', {name, email, password})

        if (data.success) {
          setIsLoggedIn(true)
          navigate('/home')
        } else {
          toast.error(data.message)
        }

      } else {
        const { data } = await axios.post(backendUrl + '/api/auth/login', {email, password })

        if (data.success) {
          setIsLoggedIn(true)
          navigate('/home')
        } else {
          toast.error(data.message)
        }

      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
<nav className="nav">
      <Link to="/" className='gem'>
        <p>Gemini</p>
      </Link>

      <button className="custom-btn home-btn" onClick={() => navigate('/home')}>Home</button>

    </nav>

    {/* <Navbar/> */}
    <div className="login-page-container">
      <div className="login-form-container">
        <h2 className='log'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</h2>
        <p className='log2'>{state === 'Sign Up' ? 'Create Your Account' : 'Login To Your Account'}</p>

        <form className ="login-form" onSubmit={onSubmitHandler}>
          {state === 'Sign Up' && (
            <div>
              <input 
                onChange={e => setName(e.target.value)} 
                value={name} 
                type="text" 
                placeholder='Full Name' 
                required 
                className="login-input"
              />
            </div>
          )}

          <div>
            <input 
              onChange={e => setEmail(e.target.value)} 
              value={email} 
              type="email" 
              placeholder='Email Id' 
              required 
              className="login-input"
            />
          </div>

          <div>
            <input 
              onChange={e => setPassword(e.target.value)} 
              value={password} 
              type="password" 
              placeholder='Password' 
              required 
              className="login-input"
            />
          </div>

          <p onClick={() => navigate('/reset-password')} className="forgot-password">Forgot Password</p>

          <button type="submit" className="login-btn">{state}</button>
        </form>
        
        {state === 'Sign Up' ? (
          <p>Already have an account? <span onClick={() => setState('Login')} className="toggle-link">Login Here</span></p>
        ) : (
          <p>Don't have an account? <span onClick={() => setState('Sign Up')} className="toggle-link">Sign Up</span></p>
        )}
      </div>
    </div>
    </>
  )
}

export default Login;
