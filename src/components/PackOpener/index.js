import React from 'react'
import styled from 'styled-components'

import common from './rarity-common.png'
import rare from './rarity-rare.png'
import epic from './rarity-epic.png'
import legendary from './rarity-legendary.png'

const gems = {common, rare, epic, legendary}

const Gems = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`

const Gem = styled.img`
  ${props =>
    props.golden
      ? `filter:
          drop-shadow(0 0 10px yellow)
          drop-shadow(0 0 8px goldenrod)
          drop-shadow(0 0 6px red)`
      : 'inherit'};
`

const PackOpener = props => (
  <div>
    <Gems>
      {props.pack.map(({rarity, golden}, i) => (
        <Gem
          key={i}
          src={gems[rarity]}
          alt={rarity}
          golden={golden}
          rarity={rarity}
          onClick={() => props.onGemClick(i)}
        />
      ))}
    </Gems>
  </div>
)

export default PackOpener
