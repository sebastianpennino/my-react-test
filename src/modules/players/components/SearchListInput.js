import React from 'react'

const SearchListInput = props => {
  const renderOptions = list => {
    if (list && list.length > 0) {
      return list.map(el => <option key={el.val} value={el.name}>{el.name} ({el.val})</option>)
    } else {
      return void 0
    }
  }

  return (
    <div className='control'>
      <div className='select'>
        <select className='search-list-input' onChange={props.changeFn} >
          { props.initialVal ? <option value='' defaultValue>{props.initialVal}</option> : '' }
          { renderOptions(props.list) }
        </select>
      </div>
    </div>
  )
}

export default SearchListInput
