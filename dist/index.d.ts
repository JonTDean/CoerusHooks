/// <reference types="react" />
declare const SpeechRecognitionContextProvider: ({ children }: any) => JSX.Element;

declare const WebAudioContextProvider: ({ children }: any) => JSX.Element;

declare const MeydaAnalyzerContextProvider: ({ children }: any) => JSX.Element;

declare const useMC: () => any;

declare const useSRC: () => any;

declare const useWAC: () => any;

export { MeydaAnalyzerContextProvider, SpeechRecognitionContextProvider, WebAudioContextProvider, useMC, useSRC, useWAC };
