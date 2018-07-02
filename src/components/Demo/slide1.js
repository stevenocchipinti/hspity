import React from 'react'
import styled from 'styled-components'
import myHearthstone from '../Homepage/heading.png'
import realHearthstone from './hearthstone-logo.jpg'
import Container from './Container'

const Heading = styled.img`
  position: absolute;
  width: 100%;
  max-width: 600px;
  transition: all 0.5s;
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
    <p>Was going to hack up the image, too hard</p>
    <p>I suck at graphic design</p>
    <FixedContainer>
      <Heading hideable src={myHearthstone} alt="HS Pity" />
      <Heading src={realHearthstone} alt="HS Pity" />
    </FixedContainer>
  </div>
)
