/* eslint-disable jest/require-hook */
import React from 'react'
import ReactDOM from 'react-dom/client'

/* eslint-disable-next-line import/extensions, import/no-unresolved */
import App from './App'

/* eslint-disable-next-line import/extensions, import/no-unresolved */
import GlobalStyle from './Styles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
)
