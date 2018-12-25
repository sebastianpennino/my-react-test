import React from 'react'
import SearchBar from './SearchBar'
import { shallow, mount } from 'enzyme'
import {VALID_POSITIONS} from '../constants'

describe('<SearchBar />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<SearchBar />)
    expect(wrapper.exists('.search-bar')).toEqual(true)
  })

  it('should render with the proper default props', () => {
    const expected = {
      'filterAge': '',
      'filterName': '',
      'filterPosition': '',
      'onChangeFilterAgeFn': () => null,
      'onChangeFilterNameFn': () => null,
      'onChangeFilterPositionFn': () => null,
      'onSearchFn': () => null,
      'positions': VALID_POSITIONS
    }
    const wrapper = mount(<SearchBar />)
    const actualProps = wrapper.find('SearchBar').props()
    // Testing the returns of the default props functions
    expect(SearchBar.defaultProps.onChangeFilterAgeFn()).toEqual(expected.onChangeFilterAgeFn())
    expect(SearchBar.defaultProps.onChangeFilterNameFn()).toEqual(expected.onChangeFilterNameFn())
    expect(SearchBar.defaultProps.onChangeFilterPositionFn()).toEqual(expected.onChangeFilterPositionFn())
    expect(SearchBar.defaultProps.onSearchFn()).toEqual(expected.onSearchFn())
    // Checking that they are fn
    expect(typeof actualProps.onChangeFilterAgeFn).toEqual('function')
    expect(typeof actualProps.onChangeFilterNameFn).toEqual('function')
    expect(typeof actualProps.onChangeFilterPositionFn).toEqual('function')
    expect(typeof actualProps.onSearchFn).toEqual('function')
    expect(actualProps.filterAge).toBe(expected.filterAge)
    expect(actualProps.filterName).toBe(expected.filterName)
    expect(actualProps.filterPosition).toBe(expected.filterPosition)
    expect(actualProps.positions).toEqual(expected.positions)
    wrapper.unmount()
  })

  it('should render the correct number and types of children', () => {
    const wrapper = shallow(<SearchBar />)
    expect(wrapper.find('SearchInput').length).toBe(2)
    expect(wrapper.find('SearchListInput').length).toBe(1)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('should pass the correct props to his children', () => {
    const passing = {
      'filterAge': '22',
      'filterName': 'Test Name',
      'filterPosition': 'Keeper',
      'onChangeFilterAgeFn': () => { return 'change age fn' },
      'onChangeFilterNameFn': () => { return 'change name fn' },
      'onChangeFilterPositionFn': () => { return 'change position fn' },
      'onSearchFn': () => { return 'search fn' },
      'positions': [
        {val: 'K1', name: 'Keeper'},
        {val: 'K2', name: 'Test 2'},
        {val: 'K3', name: 'Test 3'}
      ]
    }

    let wrapper = mount(<SearchBar
      filterAge={passing.filterAge}
      filterName={passing.filterName}
      filterPosition={passing.filterPosition}
      onChangeFilterAgeFn={passing.onChangeFilterAgeFn}
      onChangeFilterNameFn={passing.onChangeFilterNameFn}
      onChangeFilterPositionFn={passing.onChangeFilterPositionFn}
      onSearchFn={passing.onSearchFn}
      positions={passing.positions}
    />)

    wrapper = wrapper.update()
    expect(wrapper.find('SearchInput').first().prop('changeFn')).toBe(passing.onChangeFilterNameFn)
    expect(wrapper.find('SearchInput').first().prop('val')).toBe(passing.filterName)
    expect(wrapper.find('SearchInput').last().prop('changeFn')).toBe(passing.onChangeFilterAgeFn)
    expect(wrapper.find('SearchInput').last().prop('val')).toBe(passing.filterAge)
    expect(wrapper.find('SearchListInput').prop('changeFn')).toBe(passing.onChangeFilterPositionFn)
    expect(wrapper.find('SearchListInput').prop('val')).toBe(passing.filterPosition)
    expect(wrapper.find('SearchListInput').prop('list')).toBe(passing.positions)
    expect(wrapper.find('button').prop('onClick')).toBe(passing.onSearchFn)
    wrapper.unmount()
  })
})
