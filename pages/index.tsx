import type { NextPage } from 'next';
import { useCallback, useEffect, useRef } from 'react';
import useMC from '../context/MeydaContext/useMC';
import useSRC from '../context/SpeechRecognitionContext/useSRC';
import useWAC from '../context/WebAudioContext/useWAC';

const Home: NextPage = () => {
	const speechRecognition = useSRC();
	const webAudio = useWAC();
	const { meydaAnalyzer } = useMC();

	useEffect(() => {
		console.log("SpeechRecognitionContext IN Home.tsx: ", speechRecognition);
		console.log("Web Audio: ", webAudio);
		console.log("Web Audio Context: ",webAudio?.webAudioCtx);
		console.log("Meyda Analyzer: ", meydaAnalyzer);
	}, [meydaAnalyzer, speechRecognition, webAudio]);

	return (
		<div>
			<p>Index Page for Context API</p>
			<p>Web Audio: {webAudio?.wacState}</p>
			<button onClick={() => webAudio.toggleWACState()}>Web Audio {webAudio?.wacState != "running" ? "Start" : "Stop"}</button>
		</div>
	)
}

export default Home;
