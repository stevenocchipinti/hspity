import React, {Component} from 'react'
import styled from 'styled-components'
import Firebase from 'firebase'

import Homepage from './components/Homepage'
import Box from './components/Box'
import Timer from './components/Timer'
import PackOpener from './components/PackOpener'
import CardButton from './components/CardButton'

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

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
    user: null,
  }

  componentDidMount() {
    Firebase.auth().onAuthStateChanged(user => user && this.setState({user}))
  }

  login() {
    Firebase.auth().signInWithRedirect(new Firebase.auth.GoogleAuthProvider())
  }

  render() {
    const {user, pack, set, timers} = this.state

    if (!user) return <Homepage onClick={() => this.login()} />

    return (
      <Wrapper>
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
      </Wrapper>
    )
  }
}

export default App
