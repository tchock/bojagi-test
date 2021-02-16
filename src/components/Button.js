// @component

import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  background-color: ${({ color }) => color};
  padding: 0.3rem;
  margin: 0.3rem;
  border-radius: 5px;
`

export default function Button(props) {
  return <Container color={props.color} >{props.children}</Container>
}