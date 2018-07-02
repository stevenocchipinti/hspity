import React from 'react'
import styled from 'styled-components'

import empty from './circular-progress-empty.png'
import full from './circular-progress-full.png'

const size = 200

const Wrapper = styled.div`
  height: ${size}px;
  width: ${size}px;
  position: relative;
`

const Empty = styled.div`
  height: ${size}px;
  width: ${size}px;
  position: absolute;
  background-image: url(${empty});
  background-size: contain;
`

const Full = styled.div`
  height: ${size}px;
  width: ${size}px;
  position: absolute;
  background-image: url(${full});
  background-size: contain;
  animation: spin 7s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`

const CircularProgress = ({
  emptyClassName = '',
  fullClassName = '',
  ...props
}) => (
  <Wrapper {...props}>
    <Empty className={emptyClassName} />
    <Full className={fullClassName} />
  </Wrapper>
)

export default CircularProgress
