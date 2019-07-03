import React, { Component } from 'react'
import { Modal, TextInput } from 'react-native'
import { Button, DateRangePicker } from '../../components'
import { Wrapper, Input, InnerWrapper } from './styles'
import colors from '../../styles/colors'

class FilterScreen extends Component {
  state = { fromDate: null, toDate: null, beerName: '' }

  _handleDateChange = date => {
    this.setState({ fromDate: date })
  }

  _filterHandler = () => {
    const { filterBeers } = this.props
    const { fromDate, toDate, beerName } = this.state

    this.setState({ fromDate: null, toDate: null, beerName: '' })
    filterBeers(fromDate, toDate, beerName)
  }

  render() {
    const { isOpen, closeFilter } = this.props
    const { beerName } = this.state

    return (
      <Modal visible={isOpen} animationType="slide">
        <Wrapper>
          <DateRangePicker
            initialRange={['2015-04-01', '2019-04-10']}
            onSuccess={(s, e) => this.setState({ fromDate: s, toDate: e })}
            theme={{ markColor: colors.backgroundColor, markTextColor: colors.button }}
            style={{ width: '100%' }}
          />
          <InnerWrapper>
            <Input>
              <TextInput
                value={beerName}
                onChangeText={e => this.setState({ beerName: e })}
                placeholder="Beer Name"
              />
            </Input>
          </InnerWrapper>
        </Wrapper>
        <Button>
          <Button
            clickHandler={() => this._filterHandler()}
            color={colors.button}
            bgColor={colors.backgroundColor}
            text="FILTER"
          />
          <Button
            clickHandler={() => closeFilter()}
            color={colors.red}
            bgColor={colors.cancelButton}
            text="CLOSE"
          />
        </Button>
      </Modal>
    )
  }
}

export default FilterScreen
