import React from 'react'
import styled from 'styled-components'

import {PackImage} from '../Pack'
import ProgressBar from '../ProgressBar'

import {LEGENDARY_TIMER, EPIC_TIMER} from '../../helpers/timers'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  align-items: center;
  min-width: 320px;

  grid-template-columns: 120px auto;
  grid-template-areas:
    'pack legendaries'
    'pack epics';
`

const GridPack = styled(PackImage)`
  grid-area: pack;
  margin: 0 auto;
  z-index: 1;
`

const GridLegendaries = styled(ProgressBar)`
  grid-area: legendaries;
  margin: 15px 0;
`

const GridEpics = styled(ProgressBar)`
  grid-area: epics;
  margin: 15px 0;
`

const Timer = ({set, legendariesOpened, epicsOpened}) => (
  <Wrapper>
    <GridPack set={set} width={120} />
    <GridLegendaries
      rarity="legendary"
      numerator={legendariesOpened}
      denominator={LEGENDARY_TIMER}
    />
    <GridEpics rarity="epic" numerator={epicsOpened} denominator={EPIC_TIMER} />
  </Wrapper>
)

export default Timer
