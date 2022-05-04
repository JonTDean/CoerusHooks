export {}; // Default Exports

// Delare window interface to stop
// node from bugging out. 
// The node environment is breaking
// which is not really okay; we 
// need to get this to work which
// is why we need to add the definitions
// to the Node global interface.

// Eventually this will be packaged with
// a custom SpeechRecognition service.
declare global {
    interface Window {
        SpeechRecognition:any;
		webkitSpeechRecognition: any;
		mozSpeechRecognition: any;
		msSpeechRecognition: any;
		oSpeechRecognition: any;
    }
};
