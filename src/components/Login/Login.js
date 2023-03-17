 import React from 'react';
 import "./../../assets/css/app.min.css" ;
 import   "./../../assets/css/bootstrap.min.css";
 import { FaHospital } from "react-icons/fa";
 import {  AiOutlineMinus } from "react-icons/ai";

 import "./Login.css";
 

export default function Login() {
const loged = () => {

}

    return (
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
                                <h1 className="name ">SecureLife Hospital Ltd </h1>
                                <div className='icon'> <FaHospital size="2em" />
                                </div>
                             
                               
                                   </a>
                            </div>
                            <p className="mt-3 fs-15 fw-medium">Your Health is our First Priority.</p>
                        </div>
                    </div>
                </div>
                

                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card mt-4">

                            <div className="card-body p-4">
                                <div className="text-center mt-2">
                                    <h5 className="text-primary">Create New Account</h5>
                                    <p className="text-muted">Get your free Registration now.</p>
                                </div>
                                <div className="p-2 mt-4">
                                    <form className="needs-validation"  action="https://themesbrand.com/velzon/html/default/index.html">

                                        <div className="mb-3">
                                            <label for="useremail" className="form-label">Email <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="useremail" placeholder="Enter email address" required />
                                            <div className="invalid-feedback">
                                                Please enter email
                                            </div>
                                        </div>
                                       

                                        <div className="mb-3">
                                            <label className="form-label" for="password-input">Password</label>
                                            <div className="position-relative auth-pass-inputgroup">
                                                <input type="password" className="form-control pe-5 password-input"  placeholder="Enter password" id="password-input" aria-describedby="passwordInput" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                                <div className="invalid-feedback">
                                                    Please enter password
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="auth-remember-check"
                            />
                            <label
                              className="form-check-label"
                              for="auth-remember-check"
                              >Remember me</label
                            >
                          </div>

                                     

                                    
                                        <div className="mt-4">
                                            <button className="btn btn-success w-100" type="submit" >Sign Up</button>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <div className="signin-other-title">
                                                <h5 className="fs-13 mb-4 title text-muted">Create account with Us</h5>
                                            </div>
                            <div>
                              <button
                                type="button"
                                className="btn btn-primary btn-icon waves-effect waves-light"
                              >
                                <i className="ri-facebook-fill fs-16"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger btn-icon waves-effect waves-light"
                              >
                                <i className="ri-google-fill fs-16"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-dark btn-icon waves-effect waves-light"
                              >
                                <i className="ri-github-fill fs-16"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-info btn-icon waves-effect waves-light"
                              >
                                <i className="ri-twitter-fill fs-16"></i>
                              </button>
                            </div>
                            <div className="mt-4 text-center">
                            <p className="mb-0">Already have an account ? <a href="auth-signin-basic.html" className="fw-semibold text-primary text-decoration-underline"> Signin </a> </p>
                        </div>   
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

);
}