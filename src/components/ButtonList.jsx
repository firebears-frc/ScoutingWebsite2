import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import Ticker from './Ticker.jsx';

const ButtonList = ({Title}) => {
  return (
    <Container fluid>
      <Ticker Title={Title}></Ticker>
    </Container>
  )
}

export default ButtonList
