import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import img1 from "../../photos/about.jpg";
import Carousel from "react-bootstrap/Carousel";

import { MDBContainer } from "mdbreact";

import "./About.css";
import Footer from "../Footer";

class About extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Navbar />

        <br />
        <div>
          <Carousel>
            <Carousel.Item>
              <img height={650} width={1520} src={img1} alt="First slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <Navbar />
        <br />

        <h1 className="head text-white" align="center">
          {" "}
         Overview{" "}
        </h1>
        <br />
        <br />

        <MDBContainer>
          <blockquote className="blockquote">
            <center>
              <p className="text-white">
                SecureLife Hospital, a unit of SecureLife Blind Relief Mission,
                is a multi-super specialty hospital located in the heart of
                Delhi. It has earned the reputation of being one of the finest
                institutions in the healthcare sector backed by a team of
                dedicated doctors. SecureLife Hospital is a society-based
                organization that is driven by the desire to serve humanity. Our
                commitment to the underprivileged has always been our primary
                focus. The hospital is very actively involved in charity based
                healthcare including free eye camps, blood Donation camps and
                Provide emergency services. SecureLife Hospital is the premier
                private healthcare provider of Eastern India, in Kolkata a
                state-of-the-art daycare centre on Southern Avenue in Kolkata,
                and another super specialty hospital at heart of Delhi. The
                Group takes care of around 3.5 lakh patients annually,
                conducting more than 15,000 successful surgeries, with a roster
                of more than 5,000 healthcare professionals. An impressive
                roster of more than 600 doctors and a well-trained force of
                nursing staff work tirelessly across hospital, backend by
                advanced technologies and latest equipment to treat people and
                save lives. With major changes and developments on its plate,
                the Lifescape Hospital Group is headed towards a path of steady
                growth. LifeScape Hospitals is all set to add around 700 beds in
                the near future.
                <br></br>
                <br></br>
                Lifescape Hospital brings to the table a class of its own,
                making the healthcare group a major player in keeping Eastern
                India ahead of the curve. The Group treats more than 3.5 lakh
                people every year and conducts around 15,000 surgeries annually,
                providing value-for-money services. The hallmark of Landscape
                Hospitals is a committed team of doctors and caregivers, who
                take up the challenge of treating the most complicated cases,
                besides stepping up to handle Emergency and Critical Care with
                dedication, expertise and compassion. Over the last three
                decades, the healthcare Group has made immense contributions to
                the lives of people, not just from Kolkata and the rest of
                Eastern India, but also from other parts of South Asia and the
                world.
              </p>
            </center>
          </blockquote>
        </MDBContainer>

        <br></br>
        <Footer />
      </div>
    );
  }
}

export default About;
