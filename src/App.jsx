import React from 'react'

import styled from 'styled-components'

export const Button = styled.button`
	color: red;
`

const App = () => {
	return (
		<div>
			<div data-testid='custom-element'>heading</div>
			<Button data-testid='button'>Test</Button>
		</div>
	)
}

export default App
