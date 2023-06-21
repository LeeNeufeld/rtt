import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "../components/Map";
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
            <ul style={{ listStyleType: "none" }} className="ml-n3 p-3">
              <li className="text3">
                <MdPhonelinkRing /> <a href="tel:8252500618">825-250-0618</a>
              </li>
              <li className="text3">
                <MdEmail />{" "}
                <a href="mailto:hello@WildRoseTherapyServices.com">
                  hello@WildRoseTherapyServices.com
                </a>
              </li>
              <li className="text3">
                <MdBusiness />{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.ca/maps/place/5010+Richard+Rd+SW+%23250,+Calgary,+AB+T3E+6L1/@51.0092625,-114.1306256,17z/data=!3m1!4b1!4m5!3m4!1s0x537171ea950c0acf:0x773094f42cbe1e62!8m2!3d51.0092591!4d-114.1284369"
                >
                  #250, 5010 Richard Road SW Calgary, Alberta T3E 6L1
                </a>
              </li>
              <li className="text3">
                <MdWifi /> <a href="/">www.wildrosetherapyservices.com</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center p-3">
          <h3>Please click the link to book an appointment</h3>
        </Row>
        <Row className="d-flex justify-content-center p-3">
          <a
            target="_blank"
            rel="noreferrer"
            href="http://RoseThatcherTherapy.janeapp.com"
          >
            <h4> ** Book an appointment here ** </h4>
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
