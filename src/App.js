import React, {Component} from 'react'

import Box from './components/Box'
import ProgressBar from './components/ProgressBar'
import PackOpener from './components/PackOpener'

class App extends Component {
  state = {
    set: 'Witchwood',
    pack: [
      {rarity: 'common', golden: true},
      {rarity: 'common', golden: false},
      {rarity: 'rare', golden: false},
      {rarity: 'epic', golden: false},
      {rarity: 'legendary', golden: false},
    ],
  }

  render() {
    return (
      <div>
        <Box title="Add a pack">
          <p>Submit a new pack opening</p>
          <PackOpener
            pack={this.state.pack}
            onGemClick={index => console.log(`Gem at index ${index} clicked`)}
            set={this.state.set}
            onSetClick={() => console.log('set icon clicked')}
          />
        </Box>

        <Box title="Timers">
          <p>
            Indicators for when you will open your next Epic or Legendary card
          </p>
          <ProgressBar rarity="legendary" numerator={12} denominator={40} />
          <ProgressBar rarity="epic" numerator={9} denominator={10} />
        </Box>
      </div>
    )
  }
}

export default App
