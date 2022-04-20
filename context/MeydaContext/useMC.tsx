import { useContext, useEffect } from "react";
import MeydaAnalyzerContext from "./MC";

// Create the speech recognition consumer 
// this is just the hookified version.
const useMC = () => {
	const ctx = useContext(MeydaAnalyzerContext);

	useEffect(() => {
		console.log("Meyda Analyzer Context has been updated: ", ctx);
	}, [ctx]);
	
	// Check to see if the ctxState is null/undefined 
	// or if the speechRecognition process is available
	if(ctx  === undefined || ctx === null) {
		throw new Error('useMC must be used within a Meyda Analyzer Provider');
	};
	
	return ctx;
};

export default useMC;