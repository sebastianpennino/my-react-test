import React from 'react'

const SearchInput = props =>
  <input className='SearchInput' type='text' placeholder={props.placeholder} value={props.value} onChange={props.changeFn} />

export default SearchInput
