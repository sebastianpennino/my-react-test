import React from 'react'
import SearchInput from './SearchInput'
import SearchListInput from './SearchListInput'
import {VALID_POSITIONS} from '../constants'

const SearchBar = props => {
  const {filterName, onChangeFilterNameFn, positions, filterPosition, onChangeFilterPositionFn, filterAge, onChangeFilterAgeFn, onSearchFn} = props
  return (
    <form className='search-bar columns'>
      <div className='field column'>
        <SearchInput placeholder='Player Name' val={filterName} changeFn={onChangeFilterNameFn} />
      </div>
      <div className='field column'>
        <SearchListInput list={positions} initialVal='Position' val={filterPosition} changeFn={onChangeFilterPositionFn} />
      </div>
      <div className='field column'>
        <SearchInput placeholder='Age' val={filterAge} changeFn={onChangeFilterAgeFn} />
      </div>
      <div className='field column'>
        <button className='search-btn button is-primary' onClick={onSearchFn}>Search</button>
      </div>
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
