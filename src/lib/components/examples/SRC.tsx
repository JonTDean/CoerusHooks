import React from 'react'
import { useSRC, useWAC } from '../../hooks';

const ExampleSRC = () => {
	const wac = useWAC();
	const src = useSRC();

	const handleSpeechRecognitionStateClick = () => {
		if(src != undefined)
			src.toggleSRCState();
	}

	if (wac.wacState === "running")
		return (
			<div>
				<button onClick={handleSpeechRecognitionStateClick}>Click Me</button>
				<p>SRC State: {src.srcState ? "On" : "Off"}</p>
				<div>
					<p>Final Transcript</p>
					<p>{src.finalTranscript}</p>
				</div>
			</div>
		)
	
	return <p>Enable Web Audio Context to use Speech Recognition</p>;
}

export default ExampleSRC;