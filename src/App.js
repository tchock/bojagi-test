import React from 'react'
import styled from 'styled-components'
import Box from './components/Box'

const Container = styled.div`
  margin: 2rem;
  padding: 2rem;
  border: 2px solid grey;
`

export default function(props) {
  return (
    <Container>
      <Box/>
    </Container>
  )
}