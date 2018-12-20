import initialState from './intialState'
import {FETCH_DATA_LOADING, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FILTER_PLAYERS, UNFILTER_PLAYERS} from './actionTypes'

/**
 * Filters an array of players based on several criteria
 * @param {Array<Players>} players the array of players to be filtered
 * @param {String} age the age of the player(s) to find
 * @param {String} name the name of the player(s) to find
 * @param {String} position the position of the player(s) to find
 * @returns {Array} a new array with the filtered results
 */
const filterPlayers = (players, age, name, position) => {
  return players.filter(player => {
    return (age && player.age === parseInt(age, 10)) || (name && player.name.indexOf(name) !== -1) || (position && player.position === position)
  })
}

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        players: action.payload,
        isLoading: false
      }
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    case FILTER_PLAYERS:
      return {
        ...state,
        filteredPlayers: filterPlayers(state.players, action.filterByAge, action.filterByName, action.filterByPosition)
      }
    case UNFILTER_PLAYERS:
      return {
        ...state,
        filteredPlayers: state.players
      }
    default:
      return state
  }
}

export default playerReducer
