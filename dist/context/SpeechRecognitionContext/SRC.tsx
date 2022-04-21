import { createContext } from 'react';

// Create the Speech Recognition Context
const SpeechRecognitionContext = createContext<any>({
	SpeechRecognition: null
});

export default SpeechRecognitionContext;
