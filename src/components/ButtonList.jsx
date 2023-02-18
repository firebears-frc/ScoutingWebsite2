import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import Ticker from './Ticker.jsx';

const ButtonList = ({Title,isCone}) => {
  return (
    <Container fluid>
      {
        isCone ? <Ticker Title={Title} ColorA="--ConesPrimary" ColorB="--ConesSecondary"></Ticker> : <Ticker Title={Title} ColorA="--CubesPrimary" ColorB="--CubesSecondary"></Ticker>
      }
    </Container>
  )
}

export default ButtonList
