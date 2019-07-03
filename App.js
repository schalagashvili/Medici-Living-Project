/* eslint-disable import/no-unresolved */
import React, { PureFunction } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/Redux/reducers'
import { BeersScreen } from './src/screens'

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends PureFunction {
  render() {
    return (
      <View>
        <Provider store={store}>
          <BeersScreen />
        </Provider>
      </View>
    )
  }
}

export default App
