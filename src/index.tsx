import React from 'react'

import { createRoot } from 'react-dom/client'

import App from './App'
import GlobalStyle from './Styles'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!)

root.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
)
