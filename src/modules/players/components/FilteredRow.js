import React from 'react'

const FilteredRow = props =>
  <tr className='filteredRow'>
    <td>{props.data.name}</td>
    <td>{props.data.position}</td>
    <td>{props.data.team}</td>
    <td>{props.data.age}</td>
  </tr>

export default FilteredRow
