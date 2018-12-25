import initialState from './intialState'
import * as actionTypes from './actionTypes'
import { filterPlayers } from '../core/utilities'

export default function playerReducer (state = initialState, action) {
  if (!action || !action.type) {
    return state
  }

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
