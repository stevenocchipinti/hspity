import React, {Component} from 'react'
import styled from 'styled-components'

import boxTitle from './boxTitle.png'
import boxCornerLeft from './boxCornerLeft.png'
import boxCornerRight from './boxCornerRight.png'
import boxSpacerTop from './boxSpacerTop.png'
import 'typeface-merriweather'

const height = 86

// const Box = styled.div`
//   background-image: url(${parchment});
// `

const BoxTop = styled.div`
  display: flex;
`

const LeftCorner = styled.div`
  background-image: url(${boxCornerLeft});
  height: ${height}px;
  width: 42px;
`

const RightCorner = styled.div`
  background-image: url(${boxCornerRight});
  height: ${height}px;
  width: 42px;
`

const Title = styled.div`
  background-image: url(${boxTitle});
  font-family: merriweather, serif;
  font-size: 12px;
  width: 231px;
  height: ${height}px;
  line-height: 40px;
  color: #151515;
  text-align: center;
`

const TopSpacer = styled.div`
  background-image: url(${boxSpacerTop});
  height: ${height}px;
  flex-grow: 1;
`

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <BoxTop>
            <LeftCorner />
            <TopSpacer />
            <Title>Add a pack</Title>
            <TopSpacer />
            <RightCorner />
          </BoxTop>
        </div>
      </div>
    )
  }
}

export default App
