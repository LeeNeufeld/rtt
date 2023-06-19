import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdPhonelinkRing, MdBusiness, MdEmail } from "react-icons/md";
function Footer() {
  return (
    <footer className="main-footer">
      <Container className=" d-flex justify-content-center">
        <Row xs="12" className="m-3">
          <Col xs="12" lg="4">
            <MdPhonelinkRing
              size="15pt"
              fill="rgba(0,0,0,.5)"
              className="mb-2"
            />
            <a
              href="tel:8252500618"
              style={{ color: "rgba(0,0,0,.5)" }}
              className="ml-2"
            >
              825-250-0618
            </a>
          </Col>
          <Col xs="12" lg="4">
            <MdBusiness size="15pt" fill="rgba(0,0,0,.5)" className="mb-2" />
            <a
              className="ml-2 text-wrap text-left"
              style={{ maxWidth: "220px", color: "rgba(0,0,0,.5)" }}
              href="/contactus"
            >
              #250, 5010 Richard Road SW Calgary, Alberta T3E 6L1
            </a>
          </Col>
          <Col xs="12" lg="4">
            <MdEmail size="15pt" fill="rgba(0,0,0,.5)" />
            <a
              className="ml-1 text-wrap text-left"
              style={{ color: "rgba(0,0,0,.5)" }}
              href="/contactus"
            >
              hello@WildRoseTherapyServices.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
