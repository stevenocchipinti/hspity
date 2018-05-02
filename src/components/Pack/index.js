import React from 'react'
import styled from 'styled-components'

import classic from './Classic.png'
import journeyToUngoro from './JourneyToUngoro.png'
import knightsOfTheFrozenThrone from './KnightsOfTheFrozenThrone.png'
import kobaldsAndCatacombs from './KobaldsAndCatacombs.png'
import theWitchwood from './TheWitchwood.png'

const sets = {
  classic,
  journeyToUngoro,
  knightsOfTheFrozenThrone,
  kobaldsAndCatacombs,
  theWitchwood,
}

const Img = styled.img`
  height: 290px;
  width: 200px;
`

const PackImage = ({className, set}) => (
  <Img className={className} src={sets[set]} alt={set} />
)

const PackButton = styled.button`
  height: 290px;
  width: 200px;
  background-image: url(${props => sets[props.set]});
  background-color: rgba(0, 0, 0, 0);
  background-size: cover;
  border: none;
  outline: none;
  filter: drop-shadow(0 0 2px black);

  &:focus {
    filter: drop-shadow(0 0 2px #55ffff) drop-shadow(0 0 2px #55ffff)
      drop-shadow(0 0 2px #55ffff) drop-shadow(0 0 2px #55ffff)
      drop-shadow(0 0 2px #55ffff);
  }
`

export {PackButton, PackImage}
