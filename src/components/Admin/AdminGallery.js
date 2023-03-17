import React, { Component } from 'react';
import Navber from './AdminNavbar';
import GalleryCarousel from '.././Gallerycarousel';


class AdminGallery extends Component {
    
   
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
 
export default AdminGallery;