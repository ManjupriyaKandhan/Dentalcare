import React, { useState } from 'react'
import tooth from '../images/tooth.png'
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {

    const[menu, setMenu]=useState("shop");

  return (
    <div>
        <div className='Navbar'>
            <div className='nav-logo'>
                <img src={tooth} alt='' />
                <p>SMILY BLOOM DENTAL CLINIC</p>
            </div>
            <ul className='nav-menu'>
              <Link to={'/'}>
                <li onClick={()=>{setMenu("home")}}>Home{menu==="home"?<hr/>:""}</li>
                </Link>

                <Link to={'/about'}>
                <li onClick={()=>{setMenu("about")}}>About Us{menu==="about"?<hr/>:""}</li>
                </Link>

                <Link to={'/services'}>
                <li onClick={()=>{setMenu("services")}}>Services{menu==="services"?<hr/>:""}</li>
                </Link>

                <Link to={'/Contact'}>
                <li onClick={()=>{setMenu("contact")}}>Contact{menu==="contact"?<hr/>:""}</li> 
                </Link>

            </ul>
           
    </div>
    </div>
  )
}

export default Navbar