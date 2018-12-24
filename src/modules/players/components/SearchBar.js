import React from 'react'
import SearchInput from './SearchInput'
import SearchListInput from './SearchListInput'

const SearchBar = props =>
  <form className='search-bar'>
    <SearchInput placeholder='Player Name' val={props.filterName} changeFn={props.onChangeFilterNameFn} />
    <SearchListInput list={props.positions} initialVal='Position' val={props.filterPosition} changeFn={props.onChangeFilterPositionFn} />
    <SearchInput placeholder='Age' val={props.filterAge} changeFn={props.onChangeFilterAgeFn} />
    <button onClick={props.onSearchFn}>Search</button>
  </form>

export default SearchBar
