# Coerus Hooks Alpha

This was made in order to combine the functionality of WebAudio,  WebSpeech, and Meyda Analyzer into an easy to use package.

## To Do

- [ ] Polyfill for WebSpeech API
- [ ] Polyfill for WebAudio API
- [ ] Polyfill for Meyda Analyzer
- [ ] Add more features
- [ ] Add more languages

## How to use

### Context: 

We have three main contexts and one higher order context:

Main Contexts:

- Coerus API
	- Coerus Allows you to use the WebAudio API and the WebSpeech API in a single package as well as Meyda in order to analyzer the WebAudio data.

- WebAudio 

	- WebAudio is a context that allows you to create audio nodes and connect them together.

- WebSpeech

	- Speech Recognition is a context that allows you to use the Speech Recognition context with the WebSpeech API.


- Meyda Analyzer

	- Meyda Analyzer is a context that allows you to use the Meyda Analyzer context with the WebAudio API.


### Hooks

- WebAudio 

	- WebAudio is a hook that allows you to create audio nodes and connect them together.

		```react
		const DemoComponent = () => {
			const webAudio = new useWAC();
			
			useEffect(() => {
				console.log(webAudio)
			}, [webAudio])

			return(
				...
			);
		}
		```

- WebSpeech

	- Speech Recognition is a hook that allows you to use the Speech Recognition hook with the WebSpeech API.

		```react
		const DemoComponent = () => {
			const speechRecognition = new useSRC();
			
			useEffect(() => {
				console.log(speechRecognition)
			}, [speechRecognition])

			return(
				...
			);
		}
		```

- Meyda Analyzer

	- Meyda Analyzer is a hook that allows you to use the Meyda Analyzer hook with a Meyda Analyzer Node Object.

		```react
		const DemoComponent = () => {
			const meydaAnalyzer = new useMeyda();
			
			useEffect(() => {
				console.log(meydaAnalyzer)
			}, [meydaAnalyzer])

			return(
				...
			);
		}
		```