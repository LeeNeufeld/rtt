import React from "react";
import { Container, Row } from "react-bootstrap";
function FAQ() {
  return (
    <div className="faqBG">
      <Container>
        <Row xs="12" className="d-flex justify-content-center pt-5">
          <h1>FAQ</h1>
        </Row>
        <Row className="d-flex justify-content-start text4 p-3">
          How much does therapy cost?
        </Row>
        <Row className="d-flex  text3 p-3">
          $170 per 60 minute session. A receipt will be provided.
        </Row>
        <hr />
        <Row className="d-flex justify-content-start text4 p-3">
          What is the process for changing or cancelling an appointment?
        </Row>
        <Row className="d-flex justify-content-center text3 p-3">
          24 hours notice is required to change or cancel an appointment. Life
          happens and we get that, however we also need to be respectful of the
          therapist’s time. Extenuating circumstances exist and can be discussed
          with the therapist. A credit card will be kept on file and charged for
          no-shows and last minute cancellations without just cause.
        </Row>
        <hr />
        <Row className="d-flex justify-content-start text4 p-3">
          Will my benefits cover some of the therapy costs?
        </Row>
        <Row className="d-flex justify-content-center text3 p-3">
          Most benefits and insurance providers will partially cover therapy
          costs until a until a maximum dollar amount per year is reached. Be
          sure to check your benefit plan/member booklet to see what your and/or
          your partners benefits will cover. Only a few insurance providers will
          not cover therapy provided from a Masters Level Social Worker. A
          receipt for service will be provided. Direct deposit for Alberta Blue
          Cross and Green Shield coming soon.
        </Row>
        <hr />
        <Row className="d-flex justify-content-start text4 p-3">
          What kind of payment do you accept?
        </Row>
        <Row className="d-flex justify-content-center text3 p-3">
          At this time, we are accepting e-transfers and credit card
          transactions through the Square platform. Transaction fees are paid by
          Rose Thatcher Therapy. A receipt will be provided.
        </Row>
        <hr />
        <Row className="d-flex justify-content-start text4 p-3">
          Do you offer sessions in the evenings or weekends?
        </Row>
        <Row className="d-flex justify-content-center text3 p-3">
          Sessions are primarily available in the evenings and on the weekends
          to accommodate for work-life balance. We do not want to add to your
          stress by having to take time away from work to see us!
        </Row>
        <hr />
        <Row className="d-flex justify-content-start text4 p-3">
          Do you offer virtual or in-person session?
        </Row>
        <Row className="d-flex justify-content-center text3 p-3">
          Both virtual and in-person sessions are available. There is more
          flexibility around session offerings for virtual sessions. It is
          recommended that Couple, Family and Adolescent Therapy take place in
          person, however this is up to the discretion of the client. We use
          Zoom or Doxy as virtual platforms to keep your information as private
          as possible.
        </Row>
        <hr />
        <Row className="d-flex justify-content-start text4 p-3">
          Do you keep records of our sessions?
        </Row>
        <Row className="d-flex justify-content-center text3 p-3">
          Electronic notes are kept in a secure environment to ensure privacy.
          Session details and notes will not be shared with anyone unless a
          Release of Information (ROI) is completed by the client with specific
          instructions on who and what information is to be shared.{" "}
        </Row>
        <hr />
        <Row className="d-flex justify-content-start text4 p-3">
          Is my information kept confidential always?
        </Row>
        <Row className="d-flex justify-content-center text3 p-3">
          Demographic and session notes are kept strictly confidential unless
          the following exceptions apply: 1. The therapist has reason to believe
          that a person will imminently harm themselves or others unless other
          parties are involved to mitigate risk; 2. There are any reports of
          child abuse, neglect or endangerment where there are still currently
          children at risk; 3. The therapist receives a legal subpoena to attend
          court and provide information regarding sessions; 4. A Release of
          Information (ROI) is completed by the client (or by a parent/guardian
          with the knowledge of the youth) for a specific person for a specific
          reason.
        </Row>
        <hr />
        <Row className="d-flex justify-content-start text4 p-3">
          What are my rights as a client?
        </Row>
        <Row className="d-flex justify-content-center text3 p-3">
          As a client, you have the right to feel safe and expect unyielding
          respect from the therapist. You have the right to ask questions, seek
          confirmation and discontinue services if you should choose. You should
          except to be challenged in a respectful and empathic fashion within
          the context of therapy.{" "}
        </Row>
        <hr />
        <Row className="d-flex justify-content-start text4 p-3">
          How do I book?
        </Row>
        <Row className="d-flex justify-content-center text3 p-3">
          <span>
            {" "}
            Please call or email to schedule an appointment. The therapist will
            contact you within 24 hours during business days to set up an
            appointment. Visit our <a href="/ContactUs">Contact Us </a>
            {""}page to get in touch with us today!
          </span>
        </Row>
      </Container>
    </div>
  );
}

export default FAQ;
