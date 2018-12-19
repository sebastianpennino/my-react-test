import React, { Component } from 'react'
import './App.css'

const FilteredRow = props =>
  <tr className='filteredRow'>
    <td>{props.data.name}</td>
    <td>{props.data.position}</td>
    <td>{props.data.team}</td>
    <td>{props.data.age}</td>
  </tr>

const FilteredTable = props => {
  const categories = props.categories.map(el => <th key={el}>{el}</th>)
  const results = props.results.map(el => <FilteredRow data={el} key={el.name} />)

  return (
    <table className='filteredTable'>
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

const SearchInput = props =>
  <input className='SearchInput' type='text' placeholder={props.placeholder} value={props.value} onChange={props.changeFn} />

const SearchListInput = props => {
  const options = props.list.map(el => <option key={el.val} value={el.name}>{el.name} ({el.val})</option>)
  return (
    <select className='searchListInput' onChange={props.changeFn} >
      { props.initialVal ? <option value='' defaultValue>{props.initialVal}</option> : '' }
      { options }
    </select>
  )
}

const SearchBar = props =>
  <form className='searchBar'>
    <SearchInput placeholder='Player Name' val={props.filterName} changeFn={props.onChangeFilterNameFn} />
    <SearchListInput list={props.positions} initialVal='Position' val={props.filterPosition} changeFn={props.onChangeFilterPositionFn} />
    <SearchInput placeholder='Age' val={props.filterAge} changeFn={props.onChangeFilterAgeFn} />
    <button onClick={props.onSearchFn}>Search</button>
  </form>

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

const PLAYERS = [
  {team: 'Barcelona', age: 30, position: 'Forward', name: 'Lionel Messi'},
  {team: 'Barcelona', age: 35, position: 'Defender', name: 'Javier Mascherano'},
  {team: 'Real Madrid', age: 30, position: 'Forward', name: 'Cristiano Ronaldo'},
  {team: 'Real Madrid', age: 22, position: 'Defensive Midfield', name: 'Sergio Reguilón'},
  {team: 'Real Madrid', age: 22, position: 'Central Midfield', name: 'Dani Ceballos'},
  {team: 'Atlético Madrid', age: 23, position: 'Forward', name: 'Ángel Correa'}
]

const VALID_POSITIONS = [
  { val: 'AM', name: 'Attacking Midfield' },
  { val: 'CM', name: 'Central Midfield' },
  { val: 'CB', name: 'Centre-Back' },
  { val: 'CF', name: 'Centre-Forward' },
  { val: 'DM', name: 'Defensive Midfield' },
  { val: 'GK', name: 'Keeper' },
  { val: 'LM', name: 'Left Midfield' },
  { val: 'LW', name: 'Left Wing' },
  { val: 'LB', name: 'Left-Back' },
  { val: 'RB', name: 'Right-Back' }
]

const CATEGORIES = [
  'Player', 'Position', 'Team', 'Age'
]

// These are just a placeholder for the real requests
const fetchSomeCategories = cb => cb(CATEGORIES)
const fetchSomePlayers = cb => cb(PLAYERS)
const fetchSomePositions = cb => cb(VALID_POSITIONS)

class App extends Component {
  render () {
    return (
      <div className='App'>
        <FilterableTable />
      </div>
    )
  }
}

export default App
