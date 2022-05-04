import React from 'react';
import CoerusContextProvider from '../context';
import Example from './Example';

function App() {

 	return (
		<CoerusContextProvider>
			<p>Hello</p>
			<Example />
		</CoerusContextProvider>
	);
}

export default App;
