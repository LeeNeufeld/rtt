import React from 'react';
import { Container, Navbar, Nav, Form, NavDropdown, FormControl, Button  } from 'react-bootstrap';
import RTTLogo from '../images/RTTLogo.jpg'

function NavBar() {
  
    return (
      
       
      <Navbar style={{backgroundColor:'darksalmon'}} expand="lg" sticky='top'>
      <a  href="/home"><img style={{maxWidth:'150px'}} src={RTTLogo}/></a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/meetrose">Meet Rose</Nav.Link>
          <Nav.Link href="/contactus">Contact Us</Nav.Link>
          <Nav.Link href="/faq">FAQ</Nav.Link>
          
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
      
      
    );
  }
  
  export default NavBar;