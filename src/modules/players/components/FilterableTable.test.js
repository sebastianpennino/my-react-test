import React from 'react'
import { FilterableTable } from './FilterableTable'
import { shallow } from 'enzyme'
import * as playerActions from '../actions'

describe('<FilterableTable />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<FilterableTable playerActions={playerActions} />)
    expect(wrapper.exists('.filterable-table')).toEqual(true)
  })

  it('should render just a fetching message while loading', () => {
    const isLoading = true
    const wrapper = shallow(<FilterableTable playerActions={playerActions} isLoading={isLoading} />)
    expect(wrapper.exists('.filterable-table')).toEqual(true)
    expect(wrapper.find('.filterable-table').text()).toBe('Fetching data...')
  })

  it('should call fetchPlayers on componentDidMount lifecycle event', () => {
    const testActions = {
      fetchPlayers: jest.fn()
    }
    const wrapper = shallow(<FilterableTable playerActions={testActions} />)
    wrapper.instance().componentDidMount()
    expect(testActions.fetchPlayers).toHaveBeenCalled()
  })

  it('filterResults should call the proper action', () => {
    const testActions = {
      fetchPlayers: jest.fn(),
      filterPlayers: jest.fn()
    }
    const evt = {
      preventDefault: jest.fn()
    }
    const wrapper = shallow(<FilterableTable playerActions={testActions} />)
    wrapper.instance().filterResults(evt)
    expect(testActions.filterPlayers).toHaveBeenCalled()
  })

  it('resetResults should call the proper action', () => {
    const testActions = {
      fetchPlayers: jest.fn(),
      restorePlayers: jest.fn()
    }
    const evt = {
      preventDefault: jest.fn()
    }
    const wrapper = shallow(<FilterableTable playerActions={testActions} />)
    wrapper.instance().resetResults(evt)
    expect(testActions.restorePlayers).toHaveBeenCalled()
  })

  it('updateFilterName should call the proper action with the proper params', () => {
    const testActions = {
      fetchPlayers: jest.fn(),
      changeNameFilter: jest.fn()
    }
    const evt = {
      target: {
        value: 'test name'
      }
    }
    const wrapper = shallow(<FilterableTable playerActions={testActions} />)
    wrapper.instance().updateFilterName(evt)
    expect(testActions.changeNameFilter).toHaveBeenCalledWith(evt.target.value)
  })

  it('updateFilterPosition should call the proper action with the proper params', () => {
    const testActions = {
      fetchPlayers: jest.fn(),
      changePositionFilter: jest.fn()
    }
    const evt = {
      target: {
        value: 'test position'
      }
    }
    const wrapper = shallow(<FilterableTable playerActions={testActions} />)
    wrapper.instance().updateFilterPosition(evt)
    expect(testActions.changePositionFilter).toHaveBeenCalledWith(evt.target.value)
  })

  it('updateFilterAge should call the proper action with the proper params', () => {
    const testActions = {
      fetchPlayers: jest.fn(),
      changeAgeFilter: jest.fn()
    }
    const evt = {
      target: {
        value: '66'
      }
    }
    const wrapper = shallow(<FilterableTable playerActions={testActions} />)
    wrapper.instance().updateFilterAge(evt)
    expect(testActions.changeAgeFilter).toHaveBeenCalledWith(evt.target.value)
  })
})
