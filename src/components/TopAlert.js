import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import JulioNameLogo from '../images/Logo/JulioNameLogo.png';

import { FaPhoneAlt } from 'react-icons/fa';

function TopAlert() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="clear" >
          <Row>          
          <Col>          
          <a href="./home"><img src={JulioNameLogo} style={{width: 300 }}  alt='Julio Garcia Insurance'/></a>
          <div className=' d-flex justify-content-end' lg={12} style={{float: 'right'}}>
<Button variant="info" size="sm" lg={12}>Contact Us!</Button>{' '} 
</div>
            <div className=' d-flex justify-content-end' lg={12} style={{float: 'right'}}>
              <p className='p-1' sm={12}> <h5>Se Habla Español &nbsp;</h5></p>
              <p className='p-1' sm={12}>Main: <FaPhoneAlt /> (832) 645-5100 &nbsp;</p>
              <p className='p-1' sm={12}> <FaPhoneAlt /> (979) 282-5500 &nbsp;</p>
              
            </div>

          </Col>
          </Row>
        </Alert>
          

      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }
  
  


export default TopAlert;