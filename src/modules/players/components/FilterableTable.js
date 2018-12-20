import React from 'react'
import SearchBar from './SearchBar'
import FilteredTable from './FilteredTable'
import {CATEGORIES, PLAYERS, VALID_POSITIONS} from '../constants'

// These are just a placeholder for the real requests
const fetchSomeCategories = cb => cb(CATEGORIES)
const fetchSomePlayers = cb => cb(PLAYERS)
const fetchSomePositions = cb => cb(VALID_POSITIONS)

class FilterableTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filterName: '',
      filterPosition: '',
      filterAge: '',
      results: [],
      categories: [],
      positions: [],
      filteredResults: [],
      counter: 0
    }

    // This binding is necessary to make 'this' work in the callback
    this.updateFilterName = this.updateFilterName.bind(this)
    this.updateFilterPosition = this.updateFilterPosition.bind(this)
    this.updateFilterAge = this.updateFilterAge.bind(this)
    this.filterResults = this.filterResults.bind(this)
  }

  componentDidMount () {
    fetchSomeCategories(categories => this.setState({ categories }))
    fetchSomePlayers(results =>
      this.setState({ results, filteredResults: results }
      )
    )
    fetchSomePositions(positions => this.setState({ positions }))
  }

  comparator (data, filterName, filterPosition, filterAge) {
    return data.filter(el => {
      return (filterName && el.name.indexOf(filterName) !== -1) || (filterPosition && el.position === filterPosition) || (filterAge && el.age === parseInt(filterAge, 10))
    })
  }

  filterResults (e) {
    e.preventDefault()
    this.setState(prevState => {
      const newResults = this.comparator(prevState.results, prevState.filterName, prevState.filterPosition, prevState.filterAge)
      return newResults.length > 0 ? { filteredResults: newResults } : { filteredResults: prevState.results }
    })
  }

  updateFilterName (e) {
    // const onlyLetters = /^[A-Za-z]+$/
    const newVal = e.target.value
    this.setState(prevState => {
      return { filterName: newVal }
    })
  }

  updateFilterPosition (e) {
    const newVal = e.target.value
    this.setState(prevState => {
      return { filterPosition: newVal }
    })
  }

  updateFilterAge (e) {
    // const onlyNumbers = /^[0-9\b]+$/
    const newVal = e.target.value
    this.setState(prevState => {
      return { filterAge: newVal }
    })
  }

  render () {
    return (
      <div>
        <SearchBar
          filterName={this.state.filterName}
          filterPosition={this.state.filterPosition}
          filterAge={this.state.filterAge}
          positions={this.state.positions}
          onSearchFn={this.filterResults}
          onChangeFilterNameFn={this.updateFilterName}
          onChangeFilterPositionFn={this.updateFilterPosition}
          onChangeFilterAgeFn={this.updateFilterAge}
        />
        <FilteredTable
          results={this.state.filteredResults}
          categories={this.state.categories}
        />
      </div>
    )
  }
}

export default FilterableTable
