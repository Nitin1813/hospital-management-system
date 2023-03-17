import React, { Component } from 'react';

class Mission extends Component {
    
    render() { 
        return ( 
            <div floating style={{ backgroundColor: 'black' }}>
            <h1 className="text-white" align="center">Our Vision and Mission Statements</h1>
            <br/>
            <p className="text-white container">
            The Mission of SecureLife Hospital is to provide compassionate, accessible, high quality, 
            cost effective healthcare to the community; to promote health; to educate healthcare professionals; 
            and to participate in appropriate clinical research.
            </p>
            
            <p className = "text-white container">
            SecureLife Hospital will be an innovative, leading regional health system dedicated to advancing the 
            health and transforming the lives of the people we serve through excellent clinical quality;
            
            </p>
            
            </div> );
    }
}
 
export default Mission;