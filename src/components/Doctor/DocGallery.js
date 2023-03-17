import React, { Component } from 'react';
import Navber from './DocNavbar';
import GalleryCarousel from '../Gallerycarousel';


class DocGallery extends Component {
    
   
    render() { 
        return ( 
        <div className="bg-dark">
            <Navber />

            <br>
            </br>
            <GalleryCarousel/>
            
            
</div>

);
    }
}
 
export default DocGallery;