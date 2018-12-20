import React, { Component } from 'react'
import FilterableTable from './modules/players/components/FilterableTable'
import './App.css'

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
