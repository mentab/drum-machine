import React from 'react';
import { Jumbotron } from 'reactstrap';

const DrumDisplay = (props) => {
    const display = props.display;
	return (
        <Jumbotron id="display">{display}</Jumbotron>
    );
};

export default DrumDisplay;