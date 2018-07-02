import React, {Component} from 'react'
import {TimelineLite, Elastic} from 'gsap'
import styled from 'styled-components'
import Container from './container'
import Box from '../Box'
import velvet from '../Box/velvet.jpg'

const Tiles = styled.div`
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  position: relative;
  height: 300px;
  width: 300px;
  margin: 50px;
`

const positions = {
  center: {top: '100px', left: '100px'},
  north: {top: 0, left: '100px'},
  'north-east': {top: 0, left: '200px'},
  east: {top: '100px', left: '200px'},
  'south-east': {top: '200px', left: '200px'},
  south: {top: '200px', left: '100px'},
  'south-west': {top: '200px', left: 0},
  west: {top: '100px', left: 0},
  'north-west': {top: 0, left: 0},
}

const TileImg = styled.img`
  position: absolute;
  top: ${({position}) => positions[position].top};
  left: ${({position}) => positions[position].left};
`

const Tile = ({position}) => (
  <TileImg
    className="tile-img"
    position={position}
    width="100px"
    height="100px"
    src={velvet}
    alt="velvet"
  />
)

const ExplodingBox = styled(Box)`
  margin-bottom: 300px;
  &:hover {
    & div {
      transition: margin 1s;
      margin: 10px;
    }
  }
`

export default class Slide extends Component {
  componentDidMount() {
    this.tl = new TimelineLite({paused: true}).staggerFrom(
      '.tile-img',
      1,
      {top: '100px', left: '100px', ease: Elastic.easeOut.config(1, 0.5)},
      0.1,
    )
  }

  render() {
    return (
      <div>
        <h2>The Box</h2>
        <p>Corner pieces and repeated patterns</p>
        <Container direction="column">
          <Tiles
            onMouseEnter={() => this.tl.play()}
            onMouseLeave={() => this.tl.reverse()}
          >
            <Tile position="center" />
            <Tile position="north" />
            <Tile position="north-east" />
            <Tile position="east" />
            <Tile position="south-east" />
            <Tile position="south" />
            <Tile position="south-west" />
            <Tile position="west" />
            <Tile position="north-west" />
          </Tiles>

          <ExplodingBox title="demo">
            Demo demo demo demo demo demo demo demo demo
          </ExplodingBox>
        </Container>
      </div>
    )
  }
}
