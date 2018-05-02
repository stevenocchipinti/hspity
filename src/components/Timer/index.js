import React from 'react'
import styled from 'styled-components'

import {PackImage} from '../Pack'
import ProgressBar from '../ProgressBar'

const LEGENDARY_TIMER = 40
const EPIC_TIMER = 10

const Wrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  margin: 30px 0;
  align-items: center;

  grid-template-areas:
    'pack'
    'legendaries'
    'epics';

  @media (min-width: 600px) {
    grid-template-columns: 200px auto;
    grid-template-areas:
      'pack legendaries'
      'pack epics';
  }
`

const GridPack = styled(PackImage)`
  grid-area: pack;
  margin: 0 auto;
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
    <GridPack set={set} />
    <GridLegendaries
      rarity="legendary"
      numerator={legendariesOpened}
      denominator={LEGENDARY_TIMER}
    />
    <GridEpics rarity="epic" numerator={epicsOpened} denominator={EPIC_TIMER} />
  </Wrapper>
)

export default Timer
