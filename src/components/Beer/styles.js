import styled from 'styled-components'
import colors from '../../styles/colors'

export const Wrapper = styled.View`
  flex: 1;
  padding: 5px;
`

export const Image = styled.Image`
  height: 150px;
`

export const FullImage = styled.Image`
  width: 100%;
  margin-top: 35px;
  flex: 1;
`

export const InnerWrapper = styled.View`
  background-color: #cee1ff;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 5px;
`

export const Text = styled.Text`
  height: 45px;
  text-align: center;
  padding-top: 15px;
  font-size: 15px;
  color: ${colors.button};
  font-weight: bold;
`

export const Input = styled.TextInput`
  height: 100px;
  background-color: #edf0f0;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px 20px;
`

export const BottomSection = styled.View`
  padding: 20px;
`
