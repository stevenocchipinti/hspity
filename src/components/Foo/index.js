import React, {Component} from 'react'
import styled from 'styled-components'

import {TweenLite, TimelineLite, Elastic, Power4, Back} from 'gsap'
import TransitionGroup from 'react-addons-transition-group'

import ProgressBar from '../ProgressBar'

const FlexProgressBar = styled(ProgressBar)`
  width: 300px;
}
`

class Bar extends Component {
  constructor(props) {
    super(props)
    this.state = {progress: 25}
    this.hiddenStyle = {transform: 'translateY(300px)', opacity: 0}
  }

  componentWillEnter(callback) {
    this.tl = new TimelineLite()
      .from('.bar', 1, {
        ...this.hiddenStyle,
        ease: Elastic.easeOut.config(1, 0.5),
      })
      .addLabel('bar')
      .add(() => this.setState({progress: 30}), 'bar') // This takes 1 second via CSS
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
  }

  render() {
    return (
      <FlexProgressBar
        rarity="legendary"
        numerator={this.state.progress}
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
