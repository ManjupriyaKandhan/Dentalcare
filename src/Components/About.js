import React from 'react'
import './about.css'

import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide 3.jpg'
import slide4 from '../images/slide4.jpg'
import slide5 from '../images/slide5.jpg'


function About() {
  return (
    <div>
    <h2 className='stylee text-center mt-5'>About Us</h2>
    <h4 className='stylle text-center'>Why choose Us</h4>
    <p className='paraa mt-4'>We have the excellence to deliver the care that our patients need, and the integrity to only 
    prescribe the care they need. With us, visiting the dentist should be a walk in the park: a safe and comfortable experience. Dental Care offers comprehensive dental solutions under one roof, including cosmetic dentistry, orthodontic braces, full-mouth rehabilitation, a smile makeover, implants, and pain-free root canal treatment. This type of treatment is made easier 
    with the assistance of highly experienced and skilled doctors.</p>

<p  className='paraa'>We believe in providing options for our patients to choose from because we are in the 
    business of care, not sales. Our patients can be assured that their welfare will never be compromised with us. ental Care seeks to provide comprehensive, all-encompassing, functionally and aesthetically motivated dental care that is 
    outcome-centred and outcome-driven</p>

<p className='paraa'>Thereby with this culture of consideration for our patients, we seek to foster a relationship of
     trust and naturally eliminate any fears of visiting a dentist.</p>


    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={slide1} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={slide2} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={slide3} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={slide4} class="d-block w-100" alt="..."/>
      </div><div class="carousel-item">
        <img src={slide5} class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>
    </div>
    
    
    
        
    
  )
}

export default About
