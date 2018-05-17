import React, {createRef, Component} from 'react'

import {TweenLite, TimelineLite, Elastic} from 'gsap'
import TransitionGroup from 'react-addons-transition-group'

class Foo extends Component {
  constructor(props) {
    super(props)
    this.barRef = createRef()
  }

  componentDidMount() {
    TweenLite.from('.bar', 1, {
      delay: 1,
      transform: 'translateY(300px)',
      opacity: 0,
      ease: Elastic.easeOut.config(1, 0.5),
    })
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="bar">bar</div>
      </div>
    )
  }
}

export default Foo
