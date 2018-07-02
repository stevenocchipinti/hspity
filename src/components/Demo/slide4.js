import React, {Component} from 'react'
import styled from 'styled-components'
import Container from './Container'
import ProgressBar from '../ProgressBar'
import smoke from '../ProgressBar/bar-smoke.png'

const FixedProgressBar = styled(ProgressBar)`
  width: 300px;
  margin: 50px;
`

const ExplodingProgressBar = styled(ProgressBar)`
  width: 300px;
  margin: 50px;
  margin-bottom: 400px;

  & > div {
    transition: all 1s;
  }

  &:hover {
    & .progressbar-head {
      transform: translate(-50px, 100px);
    }
    & .progressbar-full {
      overflow: visible;
      transform: translate(-50px, 300px);
    }
    & .progressbar-empty {
      transform: translate(50px, 300px);
    }
    & .progressbar-indicator {
      transform: translateY(100px);
    }
    & .progressbar-cap {
      transform: translate(50px, 100px);
    }
    & .progressbar-smoke {
      transition: all 1s;
      background-repeat-y: no-repeat;
      top: -100px;
    }
  }
`

const BorderImg = styled.img`
  border: 1px solid red;
`

const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 600px;
  padding: 20px;
`

export default class Slide extends Component {
  state = {
    numerator: 20,
    denominator: 100,
  }

  render() {
    return (
      <div>
        <h2>The Progress Bar</h2>
        <p>
          <b>1px strips</b> repeated x axis
        </p>
        <p>
          <b>flex-grow ratio</b> for percentages
        </p>
        <p>
          <b>z-index stacking</b> with transparent .png files
        </p>
        <p>
          <b>CSS animations</b> and <b>overflow: hidden</b> on repeated pattern
          for the smoke
        </p>
        <Container direction="column">
          <WhiteBox>
            <BorderImg src={smoke} alt="smoke" />
          </WhiteBox>
          <a href="https://css-tricks.com/creating-a-css-sliding-background-effect">
            CSS Tricks
          </a>
          <FixedProgressBar
            rarity="epic"
            numerator={this.state.numerator}
            denominator={this.state.denominator}
            onClick={() =>
              this.setState({numerator: Math.floor(Math.random() * 100)})
            }
          />
          <ExplodingProgressBar
            headClassName="progressbar-head"
            fullClassName="progressbar-full"
            smokeClassName="progressbar-smoke"
            indicatorClassName="progressbar-indicator"
            emptyClassName="progressbar-empty"
            capClassName="progressbar-cap"
            textClassName="progressbar-text"
            rarity="legendary"
            numerator={50}
            denominator={100}
          />
        </Container>
      </div>
    )
  }
}
