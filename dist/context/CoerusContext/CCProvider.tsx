//* React imports
import { useEffect, useState } from "react";
//* Context API
import SpeechRecognitionContextProvider from "../SpeechRecognitionContext/SRCProvider";
import WebAudioContextProvider from "../WebAudioContext/WACProvider";
import MeydaAnalyzerContextProvider from "../MeydaContext/MCProvider";
//* Hooks
import useSRC from "../../hooks/useSRC";
import useWAC from "../../hooks/useWAC";
import useMC from "../../hooks/useMC";
//* Globals
import Meyda from "meyda";
import CoerusContext from "./CC";

// Create the Coerus Context provider 
const CoerusContextProvider = ({ children }: any) =>  {

	const value = {
		// webAudio
	};

	return (
		<WebAudioContextProvider>
			<SpeechRecognitionContextProvider>
				<MeydaAnalyzerContextProvider>
					<CoerusContext.Provider value={value}>
						{children}
					</CoerusContext.Provider>
				</MeydaAnalyzerContextProvider>
			</SpeechRecognitionContextProvider>
		</WebAudioContextProvider>
	);
}

export default CoerusContextProvider;