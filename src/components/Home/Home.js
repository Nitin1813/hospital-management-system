// import React, { Component } from 'react'
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../photos/slide1.jpg';
import img2 from '../../photos/slide2.jpg';
import img3 from '../../photos/slide3.jpg';

import OurDoctors from '../OurDoctors';
import HomeQuote from '../HomeQuote'; 
import Navbar from '../Navbar/Navbar'
import Mission from '../Mission';
import Footer from '../Footer'
import Btn from '../Btns/Btn';
import  Gallerycarouse from '../Gallerycarousel';
// import Appointment  from "../ButtonClick/Appointment";



function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
function appoint () {
<a href =".././ButtonClick/appointment " ></a>
  }
  
  return (
    <div>
  
    
            <div>
              <Carousel activeIndex={index} onSelect={handleSelect} >
             
                <Carousel.Item>
               
                  <img height={650} width={1520}  src={img1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img height={650} width={1520} src={img2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img height={650} width={1520} src={img3} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
        
            
          
           <div className="Top">
            
                <h1 className="font-weight-bold text-danger">SecureLife Hospital </h1>
                <h5> FEEL THE DIFFERENCE WITH US </h5>
                <h1>Your Health  Is Our Priority</h1>
                <Button variant="danger"  onClick ={appoint} >Get Appointment</Button>{' '}
                <Button variant="outline-danger">Learn More</Button>{' '}
                
                </div>
                </div>
            <Navbar/>
     <div>
                <Btn></Btn>
                <Mission/>
                {/* <Appointment></Appointment> */}
              
      <div>
                <HomeQuote/>
                
               
              <Footer></Footer>
              </div>
              </div>      
         
  
         
    </div>

         
    );
  }


export default Home;

