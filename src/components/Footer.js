import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdPhonelinkRing, MdBusiness } from "react-icons/md";
function Footer() {
  return (
    <footer className="main-footer">
      <Container className=" d-flex justify-content-center">
        <Row xs="12">
          <Col xs="12" md="6">
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
          <Col xs="12" md="6">
            <MdBusiness size="15pt" fill="rgba(0,0,0,.5)" className="mb-2" />
            <a
              className="ml-2 text-wrap text-left"
              style={{ maxWidth: "220px", color: "rgba(0,0,0,.5)" }}
              href="/contactus"
            >
              #250, 5010 Richard Road SW Calgary, Alberta T3E 6L1
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
