import React from 'react'
import FilteredRow from './FilteredRow'

const FilteredTable = props => {
  const headers = props.headers.map(el => <th key={el}>{el}</th>)
  const results = props.results.map(el => <FilteredRow data={el} key={el && el.name} />)

  return (
    <table className='filtered-table table'>
      <thead className='thead'>
        <tr>
          {headers}
        </tr>
      </thead>
      <tbody className='tbody'>
        {results}
      </tbody>
    </table>
  )
}

FilteredTable.defaultProps = {
  headers: ['Player', 'Position', 'Nationality', 'Age'],
  results: []
}

export default FilteredTable
