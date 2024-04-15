import React from 'react'

function Contact() {
    return (

        <div class="container w-50 mt-5 mx-5">
            <h3>Contact Us</h3>
            <div class="row">
                <div class="col-6">
                    <div class="mb-3">
                        <label class="form-label">First name<sup class="text-danger fs-5">*</sup></label>
                        <input type="text" class="form-control" />
                    </div>

                </div>
                <div class="col-6">
                    <div class="mb-3">
                        <label class="form-label">Last name<sup class="text-danger fs-5">*</sup></label>
                        <input type="text" class="form-control" />
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label">Email<sup class="text-danger fs-5">*</sup></label>
                    <input type="email" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Phone number</label>
                    <input type="number" class="form-control" />
                </div>

                <div class="mb-3">
                    <label class="form-label">Comments and Questions</label>
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                </div>
                <div class="mb-3">
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>

                <div className=' container mt-5'>
                    <h5>OUR CONTACT</h5>
                    <h2>Get In Touch</h2>
                    <p>We thank you for allowing us to take care of your dental needs and look forward to serving you.
                        Make an appointment today.</p>

                    <div className='row'>
                        <div className='col-6'>
                            <div class="card" style={{ width: "18rem" }}>
                                <div class="card-body">
                                    <h5 class="card-title"><i class="fa fa-phone" aria-hidden="true"></i> QUICK CONTACT</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Feel free to contact us</h6>
                                    <p class="card-text"> +919500255132</p>
                                    <p class="card-text">smilybloomdentalcare.org</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="card" style={{ width: "18rem" }}>
                                <div class="card-body">
                                    <h5 class="card-title"><i class="fa fa-map-marker" aria-hidden="true"></i> OUR ADDRESS</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">SMILY BLOOM DENTAL CLINIC</h6>
                                    <p class="card-text">No.78, 46th cross street</p>
                                    <p class="card-text">Thiruvalluvar Road, Behind Pantaloons</p>
                                    <p class="card-text">Thiruvanmiyur, Chennai-41</p>
                                    
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>




    )
}

export default Contact