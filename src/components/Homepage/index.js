import React from 'react'
import styled from 'styled-components'

import SubmitButton from '../SubmitButton'

import heading from './heading.png'
import parchment from './parchment.png'
import background from './background.jpg'

const Heading = styled.img`
  width: 100%;
  max-width: 600px;
`

const Parchment = styled.div`
  background-image: url(${parchment});
  background-size: contain;
  background-repeat: no-repeat;
  height: 190px;
  width: 100%;
  max-width: 600px;
  display: flex;
  padding: 20px 30px;
  background-position: center;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  justify-content: space-around;

  &::before {
    content: '';
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`

const Homepage = ({onClick}) => (
  <Wrapper>
    <Heading src={heading} alt="HS Pity" />
    <Parchment>
      Track your pack openings to predict your next legendary!
    </Parchment>
    <SubmitButton onClick={onClick}>Log In</SubmitButton>
  </Wrapper>
)

export default Homepage
