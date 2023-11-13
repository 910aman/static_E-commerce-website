import React from 'react'
import './CSS/loginSignUp.css'
const Login_Signup = () => {
  return (
    <div className="loginSignUp">
    <div className="loginSignUp-Container">
      <h1>Sign UP</h1>
      <div className="loginSignUp-fields">
        <input type="text" placeholder="Your Name"  />
        <input type="email" placeholder="Your Email" />
        <input type="email" placeholder="Password" />
      </div>
      <button>Continue</button>
      <p className="loginSignUp-login">
        Already have an account? <span>Login</span>
      </p>
      <div className="loginSignUp-agree">
        <input type="checkbox" name='' id='' />
        <p>By Continuing, I agree the terms of use & privacy</p>
      </div>
    </div>
    </div>
  )
}

export default Login_Signup
