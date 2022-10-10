import styled from 'styled-components'

import { Props } from './Types'

const Button = styled.button<Partial<Props>>`
	color: ${({ red }) => (red ? '#ff0000' : '#0000ff')};
`

export default Button
