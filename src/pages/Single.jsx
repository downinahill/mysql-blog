import React, { useState } from 'react'
import Delete from '../img/delete.jpeg'
import Edit from '../img/edit.png'
import { Link }  from 'react-router-dom'
import DOMPurify from "dompurify";
import Menu from '../components/Menu';



const Single = () => {
  const [post, setPost] = useState({});


  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="" />

      
      <div className="content">
        <img src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="" />

      
      <div className="info">
        <span>Brian</span>
        <p>Posted 2 days ago</p>
        
        </div>
        <div className="edit">
          <Link to={'/write?edit=2'}>
          <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" />
        </div>
        </div>
        <h1>asdfasdgfasg</h1>
        <p   dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
          ></p>
      </div>
      <div className="menu"></div>
          <Menu />
    </div>
  )
}

export default Single