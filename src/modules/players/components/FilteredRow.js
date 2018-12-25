import React from 'react'
import { calcAge } from '../../core/utilities'

const FilteredRow = props => {
  const { name, position, nationality, dateOfBirth } = props.data
  return (
    <tr className='filtered-row'>
      <td>{name}</td>
      <td>{position}</td>
      <td>{nationality}</td>
      <td>
        {
          dateOfBirth
            ? <span className='axa' title={dateOfBirth}>{calcAge(dateOfBirth)} yrs</span>
            : <span>n/a</span>
        }
      </td>
    </tr>
  )
}

FilteredRow.defaultProps = {
  data: {
    name: '',
    position: '',
    nationality: ''
  }
}

export default FilteredRow
