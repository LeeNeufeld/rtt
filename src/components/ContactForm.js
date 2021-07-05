import React, { useState } from "react";
import { init, send } from "emailjs-com";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
init("user_EJ7w4A5FKsK26PyN0Hy7i");

const ContactForm = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_ffwio4h",
      "template_vo4oidw",
      toSend,
      "user_EJ7w4A5FKsK26PyN0Hy7i"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your email has been sent!");
        window.location.reload();
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Row className="pl-2 pr-2">
          <Form.Control
            className="mb-2"
            type="text"
            name="from_name"
            placeholder="Name"
            value={toSend.from_name}
            onChange={handleChange}
          />

          <Form.Control
            className="mb-2"
            type="email"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
          />

          <Form.Control
            className="mb-2"
            as="textarea"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
        </Row>
      </Form>
    </div>
  );
};

export default ContactForm;
