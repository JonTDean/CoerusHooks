import { createContext } from 'react';

// Create the Speech Recognition Context
const WebAudioContext = createContext<any>({
	webAudioCtx: null,
	webAudioSource: null,
});

export default WebAudioContext;
