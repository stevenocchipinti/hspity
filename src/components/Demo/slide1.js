import React from 'react'
import styled from 'styled-components'
import myHearthstone from '../Homepage/heading.png'
import realHearthstone from './hearthstone-logo.jpg'
import Container from './container'

const Heading = styled.img`
  position: absolute;
  width: 100%;
  max-width: 600px;
  &:hover {
    opacity: 0;
  }
`

const FixedContainer = styled(Container)`
  height: 500px;
`

export default () => (
  <div>
    <h2>The logo</h2>
    <p>All the gimp</p>
    <FixedContainer>
      <Heading hideable src={myHearthstone} alt="HS Pity" />
      <Heading src={realHearthstone} alt="HS Pity" />
    </FixedContainer>
  </div>
)
