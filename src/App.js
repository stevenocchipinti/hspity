import React, {Component} from 'react'

import Box from './components/Box'
import Timer from './components/Timer'
import PackOpener from './components/PackOpener'
import CardButton from './components/CardButton'

class App extends Component {
  state = {
    set: 'theWitchwood',
    pack: [
      {rarity: 'common', golden: true},
      {rarity: 'common', golden: false},
      {rarity: 'common', golden: false},
      {rarity: 'common', golden: false},
      {rarity: 'rare', golden: false},
    ],
    timers: {
      theWitchwood: {legendary: 38, epic: 0},
      classic: {legendary: 0, epic: 4},
      kobaldsAndCatacombs: {legendary: 14, epic: 0},
      knightsOfTheFrozenThrone: {legendary: 30, epic: 9},
      journeyToUngoro: {legendary: 1, epic: 5},
    },
  }

  render() {
    const {pack, set, timers} = this.state

    return (
      <div>
        <Box title="Add a pack">
          <p>Submit the rarity of the cards in the pack you just opened</p>
          <PackOpener
            pack={pack}
            onGemClick={index => console.log(`Gem at index ${index} clicked`)}
            set={set}
            onSetClick={() => console.log('set icon clicked')}
          />

          <CardButton>Submit</CardButton>
        </Box>

        <Box title="Timers">
          <p>
            Indicators for when you will open your next Epic or Legendary card
          </p>

          {Object.keys(timers).map((set, i) => (
            <Timer
              key={i}
              set={set}
              legendariesOpened={timers[set].legendary}
              epicsOpened={timers[set].epic}
            />
          ))}
        </Box>
      </div>
    )
  }
}

export default App
