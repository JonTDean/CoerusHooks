import { useEffect, useState } from "react";
import SpeechRecognitionContext from "./SRC";

// Create the speech recognition provider 
const SpeechRecognitionContextProvider = ({ children }: any) =>  {
	const [speechRecognition, setSpeechRecognition] = useState<any>(null);

	// On startup of the component, set the context state 
	// to be a new instance of the WebSpeech API.
	useEffect(() => {
		// Set the speech recognition state 
		// to be a new instance of the WebSpeech API
		// Make sure to check for the browser support
		setSpeechRecognition(new (
			// Chrome
			window.SpeechRecognition ||
			// Safari and old versions of Chrome
			window.webkitSpeechRecognition ||
			// Firefox
			window.mozSpeechRecognition ||
			// Microsoft Edge
			window.msSpeechRecognition ||
			// Opera
			window.oSpeechRecognition
		)());
	}, []);

	// Context props to share with the ctx Consumer/useHook
	const value = {
		speechRecognition,
	};
	
	return (
		<SpeechRecognitionContext.Provider value={value}>
			{children}
		</SpeechRecognitionContext.Provider>
		
	);
};

export default SpeechRecognitionContextProvider;

