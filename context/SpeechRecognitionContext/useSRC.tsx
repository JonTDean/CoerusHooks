import { useContext, useEffect } from "react";
import SpeechRecognitionContext from "./SRC";

// Create the speech recognition consumer 
// this is just the hookified version.
const useSRC= () => {
	const ctx = useContext(SpeechRecognitionContext);

	useEffect(() => {
		console.log("Speech Context has been updated: ", ctx)
	}, [ctx]);
	
	// Check to see if the ctxState is null/undefined 
	// or if the speechRecognition process is available
	if(ctx  === undefined || ctx === null) {
		throw new Error('useSRC must be used within a Speech Recognition Provider')
	};
	
	return ctx;
};

export default useSRC;