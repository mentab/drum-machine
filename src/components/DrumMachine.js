import React, { Component } from 'react';
import DrumDisplay from './DrumDisplay';
import DrumPad from './DrumPad';
import { Container, Row, Col, CardColumns } from 'reactstrap';
import drums from '../drums';

class DrumMachine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: 'Press a key to play a sound !'
		}
		this.audio = null;
		this.timeout = null;
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handlePlay = this.handlePlay.bind(this);
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyDown);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyDown);
	}

	handleKeyDown(event) {
		this.handlePlay(event.key);
	}

	handleClick(event) {
		this.handlePlay(event.target.innerText);
	}

	handlePlay(key)
	{
		clearTimeout(this.timeout);

		const drumKey = drums.find(drum => drum.id === key);

		if (drumKey) {
			document.getElementById(key).play();
			this.setState({
				display: drumKey.id
			});
			this.timeout = setTimeout(() => {
				this.setState({
					display: 'Press a key to play a new sound !'
				})
			}, 1000);
		}
	}

	render() {
		const click = this.handleClick;
		const display = this.state.display;
		const drumPads = drums.map(i => <DrumPad id={i.id} key={i.id} src={i.src} desc={i.desc} click={click}/>);
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
