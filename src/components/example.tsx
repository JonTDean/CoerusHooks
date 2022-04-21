import React from 'react'
import CoerusContextProvider from '../context'

const Example = ({children}: any) => {
	return (
	<CoerusContextProvider>
		{children}
	</CoerusContextProvider>
  )
}

export default Example