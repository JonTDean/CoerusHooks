import React from 'react'
import { useMC, useWAC } from '../../hooks';

const ExampleMC = () => {
	const wac = useWAC();
	const mc = useMC();

	const handleMeydaStateClick = () => {
		if(mc != undefined)
			mc.toggleMCState();
	}	

	if (wac.wacState === "running")
		return (
			<div>
				<button onClick={handleMeydaStateClick}>Click Me</button>
				<p>MC State: {mc.mcState ? "On" : "Off"}</p>
				<div>
					<p>MFCC: {mc.mfccHistory}</p>
				</div>
			</div>
		)
	
	return <p>Enable Web Audio Context to use the Meyda Analyzer</p>;
}

export default ExampleMC;
