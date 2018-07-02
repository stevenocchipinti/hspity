import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Controls from '../Controls'

import Slide1 from './slide1.js'
import Slide2 from './slide2.js'
import Slide3 from './slide3.js'
import Slide4 from './slide4.js'

const slides = [Slide1, Slide2, Slide3, Slide4]

const Layout = styled.main`
  text-align: center;
`

export default slide => (
  <Router>
    <Layout>
      <Route
        path="/demo/:slide"
        component={props => <Controls slides={slides} {...props} />}
      />
      <Switch>
        <Redirect exact from="/demo" to="/demo/1" />
        {slides.map((slide, i) => (
          <Route key={i} path={`/demo/${i + 1}`} component={slide} />
        ))}
      </Switch>
    </Layout>
  </Router>
)
