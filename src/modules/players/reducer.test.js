import reducer from './reducer'
import initialState from './intialState'
import * as actionTypes from './actionTypes'
import { filterPlayers } from '../core/utilities'
jest.mock('../core/utilities')

let newState = null
const createAction = (type = '', data = [], error = false) => {
  return {
    data,
    results: data,
    error,
    type
  }
}

const resultMocks = {
  'players': [
    {
      'contractUntil': '2022-06-30',
      'dateOfBirth': '1993-05-13',
      'jerseyNumber': 9,
      'name': 'Romelu Lukaku',
      'nationality': 'Belgium',
      'position': 'Centre-Forward'
    },
    {
      'contractUntil': '2019-06-30',
      'dateOfBirth': '1990-11-07',
      'jerseyNumber': 1,
      'name': 'David de Gea',
      'nationality': 'Spain',
      'position': 'Keeper'
    },
    {
      'contractUntil': '2021-06-30',
      'dateOfBirth': '1987-02-22',
      'jerseyNumber': 20,
      'name': 'Sergio Romero',
      'nationality': 'Argentina',
      'position': 'Keeper'
    }
  ]
}

describe('The player module reducer', () => {
  beforeEach(() => {
    // generate a new state object based on initial state
    newState = Object.assign({}, initialState)
    filterPlayers.mockImplementation(() => {
      return ['test']
    })
    filterPlayers.mockClear()
  })

  it('Should return the initial state if called without params or with a unknown action', () => {
    expect(reducer()).toBe(initialState)
    expect(reducer(undefined, createAction('UNKNOWN_TYPE'))).toBe(initialState)
  })

  it('Should load while fetching data', () => {
    const action = createAction(actionTypes.FETCH_DATA_LOADING)
    expect(reducer(newState, action).isLoading).toEqual(true)
  })

  it('Should bring some results if the fetch was successful', () => {
    const action = createAction(actionTypes.FETCH_DATA_SUCCESS, ['some', 'results'])
    const test = reducer(newState, action)
    expect(test).not.toEqual(initialState)
    expect(test.isLoading).toEqual(false)
    expect(test.results).toEqual(['some', 'results'])
  })

  it('Should bring some errors if the fetch was a failure', () => {
    const action = createAction(actionTypes.FETCH_DATA_FAILURE, [], 'error msg')
    const test = reducer(newState, action)
    expect(test).not.toEqual(initialState)
    expect(test.isLoading).toEqual(false)
    expect(test.error).toEqual('error msg')
  })

  it('Should be able to update the age filter', () => {
    const action = createAction(actionTypes.UPDATE_AGE, '33')
    const test = reducer(newState, action)
    expect(test).not.toEqual(initialState)
    expect(test.filterByAge).toEqual('33')
  })

  it('Should be able to update the name filter', () => {
    const action = createAction(actionTypes.UPDATE_NAME, 'Jon Snow')
    const test = reducer(newState, action)
    expect(test).not.toEqual(initialState)
    expect(test.filterByName).toEqual('Jon Snow')
  })

  it('Should be able to update the position filter', () => {
    const action = createAction(actionTypes.UPDATE_POSITION, 'Keeper')
    const test = reducer(newState, action)
    expect(test).not.toEqual(initialState)
    expect(test.filterByPosition).toEqual('Keeper')
  })

  it('Should be able to update the position filter', () => {
    const action = createAction(actionTypes.UPDATE_POSITION, 'Keeper')
    const test = reducer(newState, action)
    expect(test).not.toEqual(initialState)
    expect(test.filterByPosition).toEqual('Keeper')
  })

  it('Should be able to restore the previously saved results', () => {
    const action = createAction(actionTypes.RESTORE_PLAYERS)
    newState.results = resultMocks.players
    const test = reducer(newState, action)
    expect(test).not.toEqual(initialState)
    expect(test.filteredResults).toEqual(resultMocks.players)
  })

  it('Should call filterPlayers when filtering results', () => {
    newState.results = resultMocks.players
    newState.filterByAge = '35'
    newState.filterByName = 'Tony'
    newState.filterByPosition = 'Keeper'
    const action = createAction(actionTypes.FILTER_PLAYERS)
    const test = reducer(newState, action)
    // Expect to have called filterPlayer function
    expect(filterPlayers).toHaveBeenCalledWith(newState.results, newState.filterByAge, newState.filterByName, newState.filterByPosition)
    expect(test.filteredResults).toEqual(['test'])
  })
})
