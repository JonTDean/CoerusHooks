import React, { useEffect } from 'react'
import { ExampleMC, ExampleSRC, ExampleWAC } from './examples/index';

const Example = () => {
	return (
		<div>
			<ExampleWAC/>
			<hr/>
			<ExampleMC/>
			<hr/>
			<ExampleSRC/>
		</div>
  )
}

export default Example