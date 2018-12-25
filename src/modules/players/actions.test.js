import * as actions from './actions'
import * as actionTypes from './actionTypes'

describe('The sync actions', () => {
  let rst

  beforeEach(() => {
    rst = null
  })

  it('Should return the proper types (fetchSuccess)', () => {
    // Expect action type to match each case
    rst = actions.fetchSuccess()
    expect(rst.type).toBe(actionTypes.FETCH_DATA_SUCCESS)
  })

  it('Should return the proper types (fetchFailure)', () => {
    rst = actions.fetchFailure()
    expect(rst.type).toBe(actionTypes.FETCH_DATA_FAILURE)
  })

  it('Should return the proper types (filterPlayers)', () => {
    rst = actions.filterPlayers()
    expect(rst.type).toBe(actionTypes.FILTER_PLAYERS)
  })

  it('Should return the proper types (restorePlayers)', () => {
    rst = actions.restorePlayers()
    expect(rst.type).toBe(actionTypes.RESTORE_PLAYERS)
  })
})

describe('The async actions', () => {
  let fn, rst
  const mockDispatch = action => {
    // saves the type outside his context
    rst = { type: action.type, data: action.data }
  }

  beforeEach(() => {
    fn = null
    rst = null
  })

  it('Should return the proper types (changeAgeFilter)', () => {
    // note: calling the original function and the returning one at once
    fn = actions.changeAgeFilter('55')(mockDispatch)
    expect(rst.type).toBe(actionTypes.UPDATE_AGE)
    expect(rst.data).toBe('55')
  })

  it('Should return the proper types (changeNameFilter)', () => {
    // note: calling the original function and the returning one at once
    fn = actions.changeNameFilter('Tony Stark')(mockDispatch)
    expect(rst.type).toBe(actionTypes.UPDATE_NAME)
    expect(rst.data).toBe('Tony Stark')
  })

  it('Should return the proper types (changePositionFilter)', () => {
    // note: calling the original function and the returning one at once
    fn = actions.changePositionFilter('Keeper')(mockDispatch)
    expect(rst.type).toBe(actionTypes.UPDATE_POSITION)
    expect(rst.data).toBe('Keeper')
  })
})
