import React, { Component } from 'react';
import DrumDisplay from './DrumDisplay';
import DrumPad from './DrumPad';
import { Container, Row, Col, CardColumns } from 'reactstrap';

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
	
	handleOnKeyDown(event) {
		// TODO
	}

	render() {
		const play = this.handlePlay;
		// const down = this.handleOnKeyDown;
		const display = this.state.display;
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
						<DrumPad id="Q" src="/media/examples/t-rex-roar.mp3" desc="desc" play={play}/>
						<DrumPad id="W" src="/media/examples/t-rex-roar.mp3" desc="desc" play={play}/>
						<DrumPad id="E" src="/media/examples/t-rex-roar.mp3" desc="desc" play={play}/>
						<DrumPad id="A" src="/media/examples/t-rex-roar.mp3" desc="desc" play={play}/>
						<DrumPad id="S" src="/media/examples/t-rex-roar.mp3" desc="desc" play={play}/>
						<DrumPad id="D" src="/media/examples/t-rex-roar.mp3" desc="desc" play={play}/>
						<DrumPad id="Z" src="/media/examples/t-rex-roar.mp3" desc="desc" play={play}/>
						<DrumPad id="X" src="/media/examples/t-rex-roar.mp3" desc="desc" play={play}/>
						<DrumPad id="C" src="/media/examples/t-rex-roar.mp3" desc="desc" play={play}/>
					</CardColumns>
				</Col>
			</Row>
		</Container>
		);
	}
}

export default DrumMachine;
