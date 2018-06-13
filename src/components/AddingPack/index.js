// TODO: Get rid of magic numbers!
import React, {Component} from 'react'
import styled from 'styled-components'

import {TweenLite, TimelineLite, Elastic, Power4, Back} from 'gsap'

import ProgressBar from '../ProgressBar'

const FlexProgressBar = styled(ProgressBar)`
  width: 300px;
  margin: 20px 0;
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

const Overlay = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`

class AddingPack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: {
        legendaries: props.oldTimers.legendary,
        epics: props.oldTimers.epic,
      },
    }
    this.hiddenStyle = {transform: 'translateY(300px)', opacity: 0}
  }

  progress() {
    this.setState({
      progress: {
        legendaries: this.props.newTimers.legendary,
        epics: this.props.newTimers.epic,
      },
    })
  }

  componentWillEnter(callback) {
    this.tl = new TimelineLite()
      .staggerFrom(
        '.bar',
        1,
        {...this.hiddenStyle, ease: Elastic.easeOut.config(1, 0.5)},
        0.1,
      )
      .from('.overlay', 0.5, {autoAlpha: 0}, 0)

      .addLabel('bar')
      // This takes 1 second via CSS
      .add(() => this.progress(), 'bar')
      .to('.bar', 0.2, {transform: 'scale(1.1)', ease: Power4.easeIn}, 'bar')
      .to('.bar', 0.8, {transform: 'scale(1)', ease: Power4.easeOut})

      .add(() => this.props.onComplete(), '+=0.5')
    callback()
  }

  componentWillLeave(callback) {
    TweenLite.to('.bar', 0.5, {
      ...this.hiddenStyle,
      ease: Back.easeIn.config(2),
      onComplete: callback,
    })
    TweenLite.to('.overlay', 1, {autoAlpha: 0}, 0)
  }

  render() {
    return (
      <Wrapper>
        <Overlay className="overlay" />
        <FlexProgressBar
          rarity="legendary"
          numerator={this.state.progress.legendaries}
          denominator={40}
          className="bar"
        />
        <FlexProgressBar
          rarity="epic"
          numerator={this.state.progress.epics}
          denominator={10}
          className="bar"
        />
      </Wrapper>
    )
  }
}

export default AddingPack
