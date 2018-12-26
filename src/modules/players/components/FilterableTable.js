import React from 'react'
import SearchBar from './SearchBar'
import FilteredTable from './FilteredTable'
import {VALID_POSITIONS} from '../constants'
import * as playerActions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

// These is just a placeholder for a mock request
const fetchSomePositions = cb => cb(VALID_POSITIONS)

export class FilterableTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filterName: '',
      filterPosition: '',
      filterAge: '',
      results: [],
      positions: [],
      filteredResults: [],
      counter: 0
    }

    // This binding is necessary to make 'this' work in the callback
    this.updateFilterName = this.updateFilterName.bind(this)
    this.updateFilterPosition = this.updateFilterPosition.bind(this)
    this.updateFilterAge = this.updateFilterAge.bind(this)
    this.filterResults = this.filterResults.bind(this)
    this.resetResults = this.resetResults.bind(this)
  }

  componentDidMount () {
    fetchSomePositions(positions => this.setState({ positions }))
    this.props.playerActions.fetchPlayers()
  }

  filterResults (e) {
    e.preventDefault()
    this.props.playerActions.filterPlayers()
  }

  resetResults (e) {
    e.preventDefault()
    this.props.playerActions.restorePlayers()
  }

  updateFilterName (e) {
    let newVal = e.target.value
    newVal = newVal.replace(/[^A-Za-z]/ig, '')
    e.target.value = newVal
    this.props.playerActions.changeNameFilter(newVal)
  }

  updateFilterPosition (e) {
    const newVal = e.target.value
    this.props.playerActions.changePositionFilter(newVal)
  }

  updateFilterAge (e) {
    let newVal = e.target.value
    newVal = newVal.replace(/[^0-9\b]/ig, '')
    e.target.value = newVal
    this.props.playerActions.changeAgeFilter(newVal)
  }

  render () {
    if (!this.props.isLoading) {
      return (
        <div className='filterable-table'>
          <h2 className='title'>Football Player Finder</h2>
          <aside className='debug hide'><pre><strong>props:</strong> {JSON.stringify(this.props, null, 2)}</pre></aside>
          <div>
            <SearchBar
              filterName={this.props.filterName}
              filterPosition={this.props.filterPosition}
              filterAge={this.props.filterAge}
              positions={this.state.positions}
              onSearchFn={this.filterResults}
              onChangeFilterNameFn={this.updateFilterName}
              onChangeFilterPositionFn={this.updateFilterPosition}
              onChangeFilterAgeFn={this.updateFilterAge}
            />
            <FilteredTable
              results={this.props.filteredResults}
            />
            <div className='control'>
              <button className='button' onClick={this.resetResults}>Restore results</button>
            </div>
          </div>
        </div>)
    } else {
      return (
        <div className='filterable-table'>
          Fetching data...
          <progress className='progress is-small is-primary' max='100' />
        </div>)
    }
  }
}

function mapStateToProps (state) {
  const myState = state.playerReducer
  return {
    results: myState.results,
    filteredResults: myState.filteredResults,
    filterByAge: myState.filterByAge,
    filterByName: myState.filterByName,
    filterByPosition: myState.filterByPosition,
    isLoading: myState.isLoading
  }
}

function mapDispatchToProps (dispatch) {
  return {
    playerActions: bindActionCreators(playerActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterableTable)
