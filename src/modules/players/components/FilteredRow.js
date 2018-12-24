import React from 'react'
import { calcAge } from '../../core/utilities'

const FilteredRow = props =>
  <tr className='filtered-row'>
    <td>{props.data.name}</td>
    <td>{props.data.position}</td>
    <td>{props.data.nationality}</td>
    <td>
      <span title={props.data.dateOfBirth}>{calcAge(props.data.dateOfBirth)} yrs</span>
    </td>
  </tr>

export default FilteredRow
