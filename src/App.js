import React, {Component} from 'react'
import styled from 'styled-components'

import Box from './components/Box'
import ProgressBar from './components/ProgressBar'

import gem from './gemLegendary.png'

const Gems = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`

class App extends Component {
  render() {
    return (
      <div>
        <Box title="Add a pack">
          This is where the content goes
          <ProgressBar rarity="common" numerator={0} denominator={40} />
          <ProgressBar rarity="common" numerator={1} denominator={40} />
          <ProgressBar rarity="rare" numerator={2} denominator={100} />
          <ProgressBar rarity="rare" numerator={3} denominator={100} />
          <ProgressBar rarity="rare" numerator={4} denominator={100} />
          <ProgressBar rarity="rare" numerator={5} denominator={100} />
          <ProgressBar rarity="epic" numerator={10} denominator={100} />
          <ProgressBar rarity="epic" numerator={20} denominator={100} />
          <ProgressBar rarity="epic" numerator={30} denominator={100} />
          <ProgressBar rarity="epic" numerator={40} denominator={40} />
          <ProgressBar rarity="epic" numerator={50} denominator={100} />
          <ProgressBar rarity="epic" numerator={60} denominator={100} />
          <ProgressBar rarity="epic" numerator={60} denominator={100} />
          <ProgressBar rarity="epic" numerator={70} denominator={100} />
          <ProgressBar rarity="epic" numerator={80} denominator={100} />
          <ProgressBar rarity="epic" numerator={90} denominator={100} />
          <ProgressBar rarity="legendary" numerator={95} denominator={100} />
          <ProgressBar rarity="legendary" numerator={99} denominator={100} />
          <ProgressBar rarity="legendary" numerator={100} denominator={40} />
          <ProgressBar rarity="legendary" numerator={100} denominator={40} />
          <Gems>
            <img src={gem} alt="gem" />
            <img src={gem} alt="gem" />
            <img src={gem} alt="gem" />
            <img src={gem} alt="gem" />
            <img src={gem} alt="gem" />
          </Gems>
        </Box>
      </div>
    )
  }
}

export default App
