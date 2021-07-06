import React from "react";
import { Container, Row } from "react-bootstrap";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";

//  TODO: -get map png, build email form

function ContactUs() {
  return (
    <div className="contactBG">
      <Container>
        <Row xs="12" className="d-flex justify-content-center pt-5">
          <h1>Contact Us</h1>
        </Row>
        <Row>
          Telephone: 825-250-0618 Email: rose.thatcher.therapy@gmail.com Office:
          #250, 5010 Richard Road SW Calgary, Alberta T3E 6L1 Web:
          www.RoseThatcherTherapy.com
        </Row>

        <Map />

        <ContactForm />
      </Container>
    </div>
  );
}

export default ContactUs;
