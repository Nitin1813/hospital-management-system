import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

import GalleryCarousel from '../Gallerycarousel';


class Gallery extends Component {
    
   
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
 
export default Gallery;