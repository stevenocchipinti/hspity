import React from 'react'
import styled from 'styled-components'

import headCommon from './head-common.png'
import bar from './bar.png'
import indicator from './indicator.png'
import empty from './bar-empty.png'
import cap from './bar-cap.png'

const height = 79

const Wrapper = styled.div`
  display: flex;
  height: ${height}px;
`

const Head = styled.div`
  background-image: url(${headCommon});
  width: 66px;
  flex-shrink: 0;
  z-index: 1;
`

const FullBar = styled.div`
  background-image: url(${bar});
  flex-grow: ${props => props.percentage};
  margin-left: -3px;
`

const Indicator = styled.div`
  background-image: url(${indicator});
  width: 13px;
  display: ${props => (props.visible ? 'inherit' : 'none')};
  margin-left: -13px;
`
const EmptyBar = styled.div`
  background-image: url(${empty});
  flex-grow: ${props => props.percentage};
`
const Cap = styled.div`
  background-image: url(${cap});
  width: 25px;
  margin-left: -7px;
`

const ProgressBar = ({rarity, numerator, denominator}) => {
  const percentage = Math.abs(numerator / denominator)

  return (
    <Wrapper>
      <Head rarity={rarity} />
      <FullBar percentage={percentage} />
      <Indicator visible={percentage < 1} />
      <EmptyBar percentage={1 - percentage} />
      <Cap />
      <div style={{width: 60}}>
        {numerator} / {denominator}
      </div>
    </Wrapper>
  )
}

export default ProgressBar
