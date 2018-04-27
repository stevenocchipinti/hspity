import React, {Component} from 'react'
import styled from 'styled-components'

import boxTitle from './boxTitle.png'
import boxCornerLeft from './boxCornerLeft.png'
import boxCornerRight from './boxCornerRight.png'
import boxSpacerTop from './boxSpacerTop.png'
import boxSpacerRight from './boxSpacerRight.png'
import boxSpacerLeft from './boxSpacerLeft.png'

import velvet from './velvet.jpg'

import 'typeface-merriweather'

const height = 86

const Box = styled.div`
  font-family: merriweather, serif;
`

const BoxSegment = styled.div`
  display: flex;
`

const LeftCorner = styled.div`
  background-image: url(${boxCornerLeft});
  height: ${height}px;
  width: 54px;
`

const RightCorner = styled.div`
  background-image: url(${boxCornerRight});
  height: ${height}px;
  width: 54px;
`

const Title = styled.div`
  background-image: url(${boxTitle});
  font-size: 12px;
  width: 231px;
  height: ${height}px;
  line-height: 40px;
  color: #151515;
  text-align: center;
  z-index: 1;
`

const TopSpacer = styled.div`
  z-index: 1;
  background-image: url(${boxSpacerTop});
  height: ${height}px;
  flex-grow: 1;
`

const LeftSpacer = styled.div`
  background-image: url(${boxSpacerLeft});
  width: 54px;
  flex-shrink: 0;
`

const RightSpacer = styled.div`
  background-image: url(${boxSpacerRight});
  width: 54px;
  flex-shrink: 0;
`

const Content = styled.div`
  background-image: url(${velvet});
  flex-grow: 1;
  padding: 40px 10px;
  margin-top: -40px;
`

class App extends Component {
  render() {
    return (
      <div>
        <Box>
          <BoxSegment>
            <LeftCorner />
            <TopSpacer />
            <Title>Add a pack</Title>
            <TopSpacer />
            <RightCorner />
          </BoxSegment>

          <BoxSegment>
            <LeftSpacer />
            <Content>This is where the content goes</Content>
            <RightSpacer />
          </BoxSegment>
        </Box>
      </div>
    )
  }
}

export default App
