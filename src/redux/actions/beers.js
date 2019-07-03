import axios from 'axios'
import { apiConstant } from '../../config'
import { RETRIEVE_BEERS_SUCCEEDED, RETRIEVE_BEERS_FAILED } from '../actionTypes'

function beersPromise(params) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiConstant.api}/beers`, { params })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default function retrieveBeers(params) {
  return async dispatch => {
    try {
      const response = await beersPromise(params)
      dispatch({ payload: response.data, type: RETRIEVE_BEERS_SUCCEEDED })
    } catch (error) {
      dispatch({ payload: error, type: RETRIEVE_BEERS_FAILED })
    }
  }
}
