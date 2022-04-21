import { useContext, useEffect } from "react";
import WebAudioContext from "../context/WebAudioContext/WAC";

// Create the speech recognition consumer 
// this is just the hookified version.
const useWAC = () => {
	const ctx = useContext(WebAudioContext);

	useEffect(() => {
		console.log("Web Audio Context has been updated: ", ctx)
	}, [ctx]);
	
	// Check to see if the ctxState is null/undefined 
	// or if the speechRecognition process is available
	if(ctx  === undefined || ctx === null) {
		throw new Error('useWAC must be used within a Web Audio Provider')
	};
	
	return ctx;
};

export default useWAC;