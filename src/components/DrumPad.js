import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const DrumPad = (props) => {
	const id = props.id;
	const src = props.src;
	const desc = props.desc;
	const play = props.play;
	return (
		<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="drum-pad" id={desc}>
        	<CardTitle>{id}</CardTitle>
        	<CardText>{id}</CardText>
        	<Button onClick={play}>{id}<audio className="clip" id={id} src={src}></audio></Button>
      	</Card>
    );
};

export default DrumPad;