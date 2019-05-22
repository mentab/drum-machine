import React from 'react';

const DrumPad = (props) => {
	const id = props.id;
	const src = props.src;
	const desc = props.desc;
	return (
        <div className="drum-pad" id={desc}>
			{id}
            <audio className="clip" id={id} src={src}></audio>
        </div>
    );
};

export default DrumPad;