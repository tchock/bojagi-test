// @component
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: yellowgreen;
  width: 30vw;
  padding: 2rem;
`

export default function Box() {
  return <Container>I am a yellow green Box!! or am i??</Container>
}