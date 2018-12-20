import * as actionType from './actionTypes'

/* global fetch */

export function fetchSuccess (data) {
  return {type: actionType.FETCH_DATA_SUCCESS, stuff: data}
}

export function fetchFailure (data) {
  return {type: actionType.FETCH_DATA_FAILURE, stuff: data}
}

export function fetchStuff () {
  return (dispatch) => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    console.log('doing a fetch...')
    fetch('https://football-players-b31f2.firebaseio.com/.json')
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        }))
      )
      .then(response => {
        console.log('A response came back:')
        console.log(response)
        if (response.status === 200) {
          console.log('dispatching fetchSuccess')
          dispatch(fetchSuccess(response.data))
        } else {
          console.log('dispatching fetchFailure')
          const errorAction = {
            type: 'error',
            title: 'Error getting the list of players',
            content: 'There was an error getting the list of players. Please try again.'
          }
          dispatch(fetchFailure(errorAction))
        }
      })
  }
}
