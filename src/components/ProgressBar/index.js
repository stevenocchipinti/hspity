import React from 'react'
import styled from 'styled-components'

import headCommon from './head-common.png'
import headRare from './head-rare.png'
import headEpic from './head-epic.png'
import headLegendary from './head-legendary.png'
import bar from './bar.png'
import smoke from './bar-smoke.png'
import indicator from './indicator.png'
import empty from './bar-empty.png'
import cap from './bar-cap.png'

const headGems = {
  common: headCommon,
  rare: headRare,
  epic: headEpic,
  legendary: headLegendary,
}

const height = 79

const Wrapper = styled.div`
  display: flex;
  height: ${height}px;
  position: relative;
`

const Head = styled.div`
  background-image: url(${props => headGems[props.rarity]});
  width: 66px;
  flex-shrink: 0;
  z-index: 2;
`

const FullBar = styled.div`
  position: relative;
  background-image: url(${bar});
  flex-grow: ${props => props.percentage};
  margin-left: -3px;
  overflow: hidden;
`
const Smoke = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${smoke});
  height: 560px;
  width: 5076px;
  animation: slide 120s linear infinite;
  @keyframes slide {
    0% {
      transform: translate3d(-1692px, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
`

const Indicator = styled.div`
  background-image: url(${indicator});
  width: 13px;
  display: ${props => (props.visible ? 'inherit' : 'none')};
  margin-left: -13px;
  z-index: 1;
`
const EmptyBar = styled.div`
  background-image: url(${empty});
  flex-grow: ${props => props.percentage};
`
const Cap = styled.div`
  background-image: url(${cap});
  width: 25px;
  margin-left: -7px;
  z-index: 1;
`

const Text = styled.div`
  position: absolute;
  line-height: 70px;
  z-index: 1;
  width: 100%;
  text-align: center;
  padding-left: 66px;
  padding-right: 20px;
`

const ProgressBar = ({rarity, numerator, denominator}) => {
  const percentage = Math.abs(numerator / denominator)

  return (
    <Wrapper>
      <Head rarity={rarity} />
      <FullBar percentage={percentage}>
        <Smoke />
      </FullBar>
      <Indicator visible={percentage < 1} />
      <EmptyBar percentage={1 - percentage} />
      <Cap />
      <Text>{denominator - numerator} left</Text>
    </Wrapper>
  )
}

export default ProgressBar
