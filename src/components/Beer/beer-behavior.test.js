/* eslint-disable */
import React from 'react'
import 'jsdom-global/register'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import Beer from './index'
import rootReducer from '../../Redux/reducers'

Enzyme.configure({ adapter: new Adapter() })
const store = createStore(rootReducer, applyMiddleware(thunk))

test('Image component renders the Image source properly', () => {
  const item = {
    id: 558,
    description: 'rendering beer',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg'
  }
  const wrapper = Enzyme.mount(
    <Provider store={store}>
      <Beer item={item} />
    </Provider>
  )
  expect(wrapper.find('Beer').prop('source')).toEqual(
    'https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg'
  )
})
