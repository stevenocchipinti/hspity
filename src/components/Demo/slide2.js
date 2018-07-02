import React from 'react'
import styled from 'styled-components'
import CircularProgress from '../CircularProgress'
import Container from './container'

const Spinner = styled(CircularProgress)`
  &:hover {
    .spinner-empty {
      transition: transform 1s;
      transform: translateX(-200px);
      border: 1px solid red;
    }
    .spinner-full {
      border: 1px solid blue;
    }
  }
`

const Pre = styled.pre`
  text-align: left;
  font-family: monospace;
`

export default () => (
  <div>
    <h2>The Spinner</h2>
    <p>The easy one</p>
    <Container>
      <Spinner emptyClassName="spinner-empty" fullClassName="spinner-full" />

      <code>
        <Pre>{`
        animation: spin 7s linear infinite;

        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</Pre>
      </code>
    </Container>
  </div>
)
