import { useState } from 'react'
import styled from 'styled-components'
import Player from '../components/Player'

const Grid = styled.section`
  display: grid;
  min-height: 100vh;
  border: blue 5px solid;
`

export default () => {
  const [colours, setColours] = useState(['#F7F7D3', '#A8E0FB', '#CDC1C1', '#CDC1C1', '#9BD3AC'])
  return (
    <Grid>
      <Player />
      <Player />
      <Player />
      <Player />
    </Grid>
  )
}
