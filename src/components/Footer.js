import React from 'react'
import { Container, Row, Col, Form, NavDropdown, FormControl, Button  } from 'react-bootstrap';
import { MdPhonelinkRing, MdEmail, MdBusiness, MdWifiTethering } from 'react-icons/md';
function Footer(){

    return(
        <footer className='footer' >
            <div className='empty-container'></div>
            <Container fluid className='mt-3 mb-3 d-flex justify-content-center'>
                <Row >
                    <Col>
                    <Row >
                        
                        <MdPhonelinkRing/><a href="tel:8252500618" className='ml-2'>825-250-0618</a> 
                    </Row>
                    <Row>
                    <MdBusiness/><a className='ml-2 text-wrap text-left' style={{maxWidth:'220px'}} href='/contactus'>#250, 5010 Richard Road SW Calgary, Alberta T3E 6L1</a>
                        
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                    <MdEmail/> <a  href='/contactus'>rose.thatcher.therapy@gmail.com</a>
                    </Row>
                    <Row>
                        <MdWifiTethering/><a className='ml-2' href='/home'>www.RoseThatcherTherapy.com</a> 
                    </Row>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer