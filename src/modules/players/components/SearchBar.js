import React from 'react'
import SearchInput from './SearchInput'
import SearchListInput from './SearchListInput'
import {VALID_POSITIONS} from '../constants'

const SearchBar = props => {
  const {filterName, onChangeFilterNameFn, positions, filterPosition, onChangeFilterPositionFn, filterAge, onChangeFilterAgeFn, onSearchFn} = props
  return (
    <form className='search-bar'>
      <SearchInput placeholder='Player Name' val={filterName} changeFn={onChangeFilterNameFn} />
      <SearchListInput list={positions} initialVal='Position' val={filterPosition} changeFn={onChangeFilterPositionFn} />
      <SearchInput placeholder='Age' val={filterAge} changeFn={onChangeFilterAgeFn} />
      <button onClick={onSearchFn}>Search</button>
    </form>
  )
}

SearchBar.defaultProps = {
  filterName: '',
  onChangeFilterNameFn: () => null,
  positions: VALID_POSITIONS,
  filterPosition: '',
  onChangeFilterPositionFn: () => null,
  filterAge: '',
  onChangeFilterAgeFn: () => null,
  onSearchFn: () => null
}

export default SearchBar
