import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Img1 from '../photos/ward.jpg';
import Img2 from '../photos/operation.jpg';
import Img3 from '../photos/surgery.jpg';
import Img4 from '../photos/special.jpg'
import Img5 from '../photos/emergency.jpg'
import Img6 from '../photos/scan.jpg'
// import Img3 from '../photos/gallery2.jpg';
// import Img4 from '../photos/gallery3.jpg';
// import Img5 from '../photos/gallery4.jpg';
// import Img6 from '../photos/gallery5.jpg';
// import Img7 from '../photos/gallery1.jpg';
// import Img8 from '../photos/gallery2.jpg';
// import Img9 from '../photos/gallery3.jpg';
// import Img10 from '../photos/gallery4.jpg';
import OurDoctors from './OurDoctors';
import Footer from './Footer';


class GalleryCarousel extends Component {
    
    render() { 
        return (
         <div>
         <h2 className="head text-white" align="center">Our Facilities</h2>
         <br>
         </br>
         <Carousel  style={{paddingLeft:50 ,paddingRight:50}}>
         <Carousel.Item  >
         <Card className="text-danger">
         <Card.Img src={Img1} alt="Card image" height="600" />
         <Card.ImgOverlay>
             <Card.Title ><h3>Ward Rooms</h3></Card.Title>
             
             
         </Card.ImgOverlay>
         </Card>
         </Carousel.Item>
         
         <Carousel.Item>
             <Card className="text-danger">
             <Card.Img src={Img2} alt="Card image" height="500" />
             <Card.ImgOverlay>
                 <Card.Title><h3>Operation Theater</h3></Card.Title>
                 
                 
             </Card.ImgOverlay>
             </Card>
         </Carousel.Item>

         <Carousel.Item>
             <Card className="text-danger">
             <Card.Img src={Img6} alt="Card image" height="500" />
             <Card.ImgOverlay>
                 <Card.Title><h3>CT Scan/ CAT Scan Center</h3></Card.Title>  
             </Card.ImgOverlay>
             </Card>
             </Carousel.Item>
             
         <Carousel.Item>

             <Card className="text-danger">
             <Card.Img src={Img4} alt="Card image" height="500" />
             <Card.ImgOverlay>
                 <Card.Title><h3>Special Care </h3></Card.Title>  
             </Card.ImgOverlay>
             </Card>
             </Carousel.Item>    
         <Carousel.Item>
             <Card className="text-danger">
             <Card.Img src={Img5} alt="Card image" height="500"/>
             <Card.ImgOverlay>
                 <Card.Title><h3>Emergency Room</h3></Card.Title>  
             </Card.ImgOverlay>
             </Card>
         </Carousel.Item>
         <Carousel.Item>
             <Card className="text-danger">
             <Card.Img src={Img3} alt="Card image" height="500"/>
             <Card.ImgOverlay>
                 <Card.Title className="text-danger"><h3>OT Specialized for Heart Surgery</h3></Card.Title>  
             </Card.ImgOverlay>
             </Card>
         </Carousel.Item>

         </Carousel>
         <br/>
         <br/>
         
        
         <h1 className="text-white" align="center">Our Doctors</h1>
         <br/>
         <OurDoctors/>
         <br/>
         <br/>
         <Footer/>

        </div> );
    }
}
 
export default GalleryCarousel;