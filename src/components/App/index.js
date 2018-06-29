import React, {Component} from 'react'
import styled from 'styled-components'
import TransitionGroup from 'react-addons-transition-group'
import Firebase from 'firebase'
import 'firebase/firestore'

import Homepage from '../Homepage'
import InputSection from './InputSection'
import TimerSection from './TimerSection'
import AddingPack from '../AddingPack'

import Demo from '../Demo'

import {
  defaultPack,
  incrementSetIndex,
  incrementCardRarity,
} from '../../helpers/pack'

import {addPackToTimers} from '../../helpers/timers'

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const sets = [
  'theWitchwood',
  'classic',
  'kobaldsAndCatacombs',
  'knightsOfTheFrozenThrone',
  'journeyToUngoro',
]

class App extends Component {
  state = {
    setIndex: 0,
    pack: defaultPack,
    timers: sets.reduce((timers, set) => {
      timers[set] = {legendary: 0, epic: 0}
      return timers
    }, {}),
    loading: !!JSON.parse(localStorage.getItem('loggedIn')),
    addingPack: {show: false},
    user: null,
  }

  componentDidMount() {
    Firebase.firestore().settings({timestampsInSnapshots: true})
    Firebase.auth().onAuthStateChanged(user => {
      localStorage.setItem('loggedIn', !!user)
      if (!user) return
      this.setState({user, loading: false})
      this.firestoreRef = Firebase.firestore().doc(`users/${user.uid}`)
      this.firestoreRef.onSnapshot(doc =>
        this.setState({
          timers: {
            ...this.state.timers,
            ...(doc.data() ? doc.data().timers : {}),
          },
        }),
      )
    })
  }

  login() {
    Firebase.auth().signInWithRedirect(new Firebase.auth.GoogleAuthProvider())
    localStorage.setItem('loggedIn', true)
    this.setState({loading: true})
  }

  incrementSet() {
    this.setState({
      setIndex: incrementSetIndex(sets.length, this.state.setIndex),
    })
  }

  incrementRarity(index) {
    this.setState({pack: incrementCardRarity(this.state.pack, index)})
  }

  submit() {
    const {timers, pack, setIndex} = this.state
    const newTimers = addPackToTimers(timers, pack, sets[setIndex])
    this.setState({
      addingPack: {
        show: true,
        oldTimers: timers[sets[setIndex]],
        newTimers: newTimers[sets[setIndex]],
      },
    })
    this.firestoreRef.set({timers: newTimers}, {merge: true})
    this.setState({pack: defaultPack})
  }

  render() {
    const {user, pack, setIndex, timers, addingPack} = this.state

    if (window.location.href.includes('demo')) return <Demo />

    if (!user)
      return (
        <Homepage onClick={() => this.login()} loading={this.state.loading} />
      )

    return (
      <Wrapper>
        <InputSection
          set={sets[setIndex]}
          onSetClick={() => this.incrementSet()}
          pack={pack}
          onGemClick={index => this.incrementRarity(index)}
          onSubmit={() => this.submit()}
        />

        <TimerSection sets={sets} timers={timers} />

        <TransitionGroup>
          {addingPack.show && (
            <AddingPack
              oldTimers={addingPack.oldTimers}
              newTimers={addingPack.newTimers}
              onComplete={() => this.setState({addingPack: {show: false}})}
            />
          )}
        </TransitionGroup>
      </Wrapper>
    )
  }
}

export default App
