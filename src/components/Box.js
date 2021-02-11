// @component
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${({ color }) => color};
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  color: white;
`

export default function Box(props) {
  return <Container color={props.color} >{props.children}</Container>
}