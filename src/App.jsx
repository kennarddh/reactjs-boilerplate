import React, { useState } from 'react'

import ReactLogo from '@/Assets/React.svg'
import ViteLogo from '@/Assets/Vite.svg'

import '@/App.css'

const App = () => {
	const [Count, SetCount] = useState(0)

	return (
		<div className='App'>
			<div>
				<a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
					<img src={ViteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://reactjs.org' target='_blank' rel='noreferrer'>
					<img
						src={ReactLogo}
						className='logo react'
						alt='React logo'
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => SetCount(count => count + 1)}>
					count is {Count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</div>
	)
}

export default App
