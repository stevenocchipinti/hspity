import React from 'react'
import styled from 'styled-components'

import boxCornerLeft from './boxCornerLeft.png'
import boxSpacerTop from './boxSpacerTop.png'
import boxTitle from './boxTitle.png'
import boxCornerRight from './boxCornerRight.png'

import boxSpacerLeft from './boxSpacerLeft.png'
import velvet from './velvet.jpg'
import boxSpacerRight from './boxSpacerRight.png'

import boxCornerBottomLeft from './boxCornerBottomLeft.png'
import boxSpacerBottom from './boxSpacerBottom.png'
import boxCornerBottomRight from './boxCornerBottomRight.png'

import 'typeface-merriweather'

const segmentHeight = 109

const Box = styled.div`
  font-family: merriweather, serif;
  line-height: 22px;
  margin: 20px 5px;
`

const BoxSegment = styled.div`
  display: flex;
`

const LeftCorner = styled.div`
  background-image: url(${boxCornerLeft});
  height: ${segmentHeight}px;
  width: 54px;
`

const RightCorner = styled.div`
  background-image: url(${boxCornerRight});
  height: ${segmentHeight}px;
  width: 54px;
`

const LeftBottomCorner = styled.div`
  background-image: url(${boxCornerBottomLeft});
  height: ${segmentHeight}px;
  width: 54px;
`

const RightBottomCorner = styled.div`
  background-image: url(${boxCornerBottomRight});
  height: ${segmentHeight}px;
  width: 54px;
`

const Title = styled.div`
  background-image: url(${boxTitle});
  font-size: 12px;
  width: 231px;
  height: ${segmentHeight}px;
  line-height: 40px;
  color: #151515;
  text-align: center;
  z-index: 1;
`

const BottomSpacer = styled.div`
  z-index: 1;
  background-image: url(${boxSpacerBottom});
  height: ${segmentHeight}px;
  flex-grow: 1;
`

const TopSpacer = styled.div`
  z-index: 1;
  background-image: url(${boxSpacerTop});
  height: ${segmentHeight}px;
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
  padding: 30px 15px 15px;
  margin-top: -50px;
  margin-bottom: -70px;
`
const FancyBox = ({title, children}) => (
  <Box>
    <BoxSegment>
      <LeftCorner />
      <TopSpacer />
      <Title>{title}</Title>
      <TopSpacer />
      <RightCorner />
    </BoxSegment>

    <BoxSegment>
      <LeftSpacer />
      <Content>{children}</Content>
      <RightSpacer />
    </BoxSegment>

    <BoxSegment>
      <LeftBottomCorner />
      <BottomSpacer />
      <RightBottomCorner />
    </BoxSegment>
  </Box>
)

export default FancyBox
