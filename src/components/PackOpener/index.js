import React, {Component} from 'react'
import styled from 'styled-components'

import common from './rarity-common.png'
import rare from './rarity-rare.png'
import epic from './rarity-epic.png'
import legendary from './rarity-legendary.png'

const gems = {common, rare, epic, legendary}

const Gems = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  margin: 40px 0 30px;
`

const Gem = styled.button`
  width: 42px;
  height: 58px;
  background-image: url(${props => gems[props.rarity]});
  background-color: rgba(0, 0, 0, 0);
  border: none;

  &:focus {
    outline: dashed 5px #55ffff;
    outline-offset: 10px;
  }

  filter: drop-shadow(0 0 10px pink);

  ${props =>
    props.golden
      ? `filter:
          drop-shadow(0 0 10px yellow)
          drop-shadow(0 0 8px goldenrod)
          drop-shadow(0 0 6px red)`
      : 'inherit'};
`

class PackOpener extends Component {
  render() {
    const {pack, onGemClick} = this.props

    return (
      <Gems>
        {pack.map(({rarity, golden}, i) => (
          <Gem
            key={i}
            alt={rarity}
            golden={golden}
            rarity={rarity}
            onClick={() => onGemClick(i)}
          />
        ))}
      </Gems>
    )
  }
}

export default PackOpener
