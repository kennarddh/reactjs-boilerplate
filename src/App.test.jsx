import React from 'react'

import { render, screen } from '@testing-library/react'

import App from '@/App'

test('loads and displays greeting', () => {
	render(<App />)

	expect(screen.getByTestId('custom-element')).toHaveTextContent('heading')
})
