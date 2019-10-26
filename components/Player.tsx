import { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

const StyledPlayer = styled.div`
  border: red 5px solid;
  display: flex;
  justify-content: center;
  align-items: center;

  /* 3 players: make the last one take two colums*/
  :nth-child(3):nth-last-child(1) {
    grid-column:span 2;
  }

  /* 4 players: make the second in the second column */
  :nth-child(2):nth-last-child(3) {
    grid-column:2;
  }
`

export default () => {
  const [lives, setLives] = useState(20)
  return (
    <StyledPlayer>
      <Button onClick={() => setLives(lives - 1)}>-</Button>
      {lives}
      <Button onClick={() => setLives(lives + 1)}>+</Button>
    </StyledPlayer>
  )
}
