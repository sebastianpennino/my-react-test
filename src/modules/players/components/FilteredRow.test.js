import React from 'react'
import FilteredRow from './FilteredRow'
import { mount, shallow } from 'enzyme'
import { calcAge } from '../../core/utilities'
jest.mock('../../core/utilities')

describe('<FilteredRow />', () => {
  beforeEach(() => {
    calcAge.mockImplementation(() => {
      return 22
    })
    calcAge.mockClear()
  })

  it('should render without crashing', () => {
    const wrapper = shallow(<FilteredRow />)
    expect(wrapper.exists('.filtered-row')).toEqual(true)
  })

  it('should render with the proper default props', () => {
    const expected = {
      data: {
        name: '',
        position: '',
        nationality: ''
      }
    }
    // note: added table and tbody to avoid error "<tr> cannot appear as a child of <div>"
    const wrapper = mount(<table><tbody><FilteredRow /></tbody></table>)
    const actualProps = wrapper.find('FilteredRow').props()
    expect(actualProps).toEqual(expected)
    wrapper.unmount()
  })

  it('should render with the correct props', () => {
    const expected = {
      data: {
        name: 'Filip Firbacher',
        position: 'Forward',
        nationality: 'Chilean',
        dateOfBirth: '2001-12-20'
      }
    }
    // note: added table and tbody to avoid error "<tr> cannot appear as a child of <div>"
    const wrapper = mount(<table><tbody><FilteredRow data={expected.data} /></tbody></table>)
    const actualProps = wrapper.find('FilteredRow').props()
    expect(actualProps).toEqual(expected)
    wrapper.unmount()
  })

  it('should render a title attribute with the dateOfBirth prop if present', () => {
    const expected = {
      data: {
        dateOfBirth: '2000-10-01'
      }
    }
    const wrapper = shallow(<FilteredRow data={expected.data} />)
    expect(wrapper.find('[title="2000-10-01"]').length).toBe(1)
  })

  it('should show n/a if there\'s no dateOfBirth prop', () => {
    const wrapper = shallow(<FilteredRow />)
    expect(wrapper.find('span').text()).toBe('n/a')
  })

  it('should NOT call calcAge if no dateOfBirth property is present', () => {
    // note: added table and tbody to avoid error "<tr> cannot appear as a child of <div>"
    const wrapper = mount(<table><tbody><FilteredRow /></tbody></table>)
    expect(calcAge).not.toHaveBeenCalled()
    wrapper.unmount()
  })

  it('should call calcAge if a dateOfBirth property is present', () => {
    const expected = {
      data: {
        dateOfBirth: '1999-06-10'
      }
    }
    // note: added table and tbody to avoid error "<tr> cannot appear as a child of <div>"
    const wrapper = mount(<table><tbody><FilteredRow data={expected.data} /></tbody></table>)
    expect(calcAge).toHaveBeenCalledWith(expected.data.dateOfBirth)
    wrapper.unmount()
  })
})
