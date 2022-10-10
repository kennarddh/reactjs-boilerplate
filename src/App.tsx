import { FC } from 'react'

import Button from 'Components/Button'

const App: FC = () => {
	return (
		<div>
			<div data-testid='custom-element'>heading</div>
			<Button>Blue Button</Button>
			<Button red>Red Button</Button>
		</div>
	)
}

export default App
