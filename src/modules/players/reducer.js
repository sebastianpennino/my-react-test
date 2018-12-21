import initialState from './intialState'
import * as actionTypes from './actionTypes'
import { calcAge } from '../core/utilities'

/**
 * Filters an array of players based on several criteria
 * @param {Array<Players>} players the array of players to be filtered
 * @param {String} age the age of the player(s) to find
 * @param {String} name the name of the player(s) to find
 * @param {String} position the position of the player(s) to find
 * @returns {Array} a new array with the filtered results
 */
const filterPlayers = (players, age, name, position) => {
  const filtered = players.filter(player => {
    return (age && calcAge(player.dateOfBirth) === parseInt(age, 10)) || (name && player.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) !== -1) || (position && player.position === position)
  })
  return filtered.length > 0 ? filtered : players
}

export default function playerReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_DATA_LOADING:
      return { ...state, isLoading: true }
    case actionTypes.FETCH_DATA_SUCCESS:
      return { ...state, results: action.results, isLoading: false }
    case actionTypes.FETCH_DATA_FAILURE:
      return { ...state, error: action.error, isLoading: false }
    case actionTypes.FILTER_PLAYERS:
      return {
        ...state,
        filteredResults: filterPlayers(state.results, state.filterByAge, state.filterByName, state.filterByPosition)
      }
    case actionTypes.RESTORE_PLAYERS:
      return { ...state, filteredResults: state.results }
    case actionTypes.UPDATE_AGE:
      return { ...state, filterByAge: action.data }
    case actionTypes.UPDATE_NAME:
      return { ...state, filterByName: action.data }
    case actionTypes.UPDATE_POSITION:
      return { ...state, filterByPosition: action.data }
    default:
      return state
  }
}
