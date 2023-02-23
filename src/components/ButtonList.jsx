import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import Ticker from './Ticker.jsx';

const ButtonList = ({Title,isCone,setValue,Value}) => {
  return (
    <Container fluid>
      {
        isCone ? <Ticker Title={Title} setNum={setValue} Num={Value} ColorA="--ConesPrimary" ColorB="--ConesSecondary"></Ticker> : <Ticker Title={Title} setNum={setValue} Num={Value} ColorA="--CubesPrimary" ColorB="--CubesSecondary"></Ticker>
      }
    </Container>
  )
}

export default ButtonList
