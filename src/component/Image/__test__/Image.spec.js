import React from 'react'
import {shallow, mount} from 'enzyme'
import Image from '../Image'
import mockProduct from '../../../test/mock-products'


describe('@render', () => {
  const ImageSrc = mockProduct[0].img
  it('should render the image component if an ImageSrc is passed', () => {
    const wrapper = mount(<Image ImageSrc={ImageSrc}/>)
    expect(wrapper.find('.image').length).toBe(1)
    expect(wrapper.find('.image > img').length).toBe(1)
  })

  it('should not render if there is not an ImageSrc props',() => {
    const wrapper = shallow(<Image />)
    expect(wrapper.type()).toBeNull()
  })
})