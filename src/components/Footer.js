import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';
import { BiCopyright } from 'react-icons/bi';

function Footer () {
    return (

<Container fluid={true}>
<Navbar fixed="bottom ">


<Row className='d-flex p-2 flex-fill bd-highlight border-top  p-3'>
    <Col xs={12} lg={6}>
    <div className='quickLinksp text-center' >
            <p>Quick Links</p>
            <li>Auto Quote Request</li>
            <li>Home Quote Request</li>
            <li>Commercial Quote Request</li>
            </div>
    </Col>


    <Col xs={12} lg={6} className="p-2"> 
    <div className='addlInfo text-center ' >
        <p>Contact Us</p>
        <p>Privacy Policy</p>
        <p>Translate this page:</p>
        </div>
    </Col>


    <Col xs={12} lg={12}>
        <div className='jGarciaBottom p-2 flex-fill bd-highlight' >
        <h6 className=' d-flex justify-content-center'>
        <p><BiCopyright /> Julio Garcia Insurance</p></h6>
        <p className='d-flex justify-content-center'>All content on this website is owned by Julio Garcia and our licensors. Do not use without our consent. </p>
        <p className='d-flex justify-content-center '>Website createdy by The Web Dev Studio. All rights reserved.</p>
        </div>
    </Col>
</Row>

</Navbar>
</Container>
    
);
}


export default Footer;