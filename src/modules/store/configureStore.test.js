import configureStore from './configureStore'

describe('The configure store', () => {
  beforeEach(() => {
    // Adding this just to get more coverage
    window.__REDUX_DEVTOOLS_EXTENSION__ = () => {}
  })

  it('Should be a function, that returns an object', () => {
    expect(typeof configureStore).toBe('function')
    expect(typeof configureStore()).toBe('object')
  })
})
