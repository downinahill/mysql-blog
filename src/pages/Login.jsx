import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className="auth">
       <div>
         <h1>Login</h1>
         </div>
        <form>
        
            <input required type="text" placeholder="username" />
            <input required type="password" placeholder="password" />
            <button>Login</button>
            <p>Error!</p>
            <span>Don't have an account? <Link to="/register">Register.</Link></span>
        </form>
        
    </div>
  )
}

export default Login