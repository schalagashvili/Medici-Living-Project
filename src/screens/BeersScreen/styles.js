import styled from 'styled-components'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')
const verticalCenter = height / 2

export const Wrapper = styled.View`
  align-items: center;
  width: 100%;
  flex-direction: row;
  padding: 45px 5px 0;
  justify-content: center;
`

export const Loader = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${verticalCenter}px;
`
