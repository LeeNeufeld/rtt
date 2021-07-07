import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";
import { MdPhonelinkRing, MdBusiness, MdWifi, MdEmail } from "react-icons/md";

function ContactUs() {
  return (
    <div className="contactBG">
      <Container>
        <Row xs="12" className="d-flex justify-content-center pt-5">
          <h1>Contact Us</h1>
        </Row>
        <Row className="p-1">
          <Col className="d-flex justify-content-end" xs="12" sm="12" md="6">
            <Map />
          </Col>
          <Col
            className="d-flex justify-content-start pt-3"
            xs="12"
            sm="12"
            md="6"
          >
            <ul style={{ listStyleType: "none" }} className="ml-n4">
              <li className="text3">
                <MdPhonelinkRing /> 825-250-0618
              </li>
              <li className="text3">
                <MdEmail /> rose.thatcher.therapy@gmail.com
              </li>
              <li className="text3">
                <MdBusiness /> #250, 5010 Richard Road SW Calgary, Alberta T3E
                6L1
              </li>
              <li className="text3">
                <MdWifi /> www.RoseThatcherTherapy.com
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center p-3">
          <ContactForm />
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
