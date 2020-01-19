import React from 'react'
import styled from 'styled-components'
import Box from './components/Box'
import Button from './components/Button'

const Container = styled.div`
  margin: 2rem;
  padding: 2rem;
  border: 2px solid grey;
`
// This is the App component with a box inside
export default function(props) {
  return (
    <Container>
      <Box color="green">green><Button color="yellow">click</Button></Box>
      <Box color="yellow">yellow</Box>
    </Container>
  )
}