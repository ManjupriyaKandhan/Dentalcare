import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';



 
 function Navbar() {

  const hamburger = document.querySelector('.hamburger');
  const Navbar = document.querySelector('ul');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('slide');
  });


   return (
    <nav className='nav'>
      <span>Blessy Dental Care</span>


      <ul className='items'>
      <Link to={'/'}>
        <li><a href='#'>Home</a></li>
        </Link>

        <Link to={'/about'}>

        <li><a href='#'>about</a></li>
        </Link>

        <Link to={'/services'}>
        <li><a href='#'>Services</a></li>
        </Link>

        <Link to={'/contact'}>
        <li><a href='#'>Contact</a></li>
        </Link>
      </ul>


      <div className='hamburger'>
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>  
      </div>


      </nav>
   )
 }
 
 export default Navbar               