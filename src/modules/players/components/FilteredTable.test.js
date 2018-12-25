import React from 'react'
import FilteredTable from './FilteredTable'
import { mount, shallow } from 'enzyme'

describe('<FilteredTable />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<FilteredTable />)
    expect(wrapper.exists('.filtered-table')).toEqual(true)
  })

  it('should render with the proper default props', () => {
    const expected = {
      headers: ['Player', 'Position', 'Nationality', 'Age'],
      results: []
    }
    const wrapper = mount(<FilteredTable />)
    const actualProps = wrapper.find('FilteredTable').props()
    expect(actualProps).toEqual(expected)
    wrapper.unmount()
  })

  it('should render with the correct props', () => {
    const expected = {
      headers: ['Test Header 1', 'Test Header 2', 'Test Header 3'],
      results: [{name: 'Test Name'}]
    }
    const wrapper = mount(<FilteredTable headers={expected.headers} results={expected.results} />)
    const actualProps = wrapper.props()
    expect(actualProps).toEqual(expected)
    wrapper.unmount()
  })

  it('should render as many headers as received', () => {
    const expected = {
      headers: ['Test Header 1', 'Test Header 2', 'Test Header 3']
    }
    const wrapper = shallow(<FilteredTable headers={expected.headers} />)
    expect(wrapper.find('th').length).toBe(3)
  })

  it('should render as many results as received', () => {
    const expected = {
      results: [{name: 'Test Name 1'}, {name: 'Test Name 2'}]
    }
    const wrapper = mount(<FilteredTable results={expected.results} />)
    expect(wrapper.find('.filtered-row').length).toEqual(2)
    wrapper.unmount()
  })
})
