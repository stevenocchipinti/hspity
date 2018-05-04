import React from 'react'
import styled from 'styled-components'

import submitButton from './SubmitButton.png'

const Button = styled.button`
  height: 175px;
  width: 290px;
  background-image: url(${submitButton});
  background-color: rgba(0, 0, 0, 0);
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  font-size: 28px;
  outline: none;
  padding-bottom: 10px;

  &:focus {
    filter: drop-shadow(0 0 2px #55ffff) drop-shadow(0 0 2px #55ffff)
      drop-shadow(0 0 2px #55ffff) drop-shadow(0 0 2px #55ffff)
      drop-shadow(0 0 2px #55ffff);
  }
`

const SubmitButton = ({onClick, children}) => (
  <Button onClick={onClick}>{children}</Button>
)

export default SubmitButton
