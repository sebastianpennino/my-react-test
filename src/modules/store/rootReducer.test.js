import rootReducer from './rootReducer'
import initialStateOfPlayerReducer from '../players/intialState'

describe('The root reducer', () => {
  it('Should be a function', () => {
    expect(typeof rootReducer).toBe('function')
  })

  it('Should return the initial state of each reducer', () => {
    const result = rootReducer().playerReducer
    expect(result).toBe(initialStateOfPlayerReducer)
  })
})
