import { useContext, useEffect } from "react";
import CoerusContext from "../context/CoerusContext/CC";

// Create the speech recognition consumer 
// this is just the hookified version.
const useCoerus = () => {
	const ctx = useContext(CoerusContext);

	// useEffect(() => {
	// 	console.log("Coerus Context has been updated: ", ctx);
	// }, [ctx]);
	
	// Check to see if the ctxState is null/undefined 
	// or if the speechRecognition process is available
	if(ctx  === undefined || ctx === null) {
		throw new Error('useCoerus must be used within the Coerus Context Provider');
	};
	
	return ctx;
};

export default useCoerus;