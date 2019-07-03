import styled from 'styled-components'

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${props => props.bgColor};
  border-radius: 5px;
  margin: 0 5px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  color: ${props => props.color};
  font-size: 15px;
  font-weight: bold;
`
