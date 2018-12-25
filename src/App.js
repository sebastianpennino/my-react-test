import React, { Component } from 'react'
import FilterableTable from './modules/players/components/FilterableTable'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <FilterableTable />
      </div>
    )
  }
}

export default App
