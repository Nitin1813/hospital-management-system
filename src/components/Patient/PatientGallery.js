import React, { Component } from 'react';
import Navbar from './PatientNavbar';
import GalleryCarousel from '../Gallerycarousel';


class PatientGallery extends Component {
    
   
    render() { 
        return ( 
        <div className="bg-dark">
            <Navbar />

            <br>
            </br>
            <GalleryCarousel/>
            
            
</div>

);
    }
}
 
export default PatientGallery;