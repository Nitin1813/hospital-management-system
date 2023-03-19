// import React, { Component } from 'react'
import "./Template.css";
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



function Template() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
function appoint () {
<a href =".././ButtonClick/appointment " ></a>
  }
  
  return (
    <div>
  
  <Navbar/>
          
            
     <div>
             
              
      <div>
               
                
               
              <Footer></Footer>
              </div>
              </div>      
         
  
         
    </div>

         
    );
  }


export default Template;

