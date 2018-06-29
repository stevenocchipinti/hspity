import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Slide1 from './slide1.js'
import Slide2 from './slide2.js'
import Slide3 from './slide3.js'
import Slide4 from './slide4.js'

const slides = [Slide1, Slide2, Slide3, Slide4]

const Layout = styled.main`
  text-align: center;
`

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

const Controls = ({children, match, history}) => {
  const validatedSlide = i => (i >= 0 && i < slides.length ? i + 1 : null)
  const prevSlide = validatedSlide(match.params.slide - 1 - 1)
  const nextSlide = validatedSlide(match.params.slide - 1 + 1)

  return (
    <div>
      <h1>Demo</h1>
      <LeftButton
        disabled={!prevSlide}
        onClick={() => prevSlide && history.push(`/demo/${prevSlide}`)}
      >
        &lsaquo;
      </LeftButton>
      <RightButton
        disabled={!nextSlide}
        onClick={() => nextSlide && history.push(`/demo/${nextSlide}`)}
      >
        &rsaquo;
      </RightButton>
      <div>{children}</div>
    </div>
  )
}

export default slide => (
  <Router>
    <Layout>
      <Route path="/demo/:slide" component={Controls} />
      <Switch>
        <Redirect exact from="/demo" to="/demo/1" />
        {slides.map((slide, i) => (
          <Route key={i} path={`/demo/${i + 1}`} component={slide} />
        ))}
      </Switch>
    </Layout>
  </Router>
)
