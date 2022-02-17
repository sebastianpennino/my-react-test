import React from 'react'
import FilteredRow from './FilteredRow'

const FilteredTable = props => {

  /** 
   * @param {Player} player object 
   * @typedef Player
   * @property {string} contractUntil
   * @property {string} dateOfBirth
   * @property {number} jerseyNumber
   * @property {string} contractUntil
   * @property {string} name
   * @property {string} nationality
   * @returns string
   */
  const uniqueIdFromDateOfBirthAndName = (player) => {
    const noSpacesName = player.name.replace(/\s/g, '');
    return player.contractUntil + noSpacesName
  }

  const headers = props.headers.map(el => <th key={el}>{el}</th>)
  const results = props.results.map(el => <FilteredRow data={el} key={uniqueIdFromDateOfBirthAndName(el)} />)

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
