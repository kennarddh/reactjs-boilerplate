import { render, screen } from '@testing-library/react'

import App from './App'

describe('app', () => {
	it('should have text heading', () => {
		expect.assertions(1)

		render(<App />)

		expect(screen.getByTestId('custom-element')).toHaveTextContent(
			'heading'
		)
	})
})
