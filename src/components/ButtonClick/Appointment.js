import React from 'react'
// import "./../../assets/css/app.min.css" ;
// import   "./../../assets/css/bootstrap.min.css";
import { FaHospital } from "react-icons/fa";

function appointment() {
  return (
    <div className='Background'>
      <div className="auth-page-wrapper pt-5">
        
        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
            <div className="bg-overlay"></div>

            <div className="shape"> 

            </div>
        </div>

        
        <div className="auth-page-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center mt-sm-5 mb-4 text-white-50">
                            <div>
                                <a href="index-2.html" className="d-inline-block auth-logo">
                                <h1 className="text-danger">SecureLife Hospital Ltd </h1>
                                <div className='danger'> <FaHospital size="2em" />
                                </div>
                             
                               
                                   </a>
                            </div>
                           
                        </div>
                    </div>
                </div>
                

                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card mt-4">

                            <div className="card-body p-4">
                                <div >
                                    <h5 className="text-primary">MAKE AN APPOINTMENT</h5>
                                 
                                </div>
                                <div className="p-2 mt-4">
                                    <form>

                                        <div className="mb-3">
                                          <label className="form-label" for="password-input">Patient Name</label>
                                       <input type=" text" placeholder='Enter your Name' id='password-input'/>
                                        </div>
                                        <div className="mb-3">
                                         <label className="form-label" for="password-email">Email</label>
                                         <input type=" text" placeholder='Enter your Email' id='password-email'/>
                                        </div>
                                        <div className="mb-3">
                                         <label className="form-label" for="password-birth">Date of birth </label>
                                     <input type="date" placeholder='Enter your Date of birth' id='password-birth'></input>
                                        </div>
                                        <div className="mb-3">
                                         <label className="form-label" for="password-phone"> Phone Number</label>
                                           <input type="tel" placeholder='Enter your Phone Number' id='password-phone'></input>
                                        </div>
                                        <div className="mb-3">
                                         <label className="form-label" for="password-date"> Appointment Date </label>
                                         <input type="date" placeholder='Enter your Appointment Date' id='password-date'></input>
                                        </div>
                                        {/* <div className="mb-3"
                                          Appointment Time <input type="text" placeholder='Enter your Appointment Time'></input>
                                        </div> */}
                                        <div className="mt-4">
                                            <button className="btn btn-success w-100" type="submit" >Book</button>
                                        </div>
                                     </form>

                            
                                        
                                           
                                        </div>

                           
                      

                             
                            </div>
                            
                        </div>
                        

                        

                    </div>
                </div>
                
            </div>
            
        </div>
        

        
    
        
    </div>

    </div>
  )
}

export default appointment
