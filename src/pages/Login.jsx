import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from "../context/authContext"


const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const { login } = useContext(AuthContext)

const handleChange = (e) => {
  setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
}

const handleSubmit = async (e) => {
  e.preventDefault()
  try{
    const res = await axios.post("auth/login/", inputs)
    navigate("/")
console.log(res)
  } catch(err){
setError(err.response.data)
  }
}

console.log(inputs)
  return (
    <div className="auth">
       <div>
         <h1>Login</h1>
         </div>
        <form>
        
            <input required type="text" placeholder="username" name="username" onChange={handleChange}/>
            <input required type="password" placeholder="password" onChange={handleChange}/>
            <button onClick={handleSubmit}>Login</button>
            {error && <p>{error}</p>}
            <span>Don't have an account? <Link to="/register">Register.</Link></span>
        </form>
        
    </div>
  )
}

export default Login