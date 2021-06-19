import React from 'react'
import { Container, Row, Col, Form, NavDropdown, FormControl, Button  } from 'react-bootstrap';
import { MdPhonelinkRing, MdEmail, MdBusiness, MdWifiTethering } from 'react-icons/md';
function Footer(){

    return(
        <footer className='footer' >
            <div className='empty-container'></div>
            <Container fluid className='mt-3 mb-3 d-flex justify-content-center'>
                <Row >
                    <Col xs='12' md='6' >   
                        <MdPhonelinkRing size='15pt' fill='rgba(0,0,0,.5)' className='mb-2' /><a href="tel:8252500618" style={{color:'rgba(0,0,0,.5)'}} className='ml-2'>825-250-0618</a> 
                    </Col>
                    <Col xs='12' md='6'>
                        <MdBusiness size='15pt' fill='rgba(0,0,0,.5)' className='mb-2' /><a className='ml-2 text-wrap text-left' style={{maxWidth:'220px',color:'rgba(0,0,0,.5)'}} href='/contactus'>#250, 5010 Richard Road SW Calgary, Alberta T3E 6L1</a>
                    </Col>    
                </Row>
            </Container>
        </footer>
    )
}

export default Footer