import React from 'react'
import child from '../images/child.jpg'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='wholepart'>

    <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
            <h5 className='para1 mt-4'>WELCOME TO SMILY BLOOM DENTAL CARE</h5>
            <h1 className='para2 mt-3'>Best Dental Care In Chennai</h1>
            <p className='mt-4'>We combine the resources of the greatest dentists in town with the most cutting-edge technology 
                to provide you with the highest-quality results.</p>
                <p>We seek to instill confidence, happiness, and optimism in our patients. Better teeth, better health!</p>
                <Link to={'/contact'}>
          <button type="button" class="btn btn-primary">Book Appointment</button>
          </Link>


                </div>
                <div className='col-6'>
                    <img src={child} alt=''/>
                </div>
            </div>

    </div>
    </div>
  )
}

export default Home
