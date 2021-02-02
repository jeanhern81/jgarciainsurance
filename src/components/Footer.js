import React from 'react';
import Container from 'react-bootstrap/Row';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar';
import { BiCopyright } from 'react-icons/bi';

function Footer () {
    return (

        
        <footer className='mt-5 d-flex justify-content-center'>




            <Container fluid={true}>
                <Navbar fixed="bottom" className='mt-5 d-flex justify-content-center'>
            <div className='quickLinks'>
                <p>Quick Links</p>
                <li>Auto Quote Request</li>
                <li>Home Quote Request</li>
                <li>Commercial Insurance Request</li>


            </div>


                <Row className='border-top p-3' >
                    <Col className='p-0 ' lg={12}>
                        <h6 className='d-flex justify-content-center '><p><BiCopyright /> Julio Garcia Insurance</p></h6>
                    </Col>
                    <Col className='d-flex justify-content-center p-0' lg={12}>
                        <p>All content on this website is owned by Julio Garcia and our licensors. Do not use without our consent. </p>
                    </Col>
                    <Col className='d-flex justify-content-center p-0' lg={12}>
                        <p>Website createdy by The Web Dev Studio. All rights reserved.</p>
                    </Col>
                </Row>

            <div className='addlInfo'>
                <p>Contact Us</p>
                <p>Privacy Policy</p>
            </div>

                </Navbar>
            </Container>
        </footer>
    );
}


export default Footer;