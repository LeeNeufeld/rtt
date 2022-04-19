import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Services() {
  return (
    <div className="servicesBG">
      <Container>
        <Row xs="12" className="d-flex justify-content-center pt-5">
          <h1>Services</h1>
        </Row>

        <Row className="d-flex justify-content-center text pr-3 pl-3 mb-5">
          Therapy services are provided using evidence-based treatment
          modalities for your specific needs. We practice from a
          person-in-environment, emotion-focused model that is cognizant of
          attachment styles and the important role our relationships play in our
          mental health. We believe that at the heart of any successful therapy
          intervention is the relationship developed been client and therapist;
          our ultimate goal is to make you feel heard, acknowledged and safe
          enough to optimistically approach change.
        </Row>
        <Row className="d-flex justify-content-center text pr-3 pl-3 mb-3">
          <h4>Treatment Modalities Available</h4>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center text2 pr-5  mb-5">
          <ul style={{ listStyleType: "none" }}>
            <li>Cognitive Behavioural Therapy (CBT)</li>
            <li>Emotion Focused Therapy (EFT)</li>
            <li>Mindfulness</li>
            <li>Dialectical Behaviour Therapy (Skills, DBT)</li>
            <li>Narrative Therapy</li>
            <li>Solution-Focused Therapy</li>
          </ul>
        </Row>
        <Row className="d-flex justify-content-center text pr-3 pl-3 mb-3">
          Free 15 minute consultation prior to each session. This time is used
          to identify the primary reason for seeking therapy, therapy
          objectives, and to arrange for scheduling and fees.
        </Row>

        <Row className="d-flex justify-content-center text pr-3 pl-3 ">
          <Col xs="12" sm="12" md="6">
            <hr />
            <h4>Individual Therapy $200/hr </h4>
            <hr />
            Individual Therapy is available to help you identify, address and
            make changes to important life areas that may be holding you back.
            Many people seek individual therapy to work on issues such as
            depressive and anxious thoughts, relationship troubles, family of
            origin issues, problematic eating, past trauma, or issues with
            confidence.
          </Col>

          <Col xs="12" sm="12" md="6">
            <hr />
            <h4>Couples Therapy $200/hr</h4>
            <hr />
            Couples Therapy is an excellent option if you are finding your
            relationship is struggling with communication issues, missed
            opportunities for leaning-in, mismatched illustrations of love, past
            regrettable instances, or issues navigating romance. Couples Therapy
            is also a great way to reconnect with your partner in a meaningful
            way amidst the chaos of everyday life. We practice from a Gottman
            Institute style of couple’s therapy that will help you identify and
            make changes in a compassionate, research-based manner that leaves
            blame and judgment at the door.
          </Col>
        </Row>

        <Row className="d-flex justify-content-center text pr-3 pl-3">
          <Col xs="12" sm="12" md="6">
            <hr />
            <h4>Family Therapy $200/hr</h4>
            <hr />
            Family Therapy is a gateway for better communication, understanding
            and empathy towards the most important people in your lives. Often
            times families struggle to process a change in family composition
            (divorce, separation, addition of new persons) or have difficulty
            navigating the sometimes-turbulent waters of adolescence in a way
            that is respectful for all parties. Family Therapy looks at
            differing attachment styles, parenting styles, struggles for
            independence and parent-child relationship problems. Family Therapy
            is designed to improve the overall functionality of home life and
            help bring joy back into family time.
          </Col>
          <Col xs="12" sm="12" md="6">
            <hr />
            <h4>Adolescent Therapy $200/hr</h4>
            <hr />
            Being a teen these days is harder than ever! Therapy for
            tweens/adolescence looks to connect with the young person in a way
            that is respectful and empathetic to the unique challenges faced by
            youth. Therapy sessions are tailored to the youth to help them feel
            comfortable letting their guard down and allowing the therapist to
            venture within the walls of their reality. Therapy can assist with
            depressive thoughts, social and general anxiety, impulsivity and
            reactivity, self-confidence issues, eating troubles and difficulty
            with peers. In-person sessions are recommended for better
            therapeutic alliance.
          </Col>
        </Row>
        <hr />
        <Row xs="12" className="d-flex justify-content-center">
          <h4>Cost</h4>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center text pr-3 pl-3 mb-5">
          Sessions start at $200/HR. This includes any resources, progress
          reports and collaboration with external professionals.
          <br />
          Letters for school or employers can also be provided for an additional
          cost.
        </Row>
        <hr />
        <Row xs="12" className="d-flex justify-content-center">
          <h4>Cancellation Policy</h4>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center text pr-3 pl-3 pb-3">
          24 hours notice is required to change or cancel an appointment. Life
          happens and we get that, however we also need to be respectful of the
          therapist’s time. Extenuating circumstances exist and can be discussed
          with the therapist.
        </Row>
      </Container>
    </div>
  );
}

export default Services;
