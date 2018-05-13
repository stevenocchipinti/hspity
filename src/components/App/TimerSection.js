import React from 'react'
import styled from 'styled-components'

import Timer from '../Timer'

const TimerSection = styled.section`
  margin: 25px;
`

const TimerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  row-gap: 50px;
  column-gap: 30px;
`

const InputSection = ({sets, timers}) => (
  <TimerSection>
    <p>Indicators for when you will open your next Epic or Legendary card</p>

    <TimerGrid>
      {sets.map((set, i) => (
        <Timer
          key={i}
          set={set}
          legendariesOpened={timers[set] ? timers[set].legendary : 0}
          epicsOpened={timers[set] ? timers[set].epic : 0}
        />
      ))}
    </TimerGrid>
  </TimerSection>
)

export default InputSection
