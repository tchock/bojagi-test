// @component
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${({ color }) => color};
  padding: 2rem;
  border-radius: 3px;
`

export default function Box(props) {
  return <Container color={props.color} >{props.children}</Container>
}