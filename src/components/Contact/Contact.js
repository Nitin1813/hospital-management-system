import React, { Component } from "react";
import "./Contact.css";
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer";
// import Homeimage from "../Homeimage";

class Contact extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Navbar />
        <div className="md-5">
          {/* <Homeimage /> */}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
