import React, { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Ticker.css';

import DownIcon from '../assets/chevron-down.svg'
import UpIcon from '../assets/chevron-up.svg'

const Ticker = ({Title,ColorA,ColorB}) => {
	let [num,setNum] = useState(0);

	return (
		<div>
			<div style={{width: 'auto', height: '100%', color: 'var(--Text)', textDecoration: 'underline',marginBottom: '5px'}}>{Title}</div>
			<Row>
				<Col>
					<Button style={{backgroundColor: 'var(' + ColorA + ')',  border: '2px solid black', color: "var(--Text)"}} className="tallbtn" onClick={() => setNum(num <= 0 ? 0 : --num)}> <ChevronDown color='var(--ArrowColor)'/> </Button>
				</Col>
				<Col>
					<div style={{
						width: '100%',
						height: '100%',
						backgroundColor: 'var('+ColorB+")",
						border: '0px solid white',
						color: "var(--Text)",
						borderRadius: '9px',
						textAlign: 'center',
						verticalAlign: 'middle',
						lineHeight: '400%',
					}}>{num}</div>
				</Col>
				<Col>
					<Button style={{backgroundColor: 'var(' + ColorA + ')', border: '2px solid black', color: "var(--Text)"}} className="tallbtn" onClick={() => setNum(++num)}> <ChevronUp color='var(--ArrowColor)'/> </Button>
				</Col>
			</Row>
		</div>
	)
}

export default Ticker;