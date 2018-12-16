import React, { Component } from 'react'
import './App.css'

class FilteredRow extends React.Component {
  render () {
    const data = this.props.data

    return (
      <tr>
        <td>{data.name}</td>
        <td>{data.position}</td>
        <td>{data.team}</td>
        <td>{data.age}</td>
      </tr>
    )
  }
}

class FilteredTable extends React.Component {
  render () {
    const rows = []
    const categories = []

    this.props.categories.forEach((el, idx) => {
      categories.push(
        <th key={el}>{el}</th>
      )
    })

    this.props.results.forEach((el, idx) => {
      rows.push(
        <FilteredRow
          data={el}
          key={el.name} />
      )
    })

    return (
      <table className='FilteredTable'>
        <thead>
          <tr>
            {categories}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

class SearchInput extends React.Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }
    this.validRE = {
      onlyLetters: /^[A-Za-z]+$/,
      onlyNumbers: /^[0-9\b]+$/
    }
  }

  correctInputText (e) {
    const re = this.validRE[this.props.restrict]
    if (e.target.value === '' || (re && re.test(e.target.value))) {
      this.setState({value: e.target.value})
    }
  }

  render () {
    return (
      <input type='text' placeholder={this.props.placeholder} value={this.state.value} onChange={e => this.correctInputText(e)} />
    )
  }
}

class SearchListInput extends React.Component {
  render () {
    const opt = []
    this.props.list.forEach(el => {
      opt.push(
        <option key={el.val} value={el.val}>{el.name}</option>
      )
    })
    return (
      <select>
        { this.props.initialVal ? <option value='' defaultValue>{this.props.initialVal}</option> : '' }
        {opt}
      </select>
    )
  }
}

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

class SearchBar extends React.Component {
  render () {
    return (
      <form>
        <SearchInput placeholder='Player Name' restrict='onlyLetters' />
        <SearchListInput list={VALID_POSITIONS} initialVal='Position' />
        <SearchInput placeholder='Age' restrict='onlyNumbers' />
        <button>Search</button>
      </form>
    )
  }
}

class FilterableTable extends React.Component {
  render () {
    return (
      <div>
        <SearchBar />
        <FilteredTable results={this.props.results} categories={['Player', 'Position', 'Team', 'Age']} />
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

class App extends Component {
  render () {
    return (
      <div className='App'>
        <FilterableTable results={PLAYERS} />
      </div>
    )
  }
}

export default App
