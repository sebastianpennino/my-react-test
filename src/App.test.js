import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('<App />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists('.App')).toEqual(true)
  })
})
