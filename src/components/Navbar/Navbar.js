import React, { Component } from 'react';
import classnames from 'classnames'
import "./Navbar.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../photos/logo.jpg';




class Navber extends Component {

  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

    render() { 
        return ( 
            <div >
          
                <Navbar className={classnames("navbar", {
                    "navbar--hidden": !this.state.visible
                  })} bg="danger" text="blue" var expand="lg">
                <Navbar.Brand style={{color:"white"}}> <img className='logo' src={logo} alt="Third slide" ></img>  </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="link">
                    <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                    <Nav.Link className="nav-link" href="/about">About Us</Nav.Link>                    
                    <Nav.Link className="nav-link" href="/gallery">Gallery</Nav.Link>
                
                    {/* <NavDropdown title="Departmentns"  className="nav-dropdown">
                        <NavDropdown.Item href="/patient/login">Neurology Department</NavDropdown.Item>
                        <NavDropdown.Item href="/doctors/login">Cardiology Department</NavDropdown.Item>
                        <NavDropdown.Item href="/employee/login">Gynaecology Department</NavDropdown.Item>
                        <NavDropdown.Item href="/administrator/login">Orthopaedic Department</NavDropdown.Item>
                        <NavDropdown.Item href="/administrator/login">Eye Department</NavDropdown.Item>
                        <NavDropdown.Item href="/administrator/login">Laboratory Department</NavDropdown.Item>
                    </NavDropdown> */}
                   
                    <NavDropdown title="Login"  className="nav-dropdown" >
                        <NavDropdown.Item href="/patient/login">Patient Login</NavDropdown.Item>
                        <NavDropdown.Item href="/doctors/login">Doctor Login</NavDropdown.Item>
                        <NavDropdown.Item href="/employee/login">Employee Login</NavDropdown.Item>
                        <NavDropdown.Item href="/administrator/login">Admin Login</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="nav-link" href="/regPatient"> Contact Us</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
                </Navbar>
             
            </div>
        );
    }
}
 
export default Navber;