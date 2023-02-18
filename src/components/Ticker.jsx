import React, { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Ticker.css';

import DownIcon from '../assets/chevron-down.svg'
import UpIcon from '../assets/chevron-up.svg'

const Ticker = ({Title}) => {
	let [num,setNum] = useState(0);

	return (
		<div>
			<div style={{width: 'auto', height: '100%', color: 'white', textDecoration: 'underline',marginBottom: '5px'}}>{Title}</div>
			<Row>
				<Col>
					<Button className="tallbtn" onClick={() => setNum(num <= 0 ? 0 : --num)}>
					<img src={DownIcon} alt="chevron-down" />
					</Button>
				</Col>
				<Col>
					<div style={{
						width: '100%',
						height: '100%',
						backgroundColor: '#0d6efd',
						border: '1px solid white',
						color: 'white',
						borderRadius: '24px',
						textAlign: 'center',
						verticalAlign: 'middle',
						lineHeight: '400%',
					}}>{num}</div>
				</Col>
				<Col>
					<Button className="tallbtn" onClick={() => setNum(++num)}>
						<img src={UpIcon} alt="chevron-up" />
					</Button>
				</Col>
			</Row>
		</div>
	)
}

export default Ticker;