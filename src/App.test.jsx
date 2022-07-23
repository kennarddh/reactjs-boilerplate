import React from 'react'

import { render, screen } from '@testing-library/react'

import App, { Button } from '@/App'

describe('app', () => {
	it('should have text heading', () => {
		expect.assertions(1)

		render(<App />)

		expect(screen.getByTestId('custom-element')).toHaveTextContent(
			'heading'
		)
	})

	it('should render button', () => {
		expect.assertions(1)

		const { asFragment } = render(<Button />)

		expect(asFragment()).toMatchSnapshot()
	})
})
