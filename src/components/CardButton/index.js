import React from 'react'
import styled from 'styled-components'

import cardButton from './CardButton.png'

const Button = styled.button`
  height: 74px;
  width: 200px;
  background-image: url(${cardButton});
  background-color: rgba(0, 0, 0, 0);
  background-size: cover;
  border: none;
  padding: 15px 30px 0 0;
  text-align: right;
  font-size: 24px;
`

const CardButton = ({children, onClick}) => (
  <Button width={200} onClick={onClick}>
    {children}
  </Button>
)

export default CardButton
