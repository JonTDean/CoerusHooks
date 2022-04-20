//* React imports
import { useCallback, useEffect, useState } from "react";
//* Globals
import Meyda from "meyda";
//* Context API
import SpeechRecognitionContextProvider from "../SpeechRecognitionContext/SRCProvider";
import MeydaAnalyzerContext from "./MC";
// * Hooks
import useWAC from "../WebAudioContext/useWAC";

const DEFAULT_MFCC: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0];
const MFCC_HISTORY_MAX_LENGTH: number = 60

// Create the Meyda analyzer provider 
const MeydaAnalyzerContextProvider = ({ children }: any) =>  {
	const [meydaAnalyzer, setMeydaAnalyzer] = useState<any>(null);
	const [mfccHistory, setMfccHistory] = useState<number[][]>([DEFAULT_MFCC]);
	const [currMFCC, setCurrMFCC] = useState<number[]>(DEFAULT_MFCC);
	const [currRMS, setCurrRMS] = useState<number>(0);
	const [thresholdRMS, setThresholdRMS] = useState<number>(0.002);

	// Retrieve the web audio context
	// and the web audio source node
	const webAudio = useWAC();

	// Create Meyda Analyzer
	useEffect(() => {
		if(webAudio.wacState === "running") {
			// Create Meyda Analyzer
			const meydaInit = Meyda.createMeydaAnalyzer({
				audioContext: webAudio.webAudioCtx,
				source: webAudio.webAudioSource,
				bufferSize: 512,
				featureExtractors: ['rms', 'mfcc'],
				// This Continuously calls 
				// after the analyzer is started
				callback: function(features: any) {
					setMeydaData(
						features,
						thresholdRMS, mfccHistory,
						setCurrMFCC, setCurrRMS, setMfccHistory,
					);
					debugMeyda(features);
				}
			});

			// Check Meyda Analyzer
			setMeydaAnalyzer(meydaInit);
		};

		return(()  => {
			if(meydaAnalyzer != null) {
				console.log("Stopping Meyda Analyzer...");
				meydaAnalyzer.stop();
			}
		})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [webAudio]);

	const value = {
		meydaAnalyzer,
	};

	return (
		<MeydaAnalyzerContext.Provider value={value}>
			{children}
		</MeydaAnalyzerContext.Provider>
	);
};

const debugMeyda = (features: any) => {
	console.log("FEATURES: ", features);
	console.log("RMS: ", features.rms);
	console.log("MFCC: ", features.mfcc);
	console.log("MFCC LENGTH: ", features.mfcc.length);
	console.log("MFCC: ", features.mfcc[0]);
	features.mfcc.map((e: any, i: any) => {
		console.log(`MFCC #${i}: `, e);
	})
};

const setMeydaData = (features: any,  thresholdRMS: any, mfccHistory: any, setCurrMFCC: any, setCurrRMS: any,  setMfccHistory: any) => {
	let mfcc = features["mfcc"];	
	let rms = features["rms"];
	setCurrMFCC(mfcc);
	setCurrRMS(rms);

	if(mfccHistory != undefined){
		// only push mfcc where some audio is present
		if (rms > thresholdRMS) 
			setMfccHistory((prev: number[][]) => [...prev, mfcc]);

		// remove past mfcc values
		if(mfccHistory.length > MFCC_HISTORY_MAX_LENGTH)
			setMfccHistory((prev: number[][]) => prev.splice(0,1));
	}
}

export default  MeydaAnalyzerContextProvider;