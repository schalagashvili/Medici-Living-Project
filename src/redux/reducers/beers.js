import { RETRIEVE_BEERS_SUCCEEDED, RETRIEVE_BEERS_FAILED } from '../actionTypes'

export default function(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_BEERS_SUCCEEDED:
      return {
        loading: false,
        errors: {},
        data: action.payload
      }
    case RETRIEVE_BEERS_FAILED:
      return {
        loading: false,
        errors: action.payload,
        data: {}
      }
    default:
      return state
  }
}
