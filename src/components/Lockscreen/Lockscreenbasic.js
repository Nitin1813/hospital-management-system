import React from 'react'
import { FaHospital } from "react-icons/fa";

function Lockscreenbasic() {
  return (
    <div>
      <div class="auth-page-wrapper pt-5">
      
        <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
            <div class="bg-overlay"></div>

            {/* <div class="shape">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                    <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                </svg>
            </div> */}
        </div>

      
        <div class="auth-page-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center mt-sm-5 mb-4 text-white-50">
                            <div>
                                <a href="index-2.html" class="d-inline-block auth-logo">
                                <h1 className="name ">SecureLife Hospital Ltd </h1>
                                <div className='icon'> <FaHospital size="2em" /> </div>
                                </a>
                            </div>
                            <p class="mt-3 fs-15 fw-medium">Your Health is our First Priority.</p>
                        </div>
                    </div>
                </div>
              

                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card mt-4">

                            <div class="card-body p-4">
                                <div class="text-center mt-2">
                                    <h5 class="text-primary">Lock Screen</h5>
                                    <p class="text-muted">Enter your password to unlock the screen!</p>
                                </div>
                                <div class="user-thumb text-center">
                                    <img src="assets/images/users/avatar-1.jpg" class="rounded-circle img-thumbnail avatar-lg" alt="thumbnail"/>
                                    <h5 class="font-size-15 mt-3">Anna Adame</h5>
                                </div>
                                <div class="p-2 mt-4">
                                    <form>
                                        <div class="mb-3">
                                            <label class="form-label" for="userpassword">Password</label>
                                            <input type="password" class="form-control" id="userpassword" placeholder="Enter password" required/>
                                        </div>
                                        <div class="mb-2 mt-4">
                                            <button class="btn btn-success w-100" type="submit">Unlock</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                          
                        </div>
                       

                        <div class="mt-4 text-center">
                            <p class="mb-0">Not you ? return <a href="auth-signin-basic.html" class="fw-semibold text-primary text-decoration-underline"> Signin </a> </p>
                        </div>

                    </div>
                </div>
               
            </div>
           
        </div>
        
      
        <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <p className="mb-0">
                                &copy;
                                <script>
                                    document.write(new Date().getFullYear());
                                </script>
                                SecureLife. Crafted with
                                <i className="mdi mdi-heart text-danger"></i> by Hospital
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
        
    </div>
    </div>
  )
}

export default Lockscreenbasic
