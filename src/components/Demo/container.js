import styled from 'styled-components'

export default styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({direction}) => direction || 'row'};
`
