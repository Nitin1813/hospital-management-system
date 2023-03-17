// import React, { Component } from 'react';
// import Card from 'react-bootstrap/Card';
// class HomeQuote extends Component {
    
//     render() { 
//         return ( 
//             <di className="container">
//                 <div className="row">
//                     <div className = "col-md-3 ml-5 mr-5 mb-1">
                    
//                     <Card bg="primary" text="white" style={{ width: '18rem' }}>
//                     <Card.Header></Card.Header>
//                     <Card.Body>
//                       <Card.Title></Card.Title>
//                       <Card.Text className = "text-white">
                       

//                       </Card.Text>
//                       <br/>
//                     </Card.Body>
//                   </Card>
//                     </div>
//                     <div className = "col-md-3 ml-3 mr-3">
//                     <Card bg="success" text="white" style={{ width: '18rem' }}>
//                     <Card.Header></Card.Header>
//                     <Card.Body>
//                       <Card.Title>Awarded to be Best Hospital in Kolkata</Card.Title>
//                       <Card.Text>
//                         We are overwhelmed by the support our patients provide us and 
//                         you made us the best in Kolkata!
//                       </Card.Text>
//                     </Card.Body>
//                   </Card>
//                     </div>
//                     <div className = "col-md-3 ml-3 mr-2">
//                     <Card bg="warning" text="white" style={{ width: '18rem' }}>
//                     <Card.Header>RnD Update</Card.Header>
//                     <Card.Body>
//                       <Card.Title>Medicinal Contribution</Card.Title>
//                       <Card.Text>
//                         Researcher Dr. Subhashish Karmakar found a new cure for microbes
//                         growing on skin.
//                         <br/>
//                         <br/>
//                       </Card.Text>
//                     </Card.Body>
//                   </Card>
//                   <br />
//                     </div>
//                 </div>


//                


import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import award from '../photos/award.jpg';
import lab from '../photos/lab.jpg';
import blood from '../photos/blood.jpg';

function GroupExample() {
  return (
    <div>
    <h1 className="text-black" align="center">News and Achievements</h1>
             
    <CardGroup >
     
      <Card  >
        <Card.Img variant="top" src={lab} height={250} width={200} />
        <Card.Body>
          <Card.Title>New Section Added</Card.Title>
          <Card.Text>
          The clinical laboratory in a hospital runs tests on patients that pertain to the diagnosis, prevention and treatment of diseases. Although the laboratory is within the hospital, it generally does other testing aside from tests conducted for the hospital. Other clinics, private practice doctors and medical facilities will send their clinical specimens to hospitals for analysis.
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card>
        <Card.Img variant="top" src={award} height={250} width={200} />
        <Card.Body>
          <Card.Title>Most Preferred Workplace Award</Card.Title>
          <Card.Text>
          SecureLife Hospital, Gaziabad has received the Most Preferred Workplace award in the category of health and wellness. The awards were given by Team Marksmen after an industry-wide consumer study conducted by Allegiant Market Research.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={blood} height={250} width={200} />
        <Card.Body>
          <Card.Title>Blood Donation Drive, June 2022</Card.Title>
          <Card.Text>

Blood Donation Drive was organized on the 13th and 14th June by SecureLife Hospital, Sector 8, Faridabad. We are truly grateful for the overwhelming response from our donors. A blood service that gives patients access to safe blood and blood products in sufficient quantity is a key component of an effective health system. The global theme of World Blood Donor Day changes each year in recognition of the selfless individuals who donate their blood for people unknown to them.
          </Card.Text>
        </Card.Body>
      
      </Card>
    </CardGroup>
    </div>
  );
}

export default GroupExample;