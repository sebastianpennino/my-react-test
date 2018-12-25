import React from 'react'
import SearchListInput from './SearchListInput'
import { shallow } from 'enzyme'

describe('<SearchListInput />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<SearchListInput />)
    expect(wrapper.exists('.search-list-input')).toEqual(true)
  })
})
