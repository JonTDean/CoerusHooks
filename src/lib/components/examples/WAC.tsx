import React from 'react'
import { useWAC } from '../../hooks';

const ExampleWAC = () => {
	const wac = useWAC();
	
	const handleWACStateClick = () => {
		if(wac.toggleWACState != undefined)
			wac.toggleWACState();
	}

	if (wac.wacState === "closed")
		return <p>Web Audio Context is closed</p>;

	return (
		<div>
			<button onClick={handleWACStateClick}>Activate Web Audio</button>
			<p>Wac State: {wac.wacState}</p>
		</div>
	);
}

export default ExampleWAC;