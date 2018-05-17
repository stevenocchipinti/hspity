import React, {Component} from 'react'
import styled from 'styled-components'

import {TweenLite, Elastic} from 'gsap'
import TransitionGroup from 'react-addons-transition-group'

import ProgressBar from '../ProgressBar'

const FlexProgressBar = styled(ProgressBar)`
  width: 300px;
`

const hiddenStyle = {
  transform: 'translateY(300px)',
  opacity: 0,
}

class Bar extends Component {
  componentWillEnter(callback) {
    TweenLite.from('.bar', 1, {
      ...hiddenStyle,
      ease: Elastic.easeOut.config(1, 0.5),
      onComplete: () => {
        callback()
        this.props.onComplete()
      },
    })
  }

  componentWillLeave(callback) {
    TweenLite.to('.bar', 1, {
      ...hiddenStyle,
      ease: Elastic.easeIn.config(3, 0.5),
      onComplete: callback,
    })
  }

  render() {
    return (
      <FlexProgressBar
        rarity="legendary"
        numerator={25}
        denominator={40}
        className="bar"
      />
    )
  }
}

class Foo extends Component {
  state = {
    showBar: false,
  }

  render() {
    return (
      <div
        onClick={() => this.setState({showBar: true})}
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TransitionGroup>
          {this.state.showBar && (
            <Bar onComplete={() => this.setState({showBar: false})} />
          )}
        </TransitionGroup>
      </div>
    )
  }
}

export default Foo
