import React from 'react'
import styled from 'styled-components'
import CircularProgress from '../CircularProgress'
import Container from './Container'
import Code from './Code'

const Spinner = styled(CircularProgress)`
  &:hover {
    .spinner-empty {
      transition: transform 1s;
      transform: translateY(300px);
      border: 1px solid red;
    }
    .spinner-full {
      border: 1px solid blue;
    }
  }
`

export default () => (
  <div>
    <h2>The Spinner</h2>
    <p>
      The easy one, <b>absolute positioning</b> and <b>CSS transform</b>
    </p>
    <Container>
      <Spinner emptyClassName="spinner-empty" fullClassName="spinner-full" />

      <Code>{`
        animation: spin 7s linear infinite;

        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</Code>
    </Container>
  </div>
)
