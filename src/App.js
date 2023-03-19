import React from 'react';
import  ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About  from './components/About/About';
import Gallery from './components/Gallery/Gallery'
import PatientLogin from './components/Login/PatientLogin'

 import PatientHome from './components/Patient/PatientHome'
import PatHome from './components/Patient/PatHome'
 import PatientAbout from './components/Patient/PatientAbout'
import PatientGallery from './components/Patient/PatientGallery'
 import PatientContact from './components/Patient/PatientContact'

import DoctorLogin from './components/Login/DoctorLogin'




import Doctor from './components/Doctor/Doctor'
import DocGallery from './components/Doctor/DocGallery'
import Employee from './components/Employee/Employee'


import DocHome from './components/Doctor/DocHome';
import EmpHome from './components/Employee/EmpHome';
import EmpAbout from './components/Employee/EmpAbout';
import EmpGallery from './components/Employee/EmpGallery';
import EmpContact from './components/Employee/EmpContact';

import DocAbout from './components/Doctor/DocAbout';
import DocContact from './components/Doctor/DocContact';



import EmployeeLogin from './components/Login/EmployeeLogin'
import AdministratorLogin from './components/Login/AdministratorLogin'

 import Admin from './components/Admin/Admin'
import AdHome from './components/Admin/AdHome'
 import AdminAbout from './components/Admin/AdminAbout'
import AdminGallery from './components/Admin/AdminGallery';
 import AdminContact from './components/Admin/AdminContact';
import Contact from './components/Contact/Contact'
import PatientReg from './components/PatientReg/PatientReg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Template from './components/Template/Template'




function App() {
    return (
      <div className="App">
        <Template >

        <Router>
     
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About } />
     <Route exact path="/gallery" component={Gallery} />
   <Route exact path="/patient/login" component={PatientLogin} />

   <Route exact path="/patient/login/patient_home" component = {PatientHome} />
    <Route exact path="/patient/login/home" component = {PatHome} />
    <Route exact path="/patient/login/about" component = {PatientAbout} />
    <Route exact path="/patient/login/gallery" component = {PatientGallery} />
    <Route exact path="/patient/login/contact" component = {PatientContact} />

     <Route exact path="/doctors/login" component={DoctorLogin} />
     
         <Route exact path="/doctors/login/doctor_home" component = {Doctor} />
     <Route exact path="/doctors/login/home" component = {DocHome} />
    <Route exact path="/doctors/login/about" component = {DocAbout}/>
     <Route exact path="/doctors/login/gallery" component = {DocGallery}/>
     <Route exact path="/doctors/login/contact" component = {DocContact}/>

   <Route exact path="/employee/login" component={EmployeeLogin} />
   
     <Route exact path="/employee/login/employee_home" component = {Employee} />
     <Route exact path="/employee/login/home" component = {EmpHome}/>
     <Route exact path="/employee/login/about" component = {EmpAbout}/>
     <Route exact path="/employee/login/gallery" component = {EmpGallery}/>
     <Route exact path="/employee/login/contact" component = {EmpContact}/>

    <Route exact path="/administrator/login" component={AdministratorLogin} />

    <Route exact path="/administrator/login/admin_home" component = {Admin} />
    <Route exact path="/administrator/login/home" component = {AdHome}/>
   <Route exact path="/administrator/login/about" component = {AdminAbout}/>
   <Route exact path="/administrator/login/gallery" component = {AdminGallery}/>
   <Route exact path="/administrator/login/contact" component = {AdminContact}/>

    <Route exact path="/contact" component={Contact} />
    <Route exact path="/regPatient" component ={PatientReg}/>
   </Router>
    
        </Template>
      


 </div>
    );
}
export default App;
