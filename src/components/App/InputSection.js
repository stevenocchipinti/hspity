import React, {Component, createRef} from 'react'
import styled from 'styled-components'

import Box from '../Box'
import CardButton from '../CardButton'
import {PackButton} from '../Pack'
import PackOpener from '../PackOpener'

const InputText = styled.p`
  grid-area: input-text;
`

const InputGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  @media (min-width: 600px) {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 220px 1fr;
    grid-template-areas:
      'input-text    input-text'
      'set-selector  pack-opener'
      'set-selector  submit';
  }
`

const SetSelector = styled(PackButton)`
  grid-area: set-selector;
  margin: 0 auto;
`

const PackSelector = styled(PackOpener)`
  grid-area: pack-selector;
`

class InputSection extends Component {
  constructor(props) {
    super(props)
    this.setSelector = createRef()
  }

  componentDidMount() {
    this.setSelector.current.focus()
  }

  render() {
    const {set, onSetClick, pack, onGemClick, onSubmit} = this.props
    return (
      <Box title="Add a pack">
        <InputGrid>
          <InputText>
            Submit the rarity of the cards in the pack you just opened
          </InputText>
          <SetSelector
            innerRef={this.setSelector}
            onClick={onSetClick}
            set={set}
          />

          <PackSelector pack={pack} onGemClick={onGemClick} />

          <CardButton onClick={onSubmit}>Submit</CardButton>
        </InputGrid>
      </Box>
    )
  }
}

export default InputSection
