import useCoerus from './hooks/useCoerus';
import useMC from './hooks/useMC';
import useSRC from './hooks/useSRC';
import useWAC from './hooks/useWAC';
import CoerusContextProvider from './context/CoerusContext/CCProvider';
import SpeechRecognitionContextProvider from "./context/SpeechRecognitionContext/SRCProvider";
import WebAudioContextProvider from "./context/WebAudioContext/WACProvider";
import MeydaAnalyzerContextProvider from "./context/MeydaContext/MCProvider";

export default CoerusContextProvider;

export {
	// Hooks
	useCoerus,
	useMC,
	useSRC,
	useWAC,
	// Contexts
	SpeechRecognitionContextProvider,
	WebAudioContextProvider,
	MeydaAnalyzerContextProvider,
};