import React from 'react'
import SearchInput from './SearchInput'
import { shallow } from 'enzyme'

describe('<SearchInput />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<SearchInput />)
    expect(wrapper.exists('.search-input')).toEqual(true)
  })
})
