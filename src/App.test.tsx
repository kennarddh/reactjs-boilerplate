import { render, screen } from '@testing-library/react'

import App from 'App'

describe('App', () => {
	it('Should have text heading', () => {
		expect.assertions(1)

		render(<App />)

		expect(screen.getByTestId('custom-element')).toHaveTextContent(
			'heading'
		)
	})
})
