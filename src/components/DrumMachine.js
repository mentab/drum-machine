import React, { Component } from 'react';
import DrumDisplay from './DrumDisplay';
import DrumPad from './DrumPad';
import { Container, Row, Col, CardColumns } from 'reactstrap';

class DrumMachine extends Component {
  render() {
    return (
		<Container id="drum-machine">
			<Row>
				<Col>
					<DrumDisplay />
				</Col>
			</Row>
			<Row>
				<Col>
					<CardColumns>
						<DrumPad id="Q" src="/media/examples/t-rex-roar.mp3" desc="desc" />
						<DrumPad id="W" src="/media/examples/t-rex-roar.mp3" desc="desc" />
						<DrumPad id="E" src="/media/examples/t-rex-roar.mp3" desc="desc" />
						<DrumPad id="A" src="/media/examples/t-rex-roar.mp3" desc="desc" />
						<DrumPad id="S" src="/media/examples/t-rex-roar.mp3" desc="desc" />
						<DrumPad id="D" src="/media/examples/t-rex-roar.mp3" desc="desc" />
						<DrumPad id="Z" src="/media/examples/t-rex-roar.mp3" desc="desc" />
						<DrumPad id="X" src="/media/examples/t-rex-roar.mp3" desc="desc" />
						<DrumPad id="C" src="/media/examples/t-rex-roar.mp3" desc="desc" />
					</CardColumns>
				</Col>
			</Row>
	  	</Container>
    );
  }
}

export default DrumMachine;
