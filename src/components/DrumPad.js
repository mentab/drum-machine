import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const DrumPad = (props) => {
	const id = props.id;
	const src = props.src;
	const desc = props.desc;
	const click = props.click;
	return (
		<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        	<CardTitle>{id}</CardTitle>
        	<CardText>{desc}</CardText>
        	<Button onClick={click} className="drum-pad" id={desc}>{id}<audio className="clip" id={id} src={src}></audio></Button>
      	</Card>
	);
};

export default DrumPad;