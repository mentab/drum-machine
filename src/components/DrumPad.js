import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class DrumPad extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const id = this.props.id;
		const src = this.props.src;
		const desc = this.props.desc;
		const click = this.props.click;
		return (
			<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="drum-pad" id={desc}>
        		<CardTitle>{id}</CardTitle>
        		<CardText>{id}</CardText>
        		<Button onClick={click}>{id}<audio className="clip" id={id} src={src}></audio></Button>
      		</Card>
		);
	}
};

export default DrumPad;