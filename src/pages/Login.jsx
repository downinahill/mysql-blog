import React from 'react'


const Login = () => {
  return (
    <div className="auth">
       <div>
         <h1>Login</h1>
         </div>
        <form>
        
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>Login</button>
        </form>
        
    </div>
  )
}

export default Login