import React from 'react'
import styled from 'styled-components'

const Pre = styled.pre`
  text-align: left;
  font-family: monospace;
`

export default ({children}) => <Pre>{children}</Pre>
