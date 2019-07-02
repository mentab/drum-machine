import PropTypes from 'prop-types';
import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const DrumPad = (props) => {
	const { id, src, desc, click } = props;
	return (
		<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        	<CardTitle>{id}</CardTitle>
        	<CardText>{desc}</CardText>
        	<Button onClick={click} className="drum-pad" id={desc}>{id}<audio className="clip" id={id} src={src}></audio></Button>
      	</Card>
	);
};

DrumPad.propTypes = {
	id: PropTypes.string,
	src: PropTypes.string,
	desc: PropTypes.string,
	click: PropTypes.func
}

export default DrumPad;