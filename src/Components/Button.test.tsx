import { render } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
	it('Should render button', () => {
		expect.assertions(1)

		const { getByText } = render(<Button />)

		expect(getByText('Button')).toBeInTheDocument()
	})

	it('Should Snapshot Button', () => {
		expect.assertions(1)

		const { asFragment } = render(<Button />)

		expect(asFragment()).toMatchSnapshot()
	})
})
