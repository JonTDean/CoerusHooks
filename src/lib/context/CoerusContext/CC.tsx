import { createContext } from 'react';

// Create the Speech Recognition Context
const CoerusContext = createContext<any>({
	AudioSate: null,
	MeydaState: null,
});

export default CoerusContext;
