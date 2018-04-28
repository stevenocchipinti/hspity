import React, {Component} from 'react'
import styled from 'styled-components'

import Box from './components/Box'

import gem from './gemLegendary.png'

const Gems = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`

class App extends Component {
  render() {
    return (
      <div>
        <Box title="Add a pack">
          This is where the content goes
          <Gems>
            <img src={gem} alt="gem" />
            <img src={gem} alt="gem" />
            <img src={gem} alt="gem" />
            <img src={gem} alt="gem" />
            <img src={gem} alt="gem" />
          </Gems>
        </Box>
      </div>
    )
  }
}

export default App
