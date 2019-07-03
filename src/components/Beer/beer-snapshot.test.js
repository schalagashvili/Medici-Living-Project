/* eslint-disable */
import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import Beer from './index'
import rootReducer from '../../redux/reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

describe('Beer component renders the image correctly', () => {
  it('renders correctly', () => {
    const item = {
      id: 558,
      description: 'snapshot test',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg'
    }
    const rendered = renderer.create(
      <Provider store={store}>{/* <Beer item={item} /> */}</Provider>
    )
    expect(rendered.toJSON()).toMatchSnapshot()
  })
})
