import React, { useCallback, useEffect, useState } from "react";
import WebAudioContext from "./WAC";

// Create the speech recognition provider 
const WebAudioContextProvider = ({ children }: any) =>  {
	const [webAudioCtx, setWebAudioCtx] = useState<AudioContext | null>(null);
	const [wacState, setWACState] = useState<"running" | "suspended" | "closed">("closed");
	const [webAudioSource, setWebAudioSource] = useState<AudioBufferSourceNode | null>(null);
	const [mediaOpts, setMediaOpts] = useState<any>({
		audio: true,
		video: false
	});

	// Toggle the state of the web audio context
	// this allows us to toggle the context state
	// and update the state of the web audio context
	// instead of having to create a reference
	// to the current web audio context
	const toggleWACState = useCallback(() => {
		if(webAudioCtx !== null && webAudioCtx !== undefined)
			switch (wacState) {
				case "running":
					// If the WebAudioContext is running, stop it
					webAudioCtx.suspend();
					setWACState("suspended");
					break;
				case "suspended":
					// If the WebAudioContext is suspended, resume it
					webAudioCtx.resume();
					setWACState("running");
					break;
				default:
					console.log("Web Audio context state is: ", wacState);
					break;
			}
	}, [webAudioCtx, wacState]);

	// On startup of the component, set the context state 
	// to be a new instance of the WebAudio API
	useEffect(() => {
		const audioInit = new AudioContext()
		setWebAudioCtx(audioInit);

		// Create a new audio source and connect it 
		// to the audio stream from the microphone
		const audSrc = navigator.mediaDevices.getUserMedia(mediaOpts)
			.then(stream => {
				// Create AudioSource from the ctx
				const mediaStreamSource = audioInit.createMediaStreamSource(stream);
				// If the audioSource is created, resolve the promise
				return mediaStreamSource;
			}).catch(err => err);

		// Create AudioSource from the audioInit
		audSrc
			.then(data => {
				setWACState("suspended");
				return setWebAudioSource(data);
			}).catch(err => err);

		return(() => {
			if(webAudioCtx !== null && webAudioCtx !== undefined){
				webAudioCtx.close();
			}
		});
	}, []);
	
	// Context props to share with the ctx Consumer/useHook
	const value = {
		webAudioCtx,
		webAudioSource,
		wacState,
		toggleWACState 
	};
	
	return (
		<WebAudioContext.Provider value={value}>
			{children}
		</WebAudioContext.Provider>
	);
};

export default WebAudioContextProvider;

