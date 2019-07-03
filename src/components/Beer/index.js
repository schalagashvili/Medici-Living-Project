/* eslint-disable camelcase */
import React, { PureComponent } from 'react'
import { Modal, TouchableOpacity, Text } from 'react-native'
import colors from '../../styles/colors'
import { Button } from '..'
import { FullImage, InnerWrapper, Input, BottomSection, Wrapper, Image } from './styles'

class Beer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { modalVisible: false }
  }

  renderModal = () => {
    const { item } = this.props
    const { image_url, description, name, first_brewed, abv, volume, food_pairing } = item
    const { modalVisible } = this.state

    return (
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          this.setState({ modalVisible: false })
        }}
      >
        <FullImage resizeMode="contain" source={{ uri: image_url }} />
        <BottomSection>
          <Text>Name: {name}</Text>
          <Text>Brew Date: {first_brewed}</Text>
          <Text>ABV: {abv}</Text>
          <Text>
            Volume: {volume.value}
            {volume.unit}
          </Text>
          <Text>
            Food Pairings:
            {food_pairing.map(pairing => {
              return <Text key={pairing}> {pairing},</Text>
            })}
          </Text>
          <InnerWrapper>
            <Text>Description</Text>
            <Input editable={false} multiline value={description} />
          </InnerWrapper>
          <Button
            clickHandler={() => this.setState({ modalVisible: false })}
            color={colors.red}
            bgColor={colors.cancelButton}
            text="CLOSE"
          />
        </BottomSection>
      </Modal>
    )
  }

  render() {
    const { item } = this.props
    const { image_url } = item
    return (
      <Wrapper>
        <TouchableOpacity onPress={() => this.setState({ modalVisible: true })}>
          {this.renderModal()}
          <Image source={{ uri: image_url }} resizeMode="contain" />
        </TouchableOpacity>
      </Wrapper>
    )
  }
}

export default Beer
