import React, { useCallback, useEffect, useRef } from 'react';
import useMC from '../context/MeydaContext/useMC';
import useSRC from '../context/SpeechRecognitionContext/useSRC';
import useWAC from '../context/WebAudioContext/useWAC';

const Example = () => {
	const { speechRecognition } = useSRC();
	const webAudio = useWAC();
	const { meydaAnalyzer } = useMC();

	useEffect(() => {
		console.log("SpeechRecognitionContext IN Home.tsx: ", speechRecognition);
		console.log("Web Audio: ", webAudio);
		console.log("Web Audio Context: ",webAudio?.webAudioCtx);
		console.log("Meyda Analyzer: ", meydaAnalyzer);
		console.log("Meyda Analyzer State: ", meydaAnalyzer?._m?.EXTRACTION_STARTED);
	}, [meydaAnalyzer, speechRecognition, webAudio]);


	return (
		<div>
			<p>Index Page for Context API</p>
			<p>Web Audio: {webAudio?.wacState}</p>
			<p>Speech Recognition State: {speechRecognition.lang.length > 1 ? "On" : "Off"}</p>
			<p>Meyda State: {meydaAnalyzer?._m?.EXTRACTION_STARTED ? "On" : "Off"} </p>
			<button onClick={() => webAudio.toggleWACState()}>Web Audio {webAudio?.wacState != "running" ? "Start" : "Stop"}</button>
		</div>
	)
}

export default Example