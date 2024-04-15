import React from 'react'
import source1 from '../images/source1.jpg';
import source2 from '../images/source2.png';
import source3 from '../images/source3.png'
import source4 from '../images/source4.png';
import source5 from '../images/source5.jpeg';
import source6 from '../images/source6.png';
import './services.css'

function Services() {
  return (
   
    <div className='container'>
        <h1 className='mt-5'>Full Range of Services</h1>
        <p className='paraa mt-4'>As a first stop provider of a wide range of dental services, you can be assured that you will
             not be referred from 1 doctor to another with no end in mind.</p>
             <p className='paraa'>Below are some of the services we provide:</p>

             <div className='container'>
                <div className='row'>
                    <div className='col-4 column'>
                        <img src={source1} className='src' alt=''/>
                        <h3>Preventive</h3>
                        <ul className='desc'>
                            <li>Regular Scaling and Polishing</li>
                            <li>Dedicated Scaling and Polishing </li>
                            <li>Heavy Stains Removal</li>
                            <li>Regular Scaling and Polishing</li>
                            <li>Denture cleaning</li>
                        </ul>
                    </div>
                    
                    <div className='col-4'>
                        <img src={source2} className='src' alt=''/>
                        <h3>Restoration</h3>
                        <ul className='desc'>
                            <li>Tooth Coloured Fillings</li>
                            <li>Veneers, Crowns and Bridging</li>
                            <li>Dentures</li>
                            <li>Regular Scaling</li>
                            <li>Implants</li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <img src={source3}  className='src' alt=''/>
                        <h3>Pain Management</h3>
                        <ul className='desc'>
                            <li>Regular Scaling and Polishing</li>
                            <li>Dedicated Scaling and Polishing </li>
                            <li>Heavy Stains Removal</li>
                            <li>Regular Scaling and Polishing</li>
                            <li>Denture cleaning</li>
                        </ul>
                    </div>
                    <div className='col-4 mt-5'>
                        <img src={source4} className='src' alt=''/>
                        <h3>Teeth Whitening</h3>
                        <ul className='desc'>
                            <li>Customised Bleaching Kit</li>
                            <li>Dedicated Scaling and Polishing </li>
                            <li>Heavy Stains Removal</li>
                            <li>Regular Scaling and Polishing</li>
                            <li>Denture cleaning</li>
                        </ul>
                    </div>
                    <div className='col-4 mt-5'>
                        <img src={source5} className='src' alt=''/>
                        <h3>Surgical</h3>
                        <ul className='desc'>
                            <li>Wisdom teeth surgery and/or extraction</li>
                            <li>Impacted teeth surgery and/or extraction </li>
                            <li>Pre-prosthetic Surgery</li>
                            <li>Incision and Drainage</li>
                            <li>Painless surgery</li>
                        </ul>
                    </div>
                    <div className='col-4 mt-5'>
                        <img src={source6} className='src' alt=''/>
                        <h3>Digital Radiology</h3>
                        <ul className='desc'>
                            <li>Intra-oral xrays</li>
                            <li>Lateral Cephalometrics xrays </li>
                            <li>OPGs</li>
                            <li>Digital Polishing</li>
                            <li>Ultra-oral xrays</li>
                        </ul>
                    </div> 
                    

                </div>

             </div>
    </div>
  )
}

export default Services