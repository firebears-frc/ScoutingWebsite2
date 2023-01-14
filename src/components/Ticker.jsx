import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Ticker.css';

import DownIcon from '../assets/chevron-down.svg'
import UpIcon from '../assets/chevron-up.svg'

class Ticker extends Component {
  constructor(props) {
    super(props);
	this.state = {value:0};
	this.increment = (val) => {
	  this.setState((state, props) => ({
		value: state.value + val
	  }));
	}
  }
  render() {
    return <Row>
		<Col>
			<Button className="tallbtn" onClick={() => this.increment(-1)}>
			<img src={DownIcon} alt="chevron-down" />
			</Button>
		</Col>
		<Col>
			<Alert>{this.state.value}</Alert>
		</Col>
		<Col>
			<Button className="tallbtn" onClick={() => this.increment(1)}>
				<img src={UpIcon} alt="chevron-up" />
			</Button>
		</Col>
	</Row>;
  }
}
export default Ticker;
