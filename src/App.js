import React, { Component } from 'react'
import FilterableTable from './modules/players/components/FilterableTable'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='app is-centered'>
        <div className='columns'>
          <div className='main-content column is-narrow-desktop'>
            <FilterableTable />
          </div>
        </div>
      </div>
    )
  }
}

export default App
