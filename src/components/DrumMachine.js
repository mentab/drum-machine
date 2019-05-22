import React, { Component } from 'react';
import DrumDisplay from './DrumDisplay';
import DrumPad from './DrumPad';

class DrumMachine extends Component {
  render() {
    return (
      <div id="drum-machine">
		<DrumDisplay />
		<DrumPad id="Q" src="/media/examples/t-rex-roar.mp3" desc="desc" />
		<DrumPad id="W" src="/media/examples/t-rex-roar.mp3" desc="desc" />
		<DrumPad id="E" src="/media/examples/t-rex-roar.mp3" desc="desc" />
		<DrumPad id="A" src="/media/examples/t-rex-roar.mp3" desc="desc" />
		<DrumPad id="S" src="/media/examples/t-rex-roar.mp3" desc="desc" />
		<DrumPad id="D" src="/media/examples/t-rex-roar.mp3" desc="desc" />
		<DrumPad id="Z" src="/media/examples/t-rex-roar.mp3" desc="desc" />
		<DrumPad id="X" src="/media/examples/t-rex-roar.mp3" desc="desc" />
		<DrumPad id="C" src="/media/examples/t-rex-roar.mp3" desc="desc" />
	  </div>
    );
  }
}

export default DrumMachine;
