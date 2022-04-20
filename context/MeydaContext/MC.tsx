import { createContext } from 'react';

// Create the Speech Recognition Context
const MeydaAnalyzerContext = createContext<any>({
	MeydaAnalyzer: null,
});

export default MeydaAnalyzerContext;
