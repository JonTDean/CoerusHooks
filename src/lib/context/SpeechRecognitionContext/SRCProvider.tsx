import React, { useCallback, useEffect, useState } from "react";
import SpeechRecognitionContext from "./SRC";

// Create the speech recognition provider 
const SpeechRecognitionContextProvider = ({ children }: any) =>  {
	const [speechRecognition, setSpeechRecognition] = useState<any>(null);
	const [srcState, setSRCState] = useState<boolean>(false);
	const [finalTranscript, setFinalTranscript] = useState<string>("");
	const [interimTranscript, setInterimTranscript] = useState<string>("");

	const toggleSRCState = useCallback(() => {
		if(speechRecognition != undefined && speechRecognition != null)
			switch (srcState) {
				case false:
					// Start Recognition
					console.log("STARTING RECOGNITION");
					setSRCState(true);
					speechRecognition.start();
					break;
				case true:
					// Stop Recognition
					console.log("STOPPING RECOGNITION");
					setSRCState(false);
					speechRecognition.stop();
					// Reset the recorded transcripts
					setInterimTranscript("");
					setFinalTranscript("");
					break;
				default:
					break;
			}
	}, [srcState, speechRecognition]);

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

	useEffect(() => {
		if(speechRecognition != undefined){
			speechRecognition.continuous = true;
			speechRecognition.interimResults = true;
			speechRecognition.lang = 'en-US';
			speechRecognition.onresult = (event: any) => {
				// Create the interim transcript string 
				// locally because we don't want it to 
				// persist like final transcript
				for(let i = event.resultIndex; i < event.results.length; i++){
					// Set the transcript equal to the WebSpeech Transcription
					let transcript = event.results[i][0].transcript;

					if(event.results[i].isFinal){
						// setFinalTranscript(prevFT => prevFT += transcript);
						setFinalTranscript(prevFT => prevFT += transcript);
					} else {
						// setInterimTranscript(prevIT => prevIT += transcript);
						setInterimTranscript(prevIT => prevIT += transcript);
					}
				}
			};
		}
	}, [speechRecognition]);

	// Context props to share with the ctx Consumer/useHook
	const value = {
		speechRecognition,
		srcState,
		toggleSRCState,
		finalTranscript,
		interimTranscript
	};
	
	return (
		<SpeechRecognitionContext.Provider value={value}>
			{children}
		</SpeechRecognitionContext.Provider>
		
	);
};

export default SpeechRecognitionContextProvider;

