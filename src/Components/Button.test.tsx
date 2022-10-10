import { render } from '@testing-library/react'

import Button from './Button'

describe('button', () => {
	it('should render button', () => {
		expect.assertions(1)

		const { getByText } = render(<Button>Button</Button>)

		expect(getByText('Button')).toBeInTheDocument()
	})

	it('should snapshot button', () => {
		expect.assertions(1)

		const { asFragment } = render(<Button />)

		expect(asFragment()).toMatchSnapshot()
	})
})
