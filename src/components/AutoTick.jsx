import React, { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const AutoTick = ({Title,isTicked,onTicked,isEnd}) => {
  const [isButtonOn,setButtonOn] = useState(0);

  return (
    <Container fluid>
      <div>
        <div style={{width: 'auto', height: '100%', color: 'var(--Text)', textDecoration: 'underline',marginBottom: '5px', marginLeft: '5px'}}>{Title}</div>
        <Row style={{marginBottom: '10px'}}>
          <Col>
            <Button onClick={() => {setButtonOn(0)}} style={{
              width: '100%',
              height: '100%',
              backgroundColor: isButtonOn == 0 ? 'var(--TickSelected)' : 'var(--TickDeselected)',
              fontWeight: isButtonOn == 0 ? 'bold' : 'normal',
              border: '2px solid black'
            }}>Off</Button>
          </Col>
          {
            isEnd ? <Col>
            <Button onClick={() => {setButtonOn(1)}} style={{
                width: '100%',
                height: '100%',
                backgroundColor: isButtonOn == 1 ? 'var(--TickSelected)' : 'var(--TickDeselected)',
                fontWeight: isButtonOn == 1 ? 'bold' : 'normal',
                border: '2px solid black'
              }}>Parked</Button>
            </Col>
            : ''
          }
          <Col>
          <Button onClick={() => {setButtonOn(2)}} style={{
              width: '100%',
              height: '100%',
              backgroundColor: isButtonOn == 2 ? 'var(--TickSelected)' : 'var(--TickDeselected)',
              fontWeight: isButtonOn == 2 ? 'bold' : 'normal',
              border: '2px solid black'
            }}>Docked</Button>
          </Col>
          <Col>
          <Button onClick={() => {setButtonOn(3)}} style={{
              width: '100%',
              height: '100%',
              backgroundColor: isButtonOn == 3 ? 'var(--TickSelected)' : 'var(--TickDeselected)',
              fontWeight: isButtonOn == 3 ? 'bold' : 'normal',
              border: '2px solid black'
            }}>Docked & Engaged (BALANCED)</Button>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default AutoTick
