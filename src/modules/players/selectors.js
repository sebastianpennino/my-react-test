export function getPlayerReducer (state) {
  return state.playerReducer
}

export function getResults (state) {
  const playerReducer = getPlayerReducer(state)
  return playerReducer.results
}

export function getFilteredResults (state) {
  const playerReducer = getPlayerReducer(state)
  return playerReducer.filteredResults
}

export function getFilterByAge (state) {
  const playerReducer = getPlayerReducer(state)
  return playerReducer.filterByAge
}

export function getFilterByName (state) {
  const playerReducer = getPlayerReducer(state)
  return playerReducer.filterByName
}

export function getFilterByPosition (state) {
  const playerReducer = getPlayerReducer(state)
  return playerReducer.filterByPosition
}

export function getIsLoading (state) {
  const playerReducer = getPlayerReducer(state)
  return playerReducer.isLoading
}
