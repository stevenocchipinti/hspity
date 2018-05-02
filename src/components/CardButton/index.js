import styled from 'styled-components'

import cardButton from './CardButton.png'

const CardButton = styled.button`
  height: 74px;
  width: 200px;
  background-image: url(${cardButton});
  background-color: rgba(0, 0, 0, 0);
  background-size: cover;
  border: none;
  padding: 15px 30px 0 0;
  text-align: right;
  font-size: 24px;
  margin: 10px auto;
  outline: none;

  &:focus {
    filter: drop-shadow(0 0 2px #55ffff) drop-shadow(0 0 2px #55ffff)
      drop-shadow(0 0 2px #55ffff) drop-shadow(0 0 2px #55ffff)
      drop-shadow(0 0 2px #55ffff);
  }
`

export default CardButton
