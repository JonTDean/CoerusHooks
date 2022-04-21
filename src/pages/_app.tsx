import type { AppProps } from 'next/app'
import CoerusContextProvider from '../context/CoerusContext/CCProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
	<CoerusContextProvider>
		<Component {...pageProps} />
	</CoerusContextProvider>
  );
};

export default MyApp;