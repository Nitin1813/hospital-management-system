import React from 'react'

function Logoutcover() {
  return (
    <div>
       <div class="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div class="bg-overlay"></div>
       
        <div class="auth-page-content overflow-hidden pt-lg-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card overflow-hidden">
                            <div class="row justify-content-center g-0">
                                <div class="col-lg-6">
                                    <div class="p-lg-5 p-4 auth-one-bg h-100">
                                        <div class="bg-overlay"></div>
                                        <div class="position-relative h-100 d-flex flex-column">
                                            <div class="mb-4">
                                                <a href="index-2.html" class="d-block">
                                                <h1 className="text-white ">SecureLife Hospital Ltd </h1>
                          </a>
                        </div>
                        <div className="mt-auto">
                          <div className="mb-3">
                            <i
                              className="ri-double-quotes-l display-4 text-success"
                            ></i>
                          </div>

                          <div
                            id="qoutescarouselIndicators"
                            className="carousel slide"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-indicators">
                              <button
                                type="button"
                                data-bs-target="#qoutescarouselIndicators"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#qoutescarouselIndicators"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#qoutescarouselIndicators"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                              ></button>
                            </div>
                            <div
                              className="carousel-inner text-center text-white-50 pb-5"
                            >
                              <div className="carousel-item active">
                                <p className="fs-15 fst-italic" >
                                Your Health is our First Priority.
                                </p>
                              </div>
                              <div className="carousel-item">
                                <p className="fs-15 fst-italic">
                                 Better Care and Better Understanding.
                                </p>
                              </div>
                              <div className="carousel-item">
                                <p className="fs-15 fst-italic">
                                  Caring is Our Calling.
                                </p>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              

                                <div class="col-lg-6">
                                    <div class="p-lg-5 p-4 text-center">
                                        <lord-icon src="https://cdn.lordicon.com/hzomhqxz.json" trigger="loop" colors="primary:#405189,secondary:#08a88a" style="width:180px;height:180px"></lord-icon>

                                        <div class="mt-4 pt-2">
                                            <h5>You are Logged Out</h5>
                                            <p class="text-muted">Thank you for using <span class="fw-semibold">SecureLife</span> admin template</p>
                                            <div class="mt-4">
                                                <a href="auth-signin-basic.html" class="btn btn-success w-100">Sign In</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             
                            </div>
                           
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

export default Logoutcover;
