import styled from 'styled-components'
import colors from '../../styles/colors'

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 50px;
`

export const InnerWrapper = styled.View`
  margin-top: 40px;
`

export const Input = styled.Input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border-color: ${colors.button};
  border-width: 1px;
  justify-content: 'center';
  padding-left: 15px;
  margin-top: 15px;
`

export const Buttons = styled.View`
  padding: 50px;
  margin: auto;
`
