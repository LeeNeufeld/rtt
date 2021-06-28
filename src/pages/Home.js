import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import RTTLogoT from "../images/RTTLogoT.png";

function Home() {
  return (
    <div className="homeBG">
      <Container>
        <Row xs="12" className="d-flex justify-content-center">
          <img className="img-fluid" alt="Responsive image" src={RTTLogoT} />
        </Row>
        <h2 className="d-flex justify-content-center">Welcome!</h2>
        <Row className="d-flex justify-content-center text pr-3 pl-3">
          Inhale relief, exhale troubling thoughts, improved mental health
          happens one calm breath at a time.
        </Row>
        <h2 className="d-flex justify-content-center mt-4">Mission</h2>
        <Row className="d-flex justify-content-center text pr-3 pl-3">
          Therapy is safe space where people can show up as they are, find
          relief from judgment and expect an attentive and empathetic presence.
          At Rose Thatcher Therapy, you will find a waiting sounding board in
          which to share your troubles, encouragement in your reflection and a
          respectful therapist to help make sense of what may feel overwhelming.
          An authentic therapeutic alliance is at the heart of every successful
          relationship; together let’s step into vulnerability and work towards
          your best life.
        </Row>
        <h2 className="d-flex justify-content-center mt-4 ">Covid 19</h2>
        <Row className="d-flex justify-content-center text pb-3 pr-3 pl-3">
          To ensure we are doing our part to be health conscious while still
          offering excellent service, we are offering both virtual and in-person
          sessions. Cleaning protocols between sessions are being adhered to, as
          is creating social distance and masking. Our intention is to make you
          feel safe, relaxed in comfortable during session.
        </Row>
      </Container>
    </div>
  );
}

export default Home;
