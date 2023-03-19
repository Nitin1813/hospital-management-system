import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

import "./btn.css";
// import { FaHeartbeat } from "@react-icons/all-files/fa/FaBeer";

import { BsFileEarmarkTextFill } from 'react-icons/bs';
import { FaSmileBeam } from 'react-icons/fa';
import { FaHeartbeat } from 'react-icons/fa';
import { ImEarth } from 'react-icons/im';
import { FaHospitalUser } from 'react-icons/fa';
import { MdAddIcCall } from 'react-icons/md';
import PatientLogin from '../Login/PatientLogin'
import Home from "../Home/Home";

function SizesExample() {
  const [login, setLogin] = useState(false);
  
//  function setButton() {
//     console.log("goToDashboard")
//     constructor() {
//     super()
   
//     this.state = {
//         buttonId: null
//         }
//         this.setButton = this.setButton.bind(this);

//      }
//      this.setButton(id){
//       this.setState({buttonId: id});

//      }
//      render(){
//       if(this.state.buttonId == 1){
//         <patientLogin></patientLogin>
//       }
//       else {
//         <Home>

//         </Home>
//       }
//      }
//     }
   
   
      
    
  
  return (
    <div>
      <div className="buttons">
        <Button  size="lg" onClick={()=>setLogin(true) } >
        <BsFileEarmarkTextFill/> Lab Report{login ? <PatientLogin /> : null}
        </Button>{' '}
        <Button  size="lg">
          <FaHeartbeat/> Health Checkup
        </Button>{' '}
        <Button  size="lg">
        <FaSmileBeam/> Patient Testimonials
        </Button>{' '}
        <Button  size="lg">
          <ImEarth/> International Patients
        </Button>{' '}
        <Button  size="lg">
          <FaHospitalUser/> Find a Doctor
        </Button>{' '}
        <Button  size="lg">
         < MdAddIcCall/> Emergency Help
        </Button>{' '}
        </div>
        {/* <FaHeartbeat /> */}
        
        </div>

        );
  
}

export default SizesExample;