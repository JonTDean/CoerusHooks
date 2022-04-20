import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CoerusContextProvider from '../context/CoerusContext/CCProvider';
import WebAudioContextProvider from '../context/WebAudioContext/WACProvider';
import SpeechRecognitionContextProvider from '../context/SpeechRecognitionContext/SRCProvider';
import MeydaAnalyzerContextProvider from '../context/MeydaContext/MCProvider';
import useMC from '../context/MeydaContext/useMC';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
	<CoerusContextProvider>
		<Component {...pageProps} />
	</CoerusContextProvider>
  );
};

export default MyApp;