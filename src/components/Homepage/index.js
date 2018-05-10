import React from 'react'
import styled from 'styled-components'

import SubmitButton from '../SubmitButton'
import CircularProgress from '../CircularProgress'

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

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? 1 : 0)};
  z-index: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`

const LoadingMessage = styled.div`
  margin: 20px 0;
`

const Loading = ({visible}) => (
  <Overlay visible={visible}>
    <CircularProgress />
    <LoadingMessage>Loading...</LoadingMessage>
  </Overlay>
)

const Homepage = ({onClick, loading}) => (
  <Wrapper>
    <Loading visible={loading} />
    <Heading src={heading} alt="HS Pity" />
    <Parchment>
      Track your pack openings to predict your next legendary!
    </Parchment>
    <SubmitButton onClick={onClick}>Log In</SubmitButton>
  </Wrapper>
)

export default Homepage
