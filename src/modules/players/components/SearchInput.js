import React from 'react'

const SearchInput = props => {
  return (
    <div className='control'>
      <input className='search-input input' type='text' placeholder={props.placeholder} value={props.value} onChange={props.changeFn} />
    </div>
  )
}

export default SearchInput
