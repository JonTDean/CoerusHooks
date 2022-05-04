// Import all state contexts
import CoerusContextProvider, {
	SpeechRecognitionContextProvider,
	WebAudioContextProvider,
	MeydaAnalyzerContextProvider,
} from './lib/context'; 

// Import all Hooks
import useCoerus, {
	useMC,
	useSRC,
	useWAC,
} from './lib/hooks';

// Export all state contexts
export {
	CoerusContextProvider,
	SpeechRecognitionContextProvider,
	WebAudioContextProvider,
	MeydaAnalyzerContextProvider,
}

// Export all Hooks
export {
	useCoerus,
	useMC,
	useSRC,
	useWAC,
}