/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { FlatList, ActivityIndicator, TouchableOpacity, Text, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import retrieveBeers from '../../redux/actions/beers'
import { Beer } from '../../components'
import { Wrapper, Loader } from './styles'
import { FilterScreen } from '..'

class BeersScreen extends Component {
  constructor(props) {
    super(props)

    this.state = { page: 1, pageLimit: 10, isFilterOpen: false, beers: [] }
    this.onEndReachedCalledDuringMomentum = false
  }

  async componentDidMount() {
    await this._retrieveBeers()
    const { beers } = this.props

    this.setState({ beers })
  }

  _retrieveBeers = async (fromDate, toDate, name) => {
    const { page, pageLimit, beers } = this.state

    const params = { page, per_page: pageLimit }

    if (fromDate || toDate || name) {
      params.page = 1
      if (name) {
        params.beer_name = name
      }
      if (fromDate) {
        params.brewed_after = fromDate
      }
      if (toDate) {
        params.brewed_before = toDate
      }
      await this.props.retrieveBeers(params)
      this.setState({ isFilterOpen: false, beers: this.props.beers })
    } else {
      await this.props.retrieveBeers(params)
      const newBeers = [...beers, ...this.props.beers]
      this.setState({ beers: newBeers })
    }
  }

  onEndReached = () => {
    if (!this.onEndReachedCalledDuringMomentum) {
      this.setState(
        prevState => ({ page: prevState.page + 1 }),
        () => {
          this._retrieveBeers()
        }
      )
      this.onEndReachedCalledDuringMomentum = true
    }
  }

  listEmptyComponent = () => {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    )
  }

  render() {
    const { isFilterOpen, beers } = this.state

    return (
      <View>
        <TouchableOpacity
          onPress={() => this.setState({ isFilterOpen: true })}
          style={{ marginTop: 40, marginLeft: 25 }}
        >
          <Text>Filter</Text>
        </TouchableOpacity>
        <Wrapper>
          <FilterScreen
            isOpen={isFilterOpen}
            filterBeers={this._retrieveBeers}
            closeFilter={() => this.setState({ isFilterOpen: false })}
          />
          <FlatList
            data={beers}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={this.listEmptyComponent()}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Beer item={item} />}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.5}
            onMomentumScrollBegin={() => {
              this.onEndReachedCalledDuringMomentum = false
            }}
          />
        </Wrapper>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    retrieveBeers: bindActionCreators(retrieveBeers, dispatch)
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beers && state.beers.data
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeersScreen)
