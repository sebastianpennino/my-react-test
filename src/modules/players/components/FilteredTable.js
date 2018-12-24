import React from 'react'
import FilteredRow from './FilteredRow'

const FilteredTable = props => {
  const categories = props.categories.map(el => <th key={el}>{el}</th>)
  const results = props.results.map(el => <FilteredRow data={el} key={el.name} />)

  return (
    <table className='filtered-table'>
      <thead>
        <tr>
          {categories}
        </tr>
      </thead>
      <tbody>
        {results}
      </tbody>
    </table>
  )
}

export default FilteredTable
