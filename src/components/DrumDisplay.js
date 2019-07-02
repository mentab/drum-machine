import PropTypes from 'prop-types';
import React from 'react';
import { Jumbotron } from 'reactstrap';

const DrumDisplay = (props) => {
    const { display } = props;
	return (
        <Jumbotron id="display">{display}</Jumbotron>
    );
};

DrumDisplay.propTypes = {
	display: PropTypes.string
}

export default DrumDisplay;