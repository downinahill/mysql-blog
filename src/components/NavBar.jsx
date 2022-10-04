import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="logo">
              <img className="logo" src="/assets/B-Letter-PNG.png" alt="" />
            </div>
            <div className="links">
            <Link className='link'>
              <h6>Art</h6>
            </Link>
            <Link className='link'>
              <h6>Science</h6>
            </Link>
            <Link className='link'>
              <h6>Technology</h6>
            </Link>
            <Link className='link'>
              <h6>Design</h6>
            </Link>
            <Link className='link'>
              <h6>Cinema</h6>
            </Link>
            <Link className='link'>
              <h6>Food</h6>
            </Link>
            <span>Brian</span>
            <span>Logout</span>
            <span className="writer">
              <Link className="link" to="/write">Write</Link>
            </span>

            </div>

        </div>
    </div>
  )
}

export default NavBar