/* global fetch */
import { formatPlayersResponse, cleaPlayersResponse } from '../core/utilities'
import * as actionTypes from './actionTypes'
import { GET_PLAYERS_URL } from './constants'

export function fetchSuccess (data) {
  return {type: actionTypes.FETCH_DATA_SUCCESS, results: data}
}

export function fetchFailure (data) {
  return {type: actionTypes.FETCH_DATA_FAILURE, data: data}
}

export function filterPlayers () {
  return {type: actionTypes.FILTER_PLAYERS}
}

export function restorePlayers () {
  return {type: actionTypes.RESTORE_PLAYERS}
}

export function changeAgeFilter (newVal) {
  return (dispatch) => {
    dispatch({type: actionTypes.UPDATE_AGE, data: newVal})
  }
}

export function changeNameFilter (newVal) {
  return (dispatch) => {
    dispatch({type: actionTypes.UPDATE_NAME, data: newVal})
  }
}

export function changePositionFilter (newVal) {
  return (dispatch) => {
    dispatch({type: actionTypes.UPDATE_POSITION, data: newVal})
  }
}

export function fetchPlayers () {
  return (dispatch) => {
    fetch(GET_PLAYERS_URL)
      .then(response =>
        response.json().then(data => {
          return {
            data: data,
            status: response.status
          }
        })
      )
      .then(response => {
        if (response.status === 200) {
          if (response.data.players && response.data.players) {
            // The new data has some weird stuff in it, I should clean it up
            response.data.players = formatPlayersResponse(response.data.players)
            response.data.players = cleaPlayersResponse(response.data.players)
            dispatch(fetchSuccess(response.data.players))
          } else {
            dispatch(fetchSuccess(response.data))
          }
          // Initial filtering
          dispatch(filterPlayers())
        } else {
          const error = {
            type: 'error',
            title: 'Error getting the list of players',
            content: 'There was an error getting the list of players. Please try again.'
          }
          dispatch(fetchFailure(error))
        }
      })
  }
}
