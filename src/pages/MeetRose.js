import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Rose from "../images/RoseThatcher.jpg";
function MeetRose() {
  return (
    <div className="meetBG">
      <Container>
        <Row xs="12" className="d-flex justify-content-center pt-5">
          <h1>Meet Rose</h1>
        </Row>
        <Row>
          <Col>
            <img className=" img-fluid  imgW " alt="Responsive" src={Rose} />

            <div className="text-left  text2  ">
              Hi! I’m Rose Thatcher and I am a local therapist offering
              counselling services to individuals, couples, families and
              adolescents in the Calgary area. Congratulations on being brave
              and taking the first step to bettering your mental health. In a
              world that is often too loud and busy, it is easy to fall into
              thought patterns that you are lacking; as a therapist, it is my
              role to help you shift that narrative from deficit to plenty. I
              believe mental health operates on a continuum and that is
              reasonable and expected that all of us will struggle with our
              emotions from time to time. In the current climate we are facing,
              people are experiencing unprecedented amounts of stress, isolation
              and relationship breakdown. As a therapist my role is to create a
              safe and empathetic space for you to be vulnerable and show up as
              your authentic self. No matter what the issue is you are facing,
              you can trust that together we will come to understand the
              problem, learn skills to help you manage distress, quiet troubling
              thoughts and adapt your reactions to the problem. My formal
              education and training has rendered me able to practice using
              various treatment modalities that we can tailor to meet your
              unique treatment goals.
            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center text2 text-left pr-3 pl-3 pb-5">
          I am a trained psychotherapist with a Masters degree in clinical
          Social Work from the University of Calgary. I have also completed
          relevant certificates in Cognitive Behavioural Therapy (CBT) and
          Emotionally Focused Therapy (EFT), as well as trained under the
          Gottman Institute for couples therapy. I am approved by my governing
          body (Alberta College of Social Workers) to provide advance
          psychosocial interventions to individuals experiencing severe mental
          health issues. I have been working in mental health since 2014 and
          practicing primarily with children, adolescents and their families for
          the past 5 years. My practice style is grounded in attachment-based
          and family systems theory. As in any meaningful relationship, there
          needs to be a rightness of fit between the client and therapist in
          order for trust, healing and change to be achieved. I hope that
          together we can nurture a therapeutic relationship of genuine
          connection and vulnerability in order to take tangible steps towards
          improving your quality of life. I am excited and honored to be part of
          your change-process.
        </Row>
      </Container>
    </div>
  );
}

export default MeetRose;
