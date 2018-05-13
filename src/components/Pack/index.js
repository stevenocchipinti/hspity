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

// Based on the pack image dimensions
const ASPECT_RATIO = 361 / 250

const Img = styled.img`
  height: ${props => (props.width || 200) * ASPECT_RATIO}px;
  width: ${props => props.width || 200}px;
`

const PackImage = ({className, set, width}) => (
  <Img className={className} src={sets[set]} alt={set} width={width} />
)

const PackButton = styled.button`
  height: ${props => (props.width || 200) * ASPECT_RATIO}px;
  width: ${props => props.width || 200}px;
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
