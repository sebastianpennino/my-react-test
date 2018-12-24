import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('<App />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />, {context: {}, disableLifecycleMethods: true})
    console.log(wrapper.debug())
    expect(wrapper.exists('.App')).toEqual(true)
  })
})
