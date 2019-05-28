import React, { Component } from 'react';
import DrumDisplay from './DrumDisplay';
import DrumPad from './DrumPad';
import { Container, Row, Col, CardColumns } from 'reactstrap';
import drums from '../drums';

class DrumMachine extends Component {
	constructor(props) {
		super(props);

		this.state = {
			display: ''
		}
		this.handlePlay = this.handlePlay.bind(this);
	}

	handlePlay(event) {
		this.setState({
			display: event.target.innerText
		});
	}

	render() {
		const play = this.handlePlay;
		const display = this.state.display;
		const drumPads = drums.map(i => <DrumPad id={i.id} key={i.id} src={i.src} desc={i.desc} play={play}/>);
		return (
		<Container id="drum-machine">
			<Row>
				<Col>
					<DrumDisplay display={display}/>
				</Col>
			</Row>
			<Row>
				<Col>
					<CardColumns>
						{drumPads}
					</CardColumns>
				</Col>
			</Row>
		</Container>
		);
	}
}

export default DrumMachine;
