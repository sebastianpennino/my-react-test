import React from 'react'

const SearchListInput = props => {
  const options = props.list.map(el => <option key={el.val} value={el.name}>{el.name} ({el.val})</option>)
  return (
    <select className='search-list-input' onChange={props.changeFn} >
      { props.initialVal ? <option value='' defaultValue>{props.initialVal}</option> : '' }
      { options }
    </select>
  )
}

export default SearchListInput
