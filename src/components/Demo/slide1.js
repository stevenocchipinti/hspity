import React from 'react'
import styled from 'styled-components'
import myHearthstone from '../Homepage/heading.png'
import realHearthstone from './hearthstone-logo.jpg'

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`

const Heading = styled.img`
  position: absolute;
  width: 100%;
  max-width: 600px;
  &:hover {
    opacity: 0;
  }
`

export default () => (
  <div>
    <h2>The logo</h2>
    <p>All the gimp</p>
    <Container>
      <Heading hideable src={myHearthstone} alt="HS Pity" />
      <Heading src={realHearthstone} alt="HS Pity" />
    </Container>
  </div>
)
