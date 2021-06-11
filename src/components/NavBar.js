import React from 'react';
import { Container, Navbar, Nav, Form, NavDropdown, FormControl, Button  } from 'react-bootstrap';
import RTTLogoT from '../images/RTTLogoT.png'

function NavBar() {
  
    return (
      
       
      <Navbar style={{backgroundColor:'#AEBDCC'}} expand="lg" sticky='top'>
      <a className='brand' style={{zIndex:3}} href="/home"><img style={{maxWidth:'125px'}} src={RTTLogoT}/></a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          
          <Nav.Link style={{fontFamily:'Dancing Script, cursive'}} href="/home">Home</Nav.Link>
          <Nav.Link style={{fontFamily:'Dancing Script, cursive'}} href="/services">Services</Nav.Link>
          <Nav.Link style={{fontFamily:'Dancing Script, cursive'}} href="/meetrose">Meet Rose</Nav.Link>
          <Nav.Link style={{fontFamily:'Dancing Script, cursive'}} href="/contactus">Contact Us</Nav.Link>
          <Nav.Link style={{fontFamily:'Dancing Script, cursive'}} href="/faq">FAQ</Nav.Link>
          
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
      
      
    );
  }
  
  export default NavBar;