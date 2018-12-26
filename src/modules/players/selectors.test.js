import * as playerSelectors from './selectors'

describe('The player module selectors', () => {
  const basicMapExpectations = {
    getPlayerReducer: 'playerReducer',
    getResults: 'results',
    getFilteredResults: 'filteredResults',
    getFilterByAge: 'filterByAge',
    getFilterByName: 'filterByName',
    getFilterByPosition: 'filterByPosition',
    getIsLoading: 'isLoading'
  }

  it('Should return the proper parts of the state', () => {
    let rst = null
    let prop = null
    let rstFromMock = null
    let mockStateReduced = null

    for (let selector in playerSelectors) {
      mockStateReduced = {
        playerReducer: {
          results: ['test', 'results'],
          filteredResults: ['filtered', 'results'],
          filterByAge: '22',
          filterByName: 'Test name',
          filterByPosition: 'Keeper',
          isLoading: true
        }
      }

      if (typeof playerSelectors[selector] === 'function') {
        prop = basicMapExpectations[selector]
        expect(prop).toBeDefined()
        rst = playerSelectors[selector](mockStateReduced)
        // console.log(playerSelectors[selector], '-> ', rst)
        rstFromMock = prop !== 'playerReducer' ? mockStateReduced.playerReducer[prop] : mockStateReduced.playerReducer
        expect(rst).toEqual(rstFromMock)
      }
    }
  })
})
