import React from 'react'
import { Wrapper, Title } from './styles'

const Button = ({ text, clickHandler, color, bgColor }) => {
  return (
    <Wrapper onPress={() => clickHandler()} bgColor={bgColor}>
      <Title color={color}>{text}</Title>
    </Wrapper>
  )
}

export default Button
