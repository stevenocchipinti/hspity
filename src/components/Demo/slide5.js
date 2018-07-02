import React, {Component} from 'react'
import TransitionGroup from 'react-addons-transition-group'
import Container from './Container'
import AddingPack from '../AddingPack'
import CardButton from '../CardButton'
import Code from './Code'

export default class Slide extends Component {
  state = {
    numerator: 20,
    denominator: 100,
    addingPack: false,
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({numerator: Math.floor(Math.random() * 100)}),
      3000,
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const {addingPack} = this.state
    return (
      <div>
        <h2>Interaction Animation</h2>
        <p>
          Needed something to show the user had <b>clicked</b>
        </p>
        <p>
          <b>Greensock Animation Platform</b> (GSAP) is awesome
        </p>
        <p>
          <b>filter: drow-shadow</b> instead of box-shadow because not a box
        </p>
        <Container direction="column">
          <CardButton onClick={() => this.setState({addingPack: true})}>
            Submit
          </CardButton>

          <Code>{`
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
          `}</Code>

          <TransitionGroup>
            {addingPack && (
              <AddingPack
                oldTimers={{epic: 4, legendary: 4}}
                newTimers={{epic: 5, legendary: 5}}
                onComplete={() => this.setState({addingPack: false})}
              />
            )}
          </TransitionGroup>
        </Container>
      </div>
    )
  }
}
