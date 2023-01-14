import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import Ticker from './Ticker.jsx';

class ButtonList extends Component {
  render() {
    return <Container fluid>
		<Ticker></Ticker>
	</Container>;
  }
}
export default ButtonList;
