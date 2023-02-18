import React, { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const WLTick = ({Title,isTicked,onTicked}) => {
  const [isButtonOn,setButtonOn] = useState(0);

  return (
    <Container fluid>
      <div>
        <div style={{width: 'auto', height: '100%', color: 'white', textDecoration: 'underline',marginBottom: '5px', marginLeft: '5px'}}>{Title}</div>
        <Row style={{marginBottom: '10px'}}>
          <Col>
            <Button onClick={() => {setButtonOn(0)}} style={{
              width: '100%',
              height: '100%',
              backgroundColor: isButtonOn == 0 ? 'var(--TickSelected)' : 'var(--TickDeselected)',
              border: '2px solid black'
            }}>Lose</Button>
          </Col>
          <Col>
          <Button onClick={() => {setButtonOn(1)}} style={{
              width: '100%',
              height: '100%',
              backgroundColor: isButtonOn == 1 ? 'var(--TickSelected)' : 'var(--TickDeselected)',
              border: '2px solid black'
            }}>Win</Button>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default WLTick
