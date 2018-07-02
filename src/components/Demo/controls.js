import React, {Component} from 'react'
import styled from 'styled-components'

const Button = styled.button`
  position: absolute;
  top: 50vh;
  background-color: black;
  border: none;
  font-size: 5em;
  outline: none;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
  &:disabled {
    opacity: 0.1;
  }
`
const LeftButton = styled(Button)`
  left: 0;
`
const RightButton = styled(Button)`
  right: 0;
`

class Controls extends Component {
  callbacks = e => {
    const action = {
      37: () => this.goToPrevSlide(), // Left
      39: () => this.goToNextSlide(), // Right
      72: () => this.goToPrevSlide(), // h
      76: () => this.goToNextSlide(), // l
    }[e.keyCode]
    action && action()
  }

  componentDidMount() {
    document.addEventListener('keyup', this.callbacks)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.callbacks)
  }

  validatedSlide(i) {
    return i >= 0 && i < this.props.slides.length ? i + 1 : null
  }

  prevSlide() {
    return this.validatedSlide(this.props.match.params.slide - 1 - 1)
  }

  nextSlide() {
    return this.validatedSlide(this.props.match.params.slide - 1 + 1)
  }

  goToPrevSlide() {
    this.prevSlide() && this.props.history.push(`/demo/${this.prevSlide()}`)
  }

  goToNextSlide() {
    this.nextSlide() && this.props.history.push(`/demo/${this.nextSlide()}`)
  }

  render() {
    return (
      <div>
        <LeftButton
          disabled={!this.prevSlide()}
          onClick={() => this.goToPrevSlide()}
        >
          &lsaquo;
        </LeftButton>
        <RightButton
          disabled={!this.nextSlide()}
          onClick={() => this.goToNextSlide()}
        >
          &rsaquo;
        </RightButton>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default Controls
